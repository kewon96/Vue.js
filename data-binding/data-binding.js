new Vue({
    el: '#app',
    data: {
        number: 10,
        uuid: 'n1',
    },
    computed: {
        doubleNumber: function() {
            return this.number * 2;
        }
    }
})