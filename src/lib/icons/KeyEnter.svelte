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
     d="M 7 2 L 7 7 L 2 7 L 2 14 L 14 14 L 14 2 L 7 2 z M 8 3 L 13 3 L 13 13 L 3 13 L 3 8 L 8 8 L 8 3 z M 11 4 L 11 10 L 8 10 L 8 9 L 5 10.5 L 8 12 L 8 11 L 12 11 L 12 4 L 11 4 z "
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
     d="M 9 3 L 9 4 L 9 10 L 3 10 L 3 11 L 3 19 L 4 19 L 19 19 L 19 18 L 19 3 L 10 3 L 9 3 z M 10 4 L 18 4 L 18 18 L 4 18 L 4 11 L 9 11 L 10 11 L 10 4 z M 15 5 L 15 14 L 11 14 L 11 12 L 8 14.5 L 11 17 L 11 15 L 16 15 L 16 14 L 16 5 L 15 5 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
