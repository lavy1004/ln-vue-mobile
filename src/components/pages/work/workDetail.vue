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
              <button type="button" class="btn1 end cir">
                <span class="ico down">다운</span>
              </button>
            </div>
        </div>
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner fixed_pd height100">
                <work-item :wList="wList" />
                <work-item-b :wList="wList" />
                <datepicker 
                  orientation="landscape"
                  lang="ko"
                  disable-passed-days="true"></datepicker> 
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
import workItem from './workItem'
import workItemB from './workItemB'
import Datepicker from '../../Datepicker.vue'

export default {
  name: 'workDetail',
  components: {
    workItem,
    workItemB,
    datepicker: Datepicker
  },
  data () {
    return {
      orientation: ''
    }
  },
  created() {
  },
  computed: {
    wList () {
      return this.$store.getters.wList
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
