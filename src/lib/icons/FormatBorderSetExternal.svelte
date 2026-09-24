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
			<path d="M 2 1 L 2 2 L 2 13 L 2 14 L 3 14 L 14 14 L 15 14 L 15 13 L 15 2 L 15 1 L 14 1 L 3 1 L 2 1 Z M 3 2 L 14 2 L 14 13 L 3 13 L 3 2 Z" class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none"/>
    <path d="M 3 2 L 3 7 L 8 7 L 8 2 L 3 2 Z M 9 2 L 9 7 L 14 7 L 14 2 L 9 2 Z M 3 8 L 3 13 L 8 13 L 8 8 L 3 8 Z M 9 8 L 9 13 L 14 13 L 14 8 L 9 8 Z" class="ColorScheme-Text" style="fill:currentColor; fill-opacity:0.5; stroke:none"/>
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
			<path style="fill:currentColor; fill-opacity:0.5; stroke:none" d="M 4 3 L 4 10 L 11 10 L 11 3 L 4 3 Z M 12 3 L 12 10 L 19 10 L 19 3 L 12 3 Z M 4 11 L 4 18 L 11 18 L 11 11 L 4 11 Z M 12 11 L 12 18 L 19 18 L 19 11 L 12 11 Z" class="ColorScheme-Text"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 2 L 3 3 L 3 18 L 3 19 L 4 19 L 19 19 L 20 19 L 20 18 L 20 3 L 20 2 L 19 2 L 4 2 L 3 2 Z M 4 3 L 19 3 L 19 18 L 4 18 L 4 3 Z" class="ColorScheme-Text"/>
		</svg>
	{/if}
