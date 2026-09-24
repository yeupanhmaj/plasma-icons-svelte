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
     d="M 2 2 L 2 3 L 14 3 L 14 2 L 2 2 z M 8 4 L 5 7 L 7 7 L 7 14 L 9 14 L 9 7 L 11 7 L 8 4 z "
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
    d="M 3 3 L 3 4 L 4 4 L 18 4 L 19 4 L 19 3 L 18 3 L 4 3 L 3 3 z M 11 6 L 8 10 L 10 10 L 10 16 L 10 18 L 10 19 L 12 19 L 12 18 L 12 15 L 12 10 L 14 10 L 11 6 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
