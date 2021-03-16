/**
 * Component
 * 
 * 화면의 영역을 영역별로 코드로 관리하는 것을 Component라 이해하면 됨
 * 
 * 재사용성이 중점
 */

/**
 * 전역 Component
 * 
 * Vue.component('Component Name', Component Content);
 */
Vue.component('app-header', {
    template: '<h1>Header</h1>',
});

// Vue.component('app-selector', {
//     template: '<div>Selector</div>'
// })

// ---------------------------------

/**
 * 지역 Component
 * 
 * new Vue({
 *     el: '',
 *     components: {
 *         'component Name': componsnt Content, 
 *         (...)
 *     }
 * })
 */
// var appHeader = {
//     template: '<h1>Header</h1>'
// }

var appSelector = {
    template: '<div>Selector</div>'
}

var appFooter = {
    template: '<footer>Footer</footer>'
}

new Vue({
    el: '#app',
    components: {
        'app-selector': appSelector,
        'app-footer': appFooter,
    }
})

/**
 * 지역 컴포넌트는 하위에 어떤 컴포넌트가 있는지 알 수 있다.
 */

//------------------------------------------

/**
 * 컴포넌트와 인스턴스와의 관계
 * 
 * 전역 컴포넌트의 경우 따로 등록할 필요없이 등록된다.
 * 지역 컴포넌트의 경우 인스턴스를 생성할 때 마다 등록해야한다.
 */

new Vue({
   el: '#app2',
   components: {
    'app-footer': appFooter,
   }
})