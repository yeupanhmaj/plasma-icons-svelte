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
     inkscape:zoom="34.162096"
     inkscape:cx="10.098912"
     inkscape:cy="1.8002408"
     inkscape:window-width="3840"
     inkscape:window-height="2054"
     inkscape:window-x="-11"
     inkscape:window-y="-11"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg6" />
  
  <rect
     style="fill:none;stroke-linecap:round;stroke-linejoin:bevel;stroke-opacity:0.44856;paint-order:stroke fill markers"
     id="rect1"
     width="10.245795"
     height="8.1345406"
     x="-9.6455364"
     y="-9.2729626" />
  <g
     id="g4"
     transform="translate(-0.35044318,0.22877656)">
    <g
       transform="matrix(0.72727028,0,0,0.72727028,-573.80447,-1295.9932)"
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
         class="ColorScheme-Text"
         style="opacity:0.01;fill:currentColor;fill-opacity:1;stroke:none" />
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
       style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:1.01521"
       d="m 5.3504541,3.771363 v 8 h 6.0000009 l 9.8e-4,-7.997254 z m 2.259694,1.653644 V 7.360245 L 9.0060581,5.456731 10.148167,5.710533 8.6888061,7.614047 10.148167,9.612736 9.0060581,9.961715 7.6101481,7.899574 V 9.771363 L 6.5314901,9.92999 V 5.520182 Z"
       id="path3005-8-5"
       class="ColorScheme-Text"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccccccccccccccc" />
  </g>
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
     inkscape:zoom="35.136364"
     inkscape:cx="9.5058214"
     inkscape:cy="11"
     inkscape:window-width="3840"
     inkscape:window-height="2054"
     inkscape:window-x="-11"
     inkscape:window-y="-11"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg6" />
  
  <rect
     style="opacity:0.01;fill:currentColor;fill-opacity:1;stroke:none"
     id="rect7689"
     class="ColorScheme-Text"
     y="9.6727037"
     x="-26.681759"
     ry="0"
     rx="0"
     height="21.999971"
     width="22.000002" />
  <path
     sodipodi:nodetypes="cccccccccc"
     inkscape:connector-curvature="0"
     class="ColorScheme-Text"
     id="path3005"
     d="M 4.9999998,3.0000002 V 19 H 17 V 3.0000002 Z m 1,1 H 16 V 18 H 5.9999998 Z"
     style="fill:currentColor;fill-opacity:1;stroke:none" />
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:1.28676"
     d="M 6.9999999,5.0000002 V 17 L 15,16.998 V 5.0000002 Z m 3.1201151,3.0561426 v 2.4528942 l 1.769301,-2.4126842 1.447611,0.321691 -1.849724,2.4126842 1.849724,2.533317 -1.447611,0.442327 -1.769301,-2.613741 v 2.372473 L 8.7529279,13.766162 V 8.1767758 Z"
     id="path3005-8-5-3"
     class="ColorScheme-Text"
     inkscape:connector-curvature="0"
     sodipodi:nodetypes="ccccccccccccccccc" />
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
     inkscape:zoom="24.15625"
     inkscape:cx="13.785252"
     inkscape:cy="15.958603"
     inkscape:window-width="3840"
     inkscape:window-height="2054"
     inkscape:window-x="-11"
     inkscape:window-y="-11"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg6" />
  
  <g
     id="kdeconnect-0"
     class="ColorScheme-Text"
     transform="matrix(1.4545461,0,0,1.4545461,-1148.3143,-2591.5388)"
     style="fill:currentColor;fill-opacity:1">
    <rect
       style="opacity:0.01;fill:currentColor;fill-opacity:1;stroke:none"
       id="rect2988"
       class="ColorScheme-Text"
       y="1781.6821"
       x="789.4657"
       ry="0"
       rx="0"
       height="21.999971"
       width="22.000002" />
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none"
       d="m 32,-30 v 24 h 18 v -24 z m 1,1 H 49 V -7 H 33 Z m 0.875,1 V -8 H 48 v -20 z m 7.96875,4.680187 -0.03125,3.1875 2.3125,-3.125 1.875,0.4375 -2.40625,3.09375 2.375,3.28125 -1.8125,0.59375 -2.34375,-3.40625 v 3.0625 l -1.75,0.28125 v -7.25 z m -4,1.75 c 0.01993,0 0.04476,0.01525 0.0625,0.03125 l 1.3125,0.84375 c 0.162531,-0.08815 0.323025,-0.156205 0.5,-0.21875 v 0.71875 c -0.972495,0.437237 -1.625,1.428536 -1.625,2.5625 0,1.541819 1.237307,2.78125 2.78125,2.78125 1.086531,0 2.037425,-0.627395 2.5,-1.53125 0.386778,0.565528 0.6875,1 0.6875,1 0.01309,0.02182 0.04039,0.04725 0.0625,0.03125 l 0.125,-0.03125 0.46875,0.75 c 0.02182,0.03346 0.02924,0.09591 0,0.125 l -0.6875,0.6875 c -0.02996,0.03491 -0.08966,0.02473 -0.125,0 l -1.28125,-0.84375 c -0.262822,0.154473 -0.542383,0.293545 -0.84375,0.375 l -0.34375,1.46875 c -0.0096,0.04073 -0.05273,0.0625 -0.09375,0.0625 H 40.375 c -0.04233,0 -0.08502,-0.02177 -0.09375,-0.0625 l -0.3125,-1.46875 c -0.292233,-0.07869 -0.556282,-0.196695 -0.8125,-0.34375 l -1.3125,0.78125 c -0.03505,0.01745 -0.09591,0.02909 -0.125,0 l -0.6875,-0.6875 c -0.03025,-0.02909 -0.02327,-0.09009 0,-0.125 l 0.84375,-1.28125 c -0.157222,-0.275927 -0.2982,-0.558345 -0.375,-0.875 l -1.4375,-0.34375 C 36.022645,-17.173745 36,-17.216586 36,-17.257313 v -0.96875 c 0,-0.04364 0.02134,-0.07775 0.0625,-0.09375 l 1.5,-0.3125 c 0.08192,-0.2736 0.200332,-0.540523 0.34375,-0.78125 l -0.8125,-1.3125 c -0.0208,-0.03346 -0.02895,-0.09591 0,-0.125 l 0.6875,-0.6875 c 0.01498,-0.0058 0.04257,-0.03125 0.0625,-0.03125 z"
       transform="matrix(0.68749969,0,0,0.68749969,772.27817,1805.0571)"
       id="path2990"
       class="ColorScheme-Text"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cccccccccccccccccccccccccccsccccsscccccccccccssccccscccccssccccccs" />
  </g>
		</svg>
	{/if}
