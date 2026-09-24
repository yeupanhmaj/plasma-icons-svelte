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
       d="M 2 2 L 2 7 L 7 7 L 7 2 L 2 2 z M 9 2 L 9 7 L 14 7 L 14 2 L 9 2 z M 3 3 L 6 3 L 6 6 L 3 6 L 3 3 z M 2 9 L 2 14 L 7 14 L 7 9 L 2 9 z M 9 9 L 9 14 L 14 14 L 14 9 L 9 9 z M 10 10 L 13 10 L 13 13 L 10 13 L 10 10 z "
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
     d="M 3 3 L 3 10 L 10 10 L 10 3 L 3 3 z M 12 3 L 12 10 L 19 10 L 19 3 L 12 3 z M 4 4 L 9 4 L 9 9 L 4 9 L 4 4 z M 3 12 L 3 19 L 10 19 L 10 12 L 3 12 z M 12 12 L 12 19 L 19 19 L 19 12 L 12 12 z M 13 13 L 18 13 L 18 18 L 13 18 L 13 13 z "
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
     d="M 4 4 L 4 14 L 14 14 L 14 4 L 4 4 z M 18 4 L 18 14 L 28 14 L 28 4 L 18 4 z M 5 5 L 13 5 L 13 13 L 5 13 L 5 5 z M 4 18 L 4 28 L 14 28 L 14 18 L 4 18 z M 18 18 L 18 28 L 28 28 L 28 18 L 18 18 z M 19 19 L 27 19 L 27 27 L 19 27 L 19 19 z "
     id="path41" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
