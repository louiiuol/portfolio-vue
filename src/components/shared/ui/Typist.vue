<template class="typist">
	{{ typeValue }}
	<span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setTimeout } from "timers";

export default defineComponent({
	props: {
		toType: {
			type: String,
			required: true
		}
	},
	data: function() {
		return {
			typeValue: "",
			typeStatus: false,
			typingSpeed: 60,
			erasingSpeed: 35,
			newTextDelay: 2000,
			typeArrayIndex: 0,
			charIndex: 0
		};
	},
	computed: {
		typeArray: function(): string[] {
			return this.toType.split("\n").map(element => element.trim());
		},
		currentString: function(): string {
			return this.typeArray[this.typeArrayIndex];
		}
	},
	methods: {
		typeText() {
			if (this.charIndex < this.currentString.length) {
				if (!this.typeStatus) this.typeStatus = true;
				this.typeValue += this.currentString.charAt(this.charIndex);
				this.charIndex += 1;
				setTimeout(this.typeText, this.typingSpeed);
			} else {
				this.typeStatus = false;
				if (this.typeArrayIndex < this.typeArray.length - 1)
					setTimeout(this.eraseText, this.newTextDelay);
			}
		},
		eraseText() {
			if (this.charIndex > 0) {
				if (!this.typeStatus) this.typeStatus = true;

				this.typeValue = this.currentString.substring(0, this.charIndex - 1);
				this.charIndex -= 1;
				setTimeout(this.eraseText, this.erasingSpeed);
			} else {
				this.typeStatus = false;
				this.typeArrayIndex += 1;
				if (this.typeArrayIndex >= this.typeArray.length)
					this.typeArrayIndex = 0;

				setTimeout(this.typeText, this.typingSpeed + 1000);
			}
		}
	},
	created() {
		setTimeout(this.typeText, this.newTextDelay + 200);
	}
});
</script>

<style lang="scss">
.typist {
	font-family: open24, sans-serif;
	font-weight: normal;
	span.cursor {
		display: inline-block;
		margin-left: 3px;
		width: 4px;
		background-color: white;
		animation: cursorBlink 1s infinite;
	}

	span.cursor.typing {
		animation: none;
	}
}

@keyframes cursorBlink {
	49% {
		background-color: white;
	}
	50% {
		background-color: transparent;
	}
	99% {
		background-color: transparent;
	}
}
</style>
