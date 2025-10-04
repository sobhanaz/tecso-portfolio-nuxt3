<script setup>
import { Loader } from "@googlemaps/js-api-loader";
const dsnMap = ref(null);
const props = defineProps({ mapKey: String, zoom: Number, height: String, defaultCenter: {} });


onMounted(() => {
	const loader = new Loader({ apiKey: props.mapKey, version: "weekly" });
	loader.load().then(async () => {
		const { Map } = await google.maps.importLibrary("maps");
		const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
		const map = new Map(document.getElementById("map"), {
			center: { lat: props.defaultCenter.lat, lng: props.defaultCenter.lng, },
			mapId: "DEMO_MAP_ID",
			mapTypeControl: false,
			scrollwheel: false,
			draggable: true,
			streetViewControl: false,
			navigationControl: false,
			zoom: props.zoom,
		});
		const beachFlagImg = document.createElement("img");
		beachFlagImg.src = "images/map-marker.png";
		const marker = new AdvancedMarkerElement({
			map,
			position: { lat: props.defaultCenter.lat, lng: props.defaultCenter.lng },
			title: "Uluru",
			content: beachFlagImg,
		});
		const styledMapType = new google.maps.StyledMapType(mapStyles);
		map.mapTypes.set("styled_map", styledMapType);
		map.setMapTypeId("styled_map");
		marker.content.classList.add("bounce");
	});
});
const mapStyles = [
	{
		featureType: "water",
		elementType: "geometry",
		stylers: [
			{
				color: "#e9e9e9",
			},
			{
				lightness: 17,
			},
		],
	},
	{
		featureType: "landscape",
		elementType: "geometry",
		stylers: [
			{
				color: "#f5f5f5",
			},
			{
				lightness: 20,
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "geometry.fill",
		stylers: [
			{
				color: "#ffffff",
			},
			{
				lightness: 17,
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: "#ffffff",
			},
			{
				lightness: 29,
			},
			{
				weight: 0.2,
			},
		],
	},
	{
		featureType: "road.arterial",
		elementType: "geometry",
		stylers: [
			{
				color: "#ffffff",
			},
			{
				lightness: 18,
			},
		],
	},
	{
		featureType: "road.local",
		elementType: "geometry",
		stylers: [
			{
				color: "#ffffff",
			},
			{
				lightness: 16,
			},
		],
	},
	{
		featureType: "poi",
		elementType: "geometry",
		stylers: [
			{
				color: "#f5f5f5",
			},
			{
				lightness: 21,
			},
		],
	},
	{
		featureType: "poi.park",
		elementType: "geometry",
		stylers: [
			{
				color: "#dedede",
			},
			{
				lightness: 21,
			},
		],
	},
	{
		elementType: "labels.text.stroke",
		stylers: [
			{
				visibility: "on",
			},
			{
				color: "#ffffff",
			},
			{
				lightness: 16,
			},
		],
	},
	{
		elementType: "labels.text.fill",
		stylers: [
			{
				saturation: 36,
			},
			{
				color: "#333333",
			},
			{
				lightness: 40,
			},
		],
	},
	{
		elementType: "labels.icon",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	{
		featureType: "transit",
		elementType: "geometry",
		stylers: [
			{
				color: "#f2f2f2",
			},
			{
				lightness: 19,
			},
		],
	},
	{
		featureType: "administrative",
		elementType: "geometry.fill",
		stylers: [
			{
				color: "#fefefe",
			},
			{
				lightness: 20,
			},
		],
	},
	{
		featureType: "administrative",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: "#fefefe",
			},
			{
				lightness: 17,
			},
			{
				weight: 1.2,
			},
		],
	},
];
</script>

<template>
	<div id="map" ref="dsnMap" class="w-100" style="height: 80vh"></div>
</template>

<style>
.bounce {
	animation: bounce 0.8s infinite;
	-webkit-animation: bounce 0.8s infinite;
	-moz-animation: bounce 0.8s infinite;
	-o-animation: bounce 0.8s infinite;
}

@-webkit-keyframes bounce {
	0% {
		-webkit-transform: translate3d(0px, 0px, 0);
		-webkit-animation-timing-function: ease-out;
	}

	50% {
		-webkit-transform: translate3d(0px, -20px, 0);
		-webkit-animation-timing-function: ease-in;
	}

	100% {
		-webkit-transform: translate3d(0px, 0px, 0);
		-webkit-animation-timing-function: ease-out;
	}
}

@-moz-keyframes bounce {
	0% {
		-moz-transform: translate3d(0px, 0px, 0);
		-moz-animation-timing-function: ease-out;
	}

	50% {
		-moz-transform: translate3d(0px, -20px, 0);
		-moz-animation-timing-function: ease-in;
	}

	100% {
		-moz-transform: translate3d(0px, 0px, 0);
		-moz-animation-timing-function: ease-out;
	}
}

@-o-keyframes bounce {
	0% {
		-o-transform: translate3d(0px, 0px, 0);
		-o-animation-timing-function: ease-out;
	}

	50% {
		-o-transform: translate3d(0px, -20px, 0);
		-o-animation-timing-function: ease-in;
	}

	100% {
		-o-transform: translate3d(0px, 0px, 0);
		-o-animation-timing-function: ease-out;
	}
}

@keyframes bounce {
	0% {
		-webkit-transform: translate3d(0px, 0px, 0);
		-webkit-animation-timing-function: ease-out;
	}

	50% {
		-webkit-transform: translate3d(0px, -20px, 0);
		-webkit-animation-timing-function: ease-in;
	}

	100% {
		-webkit-transform: translate3d(0px, 0px, 0);
		-webkit-animation-timing-function: ease-out;
	}
}
</style>
