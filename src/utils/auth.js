export function saveAuth({ token, user }){
  if (token) localStorage.setItem('token', token)
  if (user) localStorage.setItem('user', JSON.stringify(user))
}
export function getUser(){
  const raw = localStorage.getItem('user')
  return raw ? JSON.parse(raw) : null
}
export function logout(){
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  window.location.href = '/login'
}