<template class="typist">
	{{ typeValue }}
	<span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
</template>

<script>
import { setTimeout } from "timers";

export default {
	props: {
		titles: {
			type: Array,
			required: true
		}
	},
	data: function() {
		return {
			typeValue: "",
			typeStatus: false,
			typingSpeed: 100,
			erasingSpeed: 35,
			newTextDelay: 2000,
			typeArrayIndex: 0,
			charIndex: 0
		};
	},
	computed: {
		typeArray: function() {
			return this.titles;
		}
	},
	methods: {
		typeText() {
			if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
				if (!this.typeStatus) this.typeStatus = true;

				this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
					this.charIndex
				);
				this.charIndex += 1;

				setTimeout(this.typeText, this.typingSpeed);
			} else {
				this.typeStatus = false;
				setTimeout(this.eraseText, this.newTextDelay);
			}
		},
		eraseText() {
			if (this.charIndex > 0) {
				if (!this.typeStatus) this.typeStatus = true;

				this.typeValue = this.typeArray[this.typeArrayIndex].substring(
					0,
					this.charIndex - 1
				);
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
};
</script>

<style lang="scss">
.typist {
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
