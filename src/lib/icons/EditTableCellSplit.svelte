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
			<g
     transform="translate(-421.71429,-531.79074)">
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 2 2 L 2 14 L 3 14 L 9 14 L 10 14 L 13 14 L 14 14 L 14 2 L 2 2 z M 3 3 L 6 3 L 6 5 L 7 5 L 7 3 L 9 3 L 9 5 L 10 5 L 10 3 L 11 3 L 12 3 L 13 3 L 13 5 L 12 5 L 11 5 L 10 5 L 10 6 L 11 6 L 12 6 L 13 6 L 13 9 L 12 9 L 11 9 L 10 9 L 10 10 L 11 10 L 12 10 L 13 10 L 13 13 L 12 13 L 11 13 L 10 13 L 10 10 L 9 10 L 9 13 L 7 13 L 7 10 L 6 10 L 6 13 L 3 13 L 3 10 L 6 10 L 6 9 L 3 9 L 3 6 L 6 6 L 6 5 L 3 5 L 3 3 z "
        class="ColorScheme-Text"
      transform="translate(421.71429,531.79074)"
        />
  <path
     d="m 426.71429,535.79074 0,7 6,0 0,-7 z m 1,1 4,0 0,1 -1,1.5 1,1.5 0,1 -4,0 0,-1 1,-1.5 -1,-1.5 z"
      style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
     
      />
  </g>
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
    d="M 3 3 L 3 4 L 3 19 L 4 19 L 18 19 L 19 19 L 19 4 L 19 3 L 3 3 z M 4 4 L 8 4 L 8 5 L 8 6 L 7 6 L 4 6 L 4 4 z M 9 4 L 13 4 L 13 5 L 13 6 L 9 6 L 9 5 L 9 4 z M 14 4 L 18 4 L 18 6 L 15 6 L 14 6 L 14 5 L 14 4 z M 4 7 L 7 7 L 8 7 L 9 7 L 13 7 L 14 7 L 15 7 L 18 7 L 18 9 L 15 9 L 15 10 L 18 10 L 18 12 L 15 12 L 15 13 L 18 13 L 18 15 L 15 15 L 14 15 L 13 15 L 9 15 L 8 15 L 7 15 L 4 15 L 4 13 L 7 13 L 7 12 L 4 12 L 4 10 L 7 10 L 7 9 L 4 9 L 4 7 z M 4 16 L 7 16 L 8 16 L 8 17.099609 L 8 18 L 4 18 L 4 16 z M 9 16 L 13 16 L 13 18 L 9 18 L 9 16 z M 14 16 L 18 16 L 18 18 L 14 18 L 14 16 z "
    class="ColorScheme-Text"
    />  
  <path
     style="fill:#da4453"
     d="m 7,7 0,8 8,0 0,-8 -8,0 m 1,1 6,0 0,1 -2,2 2,2 0,1 -6,0 0,-6" />
		</svg>
	{/if}
