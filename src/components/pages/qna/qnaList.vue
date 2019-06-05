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
        <div id="content" class="list white_bg">
          <div class="cell">
            <div class="inner fixed_pd white_bg">
                <div>
                    <ul class="ulList type1" >
                      <li v-for="(item, index) in qList" :key="index" >
                        <div v-if="!item.result && item.qatype == 0" class="cur" >
                          <p v-if="item.qatype == 0" class="que">
                            <span class="font_16 fw600" @click="goNext(item.id, item.result)">{{item.title}}</span>
                            <span class="fr font_12">{{item.date}}</span>
                          </p>
                        </div>
                        <div v-else-if="item.result" class="cur" :class="{ 'end-qna' : item.result }" >
                          <p v-if="item.qatype == 0" class="que">
                            <span class="font_16 fw600" @click="goNext(item.id, item.result)">{{item.title}}</span>
                            <span class="fr font_12 lh25">{{item.date}}</span>
                          </p>
                          <p v-if="item.ans_li.qatype > 0 && item.ans_li.delete_YN == false" class="pl18 que">
                            <span><img src="@/assets/img/ico/ic-arrow.png" alt=""></span>
                            <span><img src="@/assets/img/ico/ic-reply.png" alt=""></span>
                            <span class="font_16 fw600 c-vertical" @click="goNext(item.id, item.result)">답변완료</span>
                            <span class="fr font_12 lh25">{{item.date}}</span>
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
    }
  },
  methods: {
    goNext (nextId, result) {
      if(this.$route.path == '/qna/'){
        this.$router.push({path: `qnaDetail/${nextId}/${result}`, params: {nextId: nextId, result: result }})
      } else if(this.$route.path == '/qna') {
        this.$router.push({path: `/qna/qnaDetail/${nextId}/${result}`, params: {nextId: nextId, result: result }})
      }
      
    } //가져가야될값은 result - 답변유무 //
  },
  computed: {
    qList () {
      return this.$store.getters.qList
    }
  },
  created () {
    // this.$store.commit('qList', true)
    // var param = {
    //   'store_id': this.$route.params.store_id,
    //   'table_id': this.$route.params.table_id
    // }

    // this.$store.dispatch('', param).then((res) => {
    // })
  }
}
</script>

<style scoped lang="css">
  p{
    margin-bottom:0 !important;
  }
</style>
