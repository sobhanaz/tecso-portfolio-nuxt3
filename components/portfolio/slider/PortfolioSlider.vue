<script setup>
import { numberindex } from "@/hooks/plugin.js";
import { gsap, Expo } from "gsap";
// import dsnSplitting from "@/hooks/spltting.js";
import SliderPrev from "@/components/portfolio/slider/SliderPrev.vue";
import SliderNext from "@/components/portfolio/slider/SliderNext.vue";
import LinkLine from "@/components/links/LinkLine.vue";
import LinkDefualt from "@/components/links/LinkDefualt.vue";
const { $Splitting } = useNuxtApp();
const props = defineProps({
	data: {},
	setStyle: { type: String,default: "full-h" },
	contentStyle: { type: String,default: "center-center" },
	hasDescription: Boolean,
	linkLine: Boolean,
	linkDefualt: Boolean,
	webgel: Boolean,
	webGelOptions: {},
	displacement: String,
	direction: { type: String,default: "horizontal" },
	parallaxSwiper: {},
	swiperOptions: {},
});
const rootSlider = ref(null);
const mainSlider = ref(null);
const sliderContent = ref(null);
const swiperPagination = ref(null);
const prev = ref(null);
const next = ref(null);
const bg = ref(null);
const canvas = ref(null);
const store = reactive({ slideCurrent: 0,countSlides: 0 });
const tl = gsap.timeline();
defineExpose({ mainSlider });
const webgel_Displacement_Image = "images/displacement/8.jpg";
const styles = [
	{
		style: "full-h",
		direction: "horizontal",
		rootClass: "v-dark-head dsn-slider-width-circle",
		mainClass: "",
		swiperParallax: false,
		webgl: true,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "full-v",
		direction: "vertical",
		rootClass: "v-dark-head dsn-slider-width-circle ",
		mainClass: "",
		swiperParallax: false,
		webgl: true,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "full-parallax-h",
		direction: "horizontal",
		rootClass: "v-dark-head ",
		mainClass: "",
		swiperParallax: true,
		webgl: false,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "full-parallax-v",
		direction: "vertical",
		rootClass: "v-dark-head ",
		mainClass: "",
		swiperParallax: true,
		webgl: false,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "half-h",
		direction: "horizontal",
		rootClass: "v-dark-head-mobile half-right dsn-section-padding ",
		mainClass: "",
		swiperParallax: false,
		webgl: true,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "half-v",
		direction: "vertical",
		rootClass: "v-dark-head-mobile half-left dsn-section-padding ",
		mainClass: "",
		swiperParallax: false,
		webgl: true,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "half-parallax-h",
		direction: "horizontal",
		rootClass: "v-dark-head-mobile half-left dsn-section-padding ",
		mainClass: "",
		swiperParallax: true,
		webgl: false,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "half-parallax-v",
		direction: "vertical",
		rootClass: "v-dark-head-mobile half-right dsn-section-padding ",
		mainClass: "",
		swiperParallax: true,
		webgl: false,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "padding-h",
		direction: "horizontal",
		rootClass: "v-dark-head dsn-section-padding ",
		mainClass: "",
		swiperParallax: false,
		webgl: true,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "padding-v",
		direction: "vertical",
		rootClass: "v-dark-head dsn-section-padding ",
		mainClass: "",
		swiperParallax: false,
		webgl: true,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "padding-parallax-h",
		direction: "horizontal",
		rootClass: "v-dark-head dsn-section-padding ",
		mainClass: "",
		swiperParallax: true,
		webgl: false,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "padding-parallax-v",
		direction: "vertical",
		rootClass: "v-dark-head dsn-section-padding ",
		mainClass: "",
		swiperParallax: true,
		webgl: false,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
];
const contentStyle = [
	{
		cStyle: "center-center",
		contentClass: "align-items-center justify-content-center text-center",
		metaClass: "justify-content-center",
	},
	{
		cStyle: "container-center-center",
		contentClass:
			"dsn-container d-flex align-items-center justify-content-center text-center",
		metaClass: "justify-content-center",
	},
	{
		cStyle: "center-between",
		contentClass: "align-items-center",
		metaClass: "justify-content-between ",
	},
	{
		cStyle: "end-between",
		contentClass: "align-items-end",
		metaClass: "justify-content-between",
	},
];
const itemStyle = () => {
	if (!props.setStyle) {
		return styles[0];
	}
	const getStyle = styles.find((item) => item.style === props.setStyle);
	if (!getStyle) {
		return styles[0];
	}
	return getStyle;
};
const setContentStyle = () => {
	if (!props.contentStyle) return contentStyle[0];
	const getStyle = contentStyle.find((item) => item.cStyle === props.contentStyle);
	if (!getStyle) return contentStyle[0];
	return getStyle;
};
//--------------------------------------------------------------------------------------------
/**
 * Init Swiper
 *
 * @param swiper Swiper
 */
const initSlider = (swiper) => {
	swiper?.slides?.forEach((item) => {
		const video = item.querySelector(
			"swiper-slide:not(.swiper-slide-active) video"
		);
		if (video) video.pause();
	});
};
//--------------------------------------------------------------------------------------------
/**
 *
 * @param swiper
 * @returns {[*, *, any, any]}
 * get New Slide And Old Slide
 */
const getContent = (swiper) => {
	const oldNum = swiper.slides[swiper.previousIndex].getAttribute("data-dsn-id");
	const newNum = swiper.slides[swiper.activeIndex].getAttribute("data-dsn-id");
	const contentOld = sliderContent.value.querySelector(`[data-dsn-id="${oldNum}"]`);
	const contentNew = sliderContent.value.querySelector(`[data-dsn-id="${newNum}"]`);

	return [newNum,oldNum,contentNew,contentOld];
};
//--------------------------------------------------------------------------------------------
/**
 *
 * @param swiper
 * Pause And Play video
 */
const activeVideo = (swiper) => {
	const newVideo = swiper.slides[swiper.activeIndex].querySelector("video");
	const oldVideo = swiper.slides[swiper.previousIndex].querySelector("video");

	if (newVideo) newVideo.play();
	if (oldVideo) oldVideo.pause();
};
//--------------------------------------------------------------------------------------------
/**
 *
 * @param newContent
 * @param oldContent
 *
 */

//--------------------------------------------------------------------------------------------
const setPrev = () => {
	const id = mainSlider.value.swiper.activeIndex;
	const dataLength = mainSlider.value.swiper.slides.length - 1;
	if (id == dataLength) {
		if (!prev.value) return
		return prev.value.prevSlider.swiper.slideTo(Number(id) - 1);
	}

	if (id < dataLength && id != 0) {
		if (!prev.value) return
		return prev.value.prevSlider.swiper.slideTo(Number(id) - 1);
	}
	if (id == 0) {
		if (!prev.value) return
		return prev.value.prevSlider.swiper.slideTo(dataLength);
	}
	if (!prev.value) return
	return prev.value.prevSlider.swiper.slideTo(id);
};
const setNext = () => {
	const id = mainSlider.value.swiper.activeIndex;
	const dataLength = mainSlider.value.swiper.slides.length - 1;

	if (id > 0 && id != dataLength) {
		if (!next.value) return
		return next.value.nextSlider.swiper.slideTo(Number(id) + 1);
	}
	if (id > 0 && id == dataLength) {
		if (!next.value) return
		return next.value.nextSlider.swiper.slideTo(0);
	}
	if (id == 0) {
		if (!next.value) return
		return next.value.nextSlider.swiper.slideTo(1);
	}
	if (!next.value) return
	return next.value.nextSlider.swiper.slideTo(Number(id));
};
//--------------------------------------------------------------------------------------------
/**
 * Event When Slide Change
 * @param swiper
 */
const slideChange = (swiper) => {
	if (swiper.activeIndex === store.slideCurrent) return;

	const [newNum,oldNum,newContent,oldContent] = getContent(swiper);
	const [oldTitle,newTitle] = [gsap.utils.selector(oldContent)(".title span .char"),gsap.utils.selector(newContent)(".title span .char"),];

	const isRight = oldNum < newNum;
	const animate = {
		show: {
			autoAlpha: 1,
			y: 0,
			stagger: { amount: 0.3,from: "center",},
			ease: "back.out(4)",
			rotation: 0,
			scale: 1,
			yoyo: true,
		},
		hide: {
			autoAlpha: 0,
			y: isRight ? "-25%" : "25%",
			stagger: { amount: 0.3,from: "center",},
			ease: "back.in(4)",
			yoyo: true,
			rotation: 8,
			scale: 1.1,
		},
	};
	newContent.classList.remove("dsn-active-animate");
	oldContent.classList.add("dsn-active-animate");

	if (swiper.dsnOnChange)
		swiper.dsnOnChange(newNum,oldNum,newContent,oldContent);
	activeVideo(swiper);
	tl.progress(1);

	oldContent.classList.remove("dsn-active-animate");
	tl.fromTo(oldTitle,0.4,animate.show,animate.hide)
		.call(() => {
			oldContent.classList.remove("dsn-active");
			newContent.classList.add("dsn-active");
			newContent.classList.add("dsn-active-animate");
		})
		.fromTo(newTitle,0.8,animate.hide,animate.show,"-=.005");

	setPrev();
	setNext();
};
//############################################################################################
/**
 *
 * @param props {
 *     {
 *     canvas : HTMLCanvasElement | null,
 *     displacement?: string,
 *     data?: any[]  | undefined,
 *     intensity?: number ,
 *     direction?: "vertical" | "horzintal" | string | undefined,
 *         onComplete?: void | undefined,
 *         speedIn?: number,
 *         easing?: any,
 *         parent :HTMLDivElement,
 *         sliderSwiper :swiper | any
 *
 *     }
 * }
 */
// const displacementimg = "~/assets/images/displacement/8.jpg"
const webGelTransition = (props) => {
	if (!props.canvas) return false;
	const vertex = `
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`;
	const {
		displacement = webgel_Displacement_Image,
		data = [],
		intensity = 1,
		direction,
		onComplete,
		speedIn = 1.6,
		easing = Expo.easeOut,
		parent,
		sliderSwiper,
	} = props;
	const $this = {
		scene: undefined,
		width: undefined,
		height: undefined,
		ratio: undefined,
		video: false,
		renderer: undefined,
		camera: undefined,
		manager: undefined,
		loader: undefined,
		disp: undefined,
		allImgs: [],
		mat: undefined,
		geometry: undefined,
		plane: undefined,
		animate: undefined,
		destroyed: false,
		current: 0,
		imageAspect: undefined,
		changeTo: undefined,
	};
	/**
	 *
	 * @returns {Promise<WebGLRenderer>}
	 */
	const getRenderer = async () => {
		$this.ratio = window.devicePixelRatio;
		// low-power || high-performance || default
		return new THREE.WebGLRenderer({
			canvas: props.canvas,
			powerPreference: "default",
			antialias: !1,
			alpha: true,
		});
	};
	/**
	 *
	 * @param src {string | undefined}
	 * @param $index {number | undefined}
	 */
	const video = (src, $index) => {
		let dImg = new THREE.VideoTexture(src);
		dImg.magFilter = THREE.LinearFilter;
		dImg.minFilter = THREE.LinearFilter;
		dImg.anisotropy = $this.renderer.capabilities.getMaxAnisotropy();
		$this.allImgs[$index] = dImg;
	};

	/**
	 *
	 * @param src {string | undefined}
	 * @param $index {number | undefined}
	 */
	const image = (src, $index) => {
		const dImg = $this.loader.load(src);
		dImg.magFilter = THREE.LinearFilter;
		dImg.minFilter = THREE.LinearFilter;
		dImg.anisotropy = $this.renderer.capabilities.getMaxAnisotropy();
		$this.allImgs[$index] = dImg;
	};

	/**
	 *
	 * @param direction {"horizontal" | string}
	 *
	 * @return string
	 */
	const getFragment = (direction) => {
		let dir = "";
		dir =
			direction === "horizontal"
				? ` vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
            vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);

            `
				: `vec2 distortedPosition = vec2(uv.x, uv.y - dispFactor * (disp.r*effectFactor));
					vec2 distortedPosition2 = vec2(uv.x, uv.y + (1.0 - dispFactor) * (disp.r*effectFactor));`;

		return `
        varying vec2 vUv;
        uniform sampler2D texture1;
        uniform sampler2D texture2;
        uniform sampler2D disp;

        uniform float dispFactor;
        uniform float effectFactor;
		uniform vec4 resolution;
        void main() {
            vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
            vec4 disp = texture2D(disp, uv);
            ${dir}
            vec4 _texture = texture2D(texture1, distortedPosition);
            vec4 _texture2 = texture2D(texture2, distortedPosition2);
            vec4 finalTexture = mix(_texture, _texture2, dispFactor);
            gl_FragColor = finalTexture;
        }
    `;
	};

	/**
	 *
	 */
	const resize = () => {
		if (!$this.allImgs[sliderSwiper.swiper.activeIndex]) return;
		const image = $this.allImgs[sliderSwiper.swiper.activeIndex].image;
		$this.width = parent.offsetWidth;
		$this.height = parent.offsetHeight;
		$this.renderer.setSize($this.width, $this.height);
		$this.camera.aspect = $this.width / $this.height;
		$this.imageAspect = image.height / image.width;
		let a1;
		let a2;
		if ($this.height / $this.width > $this.imageAspect) {
			a1 = ($this.width / $this.height) * $this.imageAspect;
			a2 = 1;
		} else {
			a1 = 1;
			a2 = $this.height / $this.width / $this.imageAspect;
		}
		const dist = $this.camera.position.z;
		const height = 1;
		$this.camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));
		$this.plane.scale.x = $this.camera.aspect;
		$this.plane.scale.y = 1;
		gsap.to($this.mat.uniforms.resolution.value, 0.1, {
			x: $this.width,
			y: $this.height,
			z: a1,
			w: a2,
			yoyo: true,
			onUpdate: () => {
				$this.camera.updateProjectionMatrix();
				$this.animate();
			},
			ease: "none",
		});
	};

	/**
	 *
	 */
	const destroy = () => {
		$this.destroyed = true;
		window.removeEventListener("resize", resize);
		$this.renderer.forceContextLoss();
		$this.renderer.dispose();
		$this.renderer = null;
		$this.manager = null;
		$this.video = null;
		$this.geometry.dispose();
		$this.geometry = null;
		$this.mat.dispose();
		$this.mat = null;
		$this.plane = null;
		$this.loader = null;
		$this.ratio = null;
		$this.scene.dispose();
		$this.scene = null;
		$this.width = $this.height = $this.imageAspect = null;
	};

	/**
	 *
	 * @param current
	 * @param oldIndex
	 */
	$this.changeTo = (current, oldIndex) => {
		$this.mat.uniforms.effectFactor.value = current > oldIndex ? intensity : intensity * -1;
		$this.mat.uniforms.texture1.value = $this.allImgs[oldIndex];
		$this.mat.uniforms.texture2.value = $this.allImgs[current];
		gsap.fromTo(
			$this.mat.uniforms.dispFactor,
			speedIn,
			{ value: 0 },
			{
				value: 1,
				ease: easing,
				onStart: resize,
				onUpdate: $this.animate,
			}
		);
	};
	parent.classList.add("three-js-loader", "bg-three-js");
	$this.scene = new THREE.Scene();
	$this.width = window.innerWidth;
	$this.height = window.innerHeight;
	getRenderer()
		.then((renderer) => {
			$this.renderer = renderer;
			$this.renderer.setPixelRatio(window.devicePixelRatio);
			$this.renderer.setClearColor(0xff_ff_ff, 0.0);
			$this.renderer.setSize($this.width, $this.height);
			$this.width = parent.offsetWidth;
			$this.height = parent.offsetHeight;
			return $this.renderer;
		})
		.then(() => {
			$this.camera = new THREE.PerspectiveCamera(70,window.innerWidth / window.innerHeight,0.001,1000);
			$this.camera.position.set(0, 0, 2);
			return $this.camera;
		})
		.then(() => {
			$this.manager = new THREE.LoadingManager();
			return $this.manager;
		})
		.then((manager) => {
			$this.loader = new THREE.TextureLoader(manager);
			$this.disp = $this.loader.load(displacement);
			$this.disp.wrapS = $this.disp.wrapT = THREE.RepeatWrapping;
			data.forEach((item, x) => image(item.images[0].src, x));
			// data.forEach((item, x) => {
			// 	image(`/.netlify/${item.images[0].src}`, x);
                
            //     console.log(item.images[0].src)
			// });
			return $this.allImgs;
		})
		.then(() => {
			$this.mat = new THREE.ShaderMaterial({
				extensions: {derivatives: "#extension GL_OES_standard_derivatives : enable",},
				side: THREE.DoubleSide,
				uniforms: {
					effectFactor: { type: "f", value: intensity },
					dispFactor: { type: "f", value: 0 },
					texture1: { type: "t", value: $this.allImgs[0] },
					texture2: { type: "t", value: $this.allImgs[0] },
					disp: { type: "t", value: $this.disp },
					resolution: { type: "v4", value: new THREE.Vector4() },
				},
				vertexShader: vertex,
				fragmentShader: getFragment(direction),
				transparent: true,
				opacity: 1.0,
			});
			return $this.mat;
		})
		.then((mat) => {
			$this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2);
			$this.plane = new THREE.Mesh($this.geometry, mat);
			return $this.plane;
		})
		.then((plane) => $this.scene.add(plane))
		.then(() => {
			const swiper = sliderSwiper.swiper;
			if (swiper) {
				swiper.dsnOnChange = (activeIndex, oldIndex) => $this.changeTo(activeIndex, oldIndex);
			}
		})
		.then(() => {
			$this.animate = () => $this.renderer.render($this.scene, $this.camera);
			const load = () => {
				requestAnimationFrame(load);
				if ($this.video) $this.renderer.render($this.scene, $this.camera);
			};
			$this.manager.onLoad = () => {
				parent.classList.remove("three-js-loader");
				if ($this.destroyed) {
					destroy();
					return;
				}
				resize();
				window.addEventListener("resize", resize);
				onComplete && onComplete.bind($this)();
			};
		});
}
//############################################################################################
onMounted(() => {
	$Splitting()
	// rootSlider.value?.querySelectorAll(".slide-content").forEach((item) => {
	// 	const title = item.querySelector(".title");
	// 	// if (title) dsnSplitting.Char(title);

	// 	const meta = item.querySelector(".dsn-slider-content .head-meta");
	// 	// if (meta) dsnSplitting.Char(meta, "a");
	// });

	gsap.to(bg.value,{
		yPercent: 30,
		ease: "none",
		scrollTrigger: {
			trigger: rootSlider.value,
			start: "top top",
			scrub: true,
		},
	});
});

