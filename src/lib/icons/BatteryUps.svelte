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
			<path class="ColorScheme-Text" d="m1.9999973 2.000001v11.999995h12.000014v-11.999995zm1 0.999999h10.000014v9.999996h-10.000014zm5.0000137 0-2.0169629 4 2.0169629 0.0169492v2.9830508l2-4.0000005h-2zm-4.0000137 5.98875v2.999996h1v-2.999996zm2 0v2.999996h1v-2.999996zm4.5000137 0c-0.82843 0-1.5 0.67157-1.5 1.499996 0 0.82843 0.67157 1.5 1.5 1.5s1.5-0.67157 1.5-1.5c0-0.828426-0.67157-1.499996-1.5-1.499996z" fill="currentColor"/>
		</svg>
	{:else if numericSize <= 27}
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
			<g transform="translate(-187.54229,-436.4721)">
        <rect x="182.53572" y="428.50504" width="31.999998" height="31.999998" fill="none"/>
        <path class="ColorScheme-Text" d="m190.53572 438.50504v18h16v-18zm1 1h14v16h-14zm7 0-3 7h3v4l3-7h-3zm-6 11.98875v3h1v-3zm2 0v3h1v-3zm2 0v3h1v-3zm2 0v3h1v-3zm4.5 0c-0.82843 0-1.5 0.67157-1.5 1.5s0.67157 1.5 1.5 1.5 1.5-0.67157 1.5-1.5-0.67157-1.5-1.5-1.5z" fill="currentColor"/>
    </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
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
     inkscape:zoom="1"
     inkscape:cx="205"
     inkscape:cy="-151"
     inkscape:window-width="1920"
     inkscape:window-height="1011"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg6" />
  
  <g
     id="battery-ups"
     transform="translate(-182.53572,-428.50504)">
    <rect
       y="428.50504"
       x="182.53572"
       height="31.999998"
       width="31.999998"
       id="rect4447"
       style="opacity:1;fill:none;fill-opacity:1;stroke:none" />
    <path
       inkscape:connector-curvature="0"
       id="rect4411"
       d="m 189.53572,432.50504 v 24 h 18 v -24 z m 1,1 h 16 v 22 h -16 z m 8,2 -3,7 h 3 v 4 l 3,-7 h -3 z m -6,15 v 3 h 1 v -3 z m 2,0 v 3 h 1 v -3 z m 2,0 v 3 h 1 v -3 z m 2,0 v 3 h 1 v -3 z m 4.5,0 c -0.82843,0 -1.5,0.67157 -1.5,1.5 0,0.82843 0.67157,1.5 1.5,1.5 0.82843,0 1.5,-0.67157 1.5,-1.5 0,-0.82843 -0.67157,-1.5 -1.5,-1.5 z"
       style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none"
       class="ColorScheme-Text"
       sodipodi:nodetypes="cccccccccccccccccccccccccccccccccccccsssss" />
  </g>
		</svg>
	{/if}
