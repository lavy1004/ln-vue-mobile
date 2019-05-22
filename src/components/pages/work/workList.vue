<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap">
      <!-- container -->
      <div id="container" class="mediaquery">
        <div id="header" class="custom_bg fixed" >
            <div class="header_card">
              <button type="button" class="btn only prev" @click="goPrePage"><span class="ico prev_wh">이전</span></button>
              <p class="header_text font_20">작업요청서</p>
            </div>
        </div>
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner fixed_pd">
                <div class="">
                    <ul class="ulList type1">
                      <li class="" v-for="(item, index) in wList" :key="index">
                        <p class="font_16 fwb600">{{item.title}}</p>
                        <p>
                          <span>{{item.year}}</span>년
                          <span>{{item.month}}</span>월
                          <span>{{item.day}}</span>일
                        </p>
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
      wList: [
        {title: '익스프레스 강남점 작업요청', year: 2019, month: 4, day: 1},
        {title: '익스프레스 역삼점 작업요청', year: 2019, month: 3, day: 31},
        {title: '익스프레스 선릉점 작업요청', year: 2019, month: 3, day: 20},
        {title: '익스프레스 여의도점 작업요청', year: 2019, month: 3, day: 12},
        {title: '익스프레스 부천점 작업요청', year: 2019, month: 3, day: 12}
      ]
    }
  }
}
</script>

<style>

</style>
