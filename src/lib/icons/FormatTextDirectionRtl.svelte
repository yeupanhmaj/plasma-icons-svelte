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
       d="M 2 2 L 2 3 L 9 3 L 9 2 L 2 2 z M 10 2 L 10 6 L 14 6 L 14 2 L 10 2 z M 7 4 L 7 5 L 9 5 L 9 4 L 7 4 z M 4 7 L 4 8 L 14 8 L 14 7 L 4 7 z M 9 9 L 9 10 L 14 10 L 14 9 L 9 9 z M 6 12 L 6 13 L 14 13 L 14 12 L 6 12 z M 2 13 L 2 14 L 4 14 L 4 13 L 2 13 z "
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
    d="M 3 3 L 3 4 L 13 4 L 13 3 L 3 3 z M 14 3 L 14 8 L 19 8 L 19 3 L 14 3 z M 10 5 L 10 6 L 13 6 L 13 5 L 10 5 z M 9 9 L 9 10 L 19 10 L 19 9 L 9 9 z M 15 11 L 15 12 L 19 12 L 19 11 L 15 11 z M 9 15 L 9 16 L 19 16 L 19 15 L 9 15 z M 12 17 L 12 18 L 19 18 L 19 17 L 12 17 z M 9 18 L 9 19 L 11 19 L 11 18 L 9 18 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
