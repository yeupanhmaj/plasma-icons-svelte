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
     d="M 7 3.0058594 L 7 8 L 2 8 L 2 8.9980469 L 7 8.9980469 L 7 14.007812 L 8 14.007812 L 8 8.9980469 L 13 8.9980469 L 13 8 L 8 8 L 8 3.0058594 L 7 3.0058594 z "
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
    d="M 10 4 L 10 11 L 3 11 L 3 12 L 10 12 L 10 19 L 11 19 L 11 12 L 18 12 L 18 11 L 11 11 L 11 4 L 10 4 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
