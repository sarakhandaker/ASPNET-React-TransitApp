const API_ROOT = `http://localhost:5000/api/`;

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token()}`
  };
};

const login = async data => {
  const response = await fetch(`${API_ROOT}auth/login`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(data)
  });
  const data_1 = await response.json();
  return ({ data: data_1, status: response.status });
}

const getUserStops = async id => {
  const response = await fetch(`${API_ROOT}users/${id}/stops`, {
    method: 'GET',
    headers: headers()
  });
  const data = await response.json();
  return ({ data: data, status: response.status });
}

const register = async data => {
  const response = await fetch(`${API_ROOT}auth/register`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(data)
  });
  const data_1 = await response.json();
  return ({
    data: data_1,
    status: response.status
  });
}

const saveStop = data => {
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

const editUser = async (data, id) => {
  const r = await fetch(`${API_ROOT}/api/v1/users/${id}`, {
    method: 'PATCH',
    headers: headers(),
    body: JSON.stringify(data)
  });
  return await r.json();
}

const closest = async address => {
  const response = await fetch(`${API_ROOT}stops/${address}`, {
    method: 'GET',
    headers: headers()
  });
  const data = await response.json();
  return ({
    data: data,
    status: response.status
  });
}

const times = async id => {
  const response = await fetch(`${API_ROOT}stoptimes/${id}`, {
    method: 'GET',
    headers: headers()
  });
  const data = await response.json();
  return ({
    data: data,
    status: response.status
  });
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
    getUserStops,
    times
  }
};