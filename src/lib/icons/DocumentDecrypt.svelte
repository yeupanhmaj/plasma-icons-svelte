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
     d="M 8 2 C 6.3431375 2 5 3.3431371 5 5 L 5 6 L 6 6 L 6 5 C 6 3.8954305 6.8954305 3 8 3 C 9.1045695 3 10 3.8954305 10 5 L 10 8 L 7 8 L 6 8 L 5 8 L 3 8 L 3 14 L 13 14 L 13 8 L 11 8 L 11 5 C 11 3.3431371 9.6568625 2 8 2 z M 4 9 L 12 9 L 12 13 L 4 13 L 4 9 z "
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
   d="m11 3c-2.216 0-4 1.784-4 4v1h1v-.5c0-1.939 1.338-3.5 3-3.5 1.662 0 3 1.561 3 3.5v3.5h-5-1-1-1-1v1 7h1 10 1v-8h-1-1v-4c0-2.216-1.784-4-4-4m-5 9h10v6h-10v-6"
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
     d="M 6 4 L 6 28 L 15 28 L 15 27 L 7 27 L 7 5 L 18 5 L 18 12 L 25 12 L 25 15 L 26 15 L 26 11 L 19 4 L 18 4 L 6 4 z M 21 16 C 19.343 16 18 17.343 18 19 L 18 20 L 19 20 L 19 19 C 19 17.895 19.895 17 21 17 C 22.105 17 23 17.895 23 19 L 23 22 L 16 22 L 16 28 L 26 28 L 26 22 L 24 22 L 24 19 C 24 17.343 22.657 16 21 16 z M 17 23 L 25 23 L 25 27 L 17 27 L 17 23 z "
     id="path109" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
