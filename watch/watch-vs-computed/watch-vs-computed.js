/**
 * 공식문서 : https://kr.vuejs.org/v2/guide/computed.html#computed-%EC%86%8D%EC%84%B1-vs-watch-%EC%86%8D%EC%84%B1
 * 참고문서 : https://ui.toast.com/weekly-pick/ko_20190307
 */

new Vue({
    el: '#app',
    data: {
        num: 10,
    }, 
    computed: { 
    /**
     * computed의 경우 캐싱 등 여러가지 튜닝이 되있어서
     * 기본적인 계신식 등을 만드는데 사용한다.
     */
        doubleNum: function() {
            return this.num * 2;
        }
    },
    watch: {
    /**
     * watch의 경우 computed에 비해 무거운 로직을 만드는데에
     * 사용된다.
     */
        num: function(newValue, oldValue) {
            this.fetchUserBuNumber(newValue, oldValue);
        }
    },
    methods: {
        fetchUserBuNumber: function(newValue, oldValue) {
            console.log(newValue);
            console.log(oldValue);
        }
    }
})