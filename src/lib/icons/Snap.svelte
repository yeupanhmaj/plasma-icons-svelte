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
        d="M 8,2 A 5,5 0 0 0 3,7 l 0,3 2,0 0,-3 a 3,3 0 0 1 3,-3 3,3 0 0 1 3,3 l 0,2 2,0 0,-2 A 5,5 0 0 0 8,2 m -5,9 0,2 2,0 0,-2 z"
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
     d="m 10,10 0,4 4,0 0,-4 z m 1,1 2,0 0,2 -2,0 z"
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
     d="M 11 3 A 7 7 0 0 0 4 10 L 4 14 L 7 14 L 7 10 A 4 4 0 0 1 11 6 A 4 4 0 0 1 15 10 L 15 14 L 18 14 L 18 10 A 7 7 0 0 0 11 3 z M 4 15 L 4 18 L 7 18 L 7 15 L 4 15 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 14 15 L 14 19 L 19 19 L 19 15 L 14 15 z M 15 16 L 18 16 L 18 18 L 15 18 L 15 16 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
