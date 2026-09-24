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
       d="M 2 2 L 2 14 L 3 14 L 5 14 L 5 13 L 3 13 L 3 3 L 5 3 L 5 2 L 3 2 L 2 2 z M 11 2 L 11 3 L 13 3 L 13 13 L 11 13 L 11 14 L 13 14 L 14 14 L 14 2 L 13 2 L 11 2 z M 4 10 L 4 11 L 4 12 L 12 12 L 12 11 L 12 10 L 11 10 L 11 11 L 5 11 L 5 10 L 4 10 z "
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
     d="M 2 3 L 2 19 L 3 19 L 5 19 L 5 18 L 3 18 L 3 4 L 5 4 L 5 3 L 3 3 L 2 3 z M 16 3 L 16 4 L 18 4 L 18 18 L 16 18 L 16 19 L 18 19 L 19 19 L 19 3 L 18 3 L 16 3 z M 5 14 L 5 15 L 5 16 L 16 16 L 16 15 L 16 14 L 15 14 L 15 15 L 6 15 L 6 14 L 5 14 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
