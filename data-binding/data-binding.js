new Vue({
    el: '#app',
    data: {
        number: 10,
        uuid: 'abc1234',
        cName: 'text-bold',
        loading: true,
        message: '',
        checked: true,
    },
    computed: {
        doubleNumber: function() {
            return this.number * 2;
        },
        checkedConvert: function() {
            return this.checked ? 1 : 0;
        }

    }
})