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
       d="M 5 2 L 5 3 L 3 3 L 3 14 L 7 14 L 8 14 L 12 14 L 13 14 L 13 13 L 13 9 L 13 3 L 11 3 L 11 2 L 5 2 z M 4 4 L 5 4 L 5 5 L 11 5 L 11 4 L 12 4 L 12 6 L 12 12 L 12 13 L 8 13 L 7 13 L 4 13 L 4 12 L 4 6 L 4 4 z M 5 7 L 5 8 L 10 8 L 10 7 L 5 7 z M 5 10 L 5 11 L 8 11 L 8 10 L 5 10 z "
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
     d="M 7 3 L 7 5 L 5 5 L 4 5 L 4 19 L 5 19 L 18 19 L 18 18 L 18 5 L 17 5 L 15 5 L 15 3 L 7 3 z M 5 6 L 6 6 L 6 8 L 16 8 L 16 6 L 17 6 L 17 18 L 5 18 L 5 6 z M 7 9 L 7 10 L 15 10 L 15 9 L 7 9 z M 7 12 L 7 13 L 13 13 L 13 12 L 7 12 z M 7 15 L 7 16 L 10 16 L 10 15 L 7 15 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
