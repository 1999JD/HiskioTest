<template>
  <div>
    <div></div>
    <section>
      <FontAwesomeIcon icon="fa-solid fa-xmark" />
      <div>
        <button>登入</button>
        <button>註冊</button>
      </div>
      <ul>
        <li>
          <a href="">
            <img src="" alt="" />
            使用Facebook登入
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
            使用Facebook登入
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
            使用Github登入
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
            使用LinkedIn登入
          </a>
        </li>
      </ul>
      <h3>使用 HiSKIO ID 登入</h3>
      <div>
        <form action="">
          <div>
            <FontAwesomeIcon icon="fa-solid fa-circle-user" />
            <input type="text" />
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-lock" />
            <input type="text" />
          </div>
          <label>
            <input type="checkbox" />
            <p>
              登入註冊即代表您同意<a href="">使用者</a>及<a href=""
                >隱私權政策</a
              >
            </p>
          </label>
          <button type="submit">登入</button>
          <button type="button">忘記密碼</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LoginModal',
}
</script>