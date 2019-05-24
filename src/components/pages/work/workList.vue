<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap">
      <!-- container -->
      <div id="container" class="mediaquery gray_bg">
        <div id="header" class="custom_bg fixed" >
            <div class="header_card">
              <button type="button" class="btn1 only prev" @click="goBack"><span class="ico prev_wh">이전</span></button>
              <p class="header_text font_20">작업요청서</p>
            </div>
        </div>
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner fixed_pd white_bg height100">
                <div>
                    <ul class="ulList type1" >
                      <li  v-for="(item, index) in wList" :key="index">
                        <!-- Result가 false 라면 클릭안되는 리스트-->
                        <div v-if="item.result" :class="{ 'finish' : item.result }">
                          <p class="font_16 fwb600" :class="{ 'act' : item.active }">{{item.title}}</p>
                          <p>
                            <span>{{item.year}}</span>년
                            <span>{{item.month}}</span>월
                            <span>{{item.day}}</span>일
                          </p>
                          <span v-show="item.result" class="finish-st">작업완료</span>
                        </div>
                        <div v-else :class="{ 'finish' : item.result }">
                          <p class="font_16 fwb600" :class="{ 'act' : item.active }">{{item.title}}</p>
                          <p>
                            <span>{{item.year}}</span>년
                            <span>{{item.month}}</span>월
                            <span>{{item.day}}</span>일
                          </p>
                          <span v-show="item.result" class="finish-st">작업완료</span>
                        </div>
                      </li>
                    </ul>
                    
                </div>
                <div class="overflow-auto c-flex">
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                  ></b-pagination> 

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
/*eslint-disable */
  data () {
    return {
      rows: 100,
      perPage: 10,
      currentPage: 1,
      wList: [
        {title: '익스프레스 강남점 작업요청', year: 2019, month: 4, day: 1, active: false, result: false},
        {title: '익스프레스 역삼점 작업요청', year: 2019, month: 3, day: 31, active: false, result: false},
        {title: '익스프레스 선릉점 작업요청', year: 2019, month: 3, day: 20, active: false, result: false},
        {title: '익스프레스 여의도점 작업요청', year: 2019, month: 3, day: 12, active: false, result: false},
        {title: '익스프레스 부천점 작업요청', year: 2019, month: 3, day: 12, active: true, result: false},
        {title: '익스프레스 목동점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true},
        {title: '익스프레스 부평점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true},
        {title: '익스프레스 영등포점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true},
        {title: '익스프레스 대림점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true},
        {title: '익스프레스 가로수길점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true},
      ],
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
