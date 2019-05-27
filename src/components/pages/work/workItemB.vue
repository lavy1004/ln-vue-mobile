<template>
    <div class="white_bg">
        <ul class="ulList type2" >
            <li  v-for="(item, index) in reqList" :key="index">
                <!-- floor가 false일 경우 안보임 -->
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
                <!-- //floor가 false일 경우 안보임 -->
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
    data() {
        return {
            reqList : [
                {wax : '5,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
            ],
            floor: true
        }
    }
}
</script>

<style>

</style>
