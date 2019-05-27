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
                <qnaItem :result="qList"></qnaItem>
                <div v-if="qatype == 0">
                  <ln-button  title="답변 작성" class="radi-0"/>
                </div>
                <div v-else>
                  <ln-button  title="삭제" class="radi-0" :class="['width50', 'gray_bg']"/><ln-button  title="수정" class="radi-0" :class="'width50'"/>
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
  props: {
    // qList List에서 받아올 데이터
  },
  components: {
    qnaItem
  },
  data () {
    return {
      qatype: 0
    }
  }
}
</script>

<style>

</style>
