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
			<path d="M 2 5.99997 L 15 5.99997 L 15 6.99997 L 2 6.99997 L 2 5.99997 Z" class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none"/>
    <path d="M 14 1 L 14 6 L 9 6 L 9 1 L 14 1 Z M 8 1 L 8 6 L 3 6 L 3 1 L 8 1 Z M 14 7 L 14 12 L 9 12 L 9 7 L 14 7 Z M 8 7 L 8 12 L 3 12 L 3 7 L 8 7 Z" class="ColorScheme-Text" style="fill:currentColor; fill-opacity:0.5; stroke:none"/>
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
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 10 L 3 11 L 20 11 L 20 10 L 3 10 Z" class="ColorScheme-Text"/>
		</svg>
	{/if}
