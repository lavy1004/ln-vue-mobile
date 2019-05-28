<template>
    <div class="white_bg">
        <ul class="ulList type2 mb0" >
            <li class="pd-qna">
                <div>
                    <p class="font_16 fw600 mb8">
                        {{qList[0].title}}
                    </p>
                    <p class="font_14">
                        {{qList[0].date}}
                    </p>
                </div>
                <p class="hr"></p>
                <div>
                    <p class="font_16 mb32">
                        안녕하세요. 강남점 ooo입니다. 다름이아니라 저희가 이번에 청소를 예약하려고하는데 어닝프레임과 유리의 차이를 알고싶습니다. <br/>감사합니다.
                    </p>
                    <p class="font_14 mb24" style="background-color:#f0f0f0;padding:12px 16px;">
                        <span class="font_16 fw600 mr12">연락처</span>
                        <span>01012345678</span>
                    </p>
                </div>
                <div v-if="qList[0].qatype > 0">
                    <p>
                        <span><img src="@/assets/img/ico/ic-arrow.png" alt=""></span>
                        <span><img src="@/assets/img/ico/ic-reply.png" alt=""></span>
                        <span class="font_16 fw600">답변완료</span>
                    </p>
                    <p class="pl18"><span class="font_14">{{qList[0].date}}</span></p>
                    <p class="hr"></p>
                    <p class="font_16">안녕하세요. 강남점 ooo님 담당자 xxx입니다.<br/>유리와 어닝프레임의 차이점을 문자로 안내드렸습니다!<br/> 많은 도움 되셨길 바랍니다. 감사합니다.</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
/*eslint-disable */
export default {
  props: {
    // result //아래 qList는 result값을 받아온데이터를 하드코딩해놓은것 데이터연동시 수정해야함
  },
  data () {
    return {
      qList: [
        {title: '강남점, 작업관련 문의', date: '2019. 04. 08', qatype: 1, id:1}
      ],
      
    }
  }
}
</script>

<style>

</style>
