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
       d="M 2 2 L 2 5 L 2 14 L 3 14 L 8 14 L 9 14 L 9 13 L 8 13 L 3 13 L 3 5 L 13 5 L 13 7 L 14 7 L 14 2 L 3 2 L 2 2 z M 8.6875 2.5 L 10.34375 3.59375 L 12 2.5 L 12.6875 2.9375 L 10.6875 4.25 L 10.34375 4.5 L 10 4.25 L 8 2.9375 L 8.6875 2.5 z M 4 6 L 4 8 L 4 10 L 4 12 L 6 12 L 7 12 L 7 11 L 7 10 L 7 8 L 7 7 L 7 6 L 6 6 L 4 6 z M 8 7 L 8 8 L 9 8 L 9 7 L 8 7 z M 12 7 L 9 11.082031 L 11 11 L 11 14 L 14 10 L 12 10 L 12 7 z "
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
    d="M 3 3 L 3 19 L 4 19 L 7 19 L 8 19 L 13 19 L 14 19 L 14 18 L 13 18 L 8 18 L 7 18 L 4 18 L 4 7 L 18 7 L 18 12 L 19 12 L 19 3 L 18 3 L 4 3 L 3 3 z M 14.625 4 L 16 4.8125 L 17.375 4 L 18 4.8125 L 16.3125 5.8125 L 16 6 L 15.6875 5.8125 L 14 4.8125 L 14.625 4 z M 7 8 C 5.895431 8 5 8.8954 5 10 C 5 11.1046 5.895431 12 7 12 C 8.104569 12 9 11.1046 9 10 C 9 8.8954 8.104569 8 7 8 z M 7 9 C 7.552285 9 8 9.4477 8 10 C 8 10.5523 7.552285 11 7 11 C 6.447715 11 6 10.5523 6 10 C 6 9.4477 6.447715 9 7 9 z M 11 10 L 11 11 L 17 11 L 17 10 L 11 10 z M 17 12 L 14 16.083984 L 16 16 L 16 19 L 19 15 L 17 15 L 17 12 z M 5 13 L 5 17 L 8 17 L 9 17 L 9 16 L 9 13 L 5 13 z M 6 14 L 8 14 L 8 16 L 6 16 L 6 14 z M 11 15 L 11 16 L 13 16 L 13 15 L 11 15 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
