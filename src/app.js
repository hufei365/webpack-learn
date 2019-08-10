import { assert } from './utils.js';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from "vuex";
Vue.use(Vuex);

Vue.use(VueRouter);


// import App from './app.vue';

// new Vue({
//   el: '#app',
//   render: h=>h(App)
// })

import preact from 'preact';
const {h } = preact;
import data from './data';

import Quiz from './components/question/question';
class App extends Quiz {
	constructor(){
		super();
		this.data = data;
	}
}
preact.render(h(App), document.getElementById('app'));