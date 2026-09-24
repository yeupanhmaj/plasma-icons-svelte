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
			<path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 2 3 L 2 4 L 8 4 L 8 3 L 2 3 z M 2 9 L 2 10 L 6 10 L 6 9 L 2 9 z "
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 11 3 L 11 4 L 12 4 L 12 6 L 11 6 L 11 7 L 14 7 L 14 6 L 13 6 L 13 4 L 14 4 L 14 3 L 11 3 z M 5 5 L 5 6 L 6 6 L 6 5 L 5 5 z M 7 5 L 7 6 L 8 6 L 8 5 L 7 5 z M 9 5 L 9 6 L 10 6 L 10 5 L 9 5 z M 9 9 L 9 10 L 10 10 L 10 12 L 9 12 L 9 13 L 14 13 L 14 12 L 13 12 L 13 10 L 14 10 L 14 9 L 11 9 L 9 9 z M 11 10 L 12 10 L 12 12 L 11 12 L 11 10 z M 3 11 L 3 12 L 4 12 L 4 11 L 3 11 z M 5 11 L 5 12 L 6 12 L 6 11 L 5 11 z M 7 11 L 7 12 L 8 12 L 8 11 L 7 11 z "
        class="ColorScheme-Accent"
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
     d="M 3 3 L 3 4 L 13 4 L 13 3 L 3 3 z M 3 5 L 3 6 L 9 6 L 9 5 L 3 5 z M 3 9 L 3 10 L 11 10 L 11 9 L 3 9 z M 3 11 L 3 12 L 7 12 L 7 11 L 3 11 z M 3 15 L 3 16 L 10 16 L 10 15 L 3 15 z M 3 17 L 3 18 L 5 18 L 5 17 L 3 17 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 16 3 L 16 4 L 17 4 L 17 6 L 16 6 L 16 7 L 17 7 L 18 7 L 19 7 L 19 6 L 18 6 L 18 4 L 19 4 L 19 3 L 18 3 L 17 3 L 16 3 z M 10 5 L 10 6 L 11 6 L 11 5 L 10 5 z M 12 5 L 12 6 L 13 6 L 13 5 L 12 5 z M 14 5 L 14 6 L 15 6 L 15 5 L 14 5 z M 14 9 L 14 10 L 15 10 L 15 12 L 14 12 L 14 13 L 19 13 L 19 12 L 18 12 L 18 10 L 19 10 L 19 9 L 14 9 z M 16 10 L 17 10 L 17 12 L 16 12 L 16 10 z M 8 11 L 8 12 L 9 12 L 9 11 L 8 11 z M 10 11 L 10 12 L 11 12 L 11 11 L 10 11 z M 12 11 L 12 12 L 13 12 L 13 11 L 12 11 z M 12 15 L 12 16 L 13 16 L 13 18 L 12 18 L 12 19 L 13 19 L 14 19 L 15 19 L 19 19 L 19 18 L 18 18 L 18 16 L 19 16 L 19 15 L 15 15 L 14 15 L 13 15 L 12 15 z M 14 16 L 15 16 L 15 18 L 14 18 L 14 16 z M 16 16 L 17 16 L 17 18 L 16 18 L 16 16 z M 6 17 L 6 18 L 7 18 L 7 17 L 6 17 z M 8 17 L 8 18 L 9 18 L 9 17 L 8 17 z M 10 17 L 10 18 L 11 18 L 11 17 L 10 17 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
