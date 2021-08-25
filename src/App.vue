<template>
	<div id="app">
		<Loading />
		<BackgroundEffect />
		<Glmenu />
		<DrawerMenu />
		<TestComponent />
		<!--
		<div id="nav" class="tab-area-base">
			<ul class="tab-menu-base">
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/routing">Rounting Test</router-link></li>
				<li><router-link to="/about">About</router-link></li>
			</ul>
		</div>
		-->
		<router-view />
	</div>
</template>

<script>
	/*import HelloWorld from './components/HelloWorld.vue'*/
	import Loading from './components/Loading.vue'
	import BackgroundEffect from './components/BackgroundEffect.vue'
	import Glmenu from './components/GloMenu.vue'
	import DrawerMenu from './components/DrawerMenu.vue'
	import TestComponent from './components/TestComponent.vue'

	export default {
		name: 'App',
		components: {
			/*HelloWorld,*/
			BackgroundEffect,
			Loading,
			Glmenu,
			DrawerMenu,
			TestComponent,
		}
	}

</script>