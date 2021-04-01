new Vue({
    el: '#app',
    data: {
        users: [],
    },
    methods: {
        getData: function() {
            var vm = this;
            
            axios.get('https://jsonplaceholder.typicode.com/users/')
            .then(function(response) {
                console.log(response);
                // this.users = response.data; // 여기서 말하는 this는 data를 가리키지 않음
                vm.users = response.data;
            })
            .catch(function(error) {
                console.log(error);
            })
        }
    }
})