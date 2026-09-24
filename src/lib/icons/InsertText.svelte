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
     d="M 2 2 L 2 3 L 2 5 L 3 5 L 3 3 L 7 3 L 7 12 L 6 12 L 6 13 L 9 13 L 9 12 L 8 12 L 8 3 L 12 3 L 12 5 L 13 5 L 13 2 L 3 2 L 2 2 z M 12 9 L 12 11 L 10 11 L 10 12 L 12 12 L 12 14 L 13 14 L 13 12 L 15 12 L 15 11 L 13 11 L 13 9 L 12 9 z "
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
     d="M 3 3 L 3 4 L 3 6 L 4 6 L 4 4 L 8 4 L 8 13 L 7 13 L 7 14 L 10 14 L 10 13 L 9 13 L 9 4 L 13 4 L 13 6 L 14 6 L 14 3 L 4 3 L 3 3 z M 16 14 L 16 16 L 14 16 L 14 17 L 16 17 L 16 19 L 17 19 L 17 17 L 19 17 L 19 16 L 17 16 L 17 14 L 16 14 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
