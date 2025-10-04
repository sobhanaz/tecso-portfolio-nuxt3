<script setup>
import Dropdown from "@/components/nav/contain/Dropdown.vue";
import ItemLink from "@/components/nav/contain/ItemLink.vue";
const props = defineProps({ name: String, href: String, dropdownMenu: {}, });
</script>

<template>
	<Dropdown v-if="props.dropdownMenu" :name="props.name" :href="props.href" :dropdownMenu="props.dropdownMenu">
		<ItemLink v-for="(item, index) in props.dropdownMenu" :key="index" :name="item.name" :href="item.href"
			:dropdownMenu="item.dropdownMenu" />
	</Dropdown>
	<ItemLink v-else :name="props.name" :href="props.href" />
</template>
