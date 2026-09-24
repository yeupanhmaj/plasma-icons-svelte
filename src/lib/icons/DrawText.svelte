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
			<path d="M3 4h1v8H3zm1 8h8v1H4zm8-8h1v8h-1zM4 3h8v1H4zm8-1h2v2h-2zM2 2h2v2H2zm0 10h2v2H2zm10 0h2v2h-2zM5 5h6v2H5zm2 2h2v4H7z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
	d="m3 3v3h1v10h-1v3h3v-1h10v1h3v-3h-1v-10h1v-3h-3v1h-10v-1h-3m1 1h1v1h-1v-1m13 0h1v1h-1v-1m-11 1h10v1h1v10h-1v1h-10v-1h-1v-10h1v-1m0 2v2h4v7h2v-7h4v-2h-10m-2 10h1v1h-1v-1m13 0h1v1h-1v-1"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
