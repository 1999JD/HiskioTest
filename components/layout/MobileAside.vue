<template>
  <nav
    :class="[
      isOpen && 'active',
      'nav--mobile fixed inset-0 top-12 z-30 bg-gray-50',
    ]"
  >
    <NuxtLink to="/" class="block w-full py-4 px-3.5 bg-white"
      >探索目錄</NuxtLink
    >
    <NuxtLink to="/" class="block w-full py-4 px-3.5 bg-white"
      >我想開課</NuxtLink
    >
    <a
      v-if="!$store.state.isLogin"
      href="javascript:void(0)"
      role="button"
      class="block w-full py-4 px-3.5"
    >
      登入
    </a>
    <a
      v-if="!$store.state.isLogin"
      href="javascript:void(0)"
      role="button"
      class="block w-full py-4 px-3.5"
    >
      註冊
    </a>
    <a
      v-if="$store.state.isLogin"
      href="javascript:void(0)"
      role="button"
      class="block w-full py-4 px-3.5"
      @click="logout"
    >
      登出
    </a>
  </nav>
</template>

<script>
export default {
  name: 'MobileAside',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    logout() {
      this.$cookies.remove('access_token')
      window.location.reload(true)
    },
  },
}
</script>

<style lang="postcss" scoped>
.nav--mobile {
  @apply hidden;
}

.nav--mobile.active {
  @apply block;
}

@screen lg {
  .nav--mobile {
    @apply hidden;
  }
}
</style>