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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 7 2 L 7 3 L 9 3 L 9 6 L 12 6 L 12 13 L 4 13 L 4 6 L 3 6 L 3 14 L 13 14 L 13 5 L 10 2 L 7 2 Z M 5 5 L 5 6 L 8 6 L 8 5 L 5 5 Z M 5 8 L 5 9 L 11 9 L 11 8 L 5 8 Z M 5 11 L 5 12 L 11 12 L 11 11 L 5 11 Z"/>
    <path class="ColorScheme-Accent" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 2 2 L 4 5 L 6 2 L 2 2 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 9 3 L 9 4 L 13 4 L 13 8 L 17 8 L 17 18 L 5 18 L 5 8 L 4 8 L 4 19 L 18.0078 19 L 18 7 L 14 3 L 9 3 Z M 9 6 L 9 7 L 11 7 L 11 6 L 9 6 Z M 7 9 L 7 10 L 15 10 L 15 9 L 7 9 Z M 7 12 L 7 13 L 15 13 L 15 12 L 7 12 Z M 7 15 L 7 16 L 15 16 L 15 15 L 7 15 Z"/>
    <path class="ColorScheme-Accent" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 3 L 5 6 L 7 3 L 3 3 Z"/>
		</svg>
	{/if}
