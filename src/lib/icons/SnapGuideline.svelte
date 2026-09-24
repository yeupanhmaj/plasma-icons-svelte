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
     d="M 2 2 L 2 6 L 5 4 L 2 2 z M 5 4 L 5 7 L 4 7 L 4 10 L 5 10 L 5 14 L 6 14 L 6 10 L 7 10 L 7 7 L 6 7 L 6 4 L 6 2 L 5 2 L 5 4 z M 6 4 L 9 6 L 9 2 L 6 4 z M 10 7 L 10 10 L 11 10 L 11 14 L 12 14 L 12 10 L 13 10 L 13 7 L 10 7 z M 8 8 L 8 9 L 9 9 L 9 8 L 8 8 z "
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
     d="M 6 3 L 6 10 L 5 10 L 5 13 L 6 13 L 6 19 L 7 19 L 7 13 L 8 13 L 8 10 L 7 10 L 7 3 L 6 3 z M 3 4 L 3 8 L 5 6 L 3 4 z M 10 4 L 8 6 L 10 8 L 10 4 z M 16 10 L 16 13 L 17 13 L 17 19 L 18 19 L 18 13 L 19 13 L 19 10 L 16 10 z M 10 11 L 10 12 L 11 12 L 11 11 L 10 11 z M 12 11 L 12 12 L 13 12 L 13 11 L 12 11 z M 14 11 L 14 12 L 15 12 L 15 11 L 14 11 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
