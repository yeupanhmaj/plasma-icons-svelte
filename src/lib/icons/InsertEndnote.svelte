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
        d="M 2 2 L 2 9 L 2 10 L 2 11 L 2 12 L 4 12 L 4 14 L 11 14 L 11 13 L 5 13 L 5 12 L 11 12 L 11 11 L 11 9 L 11 5 L 13 5 L 13 7 L 14 7 L 14 4 L 11 4 L 11 2 L 3 2 L 2 2 z M 3 3 L 10 3 L 10 10 L 10 11 L 3 11 L 3 10 L 3 9 L 3 3 z M 4 4 L 4 5 L 9 5 L 9 4 L 4 4 z M 4 6 L 4 7 L 7 7 L 7 6 L 4 6 z "
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 13 8 L 13 9 L 14 9 L 14 8 L 13 8 z M 4 9 L 4 10 L 8 10 L 8 9 L 4 9 z M 13 10 L 13 14 L 14 14 L 14 10 L 13 10 z "
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
     d="M 4 3 L 4 4 L 4 6 L 4 9 L 4 13 L 4 16 L 5 16 L 6 16 L 6 18 L 6 19 L 14 19 L 14 18 L 13 18 L 7 18 L 7 16 L 11 16 L 14 16 L 15 16 L 15 15 L 15 13 L 15 12 L 15 10.59375 L 15 6 L 17 6 L 17 8 L 17 9 L 17 12 L 18 12 L 18 8.40625 L 18 7 L 18 6 L 18 5 L 17 5 L 15 5 L 15 4 L 15 3 L 14 3 L 4 3 z M 5 4 L 13 4 L 14 4 L 14 5 L 14 6 L 14 10 L 14 11 L 14 13 L 14 15 L 12 15 L 10 15 L 5 15 L 5 9 L 5 4 z M 6 6 L 6 7 L 12 7 L 12 6 L 6 6 z M 6 8 L 6 9 L 9 9 L 9 8 L 6 8 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 6 13 L 6 14 L 11 14 L 11 13 L 6 13 z M 17 13 L 17 14 L 18 14 L 18 13 L 17 13 z M 17 15 L 17 19 L 18 19 L 18 15 L 17 15 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
