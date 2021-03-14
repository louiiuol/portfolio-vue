import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import en from "./assets/translations/en.json";
import fr from "./assets/translations/fr.json";

/**
 ** Store every JSON translations files
 ** and i18n configuration in variable
 ** to be used in Vue app
 */
export const i18n = createI18n({
	messages: {
		en: en,
		fr: fr
	},
	locale: "en",
	fallbackLocale: "en"
});

/**
 ** Creates new Vue app
 ** w/ store, router & i18n used.
 *! Must be mounted in #portfolio HTML tag.
 */
createApp(App)
	.use(store)
	.use(router)
	.use(i18n)
	.mount("#portfolio");
