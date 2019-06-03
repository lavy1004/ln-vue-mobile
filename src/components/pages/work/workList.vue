<template>
<!-- eslint-disable -->
      <div>
        <div id="header" class="custom_bg fixed" >
            <div class="header_card">
              <button type="button" class="btn1 only prev" @click="goBack"><span class="ico prev_wh">이전</span></button>
              <p class="header_text font_20">작업요청서</p>
            </div>
        </div>
        <div id="content" class="list white_bg">
          <div class="cell">
            <div class="inner fixed_pd white_bg">
                <div>
                    <ul class="ulList type1" >
                      <li v-for="(item, index) in wList" :key="index" :class="{ 'finish' : item.result }">
                        <!-- Result가 false 라면 클릭안되는 리스트-->
                        <div v-if="item.result" >
                          <p class="font_16 fw600 cur finish-p" :class="{ 'act' : item.active }" @click="goNext(item.id)">{{item.title}}</p>
                          <p>
                            <span>{{item.year}}</span>년
                            <span>{{item.month}}</span>월
                            <span>{{item.day}}</span>일
                          </p>
                          <span v-show="item.result == true && item.completion == true"
                                class="finish-spn cur pop-ok"
                                @click="goNext_com(item.id)"
                          >작업 완료확인서</span>
                          <span v-show="item.result == true && item.completion == false"
                                class="finish-spn" 
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
    </div>
</template>

<script>
export default {
/*eslint-disable */
  data () {
    return {
      rows: 100,
      perPage: 10,
      currentPage: 1,
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
    goNext_com(nextid){
      this.$router.push({path :`workCompletion/${nextid}`, params: {nextid : nextid}})
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
