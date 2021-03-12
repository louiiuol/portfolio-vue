<template>
	<section id="home">
		<h1>{{ $t("home.title") }}</h1>
	</section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
	components: {}
})
export default class Home extends Vue {}
</script>
