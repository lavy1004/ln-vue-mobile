<template>
    <div class="white_bg">
        <ul class="ulList type2 mb0" >
            <li class="pd-qna">
                <div>
                    <p class="font_16 fw600 mb8">
                        {{qList[id].title}}
                    </p>
                    <p class="font_14">
                        {{qList[id].date}}
                    </p>
                </div>
                <p class="hr"></p>
                <div>
                    <p class="font_16 mb32">
                        안녕하세요. 강남점 ooo입니다. 다름이아니라 저희가 이번에 청소를 예약하려고하는데 어닝프레임과 유리의 차이를 알고싶습니다. <br/>감사합니다.
                    </p>
                    <div class="c-mobile">
                        <figure @click="showImg" class="inb mr8 img-wrap" style="" v-for="(item, index) in imgList" :key="index">
                            <img style="width:100%" src='@/assets/img/non.png' alt="">
                        </figure>
                    </div>
                    <p class="font_14 mb24 gr-box mt32">
                        <span class="font_16 fw600 mr12">연락처</span>
                        <span>01012345678</span>
                    </p>
                </div>
                <div v-if="qList[id].result == true">
                    <!-- 답변이 있을때 그려주는화면 -->
                    <p class="mb4">
                        <span><img src="@/assets/img/ico/ic-arrow.png" alt=""></span>
                        <span><img src="@/assets/img/ico/ic-reply.png" alt=""></span>
                        <span class="font_16 fw600 c-vertical">답변완료</span>
                    </p>
                    <p class="pl18"><span class="font_14">{{qList[id].date}}</span></p>
                    <p class="hr"></p>
                    <p class="font_16" v-show="modedata == false">{{qList[id].reply}}</p>
                    <!-- 읽기모드일시 p태그로 qList의 reply를 가져옵니다 -->
                    <textarea class="inp-lg" placeholder="답변 내용을 입력하세요." v-show="modedata == true"  v-model="qList[id].reply">
                    </textarea>
                    <!-- 쓰기모드의경우 마찬가지로 qList의 reply값을 가져오는데 textarea이므로 쓰기가가능합니다 -->
                </div>
                <div v-else>
                    <!-- qList -> qList[id] -> qList[id].reply로 데이터저장 -->
                    <p class="font_16" v-show="modedata == false" >{{qList[id].reply}}</p>
                    <textarea class="inp-lg" v-show="modedata == true"   placeholder="답변 내용을 입력하세요."  v-model="qList[id].reply">
                    </textarea>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
/*eslint-disable */
/*mode 는 읽기와 쓰기 두종류입니다 읽기의경우 true 쓰기의경우 false를 나타냅니다*/
export default {
  props: {
      modedata:{
        type: Boolean,
        default: true
      }
  },
  mounted() {
      this.id=this.$route.params.id
  },
  computed: {
      qList() {
          return this.$store.getters.qList
      }
  },
  data () {
    return {
      id: '',
      mode: '',
      imgList: [
          { sorce: 'url' },
          { sorce: 'url' },
          { sorce: 'url' },
          { sorce: 'url' },
          { sorce: 'url' },
          { sorce: 'url' },
      ]
    }
  },
  methods: {
      showImg(){
          this.$emit('ev_showImg')
      }
  }
}
</script>

<style>
  figure{
    margin-bottom:0 !important;
  }
</style>
