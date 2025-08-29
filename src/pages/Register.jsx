import { useState } from 'react'
import { register } from '../api'
import { saveAuth } from '../utils/auth'

export default function Register(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true); setError('')
    try {
      const { data } = await register({ name, email, password })
      saveAuth(data)
      window.location.href = '/browse'
    } catch (e) {
      setError(e?.response?.data?.message || 'Registration failed')
    } finally { setLoading(false) }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 space-y-3">
      <h2 className="text-2xl font-semibold">Create account</h2>
      {error && <div className="p-2 bg-red-900/40 rounded">{error}</div>}
      <input className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="btn w-full" disabled={loading}>{loading? 'Creating...' : 'Register'}</button>
    </form>
  )
}