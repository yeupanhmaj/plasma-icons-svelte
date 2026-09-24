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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="m2 2v12h2v-1h-1v-5-5h1v-1h-2zm1 6 3 3v-2h1v-2h-1v-2l-3 3zm9-6v1h1v5 5h-1v1h2v-12h-2zm1 6-3-3v2h-1v2h1v2l3-3z"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" d="m3 3v16h3v-1h-2v-7-7h2v-1h-3zm1 8 4 4v-3h2v-2h-2v-3l-4 4zm12-8v1h2v7 7h-2v1h3v-16h-3zm2 8-4-4v3h-2v2h2v3l4-4z" class="ColorScheme-Text"/>
		</svg>
	{/if}
