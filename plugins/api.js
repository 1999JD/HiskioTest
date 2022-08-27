function apiFunction(axios) {
  return {
    postLogin(body) {
      return axios.post(`/auth/login`, body)
    },
    getMember() {
      return axios.get(`/me`)
    },
    getFundraising() {
      return axios.get(`/courses/fundraising`)
    },
    deleteCarts(body) {
      return axios.delete(`/carts`, body)
    },
    postCarts(body) {
      return axios.post(`/carts`, body)
    },
  }
}

export default ({ $axios, store, $cookies }, inject) => {
  $axios.onRequest(config => {
    if ($cookies.get('access_token')) {
      config.headers = {
        Authorization: 'Bearer ' + $cookies.get('access_token')
      }
    }
    return config
  })
  $axios.onResponse((res) => {
    return res
  })
  $axios.onError(err => {
    console.log(err)
    const code = parseInt(err.response && err.response.status)
    return Promise.resolve({ err: true, code, })
  })
  const api = apiFunction($axios)
  inject('api', api)
}