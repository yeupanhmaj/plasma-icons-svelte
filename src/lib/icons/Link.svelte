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
     transform="translate(-3,-1033.3622)">
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 4,7 C 3.4459904,7 3,7.4459904 3,8 l 0,6 c 0,0.55401 0.4459904,1 1,1 l 5,0 c 0.55401,0 1,-0.44599 1,-1 l 0,-1 2,0 0,1 c 0,0.554 0.44599,1 1,1 l 5,0 c 0.55401,0 1,-0.446 1,-1 L 19,8 C 19,7.446 18.55401,7 18,7 l -5,0 c -0.55401,0 -1,0.446 -1,1 l 0,1 -2,0 0,-1 C 10,7.4459904 9.55401,7 9,7 Z M 4,8 7,8 9,8 9,9 C 8.4459904,9 8,9.4459904 8,10 l 0,2 c 0,0.55401 0.4459904,1 1,1 l 0,1 -2,0 -3,0 z m 9,0 3,0 2,0 0,6 -2,0 -3,0 0,-1 c 0.55401,0 1,-0.44599 1,-1 l 0,-2 C 14,9.4459904 13.55401,9 13,9 Z m -4,2 4,0 0,2 -4,0 z"
       transform="translate(0,1030.3622)"
       id="rect4161"
       class="ColorScheme-Text" />
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
        d="M 3 7 C 2.4459904 7 2 7.4459904 2 8 L 2 14 C 2 14.55401 2.4459904 15 3 15 L 9 15 C 9.55401 15 10 14.55401 10 14 L 10 13 L 12 13 L 12 14 C 12 14.554 12.44599 15 13 15 L 19 15 C 19.55401 15 20 14.554 20 14 L 20 8 C 20 7.446 19.55401 7 19 7 L 13 7 C 12.44599 7 12 7.446 12 8 L 12 9 L 10 9 L 10 8 C 10 7.4459904 9.55401 7 9 7 L 3 7 z M 3 8 L 7 8 L 9 8 L 9 9 C 8.4459904 9 8 9.4459904 8 10 L 8 12 C 8 12.55401 8.4459904 13 9 13 L 9 14 L 7 14 L 3 14 L 3 8 z M 13 8 L 16 8 L 19 8 L 19 14 L 16 14 L 13 14 L 13 13 C 13.55401 13 14 12.55401 14 12 L 14 10 C 14 9.4459904 13.55401 9 13 9 L 13 8 z M 9 10 L 13 10 L 13 12 L 9 12 L 9 10 z " 
        id="rect4161"
        class="ColorScheme-Text"/>
		</svg>
	{/if}
