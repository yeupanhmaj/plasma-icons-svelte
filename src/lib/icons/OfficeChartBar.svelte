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
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 2 2 L 2 14 L 14 14 L 14 13 L 13 13 L 13 8 L 9 8 L 9 13 L 8 13 L 8 2 L 4 2 L 4 13 L 3 13 L 3 2 L 2 2 z M 5 3 L 7 3 L 7 13 L 5 13 L 5 3 z M 10 9 L 12 9 L 12 13 L 10 13 L 10 9 z "
     class="ColorScheme-Text"/>
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
     d="M 4 3 L 4 9 L 4 10 L 4 15 L 4 16 L 4 17 L 3 17 L 3 18 L 4 18 L 4 19 L 5 19 L 5 18 L 19 18 L 19 17 L 16 17 L 16 8 L 15 8 L 12 8 L 12 17 L 10 17 L 10 7 L 10 4 L 10 3 L 6 3 L 6 17 L 5 17 L 5 16 L 5 15 L 5 12 L 5 11 L 5 10 L 5 9 L 5 6 L 5 5.9921875 L 5 5 L 5 3 L 4 3 z M 7 4 L 9 4 L 9 17 L 7 17 L 7 4 z M 13 9 L 15 9 L 15 17 L 13 17 L 13 9 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
