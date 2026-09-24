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
     d="M 2 2 L 2 3 L 3 3 L 3 2 L 2 2 z M 4 2 L 4 3 L 9 3 L 9 2 L 4 2 z M 12 4 L 8 10 L 10 10 L 10 14 L 14 8 L 12 8 L 12 4 z M 2 5 L 2 6 L 3 6 L 3 5 L 2 5 z M 4 5 L 4 6 L 9 6 L 9 5 L 4 5 z M 2 8 L 2 9 L 3 9 L 3 8 L 2 8 z M 4 8 L 4 9 L 7 9 L 7 8 L 4 8 z "
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
	d="M 3 3 L 3 4 L 13 4 L 13 3 L 3 3 z M 3 5 L 3 6 L 9 6 L 9 5 L 3 5 z M 17 7 L 13 14 L 15 14 L 15 19 L 19 12 L 17 12 L 17 7 z M 3 9 L 3 10 L 11 10 L 11 9 L 3 9 z M 3 11 L 3 12 L 7 12 L 7 11 L 3 11 z M 3 15 L 3 16 L 10 16 L 10 15 L 3 15 z M 3 17 L 3 18 L 5 18 L 5 17 L 3 17 z M 10 18 L 10 19 L 12 19 L 12 18 L 10 18 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
