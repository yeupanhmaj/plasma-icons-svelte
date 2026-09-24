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
			<path style="fill-opacity:1; stroke:none; fill:currentColor" class="ColorScheme-Text" d="M 3 4 L 3 5 L 4 5 L 4 11 L 3 11 L 3 12 L 6 12 L 6 11 L 5 11 L 5 5 L 6 5 L 6 4 L 3 4 Z M 7 11 L 12 11 L 12 9 L 11 9 L 11 10 L 8 10 L 8 9 L 7 9 L 7 11 Z"/>
    <path style="fill-opacity:1; stroke:none; fill-rule:evenodd; fill:currentColor" class="ColorScheme-Text" d="M 15 2 L 15 14 L 1 14 L 1 2 L 15 2 Z M 2 3 L 14 3 L 14 13 L 2 13 L 2 3 Z"/>
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
			<path style="fill-opacity:1; stroke:none; fill:currentColor" class="ColorScheme-Text" d="M 4 5 L 4 6 L 6 6 L 6 16 L 4 16 L 4 17 L 9 17 L 9 16 L 7 16 L 7 6 L 9 6 L 9 5 L 4 5 Z M 9 13 L 9 15 L 10 15 L 16 15 L 17 15 L 17 14 L 17 13 L 16 13 L 16 14 L 10 14 L 10 13 L 9 13 Z"/>
    <path style="fill-opacity:1; stroke:none; fill-rule:evenodd; fill:currentColor" class="ColorScheme-Text" d="M 2 3 L 20 3 L 20 19 L 2 19 L 2 3 Z M 3 4 L 19 4 L 19 18 L 3 18 L 3 4 Z"/>
		</svg>
	{/if}
