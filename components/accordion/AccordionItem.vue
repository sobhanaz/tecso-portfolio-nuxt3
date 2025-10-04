<script setup>
const props = defineProps({ active: Boolean,className: String,title: String,number: Number });
</script>

<template>
	<div :class="['accordion__item',props.className]">
		<div
			:class="['accordion__question user-no-selection d-flex align-items-center accordion-icon',props.active ? 'expanded' : null]">
			<span class="number background-theme h6" v-if="props.number">{{
				props.number
			}}</span>
			<slot name="question" />
			<h2 class="sm-title-block tab-title heading-color" role="tab" data-tab="0">
				{{ props.title }}
			</h2>
		</div>
		<div :class="['accordion__answer tab-description accordion-icon',props.active ? 'active' : null]"
			role="tabpanel" data-tab="0">
			<slot name="answer" />
		</div>
	</div>
</template>
