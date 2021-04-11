<template>
	<component :is="tag" class="typist">
		<span class="lambda">λ</span> {{ typingValue }}
		<span class="cursor" :class="{ typing: isTyping }">&nbsp;</span>
	</component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setTimeout } from "timers";
import { i18n } from "@/main";

export default defineComponent({
	props: {
		toType: { type: String, required: true },
		tag: { type: String, required: true },
		infinite: { type: Boolean, required: false }
	},
	data: function() {
		return {
			typingValue: "",
			isTyping: false,
			typingSpeed: 60,
			erasingSpeed: 35,
			newTextDelay: 2000,
			typingArrayIndex: 0,
			charIndex: 0,
			defaultLang: i18n.global.locale
		};
	},
	computed: {
		translation: function(): string {
			return i18n.global.t(this.toType);
		},
		typingArray: function(): string[] {
			return this.translation.split("\n").map(el => el.trim());
		},
		currentString: function(): string {
			return this.typingArray[this.typingArrayIndex];
		},
		lang: function(): string {
			return i18n.global.locale;
		}
	},
	methods: {
		typeText(): void {
			this.checkLang();
			if (this.charIndex < this.currentString.length) {
				if (!this.isTyping) this.isTyping = true;
				this.typingValue += this.currentString.charAt(this.charIndex);
				this.charIndex += 1;
				setTimeout(this.typeText, this.typingSpeed);
			} else {
				this.isTyping = false;
				if (
					this.typingArrayIndex < this.typingArray.length - 1 ||
					this.infinite
				)
					setTimeout(this.eraseText, this.newTextDelay);
				else setInterval(this.checkLang, 200);
			}
		},
		eraseText(): void {
			this.checkLang();
			if (this.charIndex > 0) {
				if (!this.isTyping) this.isTyping = true;
				this.typingValue = this.currentString.substring(0, this.charIndex - 1);
				this.charIndex -= 1;
				setTimeout(this.eraseText, this.erasingSpeed);
			} else {
				this.isTyping = false;
				this.typingArrayIndex += 1;
				if (this.typingArrayIndex >= this.typingArray.length)
					this.typingArrayIndex = 0;
				setTimeout(this.typeText, this.typingSpeed + 1000);
			}
		},
		checkLang(): void {
			if (this.lang != this.defaultLang) {
				this.defaultLang = this.lang;
				this.charIndex = 0;
				this.typingValue = "";
				this.typingArrayIndex = 0;
				this.typeText();
			}
		}
	},
	created() {
		setTimeout(this.typeText, 1000);
	}
});
</script>

<style lang="scss" scoped>
.typist {
	font-family: open24, sans-serif;
	font-weight: normal;
	position: relative;
	background-color: rgba($legend-dark, 0.8);
	border-radius: $radius-md;
	padding: $pad-md;
	display: inline-block;
	@include shadowed(true);
	max-width: 80vw;
	margin: 0 auto;
	font-size: 2rem;
	span.lambda {
		color: $accent;
	}
	span.cursor {
		$cursor-width: 3px;
		display: inline-block;
		margin-left: $cursor-width;
		padding-bottom: 5px;
		width: $cursor-width;
		background-color: currentColor;
		animation: blink $transition-medium infinite;
	}
	span.cursor.typing {
		animation: none;
	}
}
</style>
