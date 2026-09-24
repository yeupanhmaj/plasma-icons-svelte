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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 14 L 3 12 L 5 12 L 5 14 L 3 14 Z M 7 14 L 7 12 L 9 12 L 9 14 L 7 14 Z M 11 14 L 11 12 L 13 12 L 13 14 L 11 14 Z M 5 11 L 5 9 L 7 9 L 7 11 L 5 11 Z M 9 11 L 9 9 L 11 9 L 11 11 L 9 11 Z M 3 9 L 3 2 L 9 2 L 10 2 L 13 5 L 13 6 L 13 9 L 12 9 L 12 6 L 9 6 L 9 3 L 4 3 L 4 9 L 3 9 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4 19.002 L 4 18.9999 L 4 16.9999 L 6 16.9999 L 6 18.9999 L 8 18.9999 L 8 16.9999 L 10 16.9999 L 10 18.9999 L 12 18.9999 L 12 16.9999 L 14 16.9999 L 14 18.9999 L 16 18.9999 L 16 16.9999 L 18 16.9999 L 18 18.9999 L 18 19.002 L 17 19.002 L 5 19.002 L 4 19.002 Z M 6 16 L 6 14 L 8 14 L 8 16 L 6 16 Z M 10 16 L 10 14 L 12 14 L 12 16 L 10 16 Z M 14 16 L 14 14 L 16 14 L 16 16 L 14 16 Z M 4 13 L 4 11 L 4 3 L 5 3 L 13 3 L 14 3 L 14 3.0098 L 14.008 3 L 18.0002 6.99219 L 18.0002 7.00199 L 18.0002 8.40824 L 18.0002 11 L 18.0002 13 L 16.0002 13 L 16.0002 11 L 17.0002 11 L 17.0002 8.00003 L 13.0002 8.00003 L 13.0002 7.00003 L 13.0002 4.00003 L 5.0002 4.00003 L 5.0002 11 L 6.0002 11 L 6.0002 13 L 4.0002 13 Z M 8.0002 13 L 8.0002 11 L 10.0002 11 L 10.0002 13 L 8.0002 13 Z M 12.0002 13 L 12.0002 11 L 14.0002 11 L 14.0002 13 L 12.0002 13 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 6 28 L 6 26 L 8 26 L 8 28 L 6 28 Z M 12 28 L 12 26 L 14 26 L 14 28 L 12 28 Z M 18 28 L 18 26 L 20 26 L 20 28 L 18 28 Z M 24 28 L 24 26 L 26 26 L 26 28 L 24 28 Z M 9 25 L 9 23 L 11 23 L 11 25 L 9 25 Z M 15 25 L 15 23 L 17 23 L 17 25 L 15 25 Z M 21 25 L 21 23 L 23 23 L 23 25 L 21 25 Z M 6 22 L 6 20 L 8 20 L 8 22 L 6 22 Z M 12 22 L 12 20 L 14 20 L 14 22 L 12 22 Z M 18 22 L 18 20 L 20 20 L 20 22 L 18 22 Z M 24 22 L 24 20 L 26 20 L 26 22 L 24 22 Z M 9 19 L 9 17 L 11 17 L 11 19 L 9 19 Z M 15 19 L 15 17 L 17 17 L 17 19 L 15 19 Z M 21 19 L 21 17 L 23 17 L 23 19 L 21 19 Z M 6 17 L 6 4 L 19 4 L 26 11 L 26 17 L 25 17 L 25 12 L 18 12 L 18 5 L 7 5 L 7 17 L 6 17 Z"/>
		</svg>
	{/if}
