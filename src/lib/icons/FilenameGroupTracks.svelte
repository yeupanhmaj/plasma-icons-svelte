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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 2 2 L 2 2.75 L 2 13 L 3 13 L 4 13 L 5 13 L 5 14 L 7 14 L 7 13 L 6 13 L 6 5 L 11 5 L 11 6 L 12 6 L 12 7 L 13 7 L 13 5 L 10 2 L 2.78515 2 L 2 2 Z M 3 3 L 9 3 L 9 4 L 5 4 L 5 5 L 5 12 L 4 12 L 3 12 L 3 3 Z M 9 8 L 9 9 L 8 9 L 8 10 L 9 10 L 9 12 L 8 12 L 8 13 L 9 13 L 9 14 L 10 14 L 10 13 L 12 13 L 12 14 L 13 14 L 13 13 L 14 13 L 14 12 L 13 12 L 13 10 L 14 10 L 14 9 L 13 9 L 13 8 L 12 8 L 12 9 L 10 9 L 10 8 L 9 8 Z M 10 10 L 12 10 L 12 12 L 10 12 L 10 10 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 3 L 3 17 L 7 17 L 7 19 L 12 19 L 12 18 L 8 18 L 8 7 L 12 7 L 12 11 L 16 11 L 16 12 L 17 12 L 17 10 L 13 6 L 12 6 L 9 3 L 3 3 Z M 4 4 L 8 4 L 8 6 L 7 6 L 7 16 L 4 16 L 4 4 Z M 14 13 L 14 14 L 13 14 L 13 15 L 14 15 L 14 17 L 13 17 L 13 18 L 14 18 L 14 19 L 15 19 L 15 18 L 17 18 L 17 19 L 18 19 L 18 18 L 19 18 L 19 17 L 18 17 L 18 15 L 19 15 L 19 14 L 18 14 L 18 13 L 17 13 L 17 14 L 15 14 L 15 13 L 14 13 Z M 15 15 L 17 15 L 17 17 L 15 17 L 15 15 Z"/>
		</svg>
	{/if}
