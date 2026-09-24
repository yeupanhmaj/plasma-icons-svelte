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
			<g style="fill:none" id="32-32-osd-rotate-normal">
      <rect id="rect4198" height="32" width="32" x="0" y="0" style="fill:none"/>
      <path id="path4202-9" d="M 2,21.9999 2,4 30,4.00003 30,22 19,21.9999 19,27 l 4,0 0,1 -14,0 0,-1 4,0 0,-5.0001 -11,0 z m 16,0 -4,0 0,5.0001 4,0 0,-5.0001 z M 29,4.99997 2.99998,4.99997 2.99998,21 29,21 29,4.99997 Z" inkscape:connector-curvature="0" style="color:#7b7c7e;fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" class="ColorScheme-Text"/>
      <path style="fill:currentColor;fill-opacity:1;stroke:none" d="m 120,39 0,8 11,0 0,-8 -11,0 z m 7,1 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m -8,2 9,0 0,4 -9,0 0,-4 z m 11,1 0,1 1,0 0,1 -1,0 0,1 3,0 0,4 -9,0 0,-2 -1,0 0,3 11,0 0,-8 -4,0 z m 2,1 1,0 0,1 -1,0 0,-1 z" transform="translate(-112,-32)" id="path4208" inkscape:connector-curvature="0" class="ColorScheme-Accent"/>
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
			<g style="fill:none" id="48-48-osd-rotate-normal">
      <rect id="rect4229" height="48" width="48" x="0" y="0" style="fill:none"/>
      <path style="color:#7b7c7e;fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m 66,23 0,28 18,0 0,5 -3,0 0,1 14,0 0,-1 -3,0 0,-5 18,0 0,-28 -44,0 z m 43,1 0,26 L 67,50 67,24.001953 109,24 Z m -41,1 0,24 40,0 0,-24 -40,0 z m 1,1 38,0 0,22 -38,0 0,-22 z m 16,25 6,0 0,5 -6,0 0,-5 z" transform="translate(-64,-16)" id="path4233" inkscape:connector-curvature="0" class="ColorScheme-Text"/>
      <path style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m 77,28 0,12 16,0 0,-12 -16,0 z m 10,1 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m -13,2 14,0 0,1 -14,0 0,-1 z m 0,2 2,0 0,6 -2,0 0,-6 z m 3,0 11,0 0,6 -11,0 0,-6 z m 13,1 0,1 0,1 0,1 4,0 0,1 -4,0 0,1 4,0 0,6 -11,0 0,-4 -1,0 0,4 -2,0 0,-4 -1,0 0,5 16,0 0,-12 -5,0 z m 1,1 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z" transform="translate(-64,-16)" id="path4241" inkscape:connector-curvature="0" class="ColorScheme-Accent"/>
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
			<g style="fill:none" id="64-64-osd-rotate-normal">
      <rect id="rect4263" height="64" width="64" x="0" y="0" style="fill:none"/>
      <path id="path4267" d="m 59,11 -54,0 0,34 54,0 0,-34 z m -54,-1 -1,0 0,1 0,34 0,1 1,0 23,0 0,7 -7,0 0,1 7,0 1,0 6,0 1,0 7,0 0,-1 -7,0 0,-7 23,0 1,0 0,-1 0,-34 0,-1 -1,0 -54,0 z m 24,43 0,-7 6,0 0,7 -6,0 z M 7,13 57,13 57,42 7,42 7,13 Z m -1,-1 1,0 50,0 1,0 0,1 0,29 0,1 -1,0 -50,0 -1,0 0,-1 0,-29 0,-1 z" inkscape:connector-curvature="0" style="color:#7b7c7e;fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" class="ColorScheme-Text"/>
      <path style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m 21,19 0,12 16,0 0,-12 -16,0 z m 10,1 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m -13,2 14,0 0,1 -14,0 0,-1 z m 0,2 2,0 0,6 -2,0 0,-6 z m 3,0 11,0 0,6 -11,0 0,-6 z m 13,1 0,1 0,1 0,1 4,0 0,1 -4,0 0,1 4,0 0,6 -11,0 0,-4 -1,0 0,4 -2,0 0,-4 -1,0 0,5 16,0 0,-12 -5,0 z m 1,1 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z" id="path4273" inkscape:connector-curvature="0" class="ColorScheme-Accent"/>
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
			<g style="fill:none" id="osd-rotate-normal">
      <rect id="rect4294" height="128" width="128" x="0" y="0" style="fill:none"/>
      <path style="color:#7b7c7e;fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m -121,-44 c -1.65686,0 -3,1.3431 -3,3 l 0,66 c 0,1.6569 1.34314,3 3,3 l 49,0 0,13 -13,0 c -0.5523,0 -1,0.448 -1,1 l 0,1 c 0,0.552 0.4477,1 1,1 l 42,0 c 0.5523,0 1,-0.448 1,-1 l 0,-1 c 0,-0.552 -0.4477,-1 -1,-1 l -13,0 0,-13 49,0 c 1.657,0 3,-1.3431 3,-3 l 0,-66 c 0,-1.6569 -1.343,-3 -3,-3 l -114,0 z m 0,1 114,0 c 1.105,0 2,0.8954 2,2 l 0,66 c 0,1.1046 -0.895,2 -2,2 l -114,0 c -1.10458,0 -2,-0.8954 -2,-2 l 0,-66 c 0,-1.1046 0.89542,-2 2,-2 z m 0,2 0,64 114,0 0,-64 -114,0 z m 1,1 112,0 0,62 -112,0 0,-62 z m 49,68 14,0 0,13 -14,0 0,-13 z m -14,14 42,0 0,1 -42,0 0,-1 z" transform="translate(128,64)" id="path4298" inkscape:connector-curvature="0" class="ColorScheme-Text"/>
      <path style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m -89,-26 0,24 32,0 0,-24 -32,0 z m 21,2 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z m 4,0 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z m 4,0 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z m -28,4 30,0 0,1 -30,0 0,-1 z m 0,2 4,0 0,15 -4,0 0,-15 z m 5,0 25,0 0,15 -25,0 0,-15 z m 28,1 0,6 15,0 0,1 -15,0 0,1 15,0 0,15 -25,0 0,-6 -1,0 0,6 -4,0 0,-6 -1,0 0,7 32,0 0,-24 -16,0 z m 5,2 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z m 4,0 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z m 4,0 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z" transform="translate(128,64)" id="path4306-3" inkscape:connector-curvature="0" class="ColorScheme-Accent"/>
    </g>
		</svg>
	{/if}
