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
       d="M 5 2 L 5 3 L 6 3 L 9 3 L 4.71875 13 L 2 13 L 2 14 L 4.28125 14 L 6.28125 14 L 10 14 L 11 14 L 11 13 L 10 13 L 7 13 L 11.28125 3 L 14 3 L 14 2 L 11.71875 2 L 9.71875 2 L 6 2 L 5 2 z "
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
    d="M 8 3 L 8 4 L 13 4 L 7 18 L 4 18 L 4 19 L 14 19 L 14 18 L 9 18 L 15 4 L 18 4 L 18 3 L 8 3 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
