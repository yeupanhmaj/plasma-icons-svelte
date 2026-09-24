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
          d="M 7 2 L 7 3 L 13 3 L 13 10 L 7 10 L 7 12 L 7 13 L 6 13 C 5.4459904 13 5 12.55401 5 12 L 5 10 L 5 8 L 5 7 L 6 7 L 6 3 L 3 3 L 3 7 L 4 7 L 4 8 L 4 10 L 4 12 C 4 13.108 4.892 14 6 14 L 7 14 L 9 14 L 11 14 L 11 13 L 9 13 L 9 12 L 14 12 L 14 11 L 14 10 L 14 2 L 7 2 z M 4 5 L 5 5 L 5 6 L 4 6 L 4 5 z M 2 8 L 2 12 L 3 12 L 3 10 L 3 8 L 2 8 z " 
          class="ColorScheme-Text"
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
        d="m 3,1033.3622 0,6 2,0 0,7 c 0,1.662 1.338,3 3,3 l 1,0 1,0 2,0 3,0 0,-1 -1,0 -1,0 0,-2 1,0 4,0 1,0 0,-13 -1,0 -9,0 0,1 9,0 0,10 -11,0 0,1 0,1 1,0 1,0 0,1 0,0.7266 0,0.2734 -1,0 c -1.108,0 -2,-0.892 -2,-2 l 0,-7 2,0 0,-6 z m 1,1 3,0 0,4 -3,0 z m 1,1 0,2 1,0 0,-2 z m -2,5 0,6 1,0 0,-6 z" 
        transform="translate(0,-1030.3622)"
        class="ColorScheme-Text"/>
		</svg>
	{/if}
