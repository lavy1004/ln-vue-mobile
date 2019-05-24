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
              <button type="button" class="btn1 end">
                <span class="ico down">다운</span>
              </button>
            </div>
        </div>
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner fixed_pd height100">
                <work-item />
                <work-item-b />
                <ln-button title="일정수정" class="radi-0 gray_bg"/>
                <ln-button title="완료 확인서 작성하기" class="radi-0"/>
            </div>
          </div>
        </div>
      </div>
      <!-- //container -->
    </div>
    <!-- //wrap -->
</template>

<script>
import workItem from './workItem'
import workItemB from './workItemB'

export default {
  name: 'workDetail',
  components: {
    workItem,
    workItemB
  }
}
</script>

<style>

</style>
