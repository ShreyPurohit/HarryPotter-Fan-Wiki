import { getSession } from "@/session-management/actions"
import { redirect } from "next/navigation"

const MyProfilePage = async () => {
    const session = await getSession();

    if (!session.isLoggedIn) {
        redirect("/")
    }

    return (
        <section className="mt-28 h-screen">
            <p>Welcome {session.wizard_name}</p>
        </section>
    )
}
export default MyProfilePage