<template>
	<svg :id="name" :alt="alt" :class="size ? `icon-${size}` : 'icon'">
		<use :href="href"></use>
	</svg>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
	props: {
		name: String,
		size: String,
		alt: String
	}
})
export default class Icon extends Vue {
	name!: string;
	//! Import dynamically icon with given props.name above
	get href() {
		return require(`@/assets/images/svg/icons.svg`) + `#${this.name}`;
	}
}
</script>

<style lang="scss" scoped>
svg {
	fill: currentColor;
	&.icon {
		width: 100%;
		&-xs {
			width: 1rem;
			height: 1rem;
		}
		&-sm {
			width: 1.5rem;
			height: 1.5rem;
		}
		&-md {
			width: 2.5rem;
			height: 2.5rem;
		}
		&-lg {
			width: 4rem;
			height: 4rem;
		}
		&-xl {
			width: 6rem;
			height: 6rem;
		}
	}
	&.circled {
		border: 1px solid currentColor;
		padding: 0.25rem;
		border-radius: 50%;
	}
}
</style>
