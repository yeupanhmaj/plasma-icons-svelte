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
     d="M 2 2 L 2 2.03125 L 2 3 L 4.75 8 L 2 13 L 2 13.96875 L 2 14 L 2.0625 14 L 2.65625 14 L 9 14 L 14 14 L 14 13 L 14 12 L 13 12 L 13 13 L 3.21875 13 L 5.875 8.21875 L 6 8 L 5.875 7.78125 L 3.21875 3 L 13 3 L 13 4 L 14 4 L 14 3 L 14 2 L 7 2 L 2.65625 2 L 2.0625 2 L 2 2 z "
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
     d="M 3 3 L 7 11 L 3 19 L 3.5 19 L 4 19 L 4.0625 19 L 4.5 19 L 19 19 L 19 16 L 19 15 L 18 15 L 18 18 L 14 18 L 13 18 L 12 18 L 5.65625 18 L 4.9375 18 L 8.25 11 L 4.8125 4 L 5.71875 4 L 12 4 L 16 4 L 18 4 L 18 6 L 18 7 L 19 7 L 19 6 L 19 3 L 4.5 3 L 4.0625 3 L 4 3 L 3.5 3 L 3 3 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
