<template>
	<Container id="about" class="has-space justify-evenly items-start">
		<h1 class="beige">
			<Icon
				name="infos"
				size="sm"
				class="circled"
				alt="Louis Godlewski's logo"
			/>
			{{ $t("about.title") }}
		</h1>
	</Container>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Icon from "@/components/ui/Icon.vue";
import Container from "@/components/shared/layout/Container.vue";

@Options({ components: { Icon, Container } })
export default class About extends Vue {}
</script>
