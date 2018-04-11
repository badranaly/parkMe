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
    method: "PUT",
    url: 'http://localhost:3001/api/updateLocation',
    data : {
      username: userData.username,
      longitude: userData.longitude,
      latitude: userData.latitude,
      accuracy: userData.accuracy
    }
  })
}


export default Services
