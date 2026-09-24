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
			<path d="M 14 13 L 9 13 L 9 8 L 14 8 L 14 13 Z M 14 7 L 9 7 L 9 2 L 14 2 L 14 7 Z M 8 13 L 3 13 L 3 8 L 8 8 L 8 13 Z M 8 7 L 3 7 L 3 2 L 8 2 L 8 7 Z" class="ColorScheme-Text" style="fill:currentColor; fill-opacity:0.5; stroke:none"/>
    <path d="M 9 1 L 9 14 L 8 14 L 8 1 L 9 1 Z" class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none"/>
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
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 11 2 L 11 19 L 12 19 L 12 2 L 11 2 Z" class="ColorScheme-Text"/>
		</svg>
	{/if}
