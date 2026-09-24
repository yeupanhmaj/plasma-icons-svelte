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
        d="M 2 2 L 2 3 L 2 9 L 3 9 L 3 7 L 6 7 L 6 9 L 7 9 L 7 7 L 9 7 L 9 9 L 10 9 L 10 7 L 13 7 L 13 9 L 14 9 L 14 2 L 2 2 z M 3 3 L 6 3 L 6 6 L 3 6 L 3 3 z M 7 3 L 9 3 L 9 6 L 7 6 L 7 3 z M 10 3 L 13 3 L 13 6 L 10 6 L 10 3 z M 10 10 L 12 14 L 14 10 L 10 10 z "
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 2,9 2,10 3.281,10 2,11.281 2,12.719 4.719,10 l 2.563,0 -3,3 -2.281,0 0,1 7,0 0,-1.719 L 8.282,13 5.719,13 8.719,10 9,10 9,9 3,9 Z"
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
     d="M 3 3 L 3 13 L 3 19 L 4 19 L 4 13 L 4 9 L 5 9 L 6 9 L 6 13 L 7 13 L 7 9 L 9 9 L 9 13 L 10 13 L 10 9 L 12 9 L 12 13 L 12 19 L 13 19 L 13 13 L 13 9 L 15 9 L 15 13 L 16 13 L 16 9 L 18 9 L 18 13 L 19 13 L 19 4 L 19 3 L 4 3 L 3 3 z M 4 4 L 6 4 L 6 7 L 6 8 L 5 8 L 4 8 L 4 4 z M 7 4 L 9 4 L 9 8 L 7 8 L 7 7 L 7 4 z M 10 4 L 12 4 L 12 8 L 10 8 L 10 4 z M 13 4 L 15 4 L 15 7 L 15 8 L 13 8 L 13 4 z M 16 4 L 18 4 L 18 8 L 17.099609 8 L 16 8 L 16 7 L 16 4 z M 14 14 L 16.5 19 L 19 14 L 14 14 z "
    class="ColorScheme-Text"
    />  
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-Accent"
     d="M 4,13 9.29297,13 12,13 l 0,1 -2.29297,0 -4,4 2.58594,0 L 12,14.29297 12,15.70703 9.70703,18 12,18 l 0,1 -8,0 0,-1 0.29297,0 4,-4 L 4,14 4,13" />
		</svg>
	{/if}
