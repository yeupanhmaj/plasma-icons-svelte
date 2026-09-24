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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 13 5 L 13 12 L 8.91406 12 L 10.5352 13.6211 L 9.82812 14.3281 L 7 11.5 L 9.82812 8.67188 L 10.5352 9.37891 L 8.91406 11 L 12 11 L 12 6 L 9 6 L 9 3 L 4 3 L 4 13 L 7 13 L 7 14 L 3 14 L 3 2 L 10 2 L 13 5 Z"/>
		</svg>
	{:else if numericSize <= 27}
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4 3 L 4 19 L 11 19 L 11 18 L 5 18 L 5 4 L 13 4 L 13 8 L 17 8 L 17 15 L 12.707 15 L 15 12.707 L 14.293 12 L 10.793 15.5 L 14.293 19 L 15 18.293 L 12.707 16 L 18 16 L 18 7 L 14 3 L 4 3 Z"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 6 4 L 6 28 L 16 28 L 16 27 L 7 27 L 7 5 L 18 5 L 18 12 L 25 12 L 25 22.5 L 17.9141 22.5 L 21.707 18.707 L 21 18 L 17 22 L 16 23 L 21 28 L 21.707 27.293 L 17.9141 23.5 L 26.0039 23.5 L 26.0039 22.5 L 25.9999 22.5 L 26 11 L 19 4 L 6 4 Z"/>
		</svg>
	{/if}
