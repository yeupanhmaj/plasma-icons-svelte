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
       d="M 7 4 A 2 2 0 0 0 5 6 L 5 7 L 5 9 L 7 9 L 7 7 L 6 7 L 6 6 A 1 1 0 0 1 7 5 L 7 4 z M 11 4 A 2 2 0 0 0 9 6 L 9 7 L 9 9 L 11 9 L 11 7 L 10 7 L 10 6 A 1 1 0 0 1 11 5 L 11 4 z "
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
    d="M 10 6 A 2 2 0 0 0 8 8 L 8 9 L 8 11 L 10 11 L 10 9 L 9 9 L 9 8 A 1 1 0 0 1 10 7 L 10 6 z M 14 6 A 2 2 0 0 0 12 8 L 12 9 L 12 11 L 14 11 L 14 9 L 13 9 L 13 8 A 1 1 0 0 1 14 7 L 14 6 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
