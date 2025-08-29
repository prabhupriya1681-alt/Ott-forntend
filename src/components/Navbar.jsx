import { Link } from 'react-router-dom'
import { getUser, logout } from '../utils/auth'

export default function Navbar(){
  const user = getUser()
  return (
    <nav className="bg-neutral-900 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto p-3 flex items-center gap-3">
        <Link to="/" className="font-bold text-xl text-fuchsia-400">OTT</Link>
        <div className="flex-1" />
        <Link to="/browse" className="hover:underline">Browse</Link>
        {user?.role === 'admin' && <Link className="hover:underline" to="/admin">Admin</Link>}
        {user ? (
          <button className="ml-3 btn" onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/login" className="ml-3 hover:underline">Login</Link>
            <Link to="/register" className="ml-3 btn">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  )
}