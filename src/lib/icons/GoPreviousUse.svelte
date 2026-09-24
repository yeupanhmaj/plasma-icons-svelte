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
     d="M 2 2 L 2 7 L 14 7 L 14 2 L 2 2 z M 3 3 L 13 3 L 13 6 L 3 6 L 3 3 z M 2 8 L 2 11 L 7 11 L 7 8 L 2 8 z M 8 8 L 8 11 L 9 11 L 9 8 L 8 8 z M 14 8 L 10 11 L 14 14 L 14 8 z "
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
     d="M 3 3 L 3 9 L 3 10 L 18 10 L 19 10 L 19 4 L 19 3 L 18 3 L 4 3 L 3 3 z M 4 4 L 18 4 L 18 9 L 4 9 L 4 4 z M 19 11 L 14 15 L 19 19 L 19 11 z M 3 12 L 3 15 L 7 15 L 7 12 L 3 12 z M 9 12 L 9 15 L 11 15 L 11 12 L 9 12 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
