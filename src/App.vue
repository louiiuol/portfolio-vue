<template>
	<Header />
	<router-view v-slot="{ Component }">
		<transition name="fade" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/layout/Header.vue";

export default defineComponent({
	name: "App",
	components: { Header }
});
</script>

<style lang="scss">
@import "@/assets/styles/skeleton.scss";
</style>
