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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4 2 L 4 3 L 3 3 L 3 4 L 4 4 L 4 6 L 3 6 L 3 7 L 4 7 L 4 8 L 5 8 L 5 7 L 7 7 L 7 8 L 8 8 L 8 7 L 9 7 L 9 6 L 8 6 L 8 4 L 9 4 L 9 3 L 8 3 L 8 2 L 7 2 L 7 3 L 5 3 L 5 2 L 4 2 Z M 10 2 L 10 6 L 12 6 L 12 7 L 13 7 L 13 5 L 10 2 Z M 5 4 L 7 4 L 7 6 L 5 6 L 5 4 Z M 9 8 L 9 9 L 8 9 L 8 10 L 9 10 L 9 12 L 8 12 L 8 13 L 9 13 L 9 14 L 10 14 L 10 13 L 12 13 L 12 14 L 13 14 L 13 13 L 14 13 L 14 12 L 13 12 L 13 10 L 14 10 L 14 9 L 13 9 L 13 8 L 12 8 L 12 9 L 10 9 L 10 8 L 9 8 Z M 3 9 L 3 14 L 7 14 L 7 13 L 4 13 L 4 9 L 3 9 Z M 10 10 L 12 10 L 12 12 L 10 12 L 10 10 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 11 3 L 14 3 L 18 7 L 18 11 L 17 11 L 17 8 L 13 8 L 13 4 L 11 4 L 11 3 Z M 5 11 L 5 18 L 11 18 L 11 19 L 4 19 L 4 11 L 5 11 Z"/>
    <path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 13 12 L 13 13 L 12 13 L 12 14 L 13 14 L 13 17 L 12 17 L 12 18 L 13 18 L 13 19 L 14 19 L 14 18 L 17 18 L 17 19 L 18 19 L 18 18 L 19 18 L 19 17 L 18 17 L 18 14 L 19 14 L 19 13 L 18 13 L 18 12 L 17 12 L 17 13 L 14 13 L 14 12 L 13 12 Z M 14 14 L 17 14 L 17 17 L 14 17 L 14 14 Z"/>
    <path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4 3 L 4 4 L 3 4 L 3 5 L 4 5 L 4 8 L 3 8 L 3 9 L 4 9 L 4 10 L 5 10 L 5 9 L 8 9 L 8 10 L 9 10 L 9 9 L 10 9 L 10 8 L 9 8 L 9 5 L 10 5 L 10 4 L 9 4 L 9 3 L 8 3 L 8 4 L 5 4 L 5 3 L 4 3 Z M 5 5 L 8 5 L 8 8 L 5 8 L 5 5 Z"/>
		</svg>
	{/if}
