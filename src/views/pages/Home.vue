<template>
	<Container id="home" class="rows justify-evenly items-stretch">
		<Icon name="logo" alt="Louis Godlewski's logo" />
		<h1 class=" title beige centered">
			{{ $t("home.title") }}
		</h1>
	</Container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Icon from "@/components/ui/Icon.vue";
import Container from "@/components/shared/layout/Container.vue";

@Options({ components: { Icon, Container } })
export default class Home extends Vue {}
</script>

<style lang="scss">
svg#logo {
	height: 40vh;
}
#logo path {
	fill: transparent;
	stroke: white;
	stroke-dasharray: 850;
	stroke-dashoffset: 850;
	animation: drawing $transition-slow forwards;
	filter: drop-shadow(1px 2px 4px rgba($legend-dark, 0.6));
	@for $i from 2 to 15 {
		&:nth-child(#{$i}) {
			animation-delay: #{0.25 * $i}s;
		}
	}
}

@keyframes drawing {
	30% {
		fill: transparent;
	}
	80% {
		stroke-dashoffset: 0;
	}
	100% {
		fill: white;
	}
}
</style>
