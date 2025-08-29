import { useEffect, useState } from 'react'
import { createMovie, deleteMovie, getMovies, createSeries, deleteSeries, getSeries } from '../api'
import MovieCard from '../components/MovieCard'

export default function Admin(){
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [form, setForm] = useState({ type: 'movie', title: '', poster: '', description: '' })

  function load(){
    getMovies().then(r => setMovies(r.data || [])).catch(()=>{})
    getSeries().then(r => setSeries(r.data || [])).catch(()=>{})
  }
  useEffect(load, [])

  async function handleCreate(e){
    e.preventDefault()
    const data = { title: form.title, poster: form.poster, description: form.description }
    if (form.type === 'movie') await createMovie(data)
    else await createSeries(data)
    setForm({ ...form, title: '', poster: '', description: '' })
    load()
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleCreate} className="card space-y-2">
        <h2 className="font-semibold text-lg">Create Movie/Series</h2>
        <select className="input" value={form.type} onChange={e=>setForm({...form, type: e.target.value})}>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
        <input className="input" placeholder="Title" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} />
        <input className="input" placeholder="Poster URL" value={form.poster} onChange={e=>setForm({...form, poster: e.target.value})} />
        <textarea className="input" placeholder="Description" value={form.description} onChange={e=>setForm({...form, description: e.target.value})} />
        <button className="btn">Create</button>
      </form>

      <section>
        <h3 className="text-xl font-semibold mb-2">Movies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {movies.map(m => <MovieCard key={m._id} item={m} onDelete={(id)=>deleteMovie(id).then(load)} />)}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Series</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {series.map(s => <MovieCard key={s._id} item={s} onDelete={(id)=>deleteSeries(id).then(load)} />)}
        </div>
      </section>
    </div>
  )
}