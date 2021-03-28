<template>
	<Container id="home" class="rows justify-around">
		<Icon name="logo" />
		<h1 class="title beige centered typist">
			<Typist :toType="$t('home.title')" />
		</h1>
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
	@include widthCentered(60%);
	@include for-phone-and-tablet {
		@include widthCentered(85%);
	}
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

@keyframes drawing {
	30% {
		fill: transparent;
	}
	95% {
		stroke-dashoffset: 0;
	}
	100% {
		fill: white;
	}
}

@keyframes pulse {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.07);
	}
	100% {
		transform: scale(1);
	}
}
</style>
