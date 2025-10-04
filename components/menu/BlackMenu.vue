<template>
		<Navbar :hamburger="props.hamburger">
			<SiteLogo :click="handleClickCloseMenu" />
			<Collapse>
				<ul id="dsn-primary-list" class="primary-nav h2">
					<Links />
				</ul>
				<MenuContent class="section-margin" />
			</Collapse>
		</Navbar>
</template>

<script setup>
	import data_MENU from "@/api/menu/menu.json";
	import Navbar from "@/components/menu/nav/Navbar.vue";
	import SiteLogo from "@/components/logo/SiteLogo.vue";
	import Collapse from "@/components/menu/nav/contain/Collapse.vue";
	import Dropdown from "@/components/menu/nav/contain/Dropdown.vue";
	import ItemLink from "@/components/menu/nav/contain/ItemLink.vue";
	import MenuContent from "@/components/menu/MenuContent.vue";
	const Links = () => { const xx = []; data_MENU.forEach((item) => { if
	(item.dropdownMenu) { const list2 = []; item.dropdownMenu.forEach((item2) => {
	if (item2.dropdownMenu) { const list3 = []; item2.dropdownMenu.forEach((item3) => { if (item3.dropdownMenu) { const list4 = [];
	item3.dropdownMenu.forEach((item4) => { if (item4.dropdownMenu) { const cc =
	h(Dropdown,{name: item4.name,href: item4.href,dropdownMenu:
	item4.dropdownMenu},() => []); list4.push(cc); } else { list4.push( h(ItemLink,
	{ name: item4.name, href: item4.href, }) ); } }); const aa = h(Dropdown,{name:
	item3.name,href: item3.href,dropdownMenu: item3.dropdownMenu},() => [list4] );
	list3.push(aa); return; } list3.push(h(ItemLink, { name: item3.name, href:
	item3.href })); }); const dd = h( Dropdown,{name: item2.name,href:
	item2.href,dropdownMenu: item2.dropdownMenu},() => [list3] ); list2.push(dd);
	return; } list2.push(h(ItemLink, { name: item2.name, href: item2.href })); });
	const tt = h( Dropdown,{ name: item.name, href: item.href, dropdownMenu:
	item.dropdownMenu },() => [list2]); xx.push(tt); return; } xx.push(h(ItemLink, {
	name: item.name, href: item.href })); }); return xx; };
	const props = defineProps({ hamburger: { type: Boolean, default: true } });
	const handleClickCloseMenu = () => {
		const header = document.querySelector(".site-header");
		const parent = header.closest(".site-header");
		if (!parent) return;
		if (!parent.classList.contains("dsn-hamburger") || !parent.classList.contains("dsn-open")) return;
		const navToggle = parent.querySelector(".navbar-toggle");
		if (navToggle) navToggle.click();
	};
</script>
