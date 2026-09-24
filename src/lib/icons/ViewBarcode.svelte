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
     d="M 2 2 L 2 14 L 3 14 L 3 2 L 2 2 z M 4 2 L 4 7 L 5 7 L 5 2 L 4 2 z M 6 2 L 6 14 L 7 14 L 7 2 L 6 2 z M 8 2 L 8 14 L 9 14 L 9 2 L 8 2 z M 10 2 L 10 8 L 11 8 L 11 2 L 10 2 z M 12 2 L 12 14 L 14 14 L 14 2 L 12 2 z "
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
    d="M 3 6 L 3 16 L 4 16 L 4 6 L 3 6 z M 5 6 L 5 13 L 6 13 L 6 6 L 5 6 z M 7 6 L 7 16 L 8 16 L 8 6 L 7 6 z M 9 6 L 9 16 L 11 16 L 11 6 L 9 6 z M 12 6 L 12 16 L 14 16 L 14 6 L 12 6 z M 15 6 L 15 11 L 16 11 L 16 6 L 15 6 z M 17 6 L 17 16 L 19 16 L 19 6 L 17 6 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
