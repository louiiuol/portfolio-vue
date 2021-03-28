<template>
	<Container id="about" class="has-space justify-evenly items-start">
		<h1 class="beige typist">
			<Icon name="infos" class="sm circled" />
			<Typist :toType="$t('about.title')" />
		</h1>
	</Container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Icon, Container, Typist } from "@/components/shared/";

export default defineComponent({
	name: "About",
	components: { Icon, Container, Typist }
});
</script>
