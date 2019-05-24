<template>
    <div class="white_bg">
        <ul class="ulList type2" >
            <li  v-for="(item, index) in reqList" :key="index">
                <div>
                    <p class="font_14 mb12">
                        <span class="mono_96">작업일</span>
                        <span class="fr fwb600 custom_clr">
                            <span class="">{{item.order_time}}</span>
                        </span>
                    </p>
                    <p class="font_14">
                        <span class="mono_96">점포</span>
                        <span class="fr ">
                            <span>익스프레스</span>
                            <span class="fwb600">{{item.store_name}}</span>
                        </span>
                    </p>
                </div>
                <p class="hr"></p>
                <div>
                    <p class="font_14 mb12">
                        <span class="mono_96">성함</span>
                        <span class="fr fwb600">{{item.name}}</span>
                    </p>
                    <p class="font_14 mb12">
                        <span class="mono_96">직급</span>
                        <span class="fr fwb600">{{item.position}}</span>
                    </p>
                    <p class="font_14">
                        <span class="mono_96">연락처</span>
                        <span class="fr fwb600">{{item.mobile}}</span>
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
                {order_time : '2019년 4월 30일 화요일', store_name: '강남지점 직영점', name: '유재석', position: '매니저', mobile: '01012345678' }
            ]
        }
    }
}
</script>

<style>

</style>
