export const getSingleUser = (userId) => {
  return fetch('http://localhost:4000/users/' + userId, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((header) => {
      if (!header.ok) {
        throw Error(header)
      }
      return header.json()
    })
    .then((response) => {
      return response
    })
    .catch((e) => {
      console.log(e)
    })
}

export const editSingleUser = (userId, content) => {
  return fetch('http://localhost:4000/users/' + userId, {
    method: 'PUT',
    body: JSON.stringify(content),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((header) => {
      if (!header.ok) {
        throw Error(header)
      }
      return header.json()
    })
    .then((response) => {
      return response
    })
    .catch((e) => {
      console.log(e)
    })
}

export const getAllUsers = () => {
  return fetch('http://localhost:4000/users', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((header) => {
      if (!header.ok) {
        throw Error(header)
      }
      return header.json()
    })
    .then((response) => {
      return response
    })
    .catch((e) => {
      console.log(e)
    })
}

export const register = (content) => {
  return fetch('http://localhost:4000/users', {
    method: 'POST',
    body: JSON.stringify(content),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((header) => {
      if (!header.ok) {
        throw Error(header)
      }
      return header.json()
    })
    .then((response) => {
      return response
    })
    .catch((e) => {
      console.log(e)
    })
}

export const getAllProducts = () => {
  return fetch('http://localhost:4000/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((header) => {
      if (!header.ok) {
        throw Error(header)
      }
      return header.json()
    })
    .then((response) => {
      return response
    })
    .catch((e) => {
      console.log(e)
    })
}
