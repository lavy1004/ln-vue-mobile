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
                id: 0, title: '익스프레스 강남점 작업요청', year: 2019, month: 4, day: 1, active: false, result: false,
                orderList : [
                    {order_time : '2019년 4월 30일 화요일', store_name: '강남지점 직영점', name: '유재석', position: '매니저', mobile: '01012345678' }
                ],
                priceList : [
                    {wax : '5,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
                ]
            },
            {id: 1, title: '익스프레스 역삼점 작업요청', year: 2019, month: 3, day: 31, active: false, result: false,
                orderList : [
                    {order_time : '2019년 4월 29일 월요일', store_name: '역삼지점 직영점', name: '하하', position: '스탭', mobile: '01012345678' }
                ],
                priceList : [
                    {wax : '5,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
                ]
            },
            {id: 2, title: '익스프레스 선릉점 작업요청', year: 2019, month: 3, day: 20, active: false, result: false,
                orderList : [
                    {order_time : '2019년 4월 29일 월요일', store_name: '역삼지점 직영점', name: '박명수', position: '스탭', mobile: '01012345678' }
                ],
                priceList : [
                    {wax : '5,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
                ]
            },
            {id: 3, title: '익스프레스 여의도점 작업요청', year: 2019, month: 3, day: 12, active: false, result: false,
                orderList : [
                    {order_time : '2019년 4월 29일 월요일', store_name: '역삼지점 직영점', name: '정준하', position: '스탭', mobile: '01012345678' }
                ],
                priceList : [
                    {wax : '5,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
                ]
            },
            {id: 4, title: '익스프레스 부천점 작업요청', year: 2019, month: 3, day: 12, active: true, result: false,
                orderList : [
                    {order_time : '2019년 4월 29일 월요일', store_name: '역삼지점 직영점', name: '하하', position: '스탭', mobile: '01012345678' }
                ],
                priceList : [
                    {wax : '5,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
                ]
            },
            {id: 5, title: '익스프레스 목동점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true,
            orderList : [
                {order_time : '2019년 4월 29일 월요일', store_name: '역삼지점 직영점', name: '하하', position: '스탭', mobile: '01012345678' }
            ],
            priceList : [
                {wax : '5,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
            ]
            },
            {id: 6, title: '익스프레스 부평점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true,
            orderList : [
                {order_time : '2019년 4월 29일 월요일', store_name: '역삼지점 직영점', name: '하하', position: '스탭', mobile: '01012345678' }
            ],
            priceList : [
                {wax : '5,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
            ]
            },
            {id: 7, title: '익스프레스 영등포점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true,
            orderList : [
                {order_time : '2019년 4월 29일 월요일', store_name: '역삼지점 직영점', name: '하하', position: '스탭', mobile: '01012345678' }
            ],
            priceList : [
                {wax : '5,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
            ]
            },
            {id: 8, title: '익스프레스 대림점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true,
            orderList : [
                {order_time : '2019년 4월 29일 월요일', store_name: '역삼지점 직영점', name: '하하', position: '스탭', mobile: '01012345678' }
            ],
            priceList : [
                {wax : '5,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
            ]
            },
            {id: 9, title: '익스프레스 가로수길점 작업요청', year: 2019, month: 2, day: 27, active: false, result: true,
            orderList : [
                {order_time : '2019년 4월 29일 월요일', store_name: '역삼지점 직영점', name: '하하', position: '스탭', mobile: '01012345678' }
            ],
            priceList : [
                {wax : '5,000', size: '68', neonsign: '300,000', freeze: '350,000', light: '720,000', tent: '50,000', total: '1,760,000' }
            ]
            },
          ],
          qList: [
            {id: 0, title: '강남점, 작업관련 문의', date: '2019. 04. 08', result: false, qatype: 0},
            {id: 1, title: '역삼점, 견적관련 문의', date: '2019. 04. 08', result: false, qatype: 0},
            {id: 2, title: '선릉점, 기타 문의', date: '2019. 04. 08', result: true, qatype: 0,
            reply: '안녕하세요. 선릉점 ooo님 담당자 xxx입니다. 유리와 어닝프레임의 차이점을 문자로 안내드렸습니다! 많은 도움 되셨길 바랍니다. 감사합니다.'}, // 0이면 질문이고 qatype 1부터는 답변의갯수 질문에 id 값도 있으면 더좋다 연계하기위해
            {id: 3, title: '답변1', date: '2019. 04. 08', result: true, qatype: 1, 
            reply: '안녕하세요. 선릉점 ooo님 담당자 xxx입니다. 유리와 어닝프레임의 차이점을 문자로 안내드렸습니다! 많은 도움 되셨길 바랍니다. 감사합니다.'},
            {id: 4, title: '여의도점, 작업관련 문의', date: '2019. 04. 08', result: true, qatype: 0,
            reply: '안녕하세요. 여의도점 ooo님 담당자 xxx입니다. 유리와 어닝프레임의 차이점을 문자로 안내드렸습니다! 많은 도움 되셨길 바랍니다. 감사합니다.'},
            {id: 5, title: '답변2, 기타 문의', date: '2019. 04. 08', result: true, qatype: 1,
            reply: '안녕하세요. 여의도점 ooo님 담당자 xxx입니다. 유리와 어닝프레임의 차이점을 문자로 안내드렸습니다! 많은 도움 되셨길 바랍니다. 감사합니다.'}
          ],
          mode: ''
    },
    getters: {
        wList: state => state.wList,
        qList: state => state.qList,
        changeMode: state => state.mode
    },
    mutations: {
        changeMode(state, mode) {
            state.mode = mode
        }
    },
    actions: {
        test(context, params){
            return new Promise((resolve,reject) => {
                axios({
                    method: 'get',
                    params: params,
                    url: api_url + 'test',
                    responseType: 'json'
                })
                .then(function(res) {
                    resolve(res.data)
                })
            })
        }
    }
})

export default store
