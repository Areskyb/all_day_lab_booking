const baseURL = 'http://localhost:3000/api/guests/'
export default {
  getGuests(){
    return fetch(baseURL)
    .then(res => res.json())
  },
addGuests(payload){
  return fetch(baseURL, {
    method:'POST',
    body: JSON.stringify(payload),
    headers: {'Content-Type': 'application/json'}
  })
    .then(res => res.json())
  },
  deleteGuests(payload){
    return fetch(baseURL, {
      method: 'DELETE',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }
}