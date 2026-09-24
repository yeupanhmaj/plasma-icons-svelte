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
     d="M 7 2 L 7 9 L 5 9 L 8 12 L 11 9 L 9 9 L 9 2 L 7 2 z M 2 13 L 2 14 L 14 14 L 14 13 L 2 13 z "
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
    d="M 10 3 L 10 4 L 10 6 L 10 12 L 8 12 L 11 16 L 14 12 L 12 12 L 12 7 L 12 4 L 12 3 L 10 3 z M 3 18 L 3 19 L 4 19 L 18 19 L 19 19 L 19 18 L 18 18 L 4 18 L 3 18 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
