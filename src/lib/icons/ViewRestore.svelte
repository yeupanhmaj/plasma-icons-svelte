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
       d="M 6 2 L 8 4 L 10 2 L 6 2 z M 8 4 L 4 4 L 4 8 L 4 12 L 8 12 L 12 12 L 12 8 L 12 4 L 8 4 z M 12 8 L 14 10 L 14 6 L 12 8 z M 8 12 L 6 14 L 10 14 L 8 12 z M 4 8 L 2 6 L 2 10 L 4 8 z M 5 6 L 11 6 L 11 11 L 5 11 L 5 6 z "
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
    d="M 9 3 L 11 5 L 13 3 L 9 3 z M 6 6 L 6 9 L 6 15 L 6 16 L 16 16 L 16 15 L 16 6 L 7 6 L 6 6 z M 3 9 L 3 13 L 5 11 L 3 9 z M 7 9 L 15 9 L 15 15 L 7 15 L 7 9 z M 19 9 L 17 11 L 19 13 L 19 9 z M 11 17 L 9 19 L 13 19 L 11 17 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
