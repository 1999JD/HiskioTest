<template>
  <main>
    <div>
      <div>
        <section>
          <h2>購物車</h2>
          <div>
            <p>項目</p>
            <p>售價</p>
            <p>結帳金額</p>
          </div>
          <ul>
            <li>
              <div>
                <div>
                  <img src="" alt="" />
                </div>
                <h4>GA4 實戰佈局｜從零基礎部署到商業分析</h4>
              </div>
              <div>NT$2,800</div>
              <div>
                <FontAwesomeIcon icon="fa-solid fa-trash" />
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h3>我收藏的課程</h3>
          <h4>單堂課程</h4>
          <SvgNoList />
          <h4>電子書</h4>
          <SvgNoList />
        </section>
      </div>
      <section>
        <h3>小計</h3>
      </section>
    </div>
    <section>
      <h2>其他人也買的課程</h2>
      <ul>
        <li>
          <div>
            <img src="" alt="" />
            <h3>精通 VueJS 前端開發完全指南</h3>
            <p>姚偉揚</p>
            <div>
              <div>
                <FontAwesomeIcon icon="fa-solid fa-user-large" />
                <span>1387</span>
              </div>
              <div>
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <span>5.0</span>
              </div>
              <button>立即上課</button>
            </div>
            <p>NT$3,200</p>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
