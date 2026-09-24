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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 15 15 C 15 11 15 7 15 3 C 14.3333 2.33333 13.6667 1.66667 13 1 C 9 1 5 1 1 1 C 1 5.66667 1 10.3333 1 15 C 5.66667 15 10.3333 15 15 15 Z M 14 14 C 10 14 6 14 2 14 C 2 10 2 6 2 2 C 5.33333 2 8.66667 2 12 2 C 12 2.66667 12 3.33333 12 4 C 12.6667 4 13.3333 4 14 4 C 14 7.33333 14 10.6667 14 14 Z M 12 13 C 12 11.6667 12 10.3333 12 9 C 9.33333 9 6.66667 9 4 9 C 4 10.3333 4 11.6667 4 13 C 6.66667 13 9.33333 13 12 13 Z M 11 12 C 9 12 7 12 5 12 C 5 11.3333 5 10.6667 5 10 C 7 10 9 10 11 10 C 11 10.6667 11 11.3333 11 12 Z M 12 7 C 12 6.33333 12 5.66667 12 5 C 11.6667 5 11.3333 5 11 5 C 11 5.33333 11 5.66667 11 6 C 9 6 7 6 5 6 C 5 5.33333 5 4.66667 5 4 C 7 4 9 4 11 4 C 11 3.66667 11 3.33333 11 3 C 8.66667 3 6.33333 3 4 3 C 4 4.33333 4 5.66667 4 7 C 6.66667 7 9.33333 7 12 7 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 19 C 8.33333 19 13.6667 19 19 19 C 19 15 19 11 19 7 C 18.0006 5.66621 16.9999 4.33343 16 3 C 11.6667 3 7.33333 3 3 3 C 3 8.33333 3 13.6667 3 19 Z M 4 18 C 4 13.3333 4 8.66667 4 4 C 8 4 12 4 16 4 C 16 5 16 6 16 7 C 16.6667 7 17.3333 7 18 7 C 18 10.6667 18 14.3333 18 18 C 13.3333 18 8.66667 18 4 18 Z M 7 17 C 9.66667 17 12.3333 17 15 17 C 15 15.3333 15 13.6667 15 12 C 12.3333 12 9.66667 12 7 12 C 7 13.6667 7 15.3333 7 17 Z M 7 10 C 9.66667 10 12.3333 10 15 10 C 15 8.33333 15 6.66667 15 5 C 12.3333 5 9.66667 5 7 5 C 7 6.66667 7 8.33333 7 10 Z M 8 16 C 8 15 8 14 8 13 C 10 13 12 13 14 13 C 14 14 14 15 14 16 C 12 16 10 16 8 16 Z M 8 9 C 8 8 8 7 8 6 C 10 6 12 6 14 6 C 14 7 14 8 14 9 C 12 9 10 9 8 9 Z"/>
		</svg>
	{/if}
