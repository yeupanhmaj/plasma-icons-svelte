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
     d="M 2 2 L 2 3 L 2 8 L 3 8 L 6 8 L 6 10 L 6 11 L 9 14 L 9 11 L 13 11 L 14 11 L 14 6 L 14 5 L 13 5 L 10 5 L 10 2 L 3 2 L 2 2 z M 3 3 L 9 3 L 9 5 L 9 6 L 9 7 L 7 7 L 6 7 L 3 7 L 3 3 z M 10 6 L 13 6 L 13 10 L 8 10 L 7 10 L 7 8 L 8 8 L 8 10 L 10 8 L 10 7 L 10 6 z "
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
	d="M 3 3 L 3 11 L 8 11 L 8 15 L 12 19 L 12 15 L 19 15 L 19 7 L 14 7 L 14 3 L 3 3 z M 4 4 L 13 4 L 13 7 L 13 8 L 13 10 L 9 10 L 8 10 L 4 10 L 4 4 z M 14 8 L 18 8 L 18 14 L 11 14 L 9 14 L 9 11 L 11 11 L 11 14 L 14 11 L 14 8 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
