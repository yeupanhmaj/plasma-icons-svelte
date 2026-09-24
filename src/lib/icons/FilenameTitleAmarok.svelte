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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 2 L 3 14 L 13 14 L 13 5 L 10 2 L 3 2 Z M 4 3 L 9 3 L 9 6 L 12 6 L 12 13 L 4 13 L 4 3 Z"/>
    <path class="ColorScheme-Accent" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 5 4 L 8 4 L 8 6 L 5 6 L 5 4 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4 19 L 4 3 L 14 3 L 18 7 L 18 19 L 4 19 Z M 5 18 L 17 18 L 17 8 L 13 8 L 13 4 L 5 4 L 5 18 Z"/>
    <path class="ColorScheme-Accent" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 7 6 L 7 8 L 12 8 L 12 6 L 7 6 Z"/>
		</svg>
	{/if}
