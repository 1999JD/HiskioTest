<template>
  <div>
    <LayoutHeader @onLoginModalOpen="handleLoginModalOpen" />
    <div class="h-12 md:h-14"></div>
    <Nuxt />
    <LoginModal v-show="loginModalOpen" @onClose="handleLoginModalOpen" />
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      loginModalOpen: false,
    }
  },
  methods: {
    handleLoginModalOpen(isOpen) {
      this.loginModalOpen = isOpen
    },
  },
}
</script>
