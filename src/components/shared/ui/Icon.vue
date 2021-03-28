<template>
	<svg :id="name" :alt="$t('icons-alt', { icon: name })" class="icon">
		<use v-if="href" :href="href"></use>
	</svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
	name: "Icon",
	props: {
		name: String
	},
	setup(props) {
		//* Returns dynamically imported icon with given props.name
		// TODO add verifications for icons' name
		const href = computed<string>(() => {
			let svg = "";
			try {
				svg = require(`@/assets/images/svg/icons.svg`) + `#${props.name}`;
			} catch (error) {
				console.error("error fetching icon: ", error);
			}
			return svg;
		});
		//* Returns dynamically classes depending on given props.size / shape
		return { href };
	}
});
</script>

<style lang="scss">
svg {
	&:empty {
		background: $beige-darker;
		border-radius: $radius-sm;
	}
	fill: currentColor;
	&.icon {
		width: 100%;
		&.xs {
			width: 1rem;
			height: 1rem;
		}
		&.sm {
			width: 1.5rem;
			height: 1.5rem;
		}
		&.md {
			width: 2.5rem;
			height: 2.5rem;
		}
		&.lg {
			width: 4rem;
			height: 4rem;
		}
		&.xl {
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
