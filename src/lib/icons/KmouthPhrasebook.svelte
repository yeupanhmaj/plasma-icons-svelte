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
     d="M 5 2 L 5 5 L 2 5 L 2 11 L 5 14 L 5 11 L 10 11 L 10 8 L 11 8 L 11 11 L 14 8 L 14 2 L 5 2 z M 6 3 L 13 3 L 13 7 L 6 7 L 6 3 z M 3 6 L 5 6 L 5 8 L 9 8 L 9 10 L 3 10 L 3 6 z "
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
     d="M 7 4 L 7 7 L 3 7 L 3 15 L 6 18 L 6 15 L 15 15 L 15 12 L 16 12 L 16 15 L 19 12 L 19 4 L 7 4 z M 8 5 L 18 5 L 18 11 L 15 11 L 14 11 L 8 11 L 8 8 L 8 7 L 8 5 z M 4 8 L 7 8 L 7 12 L 14 12 L 14 14 L 4 14 L 4 8 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