onMounted(() => {
	setTimeout(() => { gsap.to(rootSlider.value.querySelector(".bg-container"),{ opacity: 1,}); },3000);

	/**
	 *
	 * @type HTMLDivElement
	 */
	const sliderSwiper = mainSlider.value;
	Object.assign(sliderSwiper,{
		grabCursor: true,
		parallax: true,
		slidesPerView: 1,
		speed: 1500,
		on: { init: initSlider,slideChange,},
		direction: props.direction ? props.direction : itemStyle().direction,
		pagination: {
			el: swiperPagination.value,
			clickable: true,
			dynamicBullets: true,
			dynamicMainBullets: 1,
			type: "bullets",
		},
		...props.swiperOptions,
	});
	sliderSwiper.initialize();
	const swiperSlides = sliderSwiper.querySelectorAll("swiper-slide");
	store.countSlides = swiperSlides.length;
	sliderSwiper?.swiper.on("slideChange",() => { store.slideCurrent = sliderSwiper.swiper.realIndex; });
	store.slideCurrent = sliderSwiper.swiper.realIndex;
	webGelTransition({
		canvas: canvas.value,
		parent: bg.value,
		sliderSwiper: mainSlider.value,
		data: props.data,
		direction: props.direction,
		displacement: itemStyle().webGelOptions.displacement,
		speedIn: props.webGelOptions
			? props.webGelOptions.speedIn
			: itemStyle().webGelOptions.speedIn,
	});
});
</script>

