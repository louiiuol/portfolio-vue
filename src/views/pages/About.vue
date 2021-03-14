<template>
	<Container id="about" class="has-space justify-evenly items-start">
		<h1 class="beige typist">
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
import { defineComponent } from "vue";
import Icon from "@/components/shared/ui/Icon.vue";
import Container from "@/components/shared/layout/Container.vue";

export default defineComponent({
	name: "About",
	components: { Icon, Container }
});
</script>
