<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const accordion = ref(null);
const animateOpen = gsap.timeline();
const animateClose = gsap.timeline();
const store = reactive({ duration: 0.4,accordion: {} });
onMounted(() => {
	let activeIndex = 0;
	const items = accordion.value.querySelectorAll(".accordion__item");
	store.accordion = items;
	if (!items) return;
	const closeAccording = (element) => {
		const { question,answer } = element.dsnAccording;
		animateClose.set(answer,{ height: "auto",display: "block",overflow: "hidden",});
		animateClose.to(answer,{
			height: 0,
			paddingTop: 0,
			overflow: "hidden",
			display: "block",
			duration: store.duration,
			clearProps: "paddingTop,height,overflow,display",
			onComplete() {
				answer.classList.remove("active");
				question.classList.remove("expanded");
			},
		});
	};
	function openAccording(element) {
		const { question,answer,style } = element.dsnAccording;
		animateOpen.set(answer,{ height: 0,display: "block",overflow: "hidden",paddingTop: 0,});
		animateOpen.to(answer,{
			height: style.height,
			duration: store.duration,
			paddingTop: style.paddingTop,
			onComplete() { answer.classList.add("active"); question.classList.add("expanded"); }
		});
	}
	setTimeout(() => {
		items.forEach((item,index) => {
			const question = item.querySelector(".accordion__question");
			const answer = item.querySelector(".accordion__answer");
			answer.style.display = "block";
			item.dsnAccording = {
				question,answer,
				style: { height: answer.getBoundingClientRect().height,paddingTop: window.getComputedStyle(answer).paddingTop,},
			};
			answer.style.display = "";
			if (question?.classList.contains("expanded") && activeIndex === undefined) {
				activeIndex = $index
			}
			question.addEventListener("click",() => {
				if (activeIndex === index) return;
				if (activeIndex !== undefined)
					closeAccording(items[activeIndex]);
				openAccording(item);
				activeIndex = index;
			});
		});
	},100);
	setTimeout(ScrollTrigger.refresh,500);
});

onUnmounted(() => {
	store.accordion.forEach((item) => {
		const { dsnAccording } = item;
		dsnAccording.question.replaceWith(dsnAccording.question.cloneNode(true));
		delete item.dsnAccording;
	});
	if (animateOpen.scrollTrigger) animateOpen.scrollTrigger.kill();
	animateOpen.kill();
	if (animateClose.scrollTrigger) animateClose.scrollTrigger.kill();
	animateClose.kill();
});
</script>

<template>
	<div ref="accordion" class="dsn-accordion mt-30 accordion" data-dsn-iconsize="35px">
		<div class="accordion__wrapper">
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";

.dsn-accordion {
	line-height: 1.2;

	.accordion__answer {
		display: none;
		max-width: 400px;
		padding-top: 15px;
		padding-left: 45px;

		&.active {
			display: block;
		}
	}

	.accordion__item:not(:last-of-type) {
		margin-bottom: 30px;
		border-bottom: 1px solid $border-color;
		padding-bottom: 30px;
	}

	.accordion__question {
		position: relative;

		cursor: pointer;
		user-select: none;

		&:not(:first-of-type) {
			padding: 8px 15px 0 0;
		}

		.dsn-icon {
			margin-right: 15px;
		}

		h4 {
			font-weight: 600;
			margin-bottom: 0;
		}

		&:before {
			content: "";
			position: absolute;
			display: inline-block;
			border: solid $theme-color;
			top: 40%;
			right: 0;
			transition: transform 0.2s linear;
		}

		&:not(.expanded):before {
			transform: rotate(45deg);
			border-width: 0 2px 2px 0;
			padding: 3px;
		}

		&.expanded:before {
			border-width: 1px;
			width: 10px;
		}
	}
}

.dsn-accordion {
	.number {
		width: 30px;
		height: 30px;
		line-height: 30px;
		border-radius: 50%;
		text-align: center;
		margin-right: 15px;
		font-size: 14px;

		.background-theme & {
			background-color: $bg-color;
			color: $heading-color;
		}
	}
}
</style>