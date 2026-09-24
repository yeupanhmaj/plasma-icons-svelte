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
     d="M 4 3 L 4 5 L 2 5 L 2 6 L 4 6 L 4 8 L 7 8 L 7 7 L 5 7 L 5 4 L 7 4 L 7 3 L 5 3 L 4 3 z M 9 3 L 9 4 L 11 4 L 11 7 L 9 7 L 9 8 L 12 8 L 12 6 L 14 6 L 14 5 L 12 5 L 12 3 L 11 3 L 9 3 z M 7 5 L 7 6 L 9 6 L 9 5 L 7 5 z M 11 9 L 11 11 L 9 11 L 9 12 L 11 12 L 11 14 L 12 14 L 12 12 L 14 12 L 14 11 L 12 11 L 12 9 L 11 9 z "
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
     d="M 6 3 L 6 5 L 3 5 L 3 6 L 6 6 L 6 8 L 10 8 L 10 7 L 7 7 L 7 4 L 10 4 L 10 3 L 6 3 z M 12 3 L 12 4 L 15 4 L 15 7 L 12 7 L 12 8 L 16 8 L 16 6 L 19 6 L 19 5 L 16 5 L 16 3 L 12 3 z M 10 5 L 10 6 L 12 6 L 12 5 L 10 5 z M 16 14 L 16 16 L 14 16 L 14 17 L 16 17 L 16 19 L 17 19 L 17 17 L 19 17 L 19 16 L 17 16 L 17 14 L 16 14 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
