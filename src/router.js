import Vue from 'vue'
import Router from 'vue-router'
import Page_Main from './views/Page_Main.vue'
import Page_HelloWorld from './components/HelloWorld.vue'
import Page_About from './views/Page_About.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Page_Main,
			//meta: { title: 'ページタイトル', desc: 'ディスクリプションを記述' }
		},
		{
			path: '/helloworld',
			name: 'about',
			component: Page_HelloWorld
		},
		{
			path: '/about',
			name: 'about',
			component: Page_About
		},
	]
})