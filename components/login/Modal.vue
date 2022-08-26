<template>
  <div>
    <div></div>
    <section>
      <FontAwesomeIcon icon="fa-solid fa-xmark" />
      <div>
        <button>登入</button>
        <button>註冊</button>
      </div>
      <ul>
        <li>
          <a href="">
            <img src="" alt="" />
            使用Facebook登入
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
            使用Facebook登入
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
            使用Github登入
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
            使用LinkedIn登入
          </a>
        </li>
      </ul>
      <h3>使用 HiSKIO ID 登入</h3>
      <div>
        <form @submit.prevent="handleLogin">
          <div>
            <FontAwesomeIcon icon="fa-solid fa-circle-user" />
            <input type="text" />
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-lock" />
            <input type="text" />
          </div>
          <label>
            <input type="checkbox" />
            <p>
              登入註冊即代表您同意<a href="">使用者</a>及<a href="">
                隱私權政策
              </a>
            </p>
          </label>
          <button type="submit">登入</button>
          <button type="button">忘記密碼</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LoginModal',
  data() {
    return {
      loginBody: {
        account: '1999JD',
        password: 'people96811',
        confirm: true,
      },
    }
  },
  methods: {
    async handleLogin() {
      // await console.log(this.$cookies)
      const res = await this.$api.postLogin(this.loginBody)
      if (res.err) return alert('登入失敗')
      const data = res.data
      this.$store.commit('setAccessToken', data.access_token)
      this.$cookies.set('access_token', data.access_token)
      this.$store.dispatch('handleGetUser')
    },
  },
}
</script>