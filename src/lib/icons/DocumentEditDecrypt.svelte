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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 14 L 3 7 L 4 7 L 4 13 L 12 13 L 12 7 L 13 7 L 13 14 L 3 14 Z M 5 7 L 5 5 L 7 5 L 7 7 L 5 7 Z M 9 7 L 9 5 L 11 5 L 11 7 L 9 7 Z M 3 4 L 3 2 L 5 2 L 5 4 L 3 4 Z M 7 4 L 7 2 L 9 2 L 9 4 L 7 4 Z M 11 4 L 11 2 L 13 2 L 13 4 L 11 4 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4 19 L 4 18 L 4 11 L 4 9 L 6 9 L 6 11 L 5 11 L 5 18 L 17 18 L 17 11 L 16 11 L 16 9 L 18 9 L 18 11 L 18 19 L 5 19 L 4 19 Z M 8 11 L 8 9 L 10 9 L 10 11 L 8 11 Z M 12 11 L 12 9 L 14 9 L 14 11 L 12 11 Z M 6 8 L 6 6 L 8 6 L 8 8 L 6 8 Z M 10 8 L 10 6 L 12 6 L 12 8 L 10 8 Z M 14 8 L 14 6 L 16 6 L 16 8 L 14 8 Z M 4 5 L 4 3 L 5 3 L 6 3 L 6 5 L 4 5 Z M 8 5 L 8 3 L 10 3 L 10 5 L 8 5 Z M 12 5 L 12 3 L 14 3 L 14 5 L 12 5 Z M 16 5 L 16 3 L 17 3 L 18 3 L 18 5 L 16 5 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 6 28 L 6 16 L 7 16 L 7 27 L 25 27 L 25 16 L 26 16 L 26 28 L 6 28 Z M 9 15 L 9 13 L 11 13 L 11 15 L 9 15 Z M 15 15 L 15 13 L 17 13 L 17 15 L 15 15 Z M 21 15 L 21 13 L 23 13 L 23 15 L 21 15 Z M 6 12 L 6 10 L 8 10 L 8 12 L 6 12 Z M 12 12 L 12 10 L 14 10 L 14 12 L 12 12 Z M 18 12 L 18 10 L 20 10 L 20 12 L 18 12 Z M 24 12 L 24 10 L 26 10 L 26 12 L 24 12 Z M 9 9 L 9 7 L 11 7 L 11 9 L 9 9 Z M 15 9 L 15 7 L 17 7 L 17 9 L 15 9 Z M 21 9 L 21 7 L 23 7 L 23 9 L 21 9 Z M 6 6 L 6 4 L 8 4 L 8 6 L 6 6 Z M 12 6 L 12 4 L 14 4 L 14 6 L 12 6 Z M 18 6 L 18 4 L 20 4 L 20 6 L 18 6 Z M 24 6 L 24 4 L 26 4 L 26 6 L 24 6 Z"/>
		</svg>
	{/if}
