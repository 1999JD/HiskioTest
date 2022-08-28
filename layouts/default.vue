<template>
  <div>
    <LayoutHeader
      @onLoginModalOpen="handleLoginModalOpen"
      @onMobileAsideOpen="handleMobileAsideOpen"
      @onDesktopMemberAsideOpen="handleDesktopMemberAsideOpen"
    />
    <div class="h-12 md:h-14"></div>
    <Nuxt />
    <LayoutMobileAside :is-open="mobileAsideOpen" />
    <LayoutDesktopMemberAside
      :is-open="desktopMemberAsideOpen"
      @onClose="handleDesktopMemberAsideOpen"
    />
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
      mobileAsideOpen: false,
      desktopMemberAsideOpen: false,
    }
  },
  methods: {
    handleLoginModalOpen(isOpen) {
      this.loginModalOpen = isOpen
    },
    handleMobileAsideOpen(isOpen) {
      this.mobileAsideOpen = isOpen || !this.mobileAsideOpen
    },
    handleDesktopMemberAsideOpen(isOpen) {
      this.desktopMemberAsideOpen = isOpen
    },
  },
}
</script>
