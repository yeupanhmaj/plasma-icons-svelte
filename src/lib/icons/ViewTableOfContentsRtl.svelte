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
       d="M 2 3 L 2 4 L 3 4 L 3 6 L 2 6 L 2 7 L 5 7 L 5 6 L 4 6 L 4 4 L 5 4 L 5 3 L 2 3 z M 8 3 L 8 4 L 14 4 L 14 3 L 8 3 z M 6 5 L 6 6 L 7 6 L 7 5 L 6 5 z M 8 5 L 8 6 L 9 6 L 9 5 L 8 5 z M 10 5 L 10 6 L 11 6 L 11 5 L 10 5 z M 2 9 L 2 10 L 3 10 L 3 12 L 2 12 L 2 13 L 4 13 L 5 13 L 7 13 L 7 12 L 6 12 L 6 10 L 7 10 L 7 9 L 5 9 L 4 9 L 2 9 z M 10 9 L 10 10 L 14 10 L 14 9 L 10 9 z M 4 10 L 5 10 L 5 12 L 4 12 L 4 10 z M 8 11 L 8 12 L 9 12 L 9 11 L 8 11 z M 10 11 L 10 12 L 11 12 L 11 11 L 10 11 z M 12 11 L 12 12 L 13 12 L 13 11 L 12 11 z "
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
    d="M 3 2.9980469 L 3 3.9980469 L 13 3.9980469 L 13 2.9980469 L 3 2.9980469 z M 16 3 L 16 4 L 17 4 L 17 6 L 16 6 L 16 7 L 17 7 L 18 7 L 19 7 L 19 6 L 18 6 L 18 4 L 19 4 L 19 3 L 18 3 L 17 3 L 16 3 z M 3 4.9980469 L 3 5.9980469 L 9 5.9980469 L 9 4.9980469 L 3 4.9980469 z M 10 4.9980469 L 10 5.9980469 L 11 5.9980469 L 11 4.9980469 L 10 4.9980469 z M 12 4.9980469 L 12 5.9980469 L 13 5.9980469 L 13 4.9980469 L 12 4.9980469 z M 14 4.9980469 L 14 5.9980469 L 15 5.9980469 L 15 4.9980469 L 14 4.9980469 z M 3 8.9980469 L 3 9.9980469 L 11 9.9980469 L 11 8.9980469 L 3 8.9980469 z M 14 9 L 14 10 L 15 10 L 15 12 L 14 12 L 14 13 L 19 13 L 19 12 L 18 12 L 18 10 L 19 10 L 19 9 L 14 9 z M 16 10 L 17 10 L 17 12 L 16 12 L 16 10 z M 3 10.998047 L 3 11.998047 L 7 11.998047 L 7 10.998047 L 3 10.998047 z M 8 10.998047 L 8 11.998047 L 9 11.998047 L 9 10.998047 L 8 10.998047 z M 10 10.998047 L 10 11.998047 L 11 11.998047 L 11 10.998047 L 10 10.998047 z M 12 10.998047 L 12 11.998047 L 13 11.998047 L 13 10.998047 L 12 10.998047 z M 3 14.998047 L 3 15.998047 L 10 15.998047 L 10 14.998047 L 3 14.998047 z M 12 15 L 12 16 L 13 16 L 13 18 L 12 18 L 12 19 L 13 19 L 14 19 L 15 19 L 19 19 L 19 18 L 18 18 L 18 16 L 19 16 L 19 15 L 15 15 L 14 15 L 13 15 L 12 15 z M 14 16 L 15 16 L 15 18 L 14 18 L 14 16 z M 16 16 L 17 16 L 17 18 L 16 18 L 16 16 z M 3 16.998047 L 3 17.998047 L 5 17.998047 L 5 16.998047 L 3 16.998047 z M 6 16.998047 L 6 17.998047 L 7 17.998047 L 7 16.998047 L 6 16.998047 z M 8 16.998047 L 8 17.998047 L 9 17.998047 L 9 16.998047 L 8 16.998047 z M 10 16.998047 L 10 17.998047 L 11 17.998047 L 11 16.998047 L 10 16.998047 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
