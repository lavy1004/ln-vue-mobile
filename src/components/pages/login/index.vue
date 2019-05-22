<template>
    <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="custom_bg">        
      <!-- container -->
      <div id="container" class="mediaquery login">
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">
                <div class="lo-card mt100">
                    <figure class="card-fig">
                        <img src="@/assets/img/web-logo.png" alt="">
                    </figure>
                    <form action="">
                    <input class="inp01 mt62" type="text" placeholder="아이디">
                    <input class="inp01 mt24" type="password" placeholder="비밀번호">
                    <button class="btn01 mt62 custom_bg">로그인</button>
                    </form>
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- //container -->
    </div>
    <!-- //wrap -->
</template>

<script>
/* eslint-disable */
import Cookies from 'js-cookie'
import axios from 'axios'
export default {
  
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin() {
      console.log('========login=======')
      console.log(this.loginForm)
      console.log('========login=======')

      axios.post('http://localhost:9999/login', {loginForm: this.loginForm})
      .then(res =>{
        console.log(res.data)

        console.log('====res====')
        Cookies.set('tocke', res.data.resData.userId, {expires:1})
        this.$router.push('/')
      })
      .catch(err => {
        console.log(err)
      })
      .finally(_ => {

      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
