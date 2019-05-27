<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap">
      <!-- container -->
      <div id="container" class="mediaquery com_bg">
        <div id="header" class="custom_bg fixed" >
            <div class="header_card">
              <button type="button" class="btn1 only prev" @click="goBack"><span class="ico prev_wh">이전</span></button>
              <p class="header_text font_20">문의사항</p>
            </div>
        </div>
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner fixed_pd white_bg height100">
                <div>
                    <ul class="ulList type1" >
                      <li class="pb90" v-for="(item, index) in qList" :key="index" :class="{ 'end-qna' : item.result }">
                        <!-- Result가 false 라면 클릭안되는 리스트-->
                        <div v-if="!item.result" class="cur"   >
                          <p>
                            <span class="font_16 fw600" @click="goNext('qnaDetail')">{{item.title}}</span>
                            <span class="fr font_12">{{item.date}}</span>
                          </p>
                        </div>
                        <div v-else class="cur" >
                          <p v-if="item.qatype == 0">
                            <span class="font_16 fw600" @click="goNext('qnaDetail')">{{item.title}}</span>
                            <span class="fr font_12">{{item.date}}</span>
                          </p>
                          <p v-if="item.qatype > 0" class="pl18">
                            <span><img src="@/assets/img/ico/ic-arrow.png" alt=""></span>
                            <span><img src="@/assets/img/ico/ic-reply.png" alt=""></span>
                            <span class="font_16">답변완료</span>
                            <span class="fr font_12">{{item.date}}</span>
                          </p>
                        </div>
                      </li>
                    </ul>
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
  data () {
    return {
      qList: [
        {title: '강남점, 작업관련 문의', date: '2019. 04. 08', result: false, qatype: 0},
        {title: '역삼점, 견적관련 문의', date: '2019. 04. 08', result: false, qatype: 0},
        {title: '선릉점, 기타 문의', date: '2019. 04. 08', result: true, qatype: 0}, // 0이면 질문이고 qatype 1부터는 답변의갯수 질문에 id 값도 있으면 더좋다 연계하기위해
        {title: '답변1', date: '2019. 04. 08', result: true, qatype: 1},
        {title: '여의도점, 작업관련 문의', date: '2019. 04. 08', result: true, qatype: 0},
        {title: '답변2, 기타 문의', date: '2019. 04. 08', result: true, qatype: 1}
      ]
    }
  },
  methods: {
    goNext (name) {
      this.$router.push({'name': name.toString()})
    }
  }
  // created () {
  //   this.$store.commit('qList', true)
  //   var param = {
  //     'store_id': this.$route.params.store_id,
  //     'table_id': this.$route.params.table_id
  //   }

  //   this.$store.dispatch('', param).then((res) => {
  //   })
  // }
}
</script>

<style>

</style>
