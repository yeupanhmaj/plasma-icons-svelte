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
     d="m2 2v2c5.523 0 10 4.477 10 10h2c0-6.627-5.373-12-12-12m0 4v2c3.314 0 6 2.686 6 6h2c0-4.418-3.582-8-8-8m1.5 5c-.828 0-1.5.672-1.5 1.5 0 .828.672 1.5 1.5 1.5.828 0 1.5-.672 1.5-1.5 0-.828-.672-1.5-1.5-1.5"
     class="ColorScheme-Text"
     />
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
    d="m3 3v2a13.999998 13.999998 0 0 1 14 14h2a15.999998 15.999998 0 0 0 -16 -16m0 4v2a10 10 0 0 1 10 10h2a12 12 0 0 0 -12 -12m0 4v2a6 5.999987 0 0 1 6 6h2a8 7.999983 0 0 0 -8 -8m1.5 5a1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5 -1.5 1.5 1.5 0 0 0 -1.5 -1.5"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
