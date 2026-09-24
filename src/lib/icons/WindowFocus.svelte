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
			<path style="fill:currentColor;fill-opacity:1;stroke:none"
     d="m2 2v3h1v-2h2v-1zm9 0v1h2v2h1v-3zm-7 2v8h8v-8zm1 2h6v5h-6zm-3 5v3h3v-1h-2v-2zm12 0h-1v2h-2v1h3z"
     class="ColorScheme-Text"/>
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
			<path d="m3 3v4h1v-3h3v-1h-4m12 0v1h3v3h1v-4zm-9 3v10h10v-10m-9 3h8v6h-8m-4 0v4h4v-1h-3v-3h-1m15 0v3h-3v1h4v-4h-1" style="fill:currentColor" class="ColorScheme-Text"/>
		</svg>
	{/if}
