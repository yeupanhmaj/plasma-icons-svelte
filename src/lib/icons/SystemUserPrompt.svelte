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

	{#if numericSize <= 27}
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
     inkscape:cx="9.4773609"
     inkscape:cy="10.98577"
     inkscape:window-width="1920"
     inkscape:window-height="1011"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg6" />
  
  <g
     id="22-22-system-user-prompt"
     transform="matrix(0.6875,0,0,0.6875,-15.125,0)"
     stroke-width="1.45455">
    <path
       id="path909-5"
       class="ColorScheme-Text"
       d="m 35.818183,21.09091 a 0.72727275,0.72727275 0 0 1 -0.727272,0.727273 0.72727275,0.72727275 0 0 1 -0.727273,-0.727273 0.72727275,0.72727275 0 0 1 0.727273,-0.727273 0.72727275,0.72727275 0 0 1 0.727272,0.727273 z m -2.181818,0 a 0.72727275,0.72727275 0 0 1 -0.727273,0.727273 0.72727275,0.72727275 0 0 1 -0.727272,-0.727273 0.72727275,0.72727275 0 0 1 0.727272,-0.727273 0.72727275,0.72727275 0 0 1 0.727273,0.727273 z m -2.181818,0 a 0.72727275,0.72727275 0 0 1 -0.727273,0.727273 0.72727275,0.72727275 0 0 1 -0.727273,-0.727273 0.72727275,0.72727275 0 0 1 0.727273,-0.727273 0.72727275,0.72727275 0 0 1 0.727273,0.727273 z m -2.181818,0 a 0.72727275,0.72727275 0 0 1 -0.727273,0.727273 0.72727275,0.72727275 0 0 1 -0.727273,-0.727273 0.72727275,0.72727275 0 0 1 0.727273,-0.727273 0.72727275,0.72727275 0 0 1 0.727273,0.727273 z m 5.81818,-10.909091 H 38 v 1.454545 h -2.909091 z m -2.909091,0 h 1.454545 v 1.454545 h -1.454545 z m -4.363635,0 h 2.909091 v 1.454545 h -2.909091 z m -2.909091,7.272727 v 7.272728 h 26.181819 v -7.272728 z m 1.454546,1.454546 h 23.272728 v 4.363636 H 26.363638 Z M 24.909097,7.2727345 V 14.545462 H 51.090916 V 7.2727345 Z M 26.363643,8.72728 h 23.272728 v 4.363637 H 26.363643 Z"
       fill="currentColor" />
    <path
       id="path44-5-7"
       d="M 22,0 V 32 H 54 V 0 Z"
       fill="none" />
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
			<g id="system-user-prompt" transform="translate(112 64) translate(-134,-64)">
        <path id="path44-5" d="m22 0v32h32v-32z" fill="none"/>
        <path id="path889" class="ColorScheme-Text" d="m37 10.75v1.5h5v-1.5zm-4 0v1.5h3v-1.5zm-6 0v1.5h5v-1.5zm-1-1.75h24v5h-24zm-1-1v7h26v-7zm1 10h24v5h-24zm-1-1v7h26v-7zm3.5 2c-.828427 0-1.5.671573-1.5 1.5s.671573 1.5 1.5 1.5 1.5-.671573 1.5-1.5-.671573-1.5-1.5-1.5zm4 0c-.828427 0-1.5.671573-1.5 1.5s.671573 1.5 1.5 1.5 1.5-.671573 1.5-1.5-.671573-1.5-1.5-1.5zm4 0c-.828427 0-1.5.671573-1.5 1.5s.671573 1.5 1.5 1.5 1.5-.671573 1.5-1.5-.671573-1.5-1.5-1.5zm4 0c-.828427 0-1.5.671573-1.5 1.5s.671573 1.5 1.5 1.5 1.5-.671573 1.5-1.5-.671573-1.5-1.5-1.5z" fill="currentColor"/>
    </g>
		</svg>
	{/if}
