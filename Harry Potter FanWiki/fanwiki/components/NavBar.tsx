import Link from "next/link"
import { getSession } from "@/session-management/actions"
import LogoutForm from "./Logout"

export const navstyles = "border px-5 py-1.5 bg-slate-100 hover:bg-slate-300 self-center rounded-xl hover:border-black"

const NavBarComponent = async () => {
    const session = await getSession()
    return (
        <nav className="flex flex-col  items-center fixed top-0 left-0 right-0 border-b-2 gap-1 pb-1 border-black bg-stone-300 z-10 md:pb-0 md:flex-row md:justify-between ">
            <h1 className="md:border-black md:p-2 md:border-r-2 md:bg-slate-300">Harry Potter Universe!</h1>
            <div className="flex gap-5 mr-5">
                <Link href={'/'} className={navstyles}>Home</Link>
                {session.isLoggedIn && <Link className={navstyles} href={'/myprofile'}>My Profile</Link>}
                {session.isLoggedIn
                    ? <LogoutForm />
                    : <Link href={'/users'} className={navstyles}>Login/Signup</Link>
                }
            </div>
        </nav>
    )
}

export default NavBarComponent