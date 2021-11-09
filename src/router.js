import Vue from 'vue'
import Router from 'vue-router'
import Page_Main from './views/Page_Main.vue'
import Page_HelloWorld from './components/HelloWorld.vue'
import Page_About from './views/Page_About.vue'
import Page_News from './views/Page_News.vue'
import Page_Gallery from './views/Page_Gallery.vue'
import News_Maincontents from './components/News_components/News_Maincontents.vue'
import News_20200101dmy from './components/News_components/News_20200101dmy.vue'
import News_20210202dmy from './components/News_components/News_20210202dmy.vue'
import Page_404 from './views/Page_404.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Page_Main,
			meta: { title: 'Home', desc: 'ディスクリプションを記述' }
		},
		{
			path: '/helloworld',
			name: 'helloworld',
			component: Page_HelloWorld,
		},
		{
			path: '/about',
			name: 'about',
			component: Page_About,
			meta: { title: 'About', desc: 'ディスクリプションを記述' }
		},
		{
			path: '/gallery',
			name: 'gallery',
			component: Page_Gallery,
			meta: { title: 'Gallery', desc: 'ディスクリプションを記述' }
		},
		{
			path: '/news',
			component: Page_News,
			children: [
				{
					path: '',
					component: News_Maincontents,
					name: 'news',
					meta: { title: 'News', desc: 'ディスクリプションを記述' },
				},
				{
					path: '/news/20200101dmy',
					component: News_20200101dmy,
					name: '20200101dmy',
					meta: { title: '2020年(仮)のテストニュースです。', desc: '2020年(仮)のテストニュースです。' }
				},
				{
					path: '/news/20210202dmy',
					component: News_20210202dmy,
					name: '20210202dmy',
					meta: { title: '2021年(仮)のテストニュースです。', desc: '2021年(仮)のテストニュースです。' }
				}
			]
		},
		{
			path: '*',
			name: 'NotFound',
			component: Page_404,
			meta: { title: 'Error_404NotFound', desc: '申し訳ありません。お探しのページは見つかりませんでした。' }
		},
	],
	scrollBehavior () {
		return new Promise(() => {
		setTimeout(() => {
			window.scroll({top: 0, behavior: 'instant'});
		}, 400)
		})
	},
})