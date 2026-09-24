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
     d="M 7 2 L 7 3 L 13 3 L 13 13 L 7 13 L 7 14 L 13 14 L 14 14 L 14 3 L 14 2 L 7 2 z M 2 6 L 2 7 L 7 7 L 7 6 L 2 6 z M 3 8 L 3 9 L 7 9 L 7 8 L 3 8 z M 5 10 L 5 11 L 7 11 L 7 10 L 5 10 z "
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
     d="M 8 3 L 8 4 L 18 4 L 18 18 L 8 18 L 8 19 L 18 19 L 19 19 L 19 4 L 19 3 L 8 3 z M 3 8 L 3 9 L 8 9 L 8 8 L 3 8 z M 4 10 L 4 11 L 8 11 L 8 10 L 4 10 z M 6 12 L 6 13 L 8 13 L 8 12 L 6 12 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
