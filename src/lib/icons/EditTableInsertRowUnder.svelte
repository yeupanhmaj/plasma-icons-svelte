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
        d="M 2 2 L 2 5 L 3 5 L 3 3 L 6 3 L 6 5 L 7 5 L 7 3 L 9 3 L 9 5 L 10 5 L 10 3 L 13 3 L 13 5 L 14 5 L 14 2 L 9 2 L 2 2 z M 10 6 L 12 10 L 14 6 L 10 6 z M 2 10 L 2 14 L 14 14 L 14 10 L 13 10 L 13 13 L 10 13 L 10 10 L 9 10 L 9 13 L 7 13 L 7 10 L 6 10 L 6 13 L 3 13 L 3 10 L 2 10 z "
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 2,5 2,6 3.281,6 2,7.281 2,8.719 4.719,6 l 2.563,0 -3,3 -2.281,0 0,1 7,0 0,-1.719 L 8.282,9 5.719,9 8.719,6 9,6 9,5 3,5 Z" 
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
     d="M 3 3 L 3 8 L 4 8 L 4 4 L 6 4 L 6 7 L 6 8 L 7 8 L 7 7 L 7 4 L 9 4 L 9 8 L 10 8 L 10 4 L 12 4 L 12 8 L 13 8 L 13 4 L 15 4 L 15 7 L 15 8 L 16 8 L 16 7 L 16 4 L 18 4 L 18 8 L 19 8 L 19 4 L 19 3 L 4 3 L 3 3 z M 14 9 L 16.5 14 L 19 9 L 14 9 z M 3 14 L 3 19 L 4 19 L 12 19 L 13 19 L 15 19 L 16 19 L 18 19 L 19 19 L 19 18 L 19 14 L 18 14 L 18 18 L 16 18 L 16 14 L 15 14 L 15 18 L 13 18 L 13 14 L 12 14 L 12 18 L 10 18 L 10 14 L 9 14 L 9 18 L 7 18 L 7 14 L 6 14 L 6 18 L 4 18 L 4 14 L 3 14 z "
    class="ColorScheme-Text"
    />  
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-Accent"
     d="M 3,8 3,9 4,9 7.28125,9 4,12.28125 4,12.292969 3.292969,13 3,13 l 0,1 1,0 7,0 2,0 0,-1 -0.28125,0 L 13,12.71875 13,11.28125 11.28125,13 11,13 8.71875,13 11,10.71875 12.71875,9 13,9 13,8 11,8 8.292969,8 4,8 3,8 M 8.71875,9 11,9 11.28125,9 11,9.28125 7.28125,13 l -2.5625,0 4,-4" />
		</svg>
	{/if}
