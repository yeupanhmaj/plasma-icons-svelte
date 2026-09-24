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
     d="M 2,2 2,14 8,14 8,2 2,2 Z M 3,3 7,3 7,13 3,13 3,3 Z M 4,4 4,5 6,5 6,4 4,4 Z M 4,6 4,7 6,7 6,6 4,6 Z M 4,8 4,9 5,9 5,8 4,8 Z"
     class="ColorScheme-Text"/>
  <path
      style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
   d="m 9,2 0,12 5,0 0,-12 -4,0 z m 1,1 3,0 0,10 -3,0 z" />
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
     d="M 3 3 L 3 4 L 3 19 L 4 19 L 10 19 L 10 18 L 10 4 L 10 3 L 4 3 L 3 3 z M 4 4 L 9 4 L 9 18 L 4 18 L 4 4 z M 5 5 L 5 6 L 8 6 L 8 5 L 5 5 z M 5 7 L 5 8 L 8 8 L 8 7 L 5 7 z M 5 9 L 5 10 L 8 10 L 8 9 L 5 9 z M 5 11 L 5 12 L 7 12 L 7 11 L 5 11 z "
	 class="ColorScheme-Text"
     />
    <path
       style="opacity:1;fill:#da4453;fill-opacity:1;stroke:none"
       d="M 13 3 L 13 4 L 18 4 L 18 18 L 13 18 L 13 19 L 19 19 L 19 18 L 19 3 L 13 3 z M 13 18 L 13 4 L 12 4 L 12 18 L 13 18 z " />
		</svg>
	{/if}
