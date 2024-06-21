import MyFavsComponent from "@/components/MyFavComponent";
import { getSession, myFavouriates } from "@/session-management/actions"
import { redirect } from "next/navigation"

const MyProfilePage = async () => {
    const session = await getSession();
    if (!session.isLoggedIn) {
        redirect("/")
    }
    const data = await myFavouriates()
    return (
        <section className="mt-28">
            <h1 className="text-center">Welcome {session.wizard_name}</h1>
            <div className="p-5 md:p-1">
                <h2 className="text-center">My Favouriates</h2>
                <MyFavsComponent data={data} />
            </div>
        </section>
    )
}
export default MyProfilePage