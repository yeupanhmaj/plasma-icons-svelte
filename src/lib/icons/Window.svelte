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
       d="M 2 2 L 2 5 L 2 14 L 3 14 L 14 14 L 14 13 L 14 2 L 3 2 L 2 2 z M 3 5 L 13 5 L 13 13 L 3 13 L 3 5 z "
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
	d="M 3 3 L 3 7 L 3 18 L 3 19 L 4 19 L 13 19 L 18 19 L 19 19 L 19 18 L 19 13 L 19 7 L 19 3 L 3 3 z M 4 7 L 18 7 L 18 13 L 18 18 L 13 18 L 4 18 L 4 7 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
