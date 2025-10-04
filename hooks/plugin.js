import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { store } from "@/store/store";
import Scrollbar from "smooth-scrollbar";
//--------------------------------------------------------------------------------------------
export const numberindex = (e) =>
	e < 10 && e + 1 != 10 ? `0${e + 1}` : e + 1 == 10 ? 10 : e + 1;
//--------------------------------------------------------------------------------------------
export const dsnCN = (...args) => {
	return args.join(" ").trim();
};
//--------------------------------------------------------------------------------------------
export const iconsize = () => {
	const iconsize = document.querySelectorAll("[data-dsn-iconsize]");
	iconsize.forEach((icon) =>
		icon.style.setProperty(
			"--dsn-icon-size",
			icon.getAttribute("data-dsn-iconsize")
		)
	);
};
//--------------------------------------------------------------------------------------------
export const setPosition = () => {
	const elPosition = document.querySelectorAll("[data-dsn-position]");
	elPosition?.forEach((icon) =>
		icon.style.setProperty(
			"object-position",
			icon.getAttribute("data-dsn-position")
		)
	);
};
//--------------------------------------------------------------------------------------------
export const elScrollDown = (id) => {
	const ignore = ["#", " "];
	ignore?.forEach((e) => {
		if (id.substring(0, e.length) == e) return;
	});

	const el = document.querySelector(`#${id}`);
	if (!el) return;
	if (store.activeScrollbar) {
		const scroll = Scrollbar.get(document.querySelector("#dsn-scrollbar"));
		scroll?.scrollTo(0, el.offsetTop, 1500);
	} else {
		window?.scrollTo({ behavior: "smooth", top: el.offsetTop });
	}
};
//--------------------------------------------------------------------------------------------
export const pageScrollToTop = () => {
	if (store.activeScrollbar) {
		const scroll = Scrollbar.get(document.querySelector("#dsn-scrollbar"));
		scroll.scrollTo(0, 0, 1500);
	} else {
		window.scrollTo({ behavior: "smooth", top: 0 });
	}
};
//--------------------------------------------------------------------------------------------
export const nextProject = (id, data) => {
	if (id > 1 && id != data.length) return Number(id) + 1;
	if (id > 1 && id == data.length) return 1;
	if (id == 1) return 2;
	return id;
};
//--------------------------------------------------------------------------------------------
export const setBodyClass = (value) => {
	if (!value) {
		if (document.body.classList.contains("bg-dots")) {
			document.body.classList.remove("bg-dots");
		}
		return;
	}
	return document.body.classList.add(value);
};
//--------------------------------------------------------------------------------------------
export const setwhitespace = () => {
	const whitespace = document.body.querySelectorAll(
		".chars > .dsn-word-wrapper"
	);
	whitespace?.forEach((item) => (item.style.marginRight = "15px"));
};
//--------------------------------------------------------------------------------------------
export const gridGaps = () => {
	const dsnGap = document.querySelectorAll(".d-grid[data-dsn-gap]");
	dsnGap.forEach((item) => {
		const gap = item.getAttribute("data-dsn-gap");
		const split = gap.split(" ");
		item.style.gridGap = gap;
		item.style.setProperty("--grid-gap", gap);
		if (item.classList.contains("dsn-isotope")) {
			if (split.length > 1) {
				item.style.setProperty("--grid-gap-row", split[0]);
				item.style.setProperty("--grid-gap-col", split[1]);
				item.style.setProperty("--grid-gap", split[1]);
			} else if (split.length) {
				item.style.setProperty("--grid-gap-row", split[0]);
				item.style.setProperty("--grid-gap-col", split[0]);
				item.style.setProperty("--grid-gap", split[0]);
			}
		}
	});
};
//--------------------------------------------------------------------------------------------
export const parallaxIt = (e, target, options) => {
	const { width, height, left, top } = target.getBoundingClientRect();
	const relX = e.pageX - left;
	const relY = e.pageY - top;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	const { speed, move: movement } = options;
	gsap.to(target, speed, {
		x: ((relX - width / 2) / width) * movement,
		y: ((relY - height / 2 - scrollTop) / width) * movement,
		ease: "Power0.easeOut",
	});
};
//--------------------------------------------------------------------------------------------
export const runParallaxIt = () => {
	const options = Object.assign({}, { speed: 0.5, move: 20 });
	const parallaxHover = document.body.querySelectorAll('[data-dsn="parallax"]');
	parallaxHover.forEach((item) => {
		/**
		 * Append Icon
		 */
		const icon = document.createElement("div");
		icon.classList.add("icon-circle");
		icon.style.minWidth = "1px";
		item.appendChild(icon);
		item.removeAttribute("data-dsn");
		item.classList.add("dsn-parallax-hover");
		const scale = item.classList.contains("image-zoom");
		const moveIcon = item.classList.contains("move-circle");
		const mouseEnter = (e) => {
			if (scale) {
				gsap.to([item, icon], 0.3, { scale: 1.03 });
			}
		};
		const mouseLeave = (e) => {
			gsap.to([item, icon], 1, {
				x: 0,
				y: 0,
				scale: 1,
				ease: "Back.easeOut.config(4)",
			});
		};
		const mouseMove = (e) => {
			parallaxIt(e, item, options);
			if (moveIcon) parallaxIt(e, icon, { ...options, move: options.move * 2 });
		};
		/**
		 * Event
		 */
		item.addEventListener("mouseenter", mouseEnter);
		item.addEventListener("mouseleave", mouseLeave);
		item.addEventListener("mousemove", mouseMove);
	});
};
//--------------------------------------------------------------------------------------------
export const smoothScrollBar = () => {
	const scroller = document.querySelector("#dsn-scrollbar");
	if (!scroller) return;
	if (!store.activeScrollbar) return;
	document.body.setAttribute("style", "overflow-y:hidden;height:100vh");
	scroller.setAttribute("style", "overflow-y:visible;height:100vh !important");
	const bodyScrollBar = Scrollbar.init(scroller, {
		damping: 0.05,
		continuousScrolling: true,
		delegateTo: scroller,
		alwaysShowTracks: false,
		stagger: false,
		invalidateOnRefresh: true,
	});
	ScrollTrigger.scrollerProxy(scroller, {
		scrollTop(value) {
			if (arguments.length) {
				bodyScrollBar.scrollTop = value;
			}
			return bodyScrollBar.scrollTop;
		},
	});
	bodyScrollBar?.addListener(ScrollTrigger.update);
	ScrollTrigger?.defaults({ scroller });
};
//--------------------------------------------------------------------------------------------
export function cursorGrowing() {
	const cursor = document.querySelector(".dsn_cursor");
	const elHaveScale = document.querySelectorAll(".effect-ajax");
	if (!cursor) return;
	if (!elHaveScale) return;
	elHaveScale.forEach((item) => {
		item.addEventListener("mousemove", () => {
			if (!cursor) return;
			cursor.classList.add("grow");
			if (item.classList.contains("small")) {
				cursor.classList.remove("grow");
			}
		});
		item.addEventListener("mouseleave", () => {
			if (!cursor) return;
			cursor.classList.remove("grow");
			cursor.classList.add("non-grow");
		});
	});
}
//--------------------------------------------------------------------------------------------
/**
 *
 * @param startTime
 * @param endTime
 * @param duration
 * @param current_timer
 * @returns {number}
 */
