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
     d="M 2 3 L 2 4 L 6 4 L 6 12 L 2 12 L 2 13 L 7 13 L 7 9 L 10 9 L 10 10.5 L 14 8 L 10 5.5 L 10 7 L 7 7 L 7 3 L 6 3 L 2 3 z "
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
     d="M 3 5 L 3 6 L 10 6 L 10 10 L 10 12 L 10 16 L 3.0664062 16 L 3.0664062 17 L 10 17 L 11 17 L 11 12 L 16 12 L 16 13.5 L 19 11 L 16 8.5 L 16 10 L 11 10 L 11 5 L 10 5 L 3 5 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
