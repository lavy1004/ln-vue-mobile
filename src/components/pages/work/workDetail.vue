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
                <work-item />
                <work-item-b />
                  <!--https://mikaeledebro.gitbooks.io/vue-airbnb-style-datepicker/INSTALLATION.html-->                                  
                    <div class="datepicker-container with-button" >
                      <div class="datepicker-trigger">
                        <button class="mu-btn radi-0 gray_bg" id="datepicker-button-trigger" :value="formatDates(dateOne, dateTwo)">
                          {{ '일정수정' }}
                        </button>
                        
                        <airbnb-style-datepicker
                          :mode="'single'"
                          :trigger-element-id="'datepicker-button-trigger'"
                          :fullscreen-mobile="true"
                          :months-to-show="1"
                          :offset-y="0"
                          :offset-x="100"
                          :showShortcutsMenuTrigger="false"
                          :mobile-header="'일정수정'"
                          :closeAfterSelect="true"
                          :date-one="dateOne"
                          :date-two="dateTwo"
                          @date-one-selected="val => { dateOne = val }"
                          @date-two-selected="val => { dateTwo = val }"
                          :show-action-buttons="true"
                          :close-after-select="false"
                          :disabled-dates="['2018-10-20', '2019-05-20']"
                          :min-date="'2019-05-12'"
                          :end-date="'2019-05-20'"
                        ></airbnb-style-datepicker>
                      </div>
                    </div>
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
import format from 'date-fns/format'

export default {
  name: 'workDetail',
  components: {
    workItem,
    workItemB
  },
  data () {
    return {
      dateFormat: 'D MMM',
      dateOne: '',
      dateTwo: ''
    }
  },
  methods: {
    formatDates (dateOne, dateTwo) {
      let formattedDates = ''
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat)
      }
      if (dateTwo) {
        formattedDates += ' - ' + format(dateTwo, this.dateFormat)
      }
      return formattedDates
    }
  }
}
</script>

<style>

</style>
