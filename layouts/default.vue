<template>
  <div>
    <header>
      <h1 class="">
        <a href="/">
          <span class="sr-only">Hiskio</span>
          <div class="header__logo">
            <SvgLogo class="w-full h-auto" />
          </div>
        </a>
      </h1>
      <a href="https://www.1111.com.tw/corp/73081297/" class="">
        <img
          src="~/assets/image/hiring.png"
          width="80"
          height="40"
          alt="徵才中"
        />
      </a>
      <button><SvgList /> 探索</button>
      <div>
        <form>
          <input
            type="text"
            class=""
            placeholder="網站開發、資料庫/資料科學、軟體工程、維運/測試"
          />
          <button type="submit">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            <span class="sr-only">搜尋</span>
          </button>
        </form>
      </div>

      <div>
        <NuxtLink to="/">企業方案</NuxtLink>
        <NuxtLink to="/">
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          <span class="sr-only">購物車</span>
        </NuxtLink>
        <div class="">
          <button>登入</button>
          <button>註冊</button>
        </div>
      </div>
      <div>
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

      <button>
        <span class="sr-only">開合</span>
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </button>
    </header>
    <Nuxt />
    <LoginModal />
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="postcss" scoped>
.header__logo {
  width: 100px;
}
</style>