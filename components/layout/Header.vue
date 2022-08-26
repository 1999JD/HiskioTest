<template>
  <header class="fixed top-0 inset-x-0 py-2 shadow-sm whitespace-nowrap">
    <div class="flex items-center gap-x-6 mx-auto px-6 md:px-7 xl:px-8">
      <h1 class="">
        <a href="/">
          <span class="sr-only">Hiskio</span>
          <div class="header__logo">
            <SvgLogo class="w-full h-auto" />
          </div>
        </a>
      </h1>
      <a
        href="https://www.1111.com.tw/corp/73081297/"
        class="hidden md:block w-20"
      >
        <img
          src="~/assets/image/hiring.png"
          width="80"
          height="40"
          alt="徵才中"
        />
      </a>
      <button class="hidden md:block"><SvgList /> 探索</button>
      <div class="relative md:flex-grow ml-auto md:ml-0">
        <form>
          <input
            type="text"
            class="
              hidden
              md:block
              w-full
              px-3
              py-2.5
              pl-10
              border
              rounded-3xl
              text-sm
            "
            placeholder="網站開發、資料庫/資料科學、軟體工程、維運/測試"
          />
          <button
            type="button"
            class="
              static
              md:absolute
              left-3
              inset-y-0
              my-auto
              text-xl
              md:text-base
            "
            @click="handleSearchOpen(true)"
          >
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            <span class="sr-only">搜尋</span>
          </button>
        </form>
      </div>

      <div
        v-if="!$store.state.isLogin"
        class="flex items-center md:gap-x-6 xl:gap-x-7"
      >
        <NuxtLink to="/" class="hidden md:inline">企業方案</NuxtLink>
        <NuxtLink to="/" class="text-xl md:text-base">
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          <span class="sr-only">購物車</span>
        </NuxtLink>
        <div class="hidden md:flex gap-x-2.5 text-sm">
          <button class="w-16 py-1.5 border rounded">登入</button>
          <button class="w-16 py-1.5 border rounded">註冊</button>
        </div>
      </div>
      <div v-else class="flex gap-x-5">
        <NuxtLink to="/">任務版</NuxtLink>
        <NuxtLink to="/">我的學習</NuxtLink>
        <NuxtLink to="/" class="w-5">
          <span class="sr-only">購物車</span>
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </NuxtLink>
        <NuxtLink to="/">
          <span class="sr-only">大頭貼/會員</span>
        </NuxtLink>
      </div>

      <!-- mobile search open -->
      <div
        :class="[
          searchOpen ? 'block' : 'hidden',
          'fixed top-0 inset-x-0 flex items-center gap-x-3 px-6 py-3 shadow-sm bg-white',
        ]"
      >
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <input
          type="text"
          class="flex-grow"
          placeholder="網站開發、資料庫/資料科學、軟體工程、維運/測試"
        />
        <button @click="handleSearchOpen(false)">
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </button>
      </div>

      <!-- mobile toggle -->
      <button class="block md:hidden text-xl md:text-base">
        <span class="sr-only"></span>
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      searchOpen: false,
    }
  },
  methods: {
    handleSearchOpen(isOpen) {
      this.searchOpen = isOpen
    },
  },
}
</script>

<style lang="postcss" scoped>
.header__logo {
  width: 66px;
}

@screen md {
  .header__logo {
    width: 100px;
  }
}
</style>