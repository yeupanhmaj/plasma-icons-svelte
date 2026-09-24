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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 2 L 3 5 L 13 5 L 13 2 L 3 2 Z M 4 3 L 12 3 L 12 4 L 4 4 L 4 3 Z M 3 14 L 3 8 L 10 8 L 13 11 L 13 14 L 3 14 Z M 4 13 L 12 13 L 12 12 L 9 12 L 9 9 L 4 9 L 4 13 Z"/>
    <path class="ColorScheme-Accent" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 2 6 L 2 7 L 4 7 L 4 6 L 2 6 Z M 7 6 L 7 7 L 9 7 L 9 6 L 7 6 Z M 12 6 L 12 7 L 14 7 L 14 6 L 12 6 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4 3 L 4 9 L 18 9 L 18 3 L 4 3 Z M 5 4 L 17 4 L 17 8 L 5 8 L 5 4 Z M 4 19 L 4 12 L 14 12 L 18 16 L 18 19 L 4 19 Z M 5 18 L 17 18 L 17 17 L 13 17 L 13 13 L 5 13 L 5 18 Z"/>
    <path class="ColorScheme-Accent" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 5 10 L 5 11 L 7 11 L 7 10 L 5 10 Z M 10 10 L 10 11 L 12 11 L 12 10 L 10 10 Z M 15 10 L 15 11 L 17 11 L 17 10 L 15 10 Z"/>
		</svg>
	{/if}
