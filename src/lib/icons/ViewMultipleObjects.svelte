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
       d="M 2 3 L 2 8 L 10 8 L 10 3 L 2 3 z M 11 3 L 11 8 L 14 8 L 14 3 L 11 3 z M 3 4 L 9 4 L 9 7 L 3 7 L 3 4 z M 2 9 L 2 14 L 14 14 L 14 9 L 2 9 z M 3 10 L 13 10 L 13 13 L 3 13 L 3 10 z "
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
    d="M 3 4 L 3 11 L 13 11 L 13 4 L 3 4 z M 14 4 L 14 11 L 19 11 L 19 4 L 14 4 z M 4 5 L 12 5 L 12 10 L 4 10 L 4 5 z M 3 12 L 3 19 L 19 19 L 19 12 L 3 12 z M 4 13 L 18 13 L 18 18 L 4 18 L 4 13 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
