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
     d="M 3 2 L 3 6 L 2 6 L 2 9 L 3 9 L 3 14 L 4 14 L 4 9 L 5 9 L 5 6 L 4 6 L 4 2 L 3 2 z M 8 6 L 8 7 L 8 8 L 8 9 L 11 9 L 11 8 L 14 8 L 14 7 L 11 7 L 11 6 L 8 6 z M 6 7 L 6 8 L 7 8 L 7 7 L 6 7 z "
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
     d="M 4 3 L 4 10 L 3 10 L 3 13 L 4 13 L 4 19 L 5 19 L 5 13 L 6 13 L 6 10 L 5 10 L 5 3 L 4 3 z M 11 10 L 11 13 L 14 13 L 14 12 L 19 12 L 19 11 L 14 11 L 14 10 L 11 10 z M 7 11 L 7 12 L 8 12 L 8 11 L 7 11 z M 9 11 L 9 12 L 10 12 L 10 11 L 9 11 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
