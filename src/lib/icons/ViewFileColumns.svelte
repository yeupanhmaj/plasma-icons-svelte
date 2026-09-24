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
       d="M 2 2 L 2 14 L 5 14 L 5 2 L 2 2 z M 6 2 L 6 14 L 10 14 L 10 2 L 6 2 z M 11 2 L 11 14 L 14 14 L 14 2 L 11 2 z M 7 3 L 9 3 L 9 13 L 7 13 L 7 3 z "
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
    d="M 3 3 L 3 19 L 8 19 L 8 3 L 3 3 z M 9 3 L 9 19 L 14 19 L 14 3 L 9 3 z M 15 3 L 15 19 L 20 19 L 20 3 L 15 3 z M 10 4 L 13 4 L 13 18 L 10 18 L 10 4 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
