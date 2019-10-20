<template>
  <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap">
      <!-- container -->
      <div id="container" class="mediaquery main">
        <div id="header" class="custom_bg">
            <p class="header_text font_20">관리자페이지</p>
        </div>
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">
                <div class="ma-card">
                    <div class="box type1" @click="goNext('workList')">
                      <p class="h1-tit">작업요청서</p>
                      <p class="detail-txt">자세히보기</p>
                    </div>
                    <div class="box type2" @click="goNext('qnaList')">
                      <p class="h1-tit">문의사항</p>
                      <p class="detail-txt">자세히보기</p>
                    </div>
                    <div class="box type3" @click="goNext('hidden')">
                      <p class="h1-tit">동적테이블연습</p>
                      <p class="detail-txt">자세히보기</p>
                    </div>
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
export default {
  name: 'main',
  methods: {
    goNext (name) {
      this.$router.push({'name': name.toString()})
    }
  }
}
</script>

<style scoped lang="scss">
  p{
    margin-bottom:0 !important;
  }
</style>
