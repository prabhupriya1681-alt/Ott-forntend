import { useEffect, useState } from 'react'
import { getFavorites, removeFavorite } from '../api'

export default function Dashboard(){
  const [items, setItems] = useState([])
  useEffect(() => {
    getFavorites().then(r => setItems(r.data || [])).catch(()=>{})
  }, [])
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">My Favorites</h2>
      {!items.length && <p className="opacity-70">No favorites yet.</p>}
      <ul className="space-y-2">
        {items.map(it => (
          <li key={it._id} className="card flex items-center justify-between">
            <span>{it.title}</span>
            <button className="btn" onClick={() => removeFavorite(it._id).then(()=>setItems(items.filter(x=>x._id!==it._id)))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}