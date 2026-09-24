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
     d="M 2 2 L 2 5 L 14 5 L 14 2 L 2 2 z M 3 3 L 13 3 L 13 4 L 3 4 L 3 3 z M 2 6 L 2 10 L 14 10 L 14 6 L 2 6 z M 3 7 L 13 7 L 13 9 L 3 9 L 3 7 z M 2 11 L 2 14 L 14 14 L 14 11 L 2 11 z M 3 12 L 13 12 L 13 13 L 3 13 L 3 12 z "
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
     d="M 3 2 L 3 7 L 19 7 L 19 2 L 3 2 z M 4 3 L 18 3 L 18 6 L 4 6 L 4 3 z M 3 8 L 3 13 L 19 13 L 19 8 L 3 8 z M 4 9 L 18 9 L 18 12 L 4 12 L 4 9 z M 3 14 L 3 19 L 19 19 L 19 14 L 3 14 z M 4 15 L 18 15 L 18 18 L 4 18 L 4 15 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
