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
			<path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 9 5 L 11 5 L 11 7 L 13 7 L 13 8 L 14 8 L 14 6 L 12 4 L 8 4 L 9 5 Z M 6 14 L 9 14 L 9 13 L 7 13 L 7 12 L 6 12 L 6 14 Z M 10.707 9.03 L 10 9.737 L 11.793 11.53 L 10 13.323 L 10.707 14.03 L 12.5 12.237 L 14.293 14.03 L 15 13.323 L 13.207 11.53 L 15 9.737 L 14.293 9.03 L 12.5 10.823 L 10.707 9.03 Z" class="ColorScheme-NegativeText"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 9 5 L 6 2 L 1 2 L 1 12 L 9 12 L 9 5 Z M 8 11 L 2 11 L 2 3 L 5 3 L 5 6 L 8 6 L 8 11 Z" class="ColorScheme-Text"/>
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
			<path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 13 6 L 15 6 L 15 10 L 19 10 L 19 13 L 20 13 L 20 9 L 16 5 L 12 5 L 13 6 Z M 8 19 L 13 19 L 13 18 L 9 18 L 9 17 L 8 17 L 8 19 Z M 15.707 14 L 15 14.707 L 16.793 16.5 L 15 18.293 L 15.707 19 L 17.5 17.207 L 19.293 19 L 20 18.293 L 18.207 16.5 L 20 14.707 L 19.293 14 L 17.5 15.793 L 15.707 14 Z" class="ColorScheme-NegativeText"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 13 16 L 3 16 L 3 4 L 9 4 L 9 8 L 13 8 L 13 16 Z M 14 11 L 14 7 L 10 3 L 2 3 L 2 17 L 14 17 L 14 11 Z" class="ColorScheme-Text"/>
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
			<path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 21 20.707 L 24.293 24 L 21 27.293 C 21.013 27.318 21.707 28 21.707 28 L 25 24.707 L 28.293 28 L 29 27.293 L 25.707 24 L 29 20.707 L 28.293 20 L 25 23.293 L 21.707 20 L 21 20.707 Z M 17 7 L 22 7 L 22 13 L 28 13 L 28 19 L 29 19 L 29 12 L 23 6 L 16 6 L 17 7 Z M 12 28 L 20 28 L 20 27 L 13 27 L 13 26 L 12 26 L 12 28 Z" class="ColorScheme-NegativeText"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 20 26 L 20 10 L 14 4 L 3 4 L 3 26 L 20 26 Z M 4 25 L 4 5 L 13 5 L 13 11 L 19 11 L 19 25 L 4 25 Z" class="ColorScheme-Text"/>
		</svg>
	{/if}
