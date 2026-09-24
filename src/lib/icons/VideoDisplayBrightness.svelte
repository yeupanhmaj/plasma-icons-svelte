<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 22,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

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
	<g id="22-22-video-display-brightness" transform="matrix(0.75000099,0,0,0.75000099,-289.42897,-387.59902) translate(-4.54574e-06,-1.413e-05)">
    <rect style="opacity:0.01000001;fill:#00000f;fill-opacity:0.00392157;stroke:none" id="rect3074" width="29.333307" height="29.333271" x="385.90479" y="516.79803"/>
    <path id="rect7235" style="fill:currentColor;fill-opacity:1;stroke:none" d="m 393.90479,542.13129 13.33334,0 0,1.33335 -13.33334,0 z m 4,-2.66666 5.33332,0 0,2.66664 -5.33332,0 z m -10.66667,-18.66662 0,18.6666 26.66663,0 0,-18.6666 z m 1.33333,1.33333 23.99997,0 0,13.33328 -23.99997,0 z" class="ColorScheme-Text" inkscape:connector-curvature="0" sodipodi:nodetypes="cccccccccccccccccccc"/>
    <rect style="opacity:0.2;fill:currentColor;fill-opacity:1;stroke:none" id="rect7240" width="23.999973" height="13.333305" x="388.57144" y="522.13135" class="ColorScheme-Text"/>
    <path style="fill:currentColor;fill-opacity:1;stroke:none" d="m 400.57143,524.13133 c -2.57733,0 -4.66666,2.08933 -4.66666,4.66666 0,2.57732 2.08933,4.66666 4.66666,4.66666 2.57733,0 4.66666,-2.08934 4.66666,-4.66666 0,-2.57733 -2.08933,-4.66666 -4.66666,-4.66666 z m 0,1.33333 0,6.66666 c -1.84095,0 -3.33333,-1.49238 -3.33333,-3.33333 0,-1.84095 1.49238,-3.33333 3.33333,-3.33333 z" id="path3891" inkscape:connector-curvature="0" class="ColorScheme-Text"/>
  </g>
</svg>
