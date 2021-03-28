<template class="typist">
	{{ typeValue }}
	<span class="cursor" :class="{ typing: isTyping }">&nbsp;</span>
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
			isTyping: false,
			typingSpeed: 60,
			erasingSpeed: 35,
			newTextDelay: 2000,
			typingArrayIndex: 0,
			charIndex: 0
		};
	},
	computed: {
		typingArray: function() {
			return this.toType.split("\n").map(element => element.trim());
		},
		currentString: function() {
			return this.typingArray[this.typingArrayIndex];
		}
	},
	methods: {
		typeText() {
			if (this.charIndex < this.currentString.length) {
				if (!this.isTyping) this.isTyping = true;
				this.typeValue += this.currentString.charAt(this.charIndex);
				this.charIndex += 1;
				setTimeout(this.typeText, this.typingSpeed);
			} else {
				this.isTyping = false;
				if (this.typingArrayIndex < this.typingArray.length - 1)
					setTimeout(this.eraseText, this.newTextDelay);
			}
		},
		eraseText() {
			if (this.charIndex > 0) {
				if (!this.isTyping) this.isTyping = true;
				this.typeValue = this.currentString.substring(0, this.charIndex - 1);
				this.charIndex -= 1;
				setTimeout(this.eraseText, this.erasingSpeed);
			} else {
				this.isTyping = false;
				this.typingArrayIndex += 1;
				if (this.typingArrayIndex >= this.typingArray.length)
					this.typingArrayIndex = 0;
				setTimeout(this.typeText, this.typingSpeed + 1000);
			}
		}
	},
	created() {
		setTimeout(this.typeText, 200);
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