<template>
	<header ref="rootSlider" :class="itemStyle().rootClass">
		<div :class="['main-slider dsn-active',props.webgel ? 'dsn-webgl' : null,itemStyle().mainClass]">
			<div class="content-slider slide-inner h-100 over-hidden">
				<div ref="bg" data-overlay="4"
					class="bg-container p-absolute w-100 h-100 z-index-1 dsn-hero-parallax-img">
					<swiper-container ref="mainSlider" class="h-100" init="false">
						<swiper-slide v-for="(item,index) in props.data" :key="index"
							:class="['over-hidden',index === 0 ? 'dsn-active' : null]" :data-dsn-id="index">
							<div class="image-bg cover-bg w-100 h-100 before-z-index dsn-swiper-parallax-transform"
								data-overlay="4" :data-swiper-parallax="itemStyle().swiperParallax ? '80%' : null
									">
								<ClientOnly>
									<NuxtImg format="webp" class="cover-bg-img" :src="item.images[0].src"
										:alt="item.title" data-dsn-position="50% 50%" />
								</ClientOnly>
							</div>
						</swiper-slide>
					</swiper-container>
					<canvas v-if="props.webgel" ref="canvas" style="padding: inherit" />
				</div>

				<div ref="sliderContent"
					:class="['dsn-container d-flex dsn-hero-parallax-title dsn-slider-content',setContentStyle().contentClass]">
					<div :class="['slide-content p-absolute',store.slideCurrent === key ? 'dsn-active dsn-active-animate' : null]"
						v-for="(item,key) in props.data" :key="key" :data-dsn-id="key">
						<div
							:class="['p-relative head-meta swiper-animate-head d-flex mb-20',setContentStyle().metaClass]">
							<div class="slide-metas circle-before metas mb-10">
								<NuxtLink v-if="item.categories.length > 0" class="heading-color"
									:to="`/work/category/${cat.toString().trim().toLowerCase()}`" data-separator=" -"
									v-for="(cat,key) in item.categories" :key="key">
									<span class="words chars splitting" data-splitting="chars">{{ cat }}</span>
								</NuxtLink>
							</div>
						</div>
						<h2 class="title has-box-mod p-relative">
							<NuxtLink :to="`${item.link}/${item.slug}`" class="swiper-animate-head effect-ajax">
								<span class="words chars splitting" data-splitting="chars">{{ item.title }}</span>
							</NuxtLink>
						</h2>

						<p class="description swiper-animate-head max-w570 mt-20" v-if="props.hasDescription">
							{{ item.description }}
						</p>

						<LinkLine v-if="props.linkLine" linkName="VIEW CASE" :linkTo="`${item.link}/${item.slug}`" parallax />

						<LinkDefualt v-if="props.linkDefualt" class="swiper-animate-head" linkName="VIEW CASE"
							:linkTo="`${item.link}/${item.slug}`" parallax />
					</div>
				</div>
			</div>
			<div class="dsn-swiper-paginate">
				<div ref="swiperPagination" class="swiper-pagination dsn-swiper-circle mr-30 ml-30 heading-color"></div>
			</div>
			<div class="control-nav w-100 d-flex dsn-container align-items-center justify-content-between">
				<SliderPrev ref="prev" :data="props.data" :el="mainSlider" />
				<div class="dsn-pagination p-relative d-flex align-items-end">
					<span class="slider-current-index h2">{{
						numberindex(store.slideCurrent)
					}}</span>
					<span class="sm-title-block">/ </span><span class="total sm-title-block">{{
						numberindex(store.countSlides - 1)
					}}</span>
				</div>
				<SliderNext ref="next" :data="props.data" :el="mainSlider" />
			</div>
		</div>
	</header>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/variables-site/fonts";
@import "@/assets/styles/variables-site/_transitions";
@import "@/assets/styles/variables-site/structure";
@import "@/assets/styles/mixins/mixins-master";
@import "@/assets/styles/mixins/utilities";

.main-slider {
	@import "./slider_style/slider";
	@import "./slider_style/slider-padding";
	@import "./slider_style/slider-half";
	@import "./slider_style/slider-content";
	@import "./slider_style/control-nav";
}

.slide-metas {

	>span:not(:last-of-type)::after,
	>a:not(:last-of-type)::after {
		content: attr(data-separator);
	}
}
</style>
