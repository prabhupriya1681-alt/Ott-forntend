export default function MovieCard({ item, onDelete }){
  return (
    <div className="card">
      {item.poster && <img src={item.poster} alt={item.title} className="w-full aspect-[2/3] object-cover rounded-xl" />}
      <div className="mt-2 space-y-1">
        <h3 className="font-semibold">{item.title}</h3>
        {item.description && <p className="text-sm opacity-70 line-clamp-2">{item.description}</p>}
        {onDelete && <button onClick={() => onDelete(item._id)} className="mt-2 btn w-full">Delete</button>}
      </div>
    </div>
  )
}