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
     d="m 3,2 0,12 10,0 0,-12 z m 1,1 8,0 0,10 -8,0 z"
     class="ColorScheme-Text"
     />
  <path
      style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
    d="M 7 4 L 7 9 L 9 9 L 9 4 L 7 4 z M 7 10 L 7 12 L 9 12 L 9 10 L 7 10 z "/>
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
     d="M 4 3 L 4 19 L 5 19 L 12 19 L 18 19 L 18 18 L 18 13 L 18 3 L 17 3 L 5 3 L 4 3 z M 5 4 L 17 4 L 17 13 L 17 18 L 12 18 L 5 18 L 5 4 z "
     class="ColorScheme-Text"
     />
    <path
       style="fill:#da4453;fill-opacity:1;stroke:none"
       d="M 14 11 L 14 15 L 15 15 L 15 11 L 14 11 z M 14 16 L 14 17 L 15 17 L 15 16 L 14 16 z "/>
		</svg>
	{/if}
