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
     d="M 7 1 L 7 4 L 5 4 L 8 7 L 11 4 L 9 4 L 9 1 L 7 1 z M 8 7 L 2 7 L 2 8 L 8 8 L 14 8 L 14 7 L 8 7 z M 8 8 L 5 11 L 7 11 L 7 14 L 9 14 L 9 11 L 11 11 L 8 8 z "
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
    d="M 10 2 L 10 6 L 8 6 L 11 9 L 14 6 L 12 6 L 12 2 L 10 2 z M 11 9 L 6 9 L 3 9 L 3 10 L 19 10 L 19 9 L 16 9 L 11 9 z M 3 12 L 3 13 L 4 13 L 7 13 L 11 13 L 18 13 L 19 13 L 19 12 L 18 12 L 4 12 L 3 12 z M 11 13 L 8 16 L 10 16 L 10 20 L 12 20 L 12 16 L 14 16 L 11 13 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
