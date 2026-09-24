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
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 3 2 L 3 14 L 6 14 L 6 13 L 4 13 L 4 3 L 9 3 L 9 6 L 12 6 L 12 8 L 13 8 L 13 5 L 10 2 L 9 2 L 3 2 z M 7 8 L 7 14 L 13 14 L 13 9 L 11 9 L 10 8 L 7 8 z M 8 10 L 12 10 L 12 13 L 8 13 L 8 10 z "
     class="ColorScheme-Text"/>
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
    d="M 4 3 L 4 19 L 9 19 L 9 18 L 5 18 L 5 4 L 13 4 L 13 8 L 17 8 L 17 11 L 18 11 L 18 7 L 14 3 L 14 3 L 14 3 L 5 3 L 4 3 z M 10 12 L 10 19 L 18 19 L 18 13 L 15 13 L 14 12 L 14 12 L 14 12 L 10 12 z M 13.1 14 L 17 14 L 17 18 L 11 18 L 11 15 L 12 15 L 13.1 14 z "
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
     d="M 6 4 L 6 28 L 13 28 L 13 27 L 7 27 L 7 5 L 18 5 L 18 12 L 25 12 L 25 16 L 26 16 L 26 11 L 19 4 L 18 4 L 6 4 z M 14 16 L 14 17 L 14 20 L 14 21 L 14 27 L 14 28 L 26 28 L 26 27 L 26 20 L 26 19 L 26 18 L 21 18 L 19 16 L 19 16 L 19 16 L 15 16 L 14 16 z M 15 17 L 18.6 17 L 19.6 18 L 19 18 L 19 18 L 19 18 L 17 20 L 15 20 L 15 17 z M 15 21 L 25 21 L 25 27 L 15 27 L 15 21 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
