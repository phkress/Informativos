const axios = require('axios');

const api = axios.create({
  baseURL: "http://localhost:3001/v1/",
  withCredentials: true
})

module.exports = api