export function pageLoad(startTime, endTime, duration, current_timer) {
	const performanceTiming = window.performance.timing;
	const time =
		((((performanceTiming.loadEventEnd - performanceTiming.navigationStart) *
			-1) /
			1000) %
			50) *
		10;
	let currentStartTime = startTime;
	const increment = endTime > startTime ? 1 : -1;
	const stepTime = Math.abs(Math.floor((time + duration) / 100));
	const timer = setInterval(() => {
		currentStartTime += increment;
		current_timer(currentStartTime);
		if (currentStartTime >= endTime) {
			clearInterval(timer);
		}
	}, stepTime);
	return timer;
}
//--------------------------------------------------------------------------------------------
export const runOnLoad = () => {
	iconsize();
	setwhitespace();
	setPosition();
	gridGaps();
	runParallaxIt();
	cursorGrowing();
};
//--------------------------------------------------------------------------------------------
let showAnim = null;
export function hideNav() {
	const menu = document.querySelector(".site-header");
	if (!menu) return;
	setTimeout(() => {
		showAnim = gsap.from(menu, { top: -70, duration: 0.5 }).progress(1);
		ScrollTrigger.create({
			onUpdate: (self) => {
				if (menu.classList.contains("dsn-open")) {
					showAnim?.kill;
				} else if (self.direction === -1) {
					showAnim.play();
				} else {
					showAnim.reverse();
				}
			},
			onEnter() {
				menu.style = "background-color: var(--bg-color);";
			},
			onToggle() {
				showAnim.play();
				menu.style = "background-color: transparent;";
			},
			mounted() {
				window.onbeforeunload = () => {
					return showAnim.kill();
				};
			},
			unmounted() {
				showAnim?.kill;
			},
		});
	}, 1);
}