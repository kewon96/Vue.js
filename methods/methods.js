new Vue({
    el: '#app',
    data: {
        beforeText: '',
        afterText: ''
    },
    methods: {
        showText: function() {
            return this.beforeText = this.afterText;
        },
        initText: function() {
            this.beforeText = '';
            this.afterText = '';
        }
    }
})