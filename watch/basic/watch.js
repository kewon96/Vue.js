new Vue({
    el: '#app',
    data: {
        num: 10,
    },
    watch: {
        // 데이터의 변화에 따라 특정 로직을 작동시킴
        num: function() {
            this.logText();
        }
    },
    methods: {
        addNum: function() {
            this.num = this.num + 1;
        },
        logText: function() {
            console.log(`changed ${this.num}`);
        }
    }
})