// https://nuxt.com/docs/api/configuration/nuxt-config
import { addPlugin,createResolver,defineNuxtModule } from '@nuxt/kit'
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['@nuxt/image',"@nuxtjs/device"],
	app: {
		baseURL: '/',
		head: {
			title: 'Blackdsn',
			meta: [{ name: 'description',content: 'Blackdsn Nuxt-js Template' }],
			link: [{ rel: 'icon',type: 'image/x-icon',href: '/images/logo-32x32.png' }],
			script: [{ src: '/js/threejs.min.js',body: true,async: true,defer: true }],
		}
	},
	privateRuntimeConfig: { apiSecret: process.env.API_SECRET },
	image: {
		// provider: 'netlify',
		domains: [process.env.FRONTENDURL],
		formats: ['image/webp']
	},
	experimental: {
		payloadExtraction: false
	},
	nitro: {
		inlineDynamicImports: true,
		// preset: 'netlify_edge'
	},
	router: {
		options: { scrollBehaviorType: 'smooth' },
	},
	routeRules: {
		'/': { prerender: true },
		"/blog/**": { prerender: false },
		"/work/category/**": { prerender: false },
		"/main-demo?mode=dark": { prerender: false },
		"/main-demo?mode=light": { prerender: false },
		"/business?mode=dark": { prerender: false },
		"/business?mode=light": { prerender: false },
		"/architecture?mode=dark": { prerender: false },
		"/architecture?mode=light": { prerender: false },
		"/photographer?mode=dark": { prerender: false },
		"/photographer?mode=light": { prerender: false },
		"/personal?mode=dark": { prerender: false },
		"/personal?mode=light": { prerender: false },
		"/resume?mode=dark": { prerender: false },
		"/resume?mode=light": { prerender: false },
		"/resume/**": { prerender: false },
		"/metro-portfolio-1?mode=dark": { prerender: false },
		"/metro-portfolio-1?mode=light": { prerender: false },
		"/metro-portfolio-2?mode=dark": { prerender: false },
		"/metro-portfolio-2?mode=light": { prerender: false },
		"/portfolio/**": { prerender: false },
		"/slider/**": { prerender: false },
		"/carousel/**": { prerender: false },
		"": { prerender: false },
		"": { prerender: false },
		"": { prerender: false },

	},
	ssr: true,
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css',
		'@fancyapps/ui/dist/fancybox/fancybox.css',
		'@/assets/styles/style.scss'
	],
	plugins: [
		{ src: '@/plugins/fontawesome.js' },
		{ src: '@/plugins/splitting.client.js' },
		{ src: '@/plugins/isotope.client.js' }
	],
	vue: { compilerOptions: { isCustomElement: (tag) => /^(swiper|swiper-slide|swiper-container)$/.test(tag) } },
	vite: {
		optimizeDeps: {
			include: [
				"smooth-scrollbar",
				"@fancyapps/ui",
				"splitting",
				"flickr-justified-gallery",
				"@googlemaps/js-api-loader",
			]
		}
	},
	build: {
		transpile: [
			'@fortawesome/vue-fontawesome',
			'@fortawesome/fontawesome-svg-core',
			'@fortawesome/free-solid-svg-icons',
			'@fortawesome/free-brands-svg-icons',
		],
	},
	compatibilityDate: '2024-08-17',
})