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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 2 2 L 2 2.75 L 2 13 L 3 13 L 4 13 L 5 13 L 5 14 L 7 14 L 7 13 L 6 13 L 6 5 L 11 5 L 11 6 L 13 6 L 13 5 L 10 2 L 2.78516 2 L 2 2 Z M 3 3 L 9 3 L 9 4 L 5 4 L 5 5 L 5 12 L 4 12 L 3 12 L 3 3 Z M 10.5 7 C 8.567 7 7 8.567 7 10.5 C 7 12.433 8.567 14 10.5 14 C 12.433 14 14 12.433 14 10.5 C 14 8.567 12.433 7 10.5 7 Z M 10.5 8 C 11.8807 8 13 9.11929 13 10.5 C 13 11.8807 11.8807 13 10.5 13 C 9.11929 13 8 11.8807 8 10.5 C 8 9.11929 9.11929 8 10.5 8 Z M 10 9 L 10 12 L 11 12 L 12 12 L 12 11 L 11 11 L 11 9 L 10 9 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 3 L 3 17 L 7 17 L 7 19 L 12 19 L 12 18 L 8 18 L 8 7 L 12 7 L 12 11 L 16 11 L 17 11 L 17 10 L 13 6 L 12 6 L 9 3 L 3 3 Z M 4 4 L 8 4 L 8 6 L 7 6 L 7 16 L 4 16 L 4 4 Z M 15.5 12 C 13.567 12 12 13.567 12 15.5 C 12 17.433 13.567 19 15.5 19 C 17.433 19 19 17.433 19 15.5 C 19 13.567 17.433 12 15.5 12 Z M 15.5 13 C 16.8807 13 18 14.1193 18 15.5 C 18 16.8807 16.8807 18 15.5 18 C 14.1193 18 13 16.8807 13 15.5 C 13 14.1193 14.1193 13 15.5 13 Z M 15 14 L 15 17 L 16 17 L 17 17 L 17 16 L 16 16 L 16 14 L 15 14 Z"/>
		</svg>
	{/if}
