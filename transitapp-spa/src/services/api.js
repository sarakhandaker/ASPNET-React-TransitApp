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
    .then(data => ({data: data, status: response.status}))
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

const editUser=(data, id)=>{
   return fetch(`${API_ROOT}/api/v1/users/${id}`, {
        method: 'PATCH',
        headers: headers(),
        body: JSON.stringify(data)
    })
        .then(r => r.json())
}

export const api = {
  auth: {
    login,
    register,
    editUser
  }
};