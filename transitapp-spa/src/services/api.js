const API_ROOT = `http://localhost:5000/api/`;

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token()}`
  };
};

const login = data => {
  return fetch(`${API_ROOT}auth/login`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(data)
  }).then(response => response.json()
    .then(data => ({ data: data, status: response.status }))
  )
}

const getUserStops = id => {
  return fetch(`${API_ROOT}users/${id}/stops`, {
    method: 'GET',
    headers: headers()
  }).then(response => response.json()
    .then(data => ({ data: data, status: response.status }))
  )
}

const register = data => {
  return fetch(`${API_ROOT}auth/register`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(data)
  }).then(response =>
    response.json().then(data => ({
      data: data,
      status: response.status
    })
    )
  )
}

const saveStop = data=> {
  return fetch(`${API_ROOT}users/${data.userId}/stops`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(data)
  })
}

const deleteStop = (userId, id) => {
  return fetch(`${API_ROOT}users/${userId}/stops/${id}`, {
    method: 'DELETE',
    headers: headers()
  })
}

const editUser = (data, id) => {
  return fetch(`${API_ROOT}/api/v1/users/${id}`, {
    method: 'PATCH',
    headers: headers(),
    body: JSON.stringify(data)
  })
    .then(r => r.json())
}

const closest = (address) => {
  return fetch(`${API_ROOT}stops/${address}`, {
    method: 'GET',
    headers: headers()
  }).then(response =>
    response.json().then(data => ({
      data: data,
      status: response.status
    })
    )
  )
}

export const api = {
  auth: {
    login,
    register,
    editUser
  },
  stop: {
    closest,
    saveStop,
    deleteStop,
    getUserStops
  }
};