import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <div className="text-center mt-14 space-y-4">
      <h1 className="text-3xl font-bold">Welcome to OTT</h1>
      <p className="opacity-80">Login and browse movies & series backed by your Render backend.</p>
      <div className="space-x-3">
        <Link to="/browse" className="btn">Browse</Link>
        <Link to="/login" className="btn">Login</Link>
      </div>
    </div>
  )
}