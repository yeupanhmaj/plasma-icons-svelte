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
       d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 3 4 L 13 4 L 13 13 L 3 13 L 3 4 z M 4 5 L 4 12 L 7 12 L 7 11 L 9 11 L 9 12 L 12 12 L 12 9 L 9 9 L 9 10 L 7 10 L 7 7 L 9 7 L 9 8 L 12 8 L 12 5 L 9 5 L 9 6 L 7 6 L 7 5 L 4 5 z M 10 6 L 11 6 L 11 7 L 10 7 L 10 6 z M 10 10 L 11 10 L 11 11 L 10 11 L 10 10 z "
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
    d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 7 L 18 7 L 18 18 L 4 18 L 4 7 z M 5 8 L 5 17 L 9 17 L 9 15 L 13 15 L 13 16.900391 L 17 16.900391 L 17 12.900391 L 13 12.900391 L 13 14 L 9 14 L 9 10 L 13 10 L 13 12 L 17 12 L 17 8 L 13 8 L 13 9 L 9 9 L 9 8 L 5 8 z M 14 9 L 16 9 L 16 11 L 14 11 L 14 9 z M 14 13.900391 L 16 13.900391 L 16 15.900391 L 14 15.900391 L 14 13.900391 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
