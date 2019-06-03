<template>
<!-- eslint-disable -->
      <div>
        <div id="header" class="custom_bg fixed" >
            <div class="header_card">
              <button type="button" class="btn1 only prev" @click="goBack">
                <span class="ico prev_wh">이전</span>
              </button>
              <p class="header_text font_20">작업 완료확인서</p>
              <button type="button" class="btn1 end cir">
                <span class="ico down">다운</span>
              </button>
            </div>
        </div>
        <div id="content" class="normal">
          <div class="cell">
            <div  class="inner fixed_pd height100">
                <work-item-c @ev_showImg="showImgPop" :wList="wList" />
            </div>
          </div>
           <!-- popup -->
          <ln-popup v-if="showImg" @cancelClick="cancel" :classObjectWrap="'pt48'" :classObject="'pd0'">
                <!-- popup body -->
                <div slot="ico" class="close-ico">
                    <div>
                        <img src="@/assets/img/ico/ic-close.png" alt="">
                    </div>
                    
                </div>
                <div slot="main">
                    <figure class="inb">
                        <img style="width:100%" src='@/assets/img/non.png' alt="">
                    </figure>
                </div>
          </ln-popup>
        </div>
        <!-- content -->
       
      </div>
</template>

<script>
/*eslint-disable */
import workItemC from './workItemC'

export default {
  name: 'workDetail',
  components: {
    workItemC
  },
  data () {
    return {
      showImg: false
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
      showImgPop() {
          this.showImg = true
      },
      cancel () {
      this.showImg = false
    },
  }
}
</script>

<style>
    figure{
        margin-bottom:0;
    }
</style>
