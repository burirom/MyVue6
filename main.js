var router = new VueRouter({
  routes: [
    {
      path: '/user/:userid',
      name: 'user',
      component: {
        template: '<div>ユーザーIDは {{ $route.params.userId }}です。</div>'
      }
    }
  ]
})

var app = new Vue({
    router: router
}).$mount('#app')