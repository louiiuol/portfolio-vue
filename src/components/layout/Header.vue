<template>
	<nav id="main-nav">
		<router-link to="/">
			<h3>L<span>ouis </span>G<span>ODLEWSKI</span></h3>
		</router-link>
		<ul class="links">
			<li>
				<router-link to="/about">{{ $t("nav.about") }}</router-link>
			</li>

			<li>
				<a href="mailto:louis.godlewski@gmail.com">{{ $t("nav.contact") }}</a>
			</li>
			<li>
				<select class="lang" @change="changeLocale($event.target.value)">
					<option value="en">🇬🇧</option>
					<option value="fr">🇫🇷</option>
				</select>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { i18n } from "@/main";

export default class Header extends Vue {
	protected changeLocale(lang: string): void {
		i18n.global.locale = lang;
	}
}
</script>

<style scoped lang="scss">
nav#main-nav {
	@include sized(100%, $nav-height);
	@include flex(row nowrap, space-between);
	@include shadowed;
	position: fixed;
	top: 0;
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
	.hamburger {
		display: none;
	}
	ul.links {
		@include flex(row nowrap, space-evenly);
		li {
			list-style-type: none;
			padding: 0.5rem;
		}
	}
}
</style>
