import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

// const api_url ="https://localhost:9999"
/*eslint-disable */
const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        wList: [
            {
                id: 0, title: '익스프레스 강남점 작업요청', year: 2019, month: 4, day: 1, active: false, result: false, completion: false,
                orderList : [
                    {order_time : '2019년 4월 30일 화요일', store_name: '강남지점 직영점', name: '유재석', position: '매니저', mobile: '01012345678' }
                ],
                priceList : [
                    {wax : '5,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
                ]
            },
            {id: 1, title: '익스프레스 역삼점 작업요청', year: 2019, month: 3, day: 31, active: false, result: false, completion: false,
                orderList : [
                    {order_time : '2019년 4월 29일 월요일', store_name: '역삼지점 직영점', name: '하하', position: '스탭', mobile: '01012345678' }
                ],
                priceList : [
                    {wax : '6,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
                ]
            },
            {id: 2, title: '익스프레스 선릉점 작업요청', year: 2019, month: 3, day: 20, active: false, result: false, completion: false,
                orderList : [
                    {order_time : '2019년 4월 29일 월요일', store_name: '선릉지점 직영점', name: '박명수', position: '스탭', mobile: '01012345678' }
                ],
                priceList : [
                    {wax : '7,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
                ]
            },
            {id: 3, title: '익스프레스 여의도점 작업요청', year: 2019, month: 3, day: 12, active: false, result: false, completion: false,
                orderList : [
                    {order_time : '2019년 4월 29일 월요일', store_name: '여의도지점 직영점', name: '정준하', position: '스탭', mobile: '01012345678' }
                ],
                priceList : [
                    {wax : '8,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
                ]
            },
            {id: 4, title: '익스프레스 부천점 작업요청', year: 2019, month: 3, day: 12, active: true, result: false, completion: false,
                orderList : [
                    {order_time : '2019년 4월 29일 월요일', store_name: '부천지점 직영점', name: '하하', position: '스탭', mobile: '01012345678' }
                ],
                priceList : [
                    {wax : '9,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
                ]
            },
            {id: 5, title: '익스프레스 목동점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true, completion: false,
            orderList : [
                {order_time : '2019년 4월 29일 월요일', store_name: '목동지점 직영점', name: '하하', position: '스탭', mobile: '01012345678' }
            ],
            priceList : [
                {wax : '10,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
            ]
            },
            {id: 6, title: '익스프레스 부평점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true, completion: true,
            orderList : [
                {order_time : '2019년 4월 29일 월요일', store_name: '부평지점 직영점', name: '하하', position: '스탭', mobile: '01012345678' }
            ],
            priceList : [
                {wax : '11,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
            ]
            },
            {id: 7, title: '익스프레스 영등포점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true, completion: true,
            orderList : [
                {order_time : '2019년 4월 29일 월요일', store_name: '영등포지점 직영점', name: '하하', position: '스탭', mobile: '01012345678' }
            ],
            priceList : [
                {wax : '12,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
            ]
            },
            {id: 8, title: '익스프레스 대림점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true, completion: true,
            orderList : [
                {order_time : '2019년 4월 29일 월요일', store_name: '대림지점 직영점', name: '하하', position: '스탭', mobile: '01012345678' }
            ],
            priceList : [
                {wax : '13,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
            ]
            },
            {id: 9, title: '익스프레스 가로수길점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true, completion: true,
            orderList : [
                {order_time : '2019년 4월 29일 월요일', store_name: '가로수길지점 직영점', name: '하하', position: '스탭', mobile: '01012345678' }
            ],
            priceList : [
                {wax : '14,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
            ]
            },
          ],
          qList: [
            {
                id: 0, title: '강남점, 작업관련 문의', qid: 0, aid: 1, date: '2019. 04. 08', result: false, qatype: 0, delete_YN: false,
                reply: '', ans_li: {}
            }, // result값이 boolean이어야함 라우터로 이동시 모든 값은 string으로 자동변환됨
            {
                id: 1, title: '역삼점, 견적관련 문의', qid: 1, aid: 2, date: '2019. 04. 08', result: false, qatype: 0, delete_YN: false,
                reply: '', ans_li: {} 
            },
            {
                id: 2, title: '선릉점, 기타 문의', qid: 2, aid: 0, date: '2019. 04. 08', result: false, qatype: 0, delete_YN: false,
                reply: '', ans_li: {} 
            }, // 0이면 질문이고 qatype 1부터는 답변의갯수 질문에 id 값도 있으면 더좋다 연계하기위해
            {
                id: 3, title: '여의도점, 작업관련 문의', qid:3, aid: 0, date: '2019. 04. 08', result: false, qatype: 0, delete_YN: false,
                reply: '', ans_li: {}
            },
          ],
          is_completion: '',
          mode: true,
    },
    getters: {
        wList: state => state.wList,
        qList: state => state.qList,
        changeMode: state => state.mode,
        changeResult: state => state.result,
        changeModenResult: state => state.result && state.mode,
        is_completion: state => state.is_completion,
        pushData: state => state.pushData,
    },
    mutations: {
        pushData(state, payload){
            // console.log(payload.id)
            // console.log(state.qList[payload.qid].ans_li)
            // console.log(state.qList[payload.qid])
            state.qList[payload.qid].ans_li = payload
            
        },
        changeMode(state, payload) {
            // console.log(payload)
            // console.log('mode')
            state.mode = payload
        },
        changeResult(state, payload) {
            // console.log('result')
            state.result = payload
        },
        changeModenResult(state, payload) {
            // console.log(payload,123)
            // console.log(state.qList[payload.id].result)
            state.qList[payload.id].result = payload.result
            state.mode = payload.mode
        },
        delete_YN(state, input) {
            state.qList[input.id].result = input.result
            state.qList[input.id].ans_li.delete_YN = input.delete_YN
            state.qList[input.id].ans_li.reply = input.reply
            state.qList[input.id].reply = input.reply
        },
        is_completion(state, payload){
            state.is_completion = payload
        }
    },
    actions: {
        // test(context, params){
        //     return new Promise((resolve,reject) => {
        //         axios({
        //             method: 'get',
        //             params: params,
        //             url: api_url + 'test',
        //             responseType: 'json'
        //         })
        //         .then(function(res) {
        //             resolve(res.data)
        //         })
        //     })
        // }
    }
})

export default store
