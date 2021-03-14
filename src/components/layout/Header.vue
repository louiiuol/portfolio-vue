<template>
	<nav id="main-nav">
		<router-link to="/">
			<h3>L<span>ouis </span>G<span>ODLEWSKI</span></h3>
		</router-link>
		<ul class="links primary">
			<li>
				<router-link to="/about">{{ $t("nav.about") }}</router-link>
			</li>
			<li class="has-icon">
				<a href="mailto:louis.godlewski@gmail.com">
					<Icon name="calendar" size="sm" :alt="$t(`nav.contact`)" />
				</a>
			</li>
			<li class="has-icon">
				<Icon
					@click="changeLocale(name.substr(0, 2))"
					:name="'flag-' + name"
					size="sm"
					class="pointed"
					:alt="$t(`nav.lang.${name}`)"
				/>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { i18n } from "@/main";
import Icon from "@/components/shared/ui/Icon.vue";
export default defineComponent({
	name: "Header",
	components: { Icon },
	setup() {
		return {
			changeLocale: function(lang: string): void {
				i18n.global.locale = lang;
			},
			name: computed(() => (i18n.global.locale === "fr" ? "english" : "french"))
		};
	}
});
</script>

<style lang="scss">
nav#main-nav {
	@include sized(100%, $nav-height);
	@include flex(row nowrap, space-between, center);
	@include shadowed;
	background: $white;
	color: $primary;
	padding: $pad-sides-md;
	z-index: $z-main-nav;
	h3 {
		font-size: 1.5rem;
		span {
			max-width: 0;
			transition: $transition-fast;
			display: inline-block;
			overflow: hidden;
			vertical-align: bottom;
			opacity: 0;
			margin-right: 5px;
		}
		&:hover span {
			max-width: 250px;
			opacity: 1;
		}
	}
	ul.links {
		@include flex(row nowrap, space-evenly, flex-end);
		li {
			list-style-type: none;
			height: $nav-height;
			min-width: 75px;
			padding: 0.7rem;
			padding-top: ($nav-height)/4;
			border-radius: $radius-xs;
			&.has-icon {
				min-width: 50px;
			}
			&:hover {
				background: $beige;
			}
		}
	}
}
</style>
