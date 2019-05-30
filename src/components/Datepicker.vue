<template>
<!-- eslint-disable -->
<div>
    <div class="datepicker-container ">
        <button type="text"
                class="mu-btn gray_bg radi-0"
                :class="classDesign"
                :value="date_formatted"
                @click="showDatepicker">일정 수정</button>

        <input type="hidden"
                :id="id"
                :name="name"
                :value="date_raw">

        <datepicker-agenda :disable-passed-days="disablePassedDays"
                            :doubled="doubled"
                            :disabled-days="disabledDays"
                            :lang="lang"
                            :orientation="orientation"
                            :show="isVisible"
                            @change="selectDate"
                            @hide="hideDatePicker"
                            @cancel="cancelDateSelection">
        </datepicker-agenda>
    </div>
</div>
</template>

<style lang="scss">
    .datepicker-container {
        position: relative;
    }
    .datepicker-container button{
        &:hover{
            opacity:0.5;
            font-size:12px
        }
    }
</style>



<script>
/* eslint-disable */ 
import moment from 'moment';

import DatepickerAgenda from './DatepickerAgenda.vue';

export default {
    components: {
        'datepicker-agenda': DatepickerAgenda
    },
    props: {
        classDesign: { type: String, default: '' },
        disablePassedDays: { type: Boolean, default: false },
        disabledDays: { type: Array, default() { return [] } },
        doubled: { type: Boolean, default: false },
        format: { type: String, default: 'YYYY-MM-DD' },
        id: { type: String, default: 'vue-datepicker' },
        lang: { type: String, default: 'ko' },
        name: { type: String, default: 'datepicker' },
        orientation: { type: String, default: 'portrait' }
    },
    data() {
        return {
            date: '',
            isVisible: false
        };
    },
    computed: {
        date_formatted() {
            if (this.date) return this.date.format(this.format);
            return '';
        },
        date_raw() {
            if (this.date) return this.date.format('YYYY-MM-DD');
            return '';
        }
    },
    mounted() {
        moment.locale(this.lang);
    },
    methods: {
        selectDate(newDate) {
            this.date = newDate;
        },
        showDatepicker() {
            this.isVisible = true;
            setTimeout( () => document.addEventListener('click', this.hideDatePicker), 0);
        },
        hideDatePicker() {
            this.isVisible = false;
            document.removeEventListener('click', this.hideDatePicker);
        },
        cancelDateSelection() {
            this.hideDatePicker();
        }
    }
};
</script>