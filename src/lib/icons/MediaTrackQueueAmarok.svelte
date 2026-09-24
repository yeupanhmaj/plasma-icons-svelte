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
        d="M 3 2 L 3 3 L 4 3 L 4 5 L 3 5 L 3 6 L 6 6 L 6 5 L 5 5 L 5 3 L 6 3 L 6 2 L 3 2 z M 8 2 L 8 3 L 14 3 L 14 2 L 8 2 z M 8 4 L 8 5 L 12 5 L 12 4 L 8 4 z M 2 8 L 2 9 L 3 9 L 3 11 L 2 11 L 2 12 L 7 12 L 7 11 L 6 11 L 6 9 L 7 9 L 7 8 L 2 8 z M 4 9 L 5 9 L 5 11 L 4 11 L 4 9 z M 12 13 L 12 14 L 14 14 L 14 13 L 12 13 z "
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 14,11 9,11 11.5,8 Z"
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
     d="M 4 3 L 4 4 L 5 4 L 5 6 L 4 6 L 4 7 L 7 7 L 7 6 L 6 6 L 6 4 L 7 4 L 7 3 L 4 3 z M 10 3 L 10 4 L 19 4 L 19 3 L 10 3 z M 10 5 L 10 6 L 16 6 L 16 5 L 10 5 z M 3 9 L 3 10 L 4 10 L 4 12 L 3 12 L 3 13 L 8 13 L 8 12 L 7 12 L 7 10 L 8 10 L 8 9 L 3 9 z M 10 9 L 10 10 L 14 10 L 14 9 L 10 9 z M 5 10 L 6 10 L 6 12 L 5 12 L 5 10 z M 10 11 L 10 12 L 12 12 L 12 11 L 10 11 z M 10 15 L 10 16 L 19 16 L 19 15 L 10 15 z M 10 17 L 10 18 L 16 18 L 16 17 L 10 17 z M 17 18 L 17 19 L 19 19 L 19 18 L 17 18 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 16.5 9 L 14 12 L 19 12 L 16.5 9 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
