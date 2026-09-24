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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 2 2 L 2 13 L 5 13 L 5 14 L 7 14 L 7 13 L 6 13 L 6 5 L 11 5 L 11 6 L 13 6 L 13 5 L 10 2 L 2 2 Z M 3 3 L 9 3 L 9 4 L 5 4 L 5 12 L 3 12 L 3 3 Z M 11 7 C 9.89543 7 9 7.89543 9 9 L 9 10 L 10 10 L 10 9 C 10 8.44772 10.4477 8 11 8 C 11.5523 8 12 8.44772 12 9 L 12 11 L 8 11 L 8 14 L 14 14 L 14 11 L 13 11 L 13 9 C 13 7.89543 12.1046 7 11 7 Z M 9 12 L 13 12 L 13 13 L 9 13 L 9 12 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 18 17 L 18 18 L 14 18 L 14 17 L 18 17 Z M 4 3 L 4 17 L 6 17 L 6 19 L 12 19 L 12 18 L 7 18 L 7 6 L 13 6 L 13 10 L 17 10 L 17 11 L 18 11 L 18 9 L 12 3 L 4 3 Z M 5 4 L 11 4 L 11 5 L 6 5 L 6 16 L 5 16 L 5 4 Z M 13 16 L 13 19 L 19 19 L 19 16 L 18 16 L 18 14 C 18 12.8954 17.1046 12 16 12 C 14.8954 12 14 12.8954 14 14 L 14 15 L 15 15 L 15 14 C 15 13.4477 15.4477 13 16 13 C 16.5523 13 17 13.4477 17 14 L 17 16 L 13 16 Z"/>
		</svg>
	{/if}
