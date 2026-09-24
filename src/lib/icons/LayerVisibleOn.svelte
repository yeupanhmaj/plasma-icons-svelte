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
     d="M 4 3 L 1 5 L 12 5 L 15 3 L 4 3 z M 4 7 L 1 9 L 12 9 L 15 7 L 4 7 z M 4 11 L 1 13 L 12 13 L 15 11 L 4 11 z "
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
     d="M 4 3 L 1 7 L 18 7 L 21 3 L 4 3 z M 4 9 L 1 13 L 18 13 L 21 9 L 4 9 z M 4 15 L 1 19 L 18 19 L 21 15 L 4 15 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
