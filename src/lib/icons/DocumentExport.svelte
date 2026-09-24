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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 7 12 L 11.0859 12 L 9.46484 13.6211 L 10.1719 14.3281 L 13 11.5 L 10.1719 8.67187 L 9.46484 9.37891 L 11.0859 11 L 7 11 L 7 12 Z M 4 13 L 4 3 L 9 3 L 9 6 L 12 6 L 12 9 L 13 9 L 13 5 L 10 2 L 3 2 L 3 14 L 8 14 L 8 13 L 4 13 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 11 16 L 16.293 16 L 14 18.293 L 14.707 19 L 18.207 15.5 L 14.707 12 L 14 12.707 L 16.293 15 L 11 15 L 11 16 Z M 5 18 L 5 4 L 13 4 L 13 8 L 17 8 L 17 13 L 18 13 L 18 7 L 14 3 L 4 3 L 4 19 L 13 19 L 13 18 L 5 18 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 7 5 L 18 5 L 18 12 L 25 12 L 25 19 L 26 19 L 26 11 L 19 4 L 6 4 L 6 28 L 19 28 L 19 27 L 7 27 L 7 5 Z M 16.9961 22.5 L 16.9961 23.5 L 25.0859 23.5 L 21.293 27.293 L 22 28 L 27 23 L 22 18 L 21.293 18.707 L 25.0859 22.5 L 16.9961 22.5 Z"/>
		</svg>
	{/if}
