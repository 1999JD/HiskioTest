<template>
  <aside
    :class="[
      isOpen && 'active',
      'aside--desktop fixed inset-y-0 right-0 z-30 w-80 bg-white shadow-lg',
    ]"
  >
    <div class="flex justify-end pr-5">
      <button class="" @click="$emit('onClose', false)">
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </button>
    </div>
    <a
      v-if="$store.state.isLogin"
      href="javascript:void(0)"
      role="button"
      class="block w-full py-4 px-3.5 hover:bg-primary-pale"
      @click="logout"
    >
      登出
    </a>
  </aside>
</template>

<script>
export default {
  name: 'DesktopMemberAside',
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
.aside--desktop {
  @apply hidden;
}

@screen lg {
  .aside--desktop {
    @apply hidden;
  }
}

.aside--desktop.active {
  @apply block;
}

@media (max-width: 767px) {
  .aside--desktop {
    @apply hidden;
  }
}
</style>