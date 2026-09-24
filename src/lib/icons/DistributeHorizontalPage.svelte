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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 1 15 C 1 10.3333 1 5.66667 1 1 C 5 1 9 1 13 1 C 13.6667 1.66667 14.3333 2.33333 15 3 C 15 7 15 11 15 15 C 10.3333 15 5.66667 15 1 15 Z M 2 14 C 6 14 10 14 14 14 C 14 10.6667 14 7.33333 14 4 C 13.3333 4 12.6667 4 12 4 C 12 3.33333 12 2.66667 12 2 C 8.66667 2 5.33333 2 2 2 C 2 6 2 10 2 14 Z M 3 12 C 3 9.33333 3 6.66667 3 4 C 4.33333 4 5.66667 4 7 4 C 7 6.66667 7 9.33333 7 12 C 5.66667 12 4.33333 12 3 12 Z M 9 12 C 9 9.33333 9 6.66667 9 4 C 9.66667 4 10.3333 4 11 4 C 11 4.33333 11 4.66667 11 5 C 10.6667 5 10.3333 5 10 5 C 10 7 10 9 10 11 C 10.6667 11 11.3333 11 12 11 C 12 9 12 7 12 5 C 12.3333 5 12.6667 5 13 5 C 13 7.33333 13 9.66667 13 12 C 11.6667 12 10.3333 12 9 12 Z M 4 11 C 4.66667 11 5.33333 11 6 11 C 6 9 6 7 6 5 C 5.33333 5 4.66667 5 4 5 C 4 7 4 9 4 11 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 19 C 3 13.6667 3 8.33333 3 3 C 7 3 11 3 15 3 C 16.3338 3.99938 17.6666 5.00013 19 6 C 19 10.3333 19 14.6667 19 19 C 13.6667 19 8.33333 19 3 19 Z M 4 18 C 8.66667 18 13.3333 18 18 18 C 18 14 18 10 18 6 C 17 6 16 6 15 6 C 15 5.33333 15 4.66667 15 4 C 11.3333 4 7.66667 4 4 4 C 4 8.66667 4 13.3333 4 18 Z M 5 15 C 5 12.3333 5 9.66667 5 7 C 6.66667 7 8.33333 7 10 7 C 10 9.66667 10 12.3333 10 15 C 8.33333 15 6.66667 15 5 15 Z M 12 15 C 12 12.3333 12 9.66667 12 7 C 13.6667 7 15.3333 7 17 7 C 17 9.66667 17 12.3333 17 15 C 15.3333 15 13.6667 15 12 15 Z M 6 14 C 7 14 8 14 9 14 C 9 12 9 10 9 8 C 8 8 7 8 6 8 C 6 10 6 12 6 14 Z M 13 14 C 14 14 15 14 16 14 C 16 12 16 10 16 8 C 15 8 14 8 13 8 C 13 10 13 12 13 14 Z"/>
		</svg>
	{/if}
