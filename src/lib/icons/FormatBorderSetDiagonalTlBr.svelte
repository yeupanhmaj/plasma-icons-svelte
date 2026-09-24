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
			<path d="M 3 2 L 3 7 L 8 7 L 8 2 L 3 2 Z M 9 2 L 9 7 L 14 7 L 14 2 L 9 2 Z M 3 8 L 3 13 L 8 13 L 8 8 L 3 8 Z M 9 8 L 9 13 L 14 13 L 14 8 L 9 8 Z" class="ColorScheme-Text" style="fill:currentColor; fill-opacity:0.5; stroke:none"/>
    <path d="M 2.70703 1 L 15 13.293 L 15 14 L 14.293 14 L 2 1.70703 L 2 1 L 2.70703 1 Z" class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none"/>
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
			<path style="fill:currentColor; fill-opacity:0.5; stroke:none" d="M 4.70703 3 L 11 9.29297 L 11 3 L 4.70703 3 Z M 12 3 L 12 10 L 19 10 L 19 3 L 12 3 Z M 4 3.70703 L 4 10 L 10.293 10 L 4 3.70703 Z M 4 11 L 4 18 L 11 18 L 11 11 L 4 11 Z M 12.707 11 L 19 17.293 L 19 11 L 12.707 11 Z M 12 11.707 L 12 18 L 18.293 18 L 12 11.707 Z" class="ColorScheme-Text"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" d="M 19.293 19 L 3 2.70703 L 3 2 L 3.70703 2 L 20 18.293 L 20 19 L 19.293 19 Z" class="ColorScheme-Text"/>
		</svg>
	{/if}
