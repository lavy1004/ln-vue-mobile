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
                <qnaItem @ev_showImg="showImgPop" :modedata="$store.state.mode" ></qnaItem>
                <!-- result 값에따라서 답변작성 버튼1개 또는 수정과 삭제버튼을 보여주는것을 결정 -->
                <div v-if="$store.state.qList[idx].result  == false && $store.state.mode == false">
                  <!-- 작성 -->
                  <div @click="changeMode(2)"><ln-button  title="답변작성" class="radi-0"/></div>
                  </div>
                <div v-else-if="$store.state.qList[idx].result == false && $store.state.mode == true">
                  <!-- 등록 -->
                  <div @click="changeMode(1)"><ln-button title="답변등록" class="radi-0"/></div>
                </div>
                <div v-else-if="$store.state.qList[idx].result  == true && $store.state.mode == false">
                  <!-- 수정 -->
                  <span @click="showPop()"><ln-button  title="삭제" class="radi-0" :class="['width50', 'gray_bg']"/></span><span @click="changeMode(2)"><ln-button title="수정" class="radi-0" :class="'width50'"/></span>
                </div>
                <div v-else-if="$store.state.qList[idx].result  == true && $store.state.mode == true">
                  <!-- 수정 등록 -->
                  <div @click="changeMode(2)"><ln-button title="답변등록" class="radi-0"/></div>
                </div>
                  <!-- mode로 textarea로 입력 모드 true or p로 읽기 모드 false 변경과 button의 이름변경 -->
                  <!-- 삭제버튼시 팝업을 showPop 으로 보여줍니다 -->
            </div>
          </div>
          <!-- content -->
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
          <!-- popup -->
          <ln-popup v-if="showConfirm" title="답변을 삭제할까요" cancelInput="취소" deleteInput="삭제하기" @cancelClick="cancel" @deleteClick="deletePage" @confirmClick="confirm">
          </ln-popup>
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
    let idx = Number(this.$route.params.id)
    if(this.$store.state.qList[idx].result == false){
      console.log('답변 x')
      this.$store.commit('changeMode', false)
      this.$store.commit('changeResult', false)
    } else if (this.$store.state.qList[idx].result == true ){
      console.log('답변 o')
      this.$store.commit('changeMode', false)
      this.$store.commit('changeResult', true)
    }
  },
  data () {
    return {
      result: false,
      mode: false,
      showConfirm: false,
      showImg: false,
      idx: Number(this.$route.params.id),
    }
  },
  computed: {
    qList() {
        return this.$store.getters.qList
    }
  },
  methods: {
    pushData(){
      // console.log('데이터넣기')
      let id = Number(this.$route.params.id)+1
      let qid = id-1
      let aid = id
      let qList = this.$store.state.qList
      let params =  {
        id: id, title:this.title, qid: qid, aid: aid, date: '2019. 04. 08', result: true, qatype: 1, delete_YN: false, reply: this.reply
      }
      this.$store.commit('pushData', params)
    },
    changeMode(num){
      if(num == 2){
        // console.log('111111111'+ this.mode)
        this.mode = !this.mode
        let params = this.mode
        this.$store.commit('changeMode', params)
      } else if(num == 1){
        this.mode = !this.mode
        this.result = !this.result
        // console.log('222222222'+this.mode)
        let params = {
          mode: this.mode,
          result: this.result,
          id: this.$route.params.id
        }
        this.$store.commit('changeModenResult', params)
        this.pushData()
      }
      
    },
    showPop() {
      this.showConfirm = true
    },
    showImgPop() {
      this.showImg = true
    },
    cancel () {
      this.showConfirm = false
      this.showImg = false
    },
    confirm () {
      this.showConfirm = false
    },
    deletePage () {
      let id = Number(this.$route.params.id)

      let params = {
        id : id,
        result : false,
        delete_YN : true,
        reply : ''
      }
      this.$store.commit('delete_YN', params)
      this.$router.push('/qna')
    }
  }
}
</script>

<style>
  p{
    margin-bottom:0;
  }
  figure{
    margin-bottom:0 !important;
  }
</style>
