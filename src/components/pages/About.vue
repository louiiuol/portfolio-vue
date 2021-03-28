<template>
	<Container id="about" class="has-space justify-evenly items-start">
		<h1 class="beige typist">
			<Icon name="infos" class="sm circled" />
			{{ $t("about.title") }}
		</h1>
	</Container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@/components/shared/ui/";
import Container from "@/components/shared/layout/Container.vue";

export default defineComponent({
	name: "About",
	components: { Icon, Container }
});
</script>
