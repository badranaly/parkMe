import axios from 'axios'

const Services = {}

Services.createUser = (userData) => {
  console.log('inside services', userData);
  return axios({
    method: 'POST',
    url: 'http://localhost:3001/api/users',
    data: {
      username: userData.username,
      password: userData.password
    }
  })
}

Services.checkLogin = (userData) => {
  console.log('in login services, data ->', userData);
  return axios({
    method: "POST",
    url: "http://localhost:3001/api/userLogin",
    data: {
      username: userData.username,
      password: userData.password
    }
  })
}

Services.storeLocation = (userLocation) => {
  return axios({
    method: 'POST',
    url: 'http://localhost:3001/api/userlocation',
    data : {
      longitude: userLocation.longitude,
      latitude: userLocation.latitude,
      accuracy: userLocation.accuracy
    }
  })
}

export default Services
