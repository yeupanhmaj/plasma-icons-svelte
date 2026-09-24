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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 2 L 3 14 L 8 14 L 8 13 L 4 13 L 4 3 L 9 3 L 9 6 L 12 6 L 12 7 L 13 7 L 13 5 L 10 2 L 3 2 Z M 11.5 8 C 10.6716 8 10 8.67157 10 9.5 L 10 11 L 9 11 L 9 14 L 14 14 L 14 11 L 13 11 L 13 9.5 C 13 8.67157 12.3284 8 11.5 8 Z M 11.5 9 C 11.7761 9 12 9.22386 12 9.5 L 12 11 L 11 11 L 11 9.5 C 11 9.22386 11.2239 9 11.5 9 Z"/>
		</svg>
	{:else if numericSize <= 27}
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4 3 L 4 4 L 4 11 L 4 13 L 6 13 L 6 11 L 5 11 L 5 4 L 13 4 L 13 8 L 17 8 L 17 11 L 18 11 L 18 7 L 14 3 L 5 3 L 4 3 Z M 8 11 L 8 13 L 10 13 L 10 11 L 8 11 Z M 15.5 13 C 14.669 13 14 13.669 14 14.5 L 14 16 L 13 16 L 13 19 L 18 19 L 18 16 L 17 16 L 17 14.5 C 17 13.669 16.331 13 15.5 13 Z M 6 14 L 6 16 L 8 16 L 8 14 L 6 14 Z M 15.5 14 C 15.777 14 16 14.223 16 14.5 L 16 16 L 15 16 L 15 14.5 C 15 14.223 15.223 14 15.5 14 Z M 4 17 L 4 19 L 5 19 L 6 19 L 6 17 L 4 17 Z M 8 17 L 8 19 L 10 19 L 10 17 L 8 17 Z"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 6 4 L 6 16 L 7 16 L 7 5 L 18 5 L 18 12 L 25 12 L 25 16 L 26 16 L 26 11 L 19 4 L 6 4 Z M 21 16 C 19.343 16 18 17.343 18 19 L 18 22 L 16 22 L 16 28 L 26 28 L 26 22 L 24 22 L 24 19 C 24 17.343 22.657 16 21 16 Z M 9 17 L 9 19 L 11 19 L 11 17 L 9 17 Z M 21 17 C 22.105 17 23 17.895 23 19 L 23 22 L 19 22 L 19 19 C 19 17.895 19.895 17 21 17 Z M 6 20 L 6 22 L 8 22 L 8 20 L 6 20 Z M 12 20 L 12 22 L 14 22 L 14 20 L 12 20 Z M 9 23 L 9 25 L 11 25 L 11 23 L 9 23 Z M 6 26 L 6 28 L 8 28 L 8 26 L 6 26 Z M 12 26 L 12 28 L 14 28 L 14 26 L 12 26 Z"/>
		</svg>
	{/if}
