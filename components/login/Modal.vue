<template>
  <div>
    <div class="fixed z-40 inset-0 bg-black opacity-70"></div>
    <section
      class="
        modal__bg modal__scroll
        fixed
        z-50
        inset-0
        max-w-md max-h-96vh
        m-auto
        pt-10
        pb-7
        px-16
        rounded-xl
        overflow-auto
        bg-white
      "
    >
      <button class="absolute top-5 right-6 text-xl" @click="handleClose">
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </button>
      <div class="flex mb-6 text-center text-3xl">
        <button class="flex-1 pt-5 pb-2 font-black text-primary">登入</button>
        <button class="flex-1 pt-5 pb-2 font-black text-gray-200">註冊</button>
      </div>
      <ul class="mb-6">
        <li
          v-for="party in thirdParties"
          :key="party.link"
          class="mb-3 border rounded-md"
        >
          <a class="block w-full py-2.5 text-center">
            <div class="inline-block w-7 align-middle">
              <img :src="party.img" alt="" />
            </div>
            <span class="inline-block w-36 text-left text-gray-100">
              {{ party.text }}
            </span>
          </a>
        </li>
      </ul>
      <h3 class="mb-5 text-center">使用 HiSKIO ID 登入</h3>
      <div class="text-sm">
        <form @submit.prevent="handleLogin">
          <div class="relative mb-2">
            <FontAwesomeIcon
              icon="fa-solid fa-circle-user"
              class="absolute inset-y-0 left-4 m-auto"
            />
            <input
              v-model="loginBody.account"
              autocomplete="username"
              type="text"
              class="w-full py-2.5 pl-12 pr-2.5 rounded bg-gray-50"
              placeholder="請輸入 HiSKIO ID"
            />
          </div>
          <div class="relative mb-5">
            <FontAwesomeIcon
              icon="fa-solid fa-lock"
              class="absolute inset-y-0 left-4 m-auto"
            />
            <input
              v-model="loginBody.password"
              type="password"
              autocomplete="current-password"
              class="w-full py-2.5 pl-12 pr-2.5 rounded bg-gray-50"
              placeholder="請輸入登入密碼"
            />
          </div>
          <label class="flex gap-x-1.5 mb-7">
            <input v-model="loginBody.confirm" type="checkbox" />
            <p class="text-gray-100">
              登入註冊即代表您同意<a href="">使用者</a>及<a href="">
                隱私權政策
              </a>
            </p>
          </label>
          <button
            type="submit"
            class="
              block
              w-full
              mb-5
              py-2
              rounded
              bg-primary
              text-white text-center text-lg
            "
          >
            登入
          </button>
          <button type="button" class="block w-fit mx-auto text-lg">
            忘記密碼
          </button>
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
        account: '',
        password: '',
        confirm: false,
      },
      thirdParties: [
        {
          link: '/facebook',
          text: '使用Facebook登入',
          img: 'https://hiskio.com/images/icon-facebook.svg',
        },
        {
          link: '/google',
          text: '使用Google登入',
          img: 'https://hiskio.com/images/icon-google.svg',
        },
        {
          link: '/github',
          text: '使用Github登入',
          img: 'https://hiskio.com/images/icon-github.svg',
        },
        {
          link: '/linkedin',
          text: '使用LinkedIn登入',
          img: 'https://hiskio.com/images/icon-linkedin.svg',
        },
      ],
    }
  },
  methods: {
    handleClose() {
      this.$emit('onClose', false)
    },
    async handleLogin() {
      if (
        !this.loginBody.confirm ||
        !this.loginBody.account ||
        !this.loginBody.password
      )
        return alert('請確認輸入資料')
      const res = await this.$api.postLogin(this.loginBody)
      if (res.err) return alert('登入失敗')
      const data = res.data
      this.$store.commit('setAccessToken', data.access_token)
      this.$cookies.set('access_token', data.access_token)
      window.location.reload(true)
    },
  },
}
</script>

<style lang="postcss" scoped>
.modal__bg {
  background-image: url('~/assets/image/login.png');
  @apply bg-no-repeat bg-contain;
}

.modal__scroll::-webkit-scrollbar {
  @apply w-2 bg-transparent;
}

.modal__scroll::-webkit-scrollbar-thumb {
  @apply bg-gray-200 rounded-3xl;
}
</style>