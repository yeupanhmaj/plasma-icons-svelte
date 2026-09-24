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
       d="M 2 2 L 2 6 L 6 6 L 6 2 L 2 2 z M 7 2 L 7 3 L 14 3 L 14 2 L 7 2 z M 7 4 L 7 5 L 9 5 L 9 4 L 7 4 z M 2 7 L 2 8 L 12 8 L 12 7 L 2 7 z M 2 9 L 2 10 L 7 10 L 7 9 L 2 9 z M 2 12 L 2 13 L 10 13 L 10 12 L 2 12 z M 12 13 L 12 14 L 14 14 L 14 13 L 12 13 z "
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
    d="M 3 3 L 3 8 L 8 8 L 8 3 L 3 3 z M 9 3 L 9 4 L 19 4 L 19 3 L 9 3 z M 9 5 L 9 6 L 12 6 L 12 5 L 9 5 z M 3 9 L 3 10 L 13 10 L 13 9 L 3 9 z M 3 11 L 3 12 L 7 12 L 7 11 L 3 11 z M 3 15 L 3 16 L 13 16 L 13 15 L 3 15 z M 3 17 L 3 18 L 10 18 L 10 17 L 3 17 z M 11 18 L 11 19 L 13 19 L 13 18 L 11 18 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
