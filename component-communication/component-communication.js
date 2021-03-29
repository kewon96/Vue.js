/**
 * Component Communication
 * 
 * 컴포넌트간의 관계
 * 
 * 각각의 컴포넌트는 데이터를 각각 관리한다.
 * 그 데이터를 서로 공유하기 위해 상위 -> 하위는 props라는 속성, 하위 -> 상위는 이벤트를 발생시킨다.
 * 
 * 상위 컴포넌트에서 하위 컴포넌트에게 data(props)를 전송한 뒤
 * 상위 컴포넌트에서 데이터를 변경하면 하위 컴포넌트가 받은 데이터도 같이 변한다.
 */

// Props
var appHeader = {
    template: '<h1>{{ propsdata }}</h1>',
    props: ['propsdata']
}

var appContent = {
    template: '<div>{{ propsdata }}</div>',
    props: ['propsdata']
}

// new Vue({
//     el: '#app',
//     components: {
//         'app-header': appHeader,
//         'app-content': appContent
//     },
//     data: {
//         message: 'hi',
//         num: 10
//     }
// });

//-----------------------------------------------

// emit
var appHeader = {
    template: '<button v-on:click="passEvent">click me</button>',
    methods: {
        passEvent: function() {
            // 'pass'라는 메서드가 아래에서 올라왔을 때 component tag에서 받아서 'logText'라는 메서드를 실행
            this.$emit('pass');
        }
    }
}

var appContent = {
    template: '<button v-on:click="addNumber">add</button>',
    methods: {
        addNumber: function() {
            this.$emit('plus');
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
        message: 'hi',
        num: 10
    }, 
    methods: {
        logText: function() {
            console.log('hi');
        },
        plusOne: function() {
            this.num++;
            // OOP의 getter와 같음
            // 여기서의 this는 해당 object-data를 가리킴
            console.log(this.num); 

        }
    }
});




