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
                <qnaItem @ev_showImg="showImgPop"></qnaItem>
                <!-- result 값에따라서 답변작성 버튼1개 또는 수정과 삭제버튼을 보여주는것을 결정 -->
                <div v-if="result == false">
                  <!-- mode로 textarea로 입력 모드 or p로 읽기 모드 변경과 button의 이름변경 -->
                  <div @click="changeMode" v-if="mode == true"><ln-button  title="답변 작성" class="radi-0"/></div>
                  <div @click="changeMode" v-else-if="mode == false"><ln-button title="답변 등록" class="radi-0"/></div>
                </div>
                <div v-else-if="result == true">
                  <div v-if="mode == true">
                    <!-- 삭제버튼시 팝업을 showPop 으로 보여줍니다 -->
                    <span @click="showPop()"><ln-button  title="삭제" class="radi-0" :class="['width50', 'gray_bg']"/></span><span  @click="changeMode"><ln-button title="수정" class="radi-0" :class="'width50'"/></span>
                  </div>
                  <div  @click="changeMode" v-else-if="mode == false">
                    <ln-button title="답변 등록" class="radi-0"/>
                  </div>
                </div>
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
    this.result = Boolean(this.$route.params.result) // 숫자로 넘어온값을 true,false로 이용 근대 0과 1을 또 다시 문자로 라우터에서 바뀜..
    console.log(this.result) 
  },
  data () {
    return {
      result: false,
      mode: true,
      showConfirm: false,
      showImg: false
    }
  },
  computed: {

  },
  methods: {
    changeMode() {
      this.mode = !this.mode
      this.result = !this.result
      let params = {
        mode: this.mode,
        result: this.result
      }
      this.$store.commit('changeMode', params)
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
      let params = {
        id : this.$route.params.id,
        YN : true,
        result : false
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
