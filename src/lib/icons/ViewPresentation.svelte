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
       d="M 2 2 L 2 11 L 6 11 L 6 13 L 5 13 L 5 14 L 11 14 L 11 13 L 10 13 L 10 11 L 14 11 L 14 2 L 2 2 z M 3 3 L 13 3 L 13 10 L 3 10 L 3 3 z M 7 4 L 7 9 L 10 6.5 L 7 4 z M 7 11 L 9 11 L 9 13 L 7 13 L 7 11 z "
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
    d="M 2 3 L 2 15 L 20 15 L 20 3 L 2 3 z M 3 4 L 19 4 L 19 14 L 3 14 L 3 4 z M 9 6 L 9 12 L 13 9 L 9 6 z M 9 16 L 9 18 L 8 18 L 8 19 L 14 19 L 14 18 L 13 18 L 13 16 L 12 16 L 12 18 L 10 18 L 10 16 L 9 16 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
