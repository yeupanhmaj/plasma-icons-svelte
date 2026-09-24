<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 32
	);
</script>

	{#if numericSize <= 40}
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
			<g style="fill:none" id="32-32-osd-sbs-left">
      <rect id="rect4196-6" height="32" width="32" x="0" y="0" style="fill:none"/>
      <path style="color:#7b7c7e;fill:currentColor;fill-opacity:1;stroke:none" d="m 114,41 0,14 10,0 0,-1 -9,0 0,-12 9,0 0,-1 -10,0 z m 11,0 0,14 17,0 0,-14 -17,0 z m 1,1 15,0 0,12 -15,0 0,-12 z" transform="translate(-112,-32.00004)" id="path4200-0" inkscape:connector-curvature="0" class="ColorScheme-Text"/>
      <path style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m 119,44 0,8 5,0 0,-1 -4,0 0,-4 4,0 0,-3 -5,0 z m 8,0 0,3 4,0 0,4 -4,0 0,1 5,0 0,-8 -5,0 z m 1,1 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z" transform="translate(-112,-32.00004)" id="path4204-6" inkscape:connector-curvature="0" class="ColorScheme-Accent"/>
    </g>
		</svg>
	{:else if numericSize <= 56}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g style="fill:none" id="48-48-osd-sbs-left">
      <rect id="rect4224-2" height="48" width="48" x="0" y="0" style="fill:none"/>
      <path style="color:#7b7c7e;fill:currentColor;fill-opacity:1;stroke:none" d="m 66,27 0,18 12,0 0,5 -4,0 0,1 4,0 1,0 7,0 0,-1 -2,0 0,-4 -1,0 0,4 -4,0 0,-4 0,-1 0,-1 -12,0 0,-16 12,0 0,-1 -13,0 z m 14,0 0,18 12,0 0,5 -4,0 0,1 4,0 1,0 9,0 0,-1 -4,0 0,-5 12,0 0,-18 -30,0 z m 1,1 28,0.002 0,15.998 -14,0 -1,0 -13,0 0,-16 z m 12,17 4,0 0,5 -4,0 0,-5 z" transform="translate(-64,-16.00004)" id="path4228-6" inkscape:connector-curvature="0" class="ColorScheme-Text"/>
      <path style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m 71,30 0,12 8,0 0,-1 -4,0 0,-6 4,0 0,-1 -7,0 0,-1 7,0 0,-3 -8,0 z m 11,0 0,3 7,0 0,1 -7,0 0,1 7,0 0,6 -7,0 0,1 8,0 0,-12 -8,0 z m 2,1 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m -16,4 2,0 0,6 -2,0 0,-6 z" transform="translate(-64,-16.00004)" id="path4232" inkscape:connector-curvature="0" class="ColorScheme-Accent"/>
    </g>
		</svg>
	{:else if numericSize <= 96}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g style="fill:none" id="64-64-osd-sbs-left">
      <rect id="rect4252-1" height="64" width="64" x="0" y="0" style="fill:none"/>
      <path style="color:#7b7c7e;fill:currentColor;fill-opacity:1;stroke:none" d="m 4,18 0,22 14,0 0,4 -4,0 0,1 4,0 1,0 9,0 0,-1 -4,0 0,-4 1,0 0,-1 -6,0 -1,0 -13,0 0,-1 20,0 0,-1 L 5,37 5,19 25,19.002 25,18 4,18 Z m 22,0 0,22 14,0 0,4 -4,0 0,1 4,0 1,0 9,0 0,-1 -4,0 0,-4 14,0 0,-22 -34,0 z m 1,1 32,0.002 L 59,37 27,37 27,19 Z m 0,19 32,0 0,1 -18,0 -1,0 -13,0 0,-1 z m -8,2 4,0 0,4 -4,0 0,-4 z m 22,0 4,0 0,4 -4,0 0,-4 z" id="path4256-8" inkscape:connector-curvature="0" class="ColorScheme-Text"/>
      <path style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m 17,22 0,12 8,0 0,-1 -4,0 0,-6 4,0 0,-1 -7,0 0,-1 7,0 0,-3 -8,0 z m 11,0 0,3 7,0 0,1 -7,0 0,1 7,0 0,6 -7,0 0,1 8,0 0,-12 -8,0 z m 2,1 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m -16,4 2,0 0,6 -2,0 0,-6 z" id="path4260" inkscape:connector-curvature="0" class="ColorScheme-Accent"/>
    </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 128 128"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g style="fill:none" id="osd-sbs-left">
      <rect id="rect4280" height="128" width="128" x="0" y="0" style="fill:none"/>
      <path style="color:#7b7c7e;fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m -78,-26 -43,0.002 0,42.998047 30,0 0,8 -8,0 0,1 26,0 0,-1 -8,0 0,-8 3,0 0,-1 -42,0 0,-41 42,0 0,-1 z m 71,0 -70,0.002 0,42.998 30,0 0,8 -8,0 0,1 26,0 0,-1 -8,0 0,-8 30,0 0,-43 z m -69,1 68,0 0,41 -68,0 0,-41 z m -43,1 0,38 41,0 0,-1 -40,0 0,-36 40,0 0,-1 -41,0 z m 44,0 0,38 66,0 0,-38 -66,0 z m 1,1 64,0 0,36 -64,0 0,-36 z m -16,40 8,0 0,8 -8,0 0,-8 z m 44,0 8,0 0,8 -8,0 0,-8 z" transform="translate(128,64)" id="path4286" inkscape:connector-curvature="0" class="ColorScheme-Text"/>
      <path style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m -94,-17 0,24 15,0 0,-1 -9,0 0,-15 9,0 0,-1 -14,0 0,-1 14,0 0,-6 -15,0 z m 22,0 0,6 14,0 0,1 -14,0 0,1 14,0 0,15 -14,0 0,1 15,0 0,-24 -15,0 z m 4,2 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z m 4,0 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z m 4,0 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z m -33,6 4,0 0,15 -4,0 0,-15 z" transform="translate(128,64)" id="path4292-7" inkscape:connector-curvature="0" class="ColorScheme-Accent"/>
    </g>
		</svg>
	{/if}
