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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:0.5; stroke:none" d="M 3 2 L 3 12 L 6 12 L 6 11 L 4 11 L 4 3 L 7 3 L 7 4 L 10 4 L 8 2 Z"/>
    <path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 6 4 L 6 14 L 14 14 L 14 7 L 11 4 Z Z M 7 5 L 10 5 L 10 8 L 13 8 L 13 13 L 7 13 L 7 5 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:0.5; stroke:none" d="M 3 3 L 3 17 L 7 17 L 7 16 L 4 16 L 4 4 L 8 4 L 8 6 L 12 6 L 9 3 Z"/>
    <path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 7 6 L 7 19 L 17 19 L 17 10 L 13 6 Z Z M 8 7 L 12 7 L 12 11 L 16 11 L 16 18 L 8 18 L 8 7 Z"/>
		</svg>
	{/if}
