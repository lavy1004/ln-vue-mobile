<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap">
      <!-- container -->
      <div id="container" class="mediaquery com_bg">
        <div id="header" class="custom_bg fixed" >
            <div class="header_card">
              <button type="button" class="btn1 only prev" @click="goBack"><span class="ico prev_wh">이전</span></button>
              <p class="header_text font_20">작업요청서</p>
            </div>
        </div>
        <div id="content" class="list white_bg">
          <div class="cell">
            <div class="inner fixed_pd white_bg">
              <!-- popup -->
              <ln-popup v-if="showConfirm" title="작업 완료확인서" cancelInput="취소" confirmInput="확인" @cancelClick="cancel" @confirmClick="confirm">
                  <!-- popup body -->
                  <div class="ly-cnt">
                      <p>작업완료확인서</p>	
                  </div>
              </ln-popup>
                <div>
                    <ul class="ulList type1" >
                      <li v-for="(item, index) in wList" :key="index" :class="{ 'finish' : item.result }">
                        <!-- Result가 false 라면 클릭안되는 리스트-->
                        <div v-if="item.result" >
                          <p class="font_16 fw600 finish-p" :class="{ 'act' : item.active }">{{item.title}}</p>
                          <p>
                            <span>{{item.year}}</span>년
                            <span>{{item.month}}</span>월
                            <span>{{item.day}}</span>일
                          </p>
                          <span v-show="item.result"
                                class="finish-spn" 
                                :class="item.pop ? 'pop-ok' : '' "
                                @click="showPop"
                          >작업 완료확인서</span>
                        </div>
                        <div v-else class="">
                          <p class="font_16 fw600 cur" :class="{ 'act' : item.active }"  @click="goNext(item.id)">{{item.title}}</p>
                          <p>
                            <span>{{item.year}}</span>년
                            <span>{{item.month}}</span>월
                            <span>{{item.day}}</span>일
                          </p>
                          <span v-show="item.result" class="finish-spn">작업 완료확인서</span>
                        </div>
                      </li>
                    </ul>
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
        <!-- //contents -->
        
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
      showConfirm: false
    }
  },
  created() {
  },
  computed: {
    wList () {
      return this.$store.getters.wList;
    }
  },
  methods: {
    goNext (nextid) {
      this.$router.push({path :`workDetail/${nextid}`, params: {nextid : nextid}})
    },
    showPop() {
      this.showConfirm = true
    },
    cancel () {
      this.showConfirm = false
    },
    confirm () {
      this.showConfirm = false
    }
  }
}
</script>

<style scoped lang="css">
  p{
    margin-bottom:0 !important;
  }
</style>
