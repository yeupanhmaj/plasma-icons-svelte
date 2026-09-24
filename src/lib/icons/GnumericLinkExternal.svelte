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
       d="M 4 5 L 4 7 L 2 7 L 2 8 L 4 8 L 4 10 L 5 10 L 7 10 L 7 9 L 5 9 L 5 6 L 7 6 L 7 5 L 5 5 L 4 5 z M 9 5 L 9 6 L 11 6 L 11 9 L 9 9 L 9 10 L 11 10 L 12 10 L 12 9 L 12 8 L 14 8 L 14 7 L 12 7 L 12 6 L 12 5 L 11 5 L 9 5 z M 7 7 L 7 8 L 9 8 L 9 7 L 7 7 z "
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
	d="M 6 5 L 6 7 L 3 7 L 3 8 L 6 8 L 6 10 L 10 10 L 10 9 L 7 9 L 7 6 L 10 6 L 10 5 L 6 5 z M 12 5 L 12 6 L 15 6 L 15 9 L 12 9 L 12 10 L 16 10 L 16 8 L 19 8 L 19 7 L 16 7 L 16 5 L 12 5 z M 10 7 L 10 8 L 12 8 L 12 7 L 10 7 z "
	class="ColorScheme-Text"
    />
  <path
    style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 16 14 L 16 16 L 14 16 L 14 17 L 16 17 L 16 19 L 17 19 L 17 17 L 19 17 L 19 16 L 17 16 L 17 14 L 16 14 z "
	class="ColorScheme-Accent"
     />
		</svg>
	{/if}
