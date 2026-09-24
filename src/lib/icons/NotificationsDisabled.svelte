<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 22,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 22
	);
</script>

	{#if numericSize <= 19}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<circle cx="9.148" cy="2.5" r="0"/>
    <path class="ColorScheme-NegativeText" d="M 2,2.7071118 2.7071065,2 14,13.266998 13.292891,14 Z" fill="currentColor"/>
    <path d="m8 2a1 1 0 0 0-1 1 1 1 0 0 0 0.0136719 0.1699219 3 3 0 0 0-1.2734375 0.8632812l0.7070312 0.7070313a2 2 0 0 1 1.5527344-0.7402344 2 2 0 0 1 2 2c0 1.5854753 0.542693 2.6545091 1.371094 3.6640625l1.335937 1.3359375h0.292969v-1c-1.335506-1.335506-2-2.132154-2-4a3 3 0 0 0-2.015625-2.8300781 1 1 0 0 0 0.015625-0.1699219 1 1 0 0 0-1-1zm-3.0351562 4.671875c-0.149308 1.4098615-0.8014687 2.1647502-1.9648438 3.328125v1h6.2929688l-1-1h-2.2929688-1.6386719c0.673578-0.755548 1.182577-1.5239094 1.4433594-2.4882812l-0.8398437-0.8398438zm1.6230468 5.328125a1.5 1.5 0 0 0-0.0878906 0.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-0.0878906-0.5h-2.8242188z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 22 22"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path id="strikethrough" d="m4 4.707031 15.292969 15.292969.707031-.707031-15.2929688-15.292969z" fill="#da4453"/>
    <path d="m12 4a1 1 0 0 0-1 1 1 1 0 0 0 0.009766 0.128906 3.9999999 3.9999999 0 0 0-2.2402348 1.519532l0.7167969 0.716796a3 3 0 0 1 2.5136719-1.365234 3 3 0 0 1 3 3c0 3 0.585938 4 2.585938 6h-0.464844l1 1h0.878906v-1c-2-2-3-3-3-6a3.9999999 3.9999999 0 0 0-3.009766-3.871094 1 1 0 0 0 0.009766-0.128906 1 1 0 0 0-1-1zm-4.0527344 6.068359c-0.2253625 2.204726-1.2061347 3.19051-2.9472656 4.931641v1h8.878906l-1-1h-6.4648435c1.4796441-1.479644 2.1821771-2.415859 2.4492187-4.015625zm2.3222656 6.931641a2 2 0 0 0-0.2695312 1 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-0.271484-1z" class="ColorScheme-Text" fill="currentColor" fill-rule="evenodd"/>
		</svg>
	{/if}
