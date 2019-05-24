<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap">
      <!-- container -->
      <div id="container" class="mediaquery com_bg">
        <div id="header" class="custom_bg fixed" >
            <div class="header_card">
              <button type="button" class="btn1 only prev" @click="goBack"><span class="ico prev_wh">이전</span></button>
              <p class="header_text font_20">문의사항</p>
            </div>
        </div>
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner fixed_pd white_bg height100">
                <div>
                    <ul class="ulList type1" >
                      <li  v-for="(item, index) in wList" :key="index" :class="{ 'finish' : item.result }">
                        <!-- Result가 false 라면 클릭안되는 리스트-->
                        <div v-if="item.result" >
                          <p class="font_16 fwb600" :class="{ 'act' : item.active }">{{item.title}}</p>
                          <p>
                            <span>{{item.year}}</span>년
                            <span>{{item.month}}</span>월
                            <span>{{item.day}}</span>일
                          </p>
                          <span v-show="item.result" class="finish-st">작업완료</span>
                        </div>
                        <div v-else class="cur" @click="goNext('workDetail')">
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

}
</script>

<style>

</style>
