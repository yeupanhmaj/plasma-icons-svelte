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
       d="M 2 2 L 2 5 L 5 2 L 2 2 z M 11 2 L 14 5 L 14 2 L 11 2 z M 4 4 L 4 6.40625 L 4 11.1875 L 4 12 L 12 12 L 12 11.1875 L 12 4 L 4.8125 4 L 4 4 z M 5 6 L 11 6 L 11 11 L 5 11 L 5 6 z M 2 11 L 2 14 L 5 14 L 2 11 z M 14 11 L 11 14 L 14 14 L 14 11 z "
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
    d="M 3 3 L 3 6 L 6 3 L 3 3 z M 16 3 L 19 6 L 19 3 L 16 3 z M 6 6 L 6 9 L 6 15 L 6 16 L 16 16 L 16 15 L 16 6 L 7 6 L 6 6 z M 7 9 L 15 9 L 15 15 L 7 15 L 7 9 z M 3 16 L 3 19 L 6 19 L 3 16 z M 19 16 L 16 19 L 19 19 L 19 16 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
