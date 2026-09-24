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
       d="M 4 2 L 4 4 L 4 5 L 4 9 C 4 10.65685 5.567 12 7.5 12 C 9.433 12 11 10.65685 11 9 L 11 4 L 11 2 L 10 2 L 10 4 L 10 6.90625 L 10 9 C 10 10.10457 9.10457 11 8 11 C 6.89543 11 6 10.10457 6 9 L 6 6.3125 L 6 5 L 6 4 L 6 2 L 4 2 z M 2 13 L 2 14 L 14 14 L 14 13 L 2 13 z "
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
    d="M 6 3 L 6 10 C 6 12.77 8.23 15 11 15 C 13.77 15 16 12.77 16 10 L 16 3 L 14 3 L 14 11 C 14 12.108 13.108 13 12 13 C 10.892 13 10 12.108 10 11 L 10 3 L 6 3 z M 4 18 L 4 19 L 18 19 L 18 18 L 4 18 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
