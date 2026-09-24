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
        d="M 2,2 2,5 5,5 5,2 2,2 Z m 9,0 0,3 3,0 0,-3 -3,0 z M 3,3 4,3 4,4 3,4 3,3 Z m 9,0 1,0 0,1 -1,0 0,-1 z M 6,4 6,5 7,5 7,4 6,4 Z M 9,4 9,5 10,5 10,4 9,4 Z M 4,6 4,7 5,7 5,6 4,6 Z m 7,0 0,1 1,0 0,-1 -1,0 z M 4,9 4,10 5,10 5,9 4,9 Z m -2,2 0,3 3,0 0,-3 -3,0 z m 4,0 0,1 1,0 0,-1 -1,0 z m -3,1 1,0 0,1 -1,0 0,-1 z"
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 8 8 L 8 10 L 9 10 L 9 9 L 10 9 L 10 8 L 8 8 z M 12 8 L 12 9 L 13 9 L 13 10 L 14 10 L 14 8 L 12 8 z M 8 12 L 8 14 L 10 14 L 10 13 L 9 13 L 9 12 L 8 12 z M 13 12 L 13 13 L 12 13 L 12 14 L 14 14 L 14 12 L 13 12 z "
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
     d="M 3 3 L 3 4 L 3 5 L 3 6 L 6 6 L 6 3 L 5 3 L 3 3 z M 16 3 L 16 6 L 17 6 L 19 6 L 19 4 L 19 3 L 17 3 L 16 3 z M 4 4 L 5 4 L 5 5 L 4 5 L 4 4 z M 17 4 L 18 4 L 18 5 L 17 5 L 17 4 z M 7 5 L 7 6 L 9 6 L 9 5 L 7 5 z M 10 5 L 10 6 L 12 6 L 12 5 L 10 5 z M 13 5 L 13 6 L 15 6 L 15 5 L 13 5 z M 5 7 L 5 9 L 6 9 L 6 7 L 5 7 z M 16 7 L 16 9 L 17 9 L 17 7 L 16 7 z M 5 10 L 5 12 L 6 12 L 6 10 L 5 10 z M 16 10 L 16 12 L 17 12 L 17 10 L 16 10 z M 5 13 L 5 15 L 6 15 L 6 13 L 5 13 z M 3 16 L 3 17 L 3 18 L 3 19 L 4 19 L 5 19 L 6 19 L 6 17 L 6 16 L 5 16 L 4 16 L 3 16 z M 7 16 L 7 17 L 9 17 L 9 16 L 7 16 z M 10 16 L 10 17 L 12 17 L 12 16 L 10 16 z M 4 17 L 5 17 L 5 18 L 4 18 L 4 17 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 13 13 L 13 14 L 13 15 L 14 15 L 14 14 L 15 14 L 15 13 L 13 13 z M 17 13 L 17 14 L 18 14 L 18 15 L 19 15 L 19 13 L 18 13 L 17 13 z M 13 17 L 13 19 L 14 19 L 15 19 L 15 18 L 14 18 L 14 17 L 13 17 z M 18 17 L 18 18 L 17 18 L 17 19 L 19 19 L 19 18 L 19 17 L 18 17 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
