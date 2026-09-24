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
			<path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 14 L 3 2 L 10 2 L 13 5 L 13 14 L 3 14 Z M 4 13 L 12 13 L 12 6 L 9 6 L 9 3 L 4 3 L 4 13 Z M 7 7 L 7 8 L 11 8 L 11 7 L 7 7 Z M 7 9 L 7 10 L 10 10 L 10 9 L 7 9 Z" class="ColorScheme-Text"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 5 12 L 5 11 L 5 4 L 6 4 L 8 4 L 8 5 L 6 5 L 6 11 L 11 11 L 11 12 L 5 12 Z" class="ColorScheme-Accent"/>
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
			<path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4 19 L 4 2.99805 L 14 2.99805 L 14 3.00785 L 14.0078 2.99805 L 18 6.99023 L 18 19 L 5 19 L 4 19 Z M 5 17.998 L 17 17.998 L 17 7.99805 L 13 7.99805 L 13 3.99805 L 5 3.99805 L 5 17.998 Z M 8 14 L 8 13 L 15 13 L 15 14 L 8 14 Z M 8 11 L 8 10 L 15 10 L 15 11 L 8 11 Z M 8 8 L 8 7 L 12 7 L 12 8 L 8 8 Z" class="ColorScheme-Text"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 6 16 L 6 5 L 12 5 L 12 6 L 7 6 L 7 15 L 16 15 L 16 16 L 6 16 Z" class="ColorScheme-Accent"/>
		</svg>
	{/if}
