/**
 * 같은 Dept에서 데이터를 전달하기
 */

var appHeader = {
    template: '<div>{{ propsdata }}</div>',
    props: ['propsdata']
}

var appContent = {
    template: '<div>content<button v-on:click="passNum">pass</button></div>',
    methods: {
        passNum: function(event) {
            this.$emit('pass', 10);
        }
    }
}

new Vue({
    el: '#app',
    components: {
        'app-header': appHeader,
        'app-content': appContent
    },
    data: {
        num: 0
    },
    methods: {
        deliverNum: function(value) {
            // app-content에서 정의할 때 value는 암묵적으로 같이온다.
            this.num = value;
            this.num++
        }
    }
})