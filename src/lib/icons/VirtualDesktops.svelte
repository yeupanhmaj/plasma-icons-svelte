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
			<path d="m2 3v4h5v-4h-5zm7 0v4h5v-4h-5zm-6 1h2v1h-2v-1zm-1 5v4h5v-4h-5zm7 0v4h5v-4h-5zm2 2h2v1h-2v-1z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="m3 4v6h7v-6zm9 0v6h7v-6zm-8 1h3v2h-3zm-1 7v6h7v-6zm9 0v6h7v-6zm3 3h3v2h-3z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
