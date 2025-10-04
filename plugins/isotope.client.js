import Isotope from "isotope-layout/js/isotope";

export default defineNuxtPlugin(nuxtApp => {
	return {
	  provide: {
		Isotope,
	  }
	}
  })
