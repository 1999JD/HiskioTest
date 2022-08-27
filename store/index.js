export const state = () => ({
  // 上線版本
  accessToken: '',
  user: {},
  isLogin: false,
})
export const getters = {
}
export const actions = {
  nuxtServerInit({ commit, dispatch }, { req }) {
    if (req.headers.cookie) {
      commit('setAccessToken', req.headers.cookie.replace('access_token=', ''))
      commit('setIsLogin', true)
      dispatch('handleGetUser')
    }
  },
  async handleGetUser({ commit }) {
    const res = await this.$api.getMember()
    if (res.err) return commit('setIsLogin', false)
    const data = res.data
    commit('setUser', data)
  }
}
export const mutations = {
  setAccessToken(state, token) {
    state.accessToken = token
  },
  setUser(state, user) {
    state.user = user
  },
  setIsLogin(state, isLogin) {
    state.isLogin = isLogin
  }
}