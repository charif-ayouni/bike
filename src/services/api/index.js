import { Axios } from '../axios'
import { URL } from '../../config/API'

export const findAll = () => {
  let config = {
    method: 'GET',
    url: `${URL}/bikes`
  }
  return Axios(config)
}

export const findAllStatic = async filter => {
  let data = require('../../data/bikes')
  setTimeout(() => {}, 900)
  return data.filter(address => address.city === filter.toLowerCase())
}
