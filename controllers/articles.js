const axios = require('axios')

const baseURL = 'https://swapi.dev/api'
const axiosInstance = axios.create({baseURL});

async function getCatalog(req, res) {
  try {
    let request = ''
    if (req.query.page)
      request += `${req.path}?page=${req.query.page}`
    else
      request += `${req.path}`
    let data = await axiosInstance.get(request).then(res => res.data)
    res
      .status(200)
      .json(data)

  } catch (error) {
    res
      .status(404)
      .json(error)
  }
}

async function getCatalogById(req, res) {
  try {
    let data = await axiosInstance.get(`${req.path}`).then(res => res.data);
    return res
      .status(200)
      .json(data);
  } catch (error) {
    res
      .status(404)
      .json(error);
  }
}

module.exports = {getCatalog, getCatalogById}
