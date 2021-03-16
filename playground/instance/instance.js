function Person(name, job) {
    this.name = name;
    this.job = job;
}

const p = new Person('Kewon', 'developer');

//------------------ --------


var vm = new Vue({
    el: '#app',
    data: {
        message: 'hi'
    },
    methods: {

    },
    created: function() {
        
    }
});

// function Vue() {
//     this.logText = function() {
//         console.log('hello');
//     }
// }

// var vm = new Vue();
// vm.logText();