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
			<path class="ColorScheme-Text" d="m5 2v1h1v4h-1v-2l-3 3 3 3v-2h1v4h-1v1h2v-12h-2zm4 0v12h2v-1h-1v-4h1v2l3-3-3-3v2h-1v-4h1v-1h-2z" style="fill:currentColor;fill-opacity:1;stroke:none" />
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="m7 3v1h2v6h-2v-3l-4 4 4 4v-3h2v6h-2v1h3v-16h-3zm5 0v16h3v-1h-2v-6h2v3l4-4-4-4v3h-2v-6h2v-1h-3z"/>
		</svg>
	{/if}
