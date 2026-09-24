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
			<path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="M 4 2 C 3.45 2 3 2.45 3 3 C 3 3.55 3.45 4 4 4 C 4.55 4 5 3.55 5 3 C 5 2.45 4.55 2 4 2 z M 6 2 L 6 3 L 14 3 L 14 2 L 6 2 z M 6 4 L 6 5 L 12 5 L 12 4 L 6 4 z M 12 7 L 12 10.3 C 11.7 10.1 11.35 10 11 10 C 9.9 10 9 10.9 9 12 C 9 13.1 9.9 14 11 14 C 12.1 14 13 13.1 13 12 L 13 8 L 14 8 L 13 7 L 12 7 z M 4 8 C 3.45 8 3 8.45 3 9 C 3 9.5 3.45 10 4 10 C 4.55 10 5 9.55 5 9 C 5 8.45 4.55 8 4 8 z M 6 8 L 6 9 L 10 9 L 10 8 L 6 8 z M 6 10 L 6 11 L 8 11 L 8 10 L 6 10 z "
	class="ColorScheme-Text"
    />
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
			<path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="M 4.5 3 C 3.8 3 3 3.7 3 4.5 C 3 5.3 3.8 6 4.5 6 C 5.33 6 6 5.3 6 4.5 C 6 3.7 5.33 3 4.5 3 z M 8 3 L 8 4 L 19 4 L 19 3 L 8 3 z M 8 5 L 8 6 L 12 6 L 12 5 L 8 5 z M 4.5 9 C 3.7 9 3 9.71 3 10.5 C 3 11.3 3.7 12 4.5 12 C 5.3 12 6 11.3 6 10.5 C 6 9.71 5.3 9 4.5 9 z M 8 9 L 8 10 L 15 10 L 15 9 L 8 9 z M 17 10 L 17 15.3 C 16.7 15.1 16.4 15 16 15 C 14.9 15 14 15.9 14 17 C 14 18.1 14.9 19 16 19 C 17.1 19 18 18.1 18 17 L 18 11 L 19 11 L 18 10 L 17 10 z M 8 11 L 8 12 L 13 12 L 13 11 L 8 11 z M 4.5 15 C 3.7 15 3 15.7 3 16.5 C 3 17.3 3.7 18 4.5 18 C 5.3 18 6 17.3 6 16.5 C 6 15.7 5.3 15 4.5 15 z M 8 15 L 8 16 L 13 16 L 13 15 L 8 15 z M 8 17 L 8 18 L 12 18 L 12 17 L 8 17 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
