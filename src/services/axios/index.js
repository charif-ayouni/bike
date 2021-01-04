import axios from 'axios'

export const Axios = async (config, data = null) => {
  return await axios({
    method: config.method,
    url: config.url,
    params: config.params,
    headers: config.headers,
    data: data
  })
}
