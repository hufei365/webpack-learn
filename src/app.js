import { assert } from './utils.js';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
import Foo from './components/foo';
import Bar from './components/bar';
import Son from './components/son';
// import(/* webpackChunkName: "son" */ './components/son').then(Son=>{
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  {
    path: '/bar', component: Bar, children: [
      {
        path: 'son',
        component: Son
      }
    ]
  },
  { path: '/foo', component: Foo }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// }, e=>{});



async function getComponent() {
  var element = document.createElement('div');
  const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});


async function getComponent1() {
  const _ = await import(/* webpackChunkName: "dimport" */ './dimport.js');
  return _;
}

getComponent1().then(d=>{
  console.log(d, 'xxxxxx');
})