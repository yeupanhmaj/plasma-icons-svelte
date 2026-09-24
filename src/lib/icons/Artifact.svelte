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
       d="M 3 2 L 3 5 L 4 5 L 13 5 L 13 4 L 13 2 L 3 2 z M 4 3 L 12 3 L 12 4 L 4 4 L 4 3 z M 3 8 L 3 9 L 3 14 L 10 14 L 13 11 L 13 8 L 4 8 L 3 8 z M 4 9 L 12 9 L 12 10 L 9 10 L 9 13 L 4 13 L 4 9 z "
     class="ColorScheme-Text"
     />
 <path style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 2 6 L 2 7 L 4 7 L 4 6 L 2 6 z M 7 6 L 7 7 L 9 7 L 9 6 L 7 6 z M 12 6 L 12 7 L 14 7 L 14 6 L 12 6 z "
     class="ColorScheme-Accent"
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
     d="M 4 3 L 4 9 L 18 9 L 18 8 L 18 3 L 17 3 L 5 3 L 4 3 z M 5 4 L 17 4 L 17 8 L 5 8 L 5 4 z M 5 10 L 5 11 L 7 11 L 7 10 L 5 10 z M 10 10 L 10 11 L 12 11 L 12 10 L 10 10 z M 15 10 L 15 11 L 17 11 L 17 10 L 15 10 z M 4 12 L 4 13 L 4 19 L 5 19 L 13 19 L 14 19 L 18 15 L 18 13.59375 L 18 13 L 18 12 L 4 12 z M 5 13 L 17 13 L 17 14 L 13 14 L 13 15 L 13 18 L 5 18 L 5 13 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
