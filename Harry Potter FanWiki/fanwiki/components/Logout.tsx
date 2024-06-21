import { logout } from "@/session-management/actions"

const LogoutForm = () => {
  return (
    <form action={logout}>
      <button className=" border px-5 py-1.5 bg-slate-100 hover:bg-slate-300 self-center rounded-xl hover:border-black">logout</button>
    </form>
  )
}

export default LogoutForm