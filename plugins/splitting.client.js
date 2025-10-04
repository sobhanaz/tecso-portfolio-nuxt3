import Splitting from "splitting";

// export default defineNuxtPlugin((nuxtApp) => {
// 	nuxtApp.vueApp.use(Splitting)
	
// })

export default defineNuxtPlugin(nuxtApp => {
	return {
	  provide: {
		Splitting,
	  }
	}
  })