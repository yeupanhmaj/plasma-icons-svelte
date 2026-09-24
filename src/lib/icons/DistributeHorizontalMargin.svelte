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
     d="M 1 1 L 1 15 L 15 15 L 15 1 L 1 1 z M 2 2 L 14 2 L 14 14 L 2 14 L 2 2 z M 3 4 L 3 12 L 7 12 L 7 4 L 3 4 z M 9 4 L 9 12 L 13 12 L 13 4 L 9 4 z M 4 5 L 6 5 L 6 11 L 4 11 L 4 5 z M 10 5 L 12 5 L 12 11 L 10 11 L 10 5 z "
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
    d="M 3 3 L 3 4 L 3 19 L 4 19 L 18 19 L 19 19 L 19 18 L 19 4 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 18 L 4 18 L 4 4 z M 5 7 L 5 15 L 10 15 L 10 7 L 5 7 z M 12 7 L 12 15 L 17 15 L 17 7 L 12 7 z M 6 8 L 9 8 L 9 14 L 6 14 L 6 8 z M 13 8 L 16 8 L 16 14 L 13 14 L 13 8 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
