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
       d="M 3 2 L 3 3 L 3 4 L 2 4 L 2 6 L 3 6 L 3 10 L 2 10 L 2 12 L 3 12 L 3 13.5 L 3 14 L 14 14 L 14 13 L 14 3 L 14 2 L 3 2 z M 4 3 L 5 3 L 5 13 L 4 13 L 4 3 z M 6 3 L 13 3 L 13 13 L 6 13 L 6 3 z "
     class="ColorScheme-Text"
     />
		</svg>
	{:else if numericSize <= 27}
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
     d="m5 3v1 1h-2v3h2v6h-2v3h2v2h1 13v-1-14-1h-14m1 1h2v14h-2v-14m3 0h9v14h-9v-14"
	 class="ColorScheme-Text"
     />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m7 4v2h-3v6h3v8h-3v6h3v2h21v-24zm1 1h4v22h-4zm5 0h14v22h-14z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
