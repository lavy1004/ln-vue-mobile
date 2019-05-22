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
                <div >
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
        {title: '익스프레스 강남점 작업요청', year: 2019, month: 4, day: 1},
        {title: '익스프레스 역삼점 작업요청', year: 2019, month: 3, day: 31},
        {title: '익스프레스 선릉점 작업요청', year: 2019, month: 3, day: 20},
        {title: '익스프레스 여의도점 작업요청', year: 2019, month: 3, day: 12},
        {title: '익스프레스 부천점 작업요청', year: 2019, month: 3, day: 12}
      ],
      items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Mr', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  }
}
</script>

<style>

</style>
