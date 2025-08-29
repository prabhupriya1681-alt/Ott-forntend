import { useEffect, useState } from 'react'
import { getMovies, getSeries } from '../api'
import MovieCard from '../components/MovieCard'

export default function Browse(){
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    getMovies().then(r => setMovies(r.data || r.data?.items || [])).catch(()=>{})
    getSeries().then(r => setSeries(r.data || r.data?.items || [])).catch(()=>{})
  }, [])

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-3">Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {movies.map(m => <MovieCard key={m._id} item={m} />)}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-3">Series</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {series.map(s => <MovieCard key={s._id} item={s} />)}
        </div>
      </section>
    </div>
  )
}