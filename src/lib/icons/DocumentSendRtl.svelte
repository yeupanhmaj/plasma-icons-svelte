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
			<path class="ColorScheme-Text" d="m15 2-3 6 3 6-14-6zm-2.115234 1.9960938-9.34375 4.0039062 9.34375 4.003906-2.001953-4.003906z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m2 2 18 8-4 3v7l-4-3.5-5 3.5zm2.859375 2.8828125 10.140625 13.117188v-5.150391zm2.228516 0.4804687 8.511718 6.6874998 2.417969-1.814453zm-3 0.4199219 3.46875 12.490235 3.572265-2.632813z" fill="currentColor"/>
		</svg>
	{/if}
