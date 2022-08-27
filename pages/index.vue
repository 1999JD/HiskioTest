<template>
  <main class="bg-gray-100 pt-20">
    <!-- 6xl 1152 -->
    <div class="grid grid-cols-12 gap-x-4 max-w-container px-4 pb-14">
      <section class="col-span-12 lg:col-span-8 max-w-3xl lg:max-w-full mb-16">
        <h2 class="mb-5 text-2xl">購物車</h2>
        <div
          class="grid--custom p-3 border-b rounded-t-2lg bg-white text-center"
        >
          <p class="text-left">項目</p>
          <p>售價</p>
          <p><span class="sr-only">折扣</span></p>
          <p>結帳金額</p>
          <p><span class="sr-only">刪除</span></p>
        </div>
        <ul class="bg-white rounded-b-2lg text-center">
          <li
            v-for="item in $store.state.carts"
            :key="item.id"
            class="grid--custom px-3 py-4"
          >
            <div class="flex text-left">
              <div class="w-32">
                <img :src="item.image" alt="" />
              </div>
              <h4>{{ item.name }}</h4>
            </div>
            <div>NT$2,800</div>
            <div>
              <div v-if="item.coupon">
                -NT${{ item.coupon }}
                <p>折扣優惠</p>
              </div>
            </div>
            <div>NT${{ item.total }}</div>
            <button @click="handleRemoveItem(item.id)">
              <FontAwesomeIcon icon="fa-solid fa-trash" />
            </button>
          </li>
        </ul>
      </section>

      <section class="col-span-12 lg:col-span-4 row-span-2">
        <h2 class="mb-5 text-2xl">小計</h2>
        <div class="h-96 rounded-2lg bg-white"></div>
      </section>

      <section class="col-span-8 hidden md:block">
        <h2 class="mb-5 text-2xl">我收藏的課程</h2>
        <h3 class="mb-14 text-xl">單堂課程</h3>
        <div class="mb-10">
          <SvgNoList class="mx-auto" />
          <p class="text-center">你尚未收藏單堂課程</p>
        </div>
        <h3 class="mb-14 text-xl">電子書</h3>
        <div class="mb-10">
          <SvgNoList class="mx-auto" />
          <p class="text-center">你尚未收藏電子書</p>
        </div>
      </section>
    </div>

    <section class="pt-10 pb-14 bg-gray-200">
      <div class="max-w-container px-4">
        <h2 class="mb-5 text-2xl">其他人也買的課程</h2>
        <ul class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <li
            v-for="cource in fundraisingCources"
            :key="cource.id"
            class="relative rounded-2lg overflow-hidden bg-white"
          >
            <div class="grid grid-cols-3 lg:block p-3.5 lg:p-0">
              <div class="course__img-wrap">
                <div class="absolute z-10">
                  <button @click="handleAddItem(cource.id)">購物車</button>
                </div>
                <img class="absolute top-0 inset-x-0" :src="cource.image" />
              </div>
              <div class="col-span-2 flex flex-col">
                <h3 class="order-2 md:order-1 mx-3 mb-1.5 text-sm lg:text-lg">
                  {{ cource.title }}
                </h3>
                <p class="order-1 md:order-2 mx-3 mb-2.5 text-sm">
                  {{ cource.lecturers[0].username }}
                </p>
              </div>
              <div
                class="
                  mx-3
                  lg:pb-3
                  flex
                  gap-x-2
                  items-center
                  lg:border-b
                  text-xs
                  lg:text-sm
                "
              >
                <div>
                  <FontAwesomeIcon icon="fa-solid fa-user-large" />
                  <span>{{ cource.students }}</span>
                </div>
                <div>
                  <FontAwesomeIcon icon="fa-solid fa-star" />
                  <span>{{ cource.feedback_score }}</span>
                </div>
                <button class="absolute top-3 right-3 lg:static ml-auto border">
                  立即上課
                </button>
              </div>
              <p
                class="
                  col-span-2
                  lg:p-3
                  text-right
                  lg:text-left
                  text-sm
                  lg:text-xl
                "
              >
                NT${{ cource.price }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $api }) {
    const res = await $api.getFundraising()
    if (res.err) return { fundraisingCources: [] }
    const data = await res.data

    return {
      fundraisingCources: data,
    }
  },
  methods: {
    async handleAddItem(itemId) {
      const body = {
        items: [
          {
            id: itemId,
            coupon: '',
          },
        ],
        coupons: [],
      }
      const res = await this.$api.postCarts(body)
      if (res.err) return alert('加入購物車失敗')
      const data = await res.data.data
      this.$store.commit('setCarts', data)
    },
    async handleRemoveItem(itemId) {
      const body = {
        items: [
          {
            id: itemId,
            coupon: '',
          },
        ],
        coupons: [],
      }
      const res = await this.$api.deleteCarts(body)
      if (res.err) return alert('刪除品項失敗')
      this.$store.commit('removeCartsItem', itemId)
    },
  },
}
</script>

<style lang="postcss" scoped>
.grid--custom {
  @apply grid;

  grid-template-columns: 50% 16% 16% 16% 2%;
}

.course__img-wrap {
  @apply relative w-full h-0 rounded-lg overflow-hidden;

  padding-bottom: 56.14%;
}

@screen lg {
  .course__img-wrap {
    @apply rounded-none;
  }
}
</style>
