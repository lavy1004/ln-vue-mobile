<template>
    <div class="white_bg">
        <ul class="ulList type2" >
            <!-- wList의 id값 wList[0] 수정필요 -->
            <li  v-for="(item, index) in wList[0].priceList" :key="index">
                <div>
                    <p class="font_14 mb12">
                        <span class="mono_96">작업일</span>
                        <span class="fr fw600 custom_clr">
                            <span class="">{{item.orderList[0].order_time}}</span>
                        </span>
                    </p>
                    <p class="font_14">
                        <span class="mono_96">점포</span>
                        <span class="fr ">
                            <span>익스프레스</span>
                            <span class="fw600">{{item.orderList[0].store_name}}</span>
                        </span>
                    </p>
                </div>
                <p class="hr"></p>
                <div v-if="floor">
                    <p class="font_16 fw600 custom_clr mb12">
                        바닥작업
                    </p>
                    <p class="font_14 mb12">
                        <span class="">왁스</span>
                        <span class="fr ">
                            <span class="font_12">평당</span>
                            <span class="fw600">{{item.wax}}원</span>
                        </span>
                    </p>
                    <p class="font_14">
                        <span class="">평수</span>
                        <span class="fr fw600">{{item.size}}평</span>
                    </p>
                </div>
                <div>
                    <p class="font_16 fw600 custom_clr mb12 mt24">
                        일반작업 | 개별
                    </p>
                    <p class="font_14 mb12">
                        <span class="">간판 2개(평면)</span>
                        <span class="fr fw600">{{item.neonsign}}원</span>
                    </p>
                    <p class="font_14 mb12">
                        <span class="">냉장매대 7개</span>
                        <span class="fr fw600">{{item.freeze}}원</span>
                    </p>
                    <p class="font_14">
                        <span class="">형광등 24개</span>
                        <span class="fr fw600">{{item.light}}원</span>
                    </p>
                </div>
                <div>
                    <p class="font_16 fw600 custom_clr mb12 mt24">
                        일반작업 | 개별
                    </p>
                    <p class="font_14">
                        <span class="">어닝프레임</span>
                        <span class="fr fw600">{{item.tent}}원</span>
                    </p>
                </div>
                <p class="hr"></p>
                <div>
                    <p class="font_16">
                        <span class="fw600">최종 예상 견적</span>
                        <span class="fr fw600 custom_clr">{{item.total}}원</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
/*eslint-disable */
export default {
    props: ['wList'], //배열에다가 문자열로 받아옴.
    data() {
        return {
            floor: true
        }
    }
}
</script>

<style>

</style>
