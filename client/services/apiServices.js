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

export default Services
