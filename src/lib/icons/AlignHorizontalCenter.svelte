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
       d="M 7.5 2 L 7.5 3 L 5 3 L 5 7 L 7.5 7 L 7.5 9 L 3 9 L 3 13 L 7.5 13 L 7.5 14 L 8.5 14 L 8.5 13 L 13 13 L 13 9 L 8.5 9 L 8.5 7 L 11 7 L 11 3 L 8.5 3 L 8.5 2 L 7.5 2 z M 6 4 L 10 4 L 10 6 L 6 6 L 6 4 z M 4 10 L 12 10 L 12 12 L 4 12 L 4 10 z "
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
 d="m10.5 3v1h-2.5v1 3 1h2.5v4h-5.5v1 4h1 4.5v1h1v-1h5.5v-1-3-1h-5.5v-4h1.5 1v-1-3-1h-1-1.5v-1h-1m-1.5 2h4v3h-4v-3m-3 9h10v3h-10v-3"
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="m15 4v2h-4v8h4v4h-8v8h8v2h2v-2h8v-8h-8v-4h4v-8h-4v-2zm-3 3h8v6h-8zm-4 12h16v6h-16z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
