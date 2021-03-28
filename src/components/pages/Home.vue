<template>
	<Container id="home" class="rows justify-around">
		<Icon name="logo" />
		<Typist class="title beige" toType="home.title" tag="h1" />
		<router-link class="btn white" to="/about">
			{{ $t("home.show-more") }}
		</router-link>
	</Container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Icon, Container, Typist } from "@/components/shared/";

export default defineComponent({
	name: "Home",
	components: { Icon, Container, Typist }
});
</script>

<style lang="scss">
svg#logo {
	height: 60vw;
	max-height: 50vh;
	@include widthCentered(80%);
}
h1.title.typist {
	font-size: 2rem;
	margin: 0 auto;
	max-width: 80vw;
}
#home h1.title.typist,
#home a.btn {
	opacity: 0;
	animation: fadeIn $transition-fastest forwards;
}

#home a.btn {
	animation: fadeIn $transition-fastest forwards,
		pulse $transition-medium infinite;
	animation-delay: 15s;
}

symbol#logo {
	filter: drop-shadow(1px 2px 4px rgba($legend-dark, 0.6));
	path {
		fill: transparent;
		stroke: white;
		stroke-dasharray: 2000;
		stroke-dashoffset: 2000;
		animation: drawing $transition-slow forwards;
		@for $i from 2 to 15 {
			&:nth-child(#{$i}) {
				animation-delay: #{0.25 * $i}s;
			}
		}
	}
}
</style>
