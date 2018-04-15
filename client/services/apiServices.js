import axios from 'axios'

const Services = {}

Services.createUser = (userData) => {
  console.log('inside services', userData);
  return axios({
    method: 'POST',
    url: 'http://localhost:3001/api/users',
    data: {
      userData
    }
  })
}

Services.checkLogin = (userData) => {
  console.log('in login services, data ->', userData);
  return axios({
    method: "POST",
    url: "http://localhost:3001/api/userLogin",
    data: {
      userData
    }
  })
}

Services.updateLocation = (userData) => {
  console.log('inside services for updatign location', userData);
  return axios ({
    method: "PATCH",
    url: 'http://localhost:3001/api/updateLocation',
    data : {
      username: userData.username,
      longitude: userData.longitude,
      latitude: userData.latitude,
      accuracy: userData.accuracy
    }
  })
}

Services.lookingForSpot = (userData) => {
  console.log('inside services for looking for leaving cars', userData);
  return axios ({
    method: 'PATCH',
    url: 'http://localhost:3001/api/looking',
    data: {
      userData
    }
  })
}

Services.leavingSpot = (userData) => {
  console.log('inside services for leaving spots', userData);
  return axios({
    method: 'PATCH',
    url: 'http://localhost:3001/api/leaving',
    data: {
      userData
    }
  })
}

Services.reset = (userData) => {
  console.log('inside services to reset', userData)
  return axios({
    method: "POST",
    url: 'http://localhost:3001/api/reset',
    data: userData
  })
}


export default Services
