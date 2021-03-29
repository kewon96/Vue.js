var LoginComponent = {
    template: '<div>login</div>'
}

var MainComponent = {
    template: '<div>main</div>'
}

var router = new VueRouter({
    // 페이지의 라우팅 정보  / 어떤 url로 이동했을 때 어떤 페이지가 보여지는지
    routes: [
        // login 페이지
        {
            // 페이지의 url
            path: '/login',
            name: 'login',
            // 해당 url에서 표시될 컴포넌트
            component: LoginComponent
        },
        // main 페이지
        {
            path: '/main',
            name: 'main',
            component: MainComponent
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
});