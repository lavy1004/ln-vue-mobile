<template>
    <div class="white_bg">
        <ul class="ulList type2 mb0" >
            <li class="pd-qna" v-for="(item, index) in qList" v-show="id == index" :key="index">
                <div>
                    <p class="font_16 fw600 mb8">
                        {{item.title}}
                    </p>
                    <p class="font_14">
                        {{item.date}}
                    </p>
                </div>
                <p class="hr"></p>
                <div>
                    <p class="font_16 mb32">
                        안녕하세요. 강남점 ooo입니다. 다름이아니라 저희가 이번에 청소를 예약하려고하는데 어닝프레임과 유리의 차이를 알고싶습니다. <br/>감사합니다.
                    </p>
                    <figure @click="showImg" class="inb mr8" style="width:82px; height:82px;" v-for="(item, index) in imgList" :key="index">
                        <img style="width:100%" src='@/assets/img/non.png' alt="">
                    </figure>
                    <p class="font_14 mb24 gr-box">
                        <span class="font_16 fw600 mr12">연락처</span>
                        <span>01012345678</span>
                    </p>
                </div>
                <div v-if="item.result == true">
                    <p>
                        <span><img src="@/assets/img/ico/ic-arrow.png" alt=""></span>
                        <span><img src="@/assets/img/ico/ic-reply.png" alt=""></span>
                        <span class="font_16 fw600">답변완료</span>
                    </p>
                    <p class="pl18"><span class="font_14">{{item.date}}</span></p>
                    <p class="hr"></p>
                    <p class="font_16" v-if="changeMode == true">{{item.reply}}</p>
                    <textarea class="inp-lg" placeholder="답변 내용을 입력하세요." v-else-if="changeMode == false" v-model="item.reply">
                    </textarea>
                </div>
                <div v-else>
                    <textarea class="inp-lg"  placeholder="답변 내용을 입력하세요." v-if="changeMode == false" v-model="item.reply">
                    </textarea>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
/*eslint-disable */
export default {
  mounted() {
    this.id = this.$route.params.id
    this.$store.commit('changeMode', true);
  },
  computed: {
      qList() {
          return this.$store.getters.qList
      },
      changeMode() {
          return this.$store.getters.changeMode
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

</style>
