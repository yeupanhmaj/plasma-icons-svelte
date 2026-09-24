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
			<defs
     id="defs10" />
  <sodipodi:namedview
     id="namedview8"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     showgrid="false"
     inkscape:zoom="48.3125"
     inkscape:cx="6.8926261"
     inkscape:cy="7.9896507"
     inkscape:window-width="1920"
     inkscape:window-height="1011"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg6" />
  
  <g
     id="16-16-zoom-fit-width"
     transform="rotate(90,320.02038,64.484668)">
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none"
       d="m 256.5232,369.50504 v 1 h 7 7 v -1 z m 7,1 -2,2 h 1 c 0,0 0.007,1.1284 0,2.28125 -0.5969,0.34604 -1,0.97915 -1,1.71875 0,0.7396 0.4031,1.37271 1,1.71875 0.007,1.18625 0,2.3125 0,2.3125 h -1 l 1.96875,1.96875 h -6.9375 v 1 h 13.96875 v -1 h -6.96875 l 1.96875,-1.96875 -1.03125,-0.0312 v -2.25 c 0.61694,-0.34059 1.03125,-0.99545 1.03125,-1.75 0,-0.75455 -0.41431,-1.40941 -1.03125,-1.75 v -2.21875 l 1.03125,-0.0312 -2,-2 z m -0.125,5.03125 h 0.25 c 0.4881,0.0662 0.875,0.46249 0.875,0.96875 0,0.55228 -0.44772,1 -1,1 -0.55228,0 -1,-0.44772 -1,-1 0,-0.50626 0.3869,-0.90253 0.875,-0.96875 z"
       id="path3849"
       inkscape:connector-curvature="0"
       class="ColorScheme-Text" />
    <rect
       style="fill:#566060;fill-opacity:0;stroke:none"
       id="rect3851"
       width="16"
       height="16"
       x="0.012518"
       y="6.0000002e-06"
       transform="translate(255.5232,368.50504)" />
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
			<defs
     id="defs11" />
  <sodipodi:namedview
     id="namedview9"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     showgrid="false"
     inkscape:zoom="35.136364"
     inkscape:cx="9.4773609"
     inkscape:cy="10.98577"
     inkscape:window-width="1920"
     inkscape:window-height="1011"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg7" />
  
  <g
     transform="rotate(90,320.02038,67.484667)"
     id="zoom-fit-width">
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none"
       d="m 253.5232,366.50504 v 1 h 10 10 v -1 z m 10,1 -3,3 h 2 v 3.1875 c -1.15834,0.41552 -2,1.51119 -2,2.8125 0,1.30132 0.84166,2.39699 2,2.8125 v 3.1875 h -2 l 3,3 3,-3 h -2 v -3.1875 c 1.15835,-0.41551 2,-1.51118 2,-2.8125 0,-1.30131 -0.84165,-2.39698 -2,-2.8125 v -3.1875 h 2 z m 0,18 h -10 v 1 h 20 v -1 z m 0,-11 c 1.10457,0 2,0.89543 2,2 0,1.10457 -0.89543,2 -2,2 -1.10456,0 -2,-0.89543 -2,-2 0,-1.10457 0.89544,-2 2,-2 z"
       id="path3823"
       inkscape:connector-curvature="0"
       class="ColorScheme-Text" />
    <circle
       style="fill:currentColor;fill-opacity:1;stroke:none"
       id="path3825"
       transform="translate(252.5232,365.50504)"
       cx="11.012515"
       cy="11.000004"
       r="1"
       class="ColorScheme-Text" />
    <rect
       style="fill:#566060;fill-opacity:0;stroke:none"
       id="rect3827"
       width="22"
       height="22"
       x="0.012515"
       y="4e-06"
       transform="translate(252.5232,365.50504)" />
  </g>
		</svg>
	{/if}
