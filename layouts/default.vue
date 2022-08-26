<template>
  <div>
    <LayoutHeader />
    <div class="h-12 md:h-14"></div>
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
