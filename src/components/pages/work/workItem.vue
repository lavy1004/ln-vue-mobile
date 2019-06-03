<template>
    <div class="white_bg">
        <ul class="ulList type2" >
            <li v-show="id == index" v-for="(item, index) in wList"  :key="index">
                <div>
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
                    <div>
                        <p class="font_14 mb12">
                            <span class="mono_96">성함</span>
                            <span class="fr fw600">{{item.orderList[0].name}}</span>
                        </p>
                        <p class="font_14 mb12">
                            <span class="mono_96">직급</span>
                            <span class="fr fw600">{{item.orderList[0].position}}</span>
                        </p>
                        <p class="font_14">
                            <span class="mono_96">연락처</span>
                            <span class="fr fw600">{{item.orderList[0].mobile}}</span>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
/*eslint-disable */
export default {
    props:['wList'],
    data() {
        return {
            id: ''
        }
    },
    created() {
        
        this.id = this.$route.params.id
    }
}
</script>

<style>

</style>
