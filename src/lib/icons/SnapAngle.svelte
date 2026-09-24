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
			<path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 11.7793 4.22266 L 11.0723 4.92969 C 12.9478 6.80519 14 9.34764 14 12 L 15 12 C 15 9.08281 13.8421 6.28542 11.7793 4.22266 Z" class="ColorScheme-Accent"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 1 12 L 1 13 L 2 13 L 2 12 L 1 12 Z M 6 12 L 6 13 L 7 13 L 7 12 L 6 12 Z M 8 12 L 8 13 L 10 13 L 10 12 L 8 12 Z M 11 12 L 11 13 L 13 13 L 13 12 L 11 12 Z M 14 12 L 14 13 L 16 13 L 16 12 L 14 12 Z" class="ColorScheme-Text"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 13 2.29297 L 5.29297 10 L 6 10.707 L 13.707 3 L 13 2.29297 Z" class="ColorScheme-Text"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 2 10 L 2 14 L 6 14 L 6 10 L 2 10 Z M 3 11 L 5 11 L 5 13 L 3 13 L 3 11 Z" class="ColorScheme-Accent"/>
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
			<path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 15.0449 6.45313 L 14.3379 7.16016 C 16.6822 9.50459 18 12.6845 18 16 L 19 16 C 19 12.4196 17.5765 8.98482 15.0449 6.45313 Z" class="ColorScheme-Accent"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 1 16 L 1 17 L 2 17 L 2 16 L 1 16 Z M 7 16 L 7 17 L 8 17 L 8 16 L 7 16 Z M 9 16 L 9 17 L 11 17 L 11 16 L 9 16 Z M 12 16 L 12 17 L 14 17 L 14 16 L 12 16 Z M 15 16 L 15 17 L 17 17 L 17 16 L 15 16 Z M 18 16 L 18 17 L 20 17 L 20 16 L 18 16 Z" class="ColorScheme-Text"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 17 3.29297 L 6.29297 14 L 7 14.707 L 17.707 4 L 17 3.29297 Z" class="ColorScheme-Text"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 2 14 L 2 19 L 7 19 L 7 14 L 2 14 Z M 3 15 L 6 15 L 6 18 L 3 18 L 3 15 Z" class="ColorScheme-Accent"/>
		</svg>
	{/if}
