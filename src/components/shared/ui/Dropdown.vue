<template>
	<li class="dropdown-container">
		<span class="link" @click="state.isToggled = !state.isToggled">
			{{ name }}
		</span>
		<div v-if="state.isToggled" class="dropdown" v-click-away="onClickAway">
			<ul class="links">
				<li v-for="link in links" :key="link">
					<router-link
						@click="state.isToggled = false"
						class="link"
						:to="'/' + link"
					>
						{{ $t("nav." + link) }}
					</router-link>
				</li>
			</ul>
		</div>
	</li>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
	name: "Dropdown",
	props: {
		name: String,
		links: Array
	},
	setup() {
		const state = reactive({
			isToggled: false
		});
		const onClickAway = function(): void {
			state.isToggled = false;
		};
		return { state, onClickAway };
	}
});
</script>

<style lang="scss">
.dropdown-container {
	position: relative;
	.dropdown {
		position: absolute;
		top: 60px;
		right: 0;
		width: fit-content;
		padding: 5px;
		border-radius: $radius-sm;
		@include shadowed;
		background: white;
		ul.links {
			flex-direction: column !important;
		}
		li {
			width: 100%;
		}
	}
}
</style>
