export const state = () => ({
  // 上線版本
  accessToken: '',
  user: {},
  isLogin: false,
  carts: []
})
export const getters = {
}
export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req }) {
    if (req.headers.cookie) {
      commit('setAccessToken', req.headers.cookie.replace('access_token=', ''))
      commit('setIsLogin', true)
      await dispatch('handleGetUser')
      await dispatch('handleGetCarts')
    }
  },
  async handleGetUser({ commit }) {
    const res = await this.$api.getMember()
    if (res.err) return commit('setIsLogin', false)
    const data = await res.data
    commit('setUser', data)
  },
  async handleGetCarts({ commit }) {
    const body = []
    const res = await this.$api.postCarts(body)
    if (res.err) return
    const data = await res.data.data
    commit('setCarts', data)
  },
}
export const mutations = {
  setAccessToken(state, token) {
    state.accessToken = token
  },
  setUser(state, user) {
    state.user = { ...user }
  },
  setCarts(state, carts) {
    state.carts = [...carts]
  },
  removeCartsItem(state, itemId) {
    state.carts =
      state.carts.filter(item => item.id !== itemId)
  },
  setIsLogin(state, isLogin) {
    state.isLogin = isLogin
  }
}