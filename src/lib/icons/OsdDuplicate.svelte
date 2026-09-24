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
			<g style="fill:none" id="32-32-osd-duplicate">
      <rect id="rect4200" height="32" width="32" x="0" y="0" style="fill:none"/>
      <path style="color:#7b7c7e;fill:currentColor;fill-opacity:1;stroke:none" d="m 125,36 0,9 1,0 0,-8 15,0 0,12 -9,0 0,1 10,0 0,-14 -17,0 z m -11,10 0,14 17,0 0,-14 -17,0 z m 1,1 15,0 0,12 -15,0 0,-12 z" transform="translate(-112,-32)" id="path4202" class="ColorScheme-Text"/>
      <path style="fill:currentColor;fill-opacity:1;stroke:none" d="m 128,39 0,6 1,0 0,-3 9,0 0,4 -6,0 0,1 7,0 0,-8 -11,0 z m 7,1 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m -20,9 0,8 11,0 0,-8 -11,0 z m 7,1 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m -8,2 9,0 0,4 -9,0 0,-4 z" transform="translate(-112,-32)" id="path4212" class="ColorScheme-Accent"/>
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
			<g style="fill:none" id="48-48-osd-duplicate">
      <rect id="rect4234" height="48" width="48" x="0" y="0" style="fill:none"/>
      <path style="color:#7b7c7e;fill:currentColor;fill-opacity:1;stroke:none" d="m 80,21 0,14 1,0 0,-12.998047 28,-0.002 0,16 -12,0 0,1 0,5 0,1 1,0 4,0 0,-1 -4,0 0,-5 12,0 0,-18 -30,0 z m -14,15 0,18 12,0 0,5 -4,0 0,1 9,0 1,0 4,0 0,-1 -4,0 0,-5 12,0 0,-18 -30,0 z m 29,1 0,16 -13,0 -1,0 L 67,53 67,37.001953 95,37 Z m -16,17 4,0 0,5 -4,0 0,-5 z" transform="translate(-64,-16)" id="path4238" class="ColorScheme-Text"/>
      <path style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m 87,24 0,11 1,0 0,-6 2,0 0,6 1,0 0,-6 11,0 0,6 -5,0 0,1 6,0 0,-12 -16,0 z m 10,1 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m -13,2 14,0 0,1 -14,0 0,-1 z m -15,12 0,12 16,0 0,-12 -16,0 z m 10,1 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m -13,2 14,0 0,1 -14,0 0,-1 z m 0,2 2,0 0,6 -2,0 0,-6 z m 3,0 11,0 0,6 -11,0 0,-6 z" transform="translate(-64,-16)" id="path4244" class="ColorScheme-Accent"/>
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
			<g style="fill:none" id="64-64-osd-duplicate">
      <rect id="rect4268" height="64" width="64" x="0" y="0" style="fill:none"/>
      <path style="color:#7b7c7e;fill:currentColor;fill-opacity:1;stroke:none" d="m 26,11 0,14 1,0 0,-12.998047 32,-0.002 0,18 -20,0 0,1 20,0 0,1 -13,0 -1,0 -6,0 0,1 1,0 0,4 -1,0 0,1 6,0 1,0 4,0 0,-1 -4,0 0,-4 14,0 0,-22 -34,0 z m -22,15 0,22 14,0 0,4 -4,0 0,1 9,0 1,0 4,0 0,-1 -4,0 0,-4 14,0 0,-22 -34,0 z M 37,27 37,45 5,45 5,27.001953 37,27 Z m 4,6 4,0 0,4 -4,0 0,-4 z m -36,13 32,0 0,1 -13,0 -1,0 -18,0 0,-1 z m 14,2 4,0 0,4 -4,0 0,-4 z" id="path4270" class="ColorScheme-Text"/>
      <path style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m 35,15 0,10 1,0 0,-5 2,0 0,5 1,0 0,-5 11,0 0,6 -11,0 0,1 12,0 0,-12 -16,0 z m 10,1 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m -13,2 14,0 0,1 -14,0 0,-1 z m -23,12 0,12 16,0 0,-12 -16,0 z m 10,1 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m -13,2 14,0 0,1 -14,0 0,-1 z m 0,2 2,0 0,6 -2,0 0,-6 z m 3,0 11,0 0,6 -11,0 0,-6 z" id="path4280" class="ColorScheme-Accent"/>
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
			<defs
     id="defs11" />
  
  
  <g
     id="osd-duplicate"
     transform="translate(272,106)">
    <rect
       style="fill:none"
       y="-106"
       x="-272"
       width="128"
       height="128"
       id="rect4302" />
    <path
       class="ColorScheme-Text"
       id="path4306"
       d="m -221,-85 v 33 h 1 v -32 h 68 v 41 h -41 v 1 h 2 v 8 h -2 v 1 h 20 v -1 h -8 v -8 h 30 v -42.998047 l -70,-0.002 z m 2,2 v 31 h 1 v -30 h 64 v 36 h -39 v 1 h 40 v -38 z m -46,33 v 43 h 30 v 8 h -8 v 1 h 26 V 1 h -8 v -8 h 30 v -42.998047 l -70,-0.002 z m 1,1 h 68 v 41 h -68 z m 1,1 v 38 h 66 v -38 z m 1,1 h 64 v 36 h -64 z m 72,5 h 8 v 8 h -8 z m -44,35 h 8 v 8 h -8 z"
       style="color:#7b7c7e;fill:currentColor;fill-opacity:1;stroke:none" />
    <path
       class="ColorScheme-Accent"
       id="path4316"
       d="m -202,-76 v 24 h 32 v -24 z m 21,2 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z m 4,0 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z m 4,0 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z m -28,4 h 30 v 1 h -30 z m 0,2 h 4 v 15 h -4 z m 5,0 h 25 v 15 h -25 z m -50,27 v 24 h 32 v -24 z m 21,2 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z m 4,0 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z m 4,0 c 0.5523,0 1,0.4477 1,1 0,0.5522 -0.4477,1 -1,1 -0.5523,0 -1,-0.4478 -1,-1 0,-0.5523 0.4477,-1 1,-1 z m -28,4 h 30 v 1 h -30 z m 0,2 h 4 v 15 h -4 z m 5,0 h 25 v 15 h -25 z"
       style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" />
  </g>
		</svg>
	{/if}
