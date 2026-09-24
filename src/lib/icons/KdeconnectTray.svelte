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
			<sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="40.106213"
     inkscape:cx="1.5832958"
     inkscape:cy="10.384925"
     inkscape:window-width="3440"
     inkscape:window-height="1371"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg1" />
  
  <g
     transform="matrix(0.72727028,0,0,0.72727028,-574.15491,-1295.7644)"
     id="16-16-kdeconnect-3"
     style="fill:#000000;fill-opacity:1">
    <rect
       width="22.000002"
       height="21.999971"
       rx="0"
       ry="0"
       x="789.4657"
       y="1781.6821"
       id="rect2996-6"
       style="opacity:0.01;fill:#000000;fill-opacity:1;stroke:none" />
    <path
       sodipodi:nodetypes="cccccccccc"
       style="fill:currentColor;fill-opacity:1;stroke:none"
       d="M 4.1249442,2.7499644 V 19.249957 H 17.87499 V 2.7499644 Z M 5.4999597,4.1250967 H 16.499955 V 17.875143 H 5.4999597 Z"
       transform="translate(789.4657,1781.6821)"
       id="path3130-7"
       class="ColorScheme-Text"
       inkscape:connector-curvature="0" />
  </g>
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="m 4.9995095,4 v 8 H 10.99951 l 9.81e-4,-7.997254 z m 2.259694,1.653644 v 1.935238 l 1.39591,-1.903514 1.142109,0.253802 -1.459361,1.903514 1.459361,1.998689 -1.142109,0.348979 -1.39591,-2.062141 V 10 l -1.078658,0.158627 V 5.748819 Z"
     id="path3005-8-5"
     class="ColorScheme-Text"
     inkscape:connector-curvature="0"
     sodipodi:nodetypes="ccccccccccccccccc" />
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
			<sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="58.336309"
     inkscape:cx="6.2825367"
     inkscape:cy="11.390848"
     inkscape:window-width="3440"
     inkscape:window-height="1371"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg1" />
  
  <rect
     style="opacity:0.01;fill:#000000;fill-opacity:1;stroke:none"
     id="rect7689"
     y="1.4305115e-05"
     x="-9.5367432e-07"
     ry="0"
     rx="0"
     height="21.999971"
     width="22.000002" />
  <path
     sodipodi:nodetypes="cccccccccc"
     inkscape:connector-curvature="0"
     class="ColorScheme-Text"
     id="path3005"
     d="M 5,3.0000001 V 19 H 17 V 3.0000001 Z m 1,1 H 16 V 18 H 6 Z"
     style="fill:currentColor;fill-opacity:1;stroke:none" />
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="M 7,5.0000001 V 17 l 8,-0.002 V 5.0000001 Z m 3.120115,3.0561434 v 2.4528935 l 1.769301,-2.4126837 1.447611,0.3216914 -1.849724,2.4126833 1.849724,2.533317 -1.447611,0.442327 -1.769301,-2.613741 v 2.372473 L 8.7529278,13.766162 V 8.1767768 Z"
     id="path3005-8-5-3"
     class="ColorScheme-Text"
     inkscape:connector-curvature="0"
     sodipodi:nodetypes="ccccccccccccccccc" />
		</svg>
	{/if}
