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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11 2 L 11 14 L 14 14 L 14 2 L 11 2 z M 12 3 L 13 3 L 13 13 L 12 13 L 12 3 z M 6 5 L 6 14 L 9 14 L 9 5 L 6 5 z M 7 6 L 8 6 L 8 13 L 7 13 L 7 6 z M 1 8 L 1 14 L 4 14 L 4 8 L 1 8 z M 2 9 L 3 9 L 3 13 L 2 13 L 2 9 z "
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
    d="M 15 3 L 15 19 L 19 19 L 19 3 L 15 3 z M 16 4 L 18 4 L 18 18 L 16 18 L 16 4 z M 9 8 L 9 19 L 13 19 L 13 8 L 9 8 z M 10 9 L 12 9 L 12 18 L 10 18 L 10 9 z M 3 14 L 3 19 L 7 19 L 7 14 L 3 14 z M 4 15 L 6 15 L 6 18 L 4 18 L 4 15 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
