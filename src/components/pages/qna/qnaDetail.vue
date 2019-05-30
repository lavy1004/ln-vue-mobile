<template>
    <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap">
      <!-- container -->
      <div id="container" class="mediaquery com_bg">
        <div id="header" class="custom_bg fixed" >
            <div class="header_card">
              <button type="button" class="btn1 only prev" @click="goBack">
                <span class="ico prev_wh">이전</span>
              </button>
              <p class="header_text font_20">작업요청서</p>
            </div>
        </div>
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner fixed_pd height100">
                <qnaItem></qnaItem>
                <div v-if="result == 'false'">
                  <div @click="changeMode" v-if="mode == true"><ln-button  title="답변 작성" class="radi-0"/></div>
                  <div  v-else-if="mode == false"><ln-button onClick2="changeMode" title="답변 등록" class="radi-0"/></div>
                </div>
                <div v-else>
                  <div @click="changeMode" v-if="mode == true">
                    <ln-button  title="삭제" class="radi-0" :class="['width50', 'gray_bg']"/><ln-button title="수정" class="radi-0" :class="'width50'"/>
                  </div>
                  <div @click="changeMode" v-else-if="mode == false">
                    <ln-button title="답변 등록" class="radi-0"/>
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
/*eslint-disable */
import qnaItem from './qnaItem'

export default {
  name: 'workDetail',
  components: {
    qnaItem
  },
  created(){
    this.result = this.$route.params.result
  },
  data () {
    return {
      result: false,
      mode: true
    }
  },
  methods: {
    changeMode() {
      this.mode = !this.mode
      let params = this.mode
      this.$store.commit('changeMode', params)
    }
  }
}
</script>

<style>
  p{
    margin-bottom:0;
  }
</style>
