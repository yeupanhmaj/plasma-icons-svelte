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
			<g style="fill:none" id="32-32-osd-shutd-laptop">
      <rect id="rect4198-3" height="32" width="32" x="0" y="0" style="fill:none"/>
      <path style="color:#7b7c7e;fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m 125,36 0,9 1,0 0,-8 15,0 0,12 -9,0 0,1 10,0 0,-14 z m -11,10 0,14 17,0 0,-14 z m 1,1 15,0 0,12 -15,0 z" transform="translate(-112,-32.00004)" id="path4200-7" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccccccccccccccc" class="ColorScheme-Text"/>
      <path id="path4208-5" d="m 6.25717,18.1712 1.41406,-1.414 2.82817,2.8281 2.8281,-2.8281 1.414,1.414 -2.8281,2.8282 2.8281,2.8281 -1.414,1.414 -2.8281,-2.8281 -2.82817,2.8281 -1.41406,-1.414 2.82813,-2.8281 -2.82813,-2.8282 z" inkscape:connector-curvature="0" style="fill:#da4453"/>
      <path id="path4210" d="m 16,13 0,-6 11,0 0,8 -7,-4e-5 0,-1 6,4e-5 0,-4 -9,0 0,3 z m 8,-5 -1,0 0,1 1,0 z m 2,0 -1,0 0,1 1,0 z" inkscape:connector-curvature="0" style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" sodipodi:nodetypes="ccccccccccccccccccccc" class="ColorScheme-Accent"/>
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
			<g style="fill:none" id="48-48-osd-shutd-laptop">
      <rect id="rect4229-9" height="48" width="48" x="0" y="0" style="fill:none"/>
      <path style="color:#7b7c7e;fill:currentColor;fill-opacity:1;stroke:none" d="m 80,21 0,14 1,0 0,-12.998047 28,-0.002 0,16 -12,0 0,1 0,5 0,1 1,0 4,0 0,-1 -4,0 0,-5 12,0 0,-18 -30,0 z m -14,15 0,18 12,0 0,5 -4,0 0,1 9,0 1,0 4,0 0,-1 -4,0 0,-5 12,0 0,-18 -30,0 z m 29,1 0,16 -13,0 -1,0 L 67,53 67,37.001953 95,37 Z m -16,17 4,0 0,5 -4,0 0,-5 z" transform="translate(-64,-16.00004)" id="path4233-2" inkscape:connector-curvature="0" class="ColorScheme-Text"/>
      <path id="path4239" d="M 13.4141,24 12,25.4141 l 1.6426,1.6426 1.8925,1.8925 -1.7617,1.7618 -1.7734,1.7734 1.4141,1.4141 1.6425,-1.6426 1.8926,-1.8926 3.5352,3.5352 1.414,-1.4141 -3.5351,-3.5352 3.5351,-3.5351 L 20.4844,24 16.9492,27.5352 15.1875,25.7735 13.4141,24 l 0,0 z" inkscape:connector-curvature="0" style="fill:#da4453"/>
      <path id="path4241-2" d="m 39,8 -16,0 0,11 1,0 0,-6 2,0 0,6 1,0 0,-6 11,0 0,6 -5,0 0,1 6,0 0,-12 z m -15,4 14,0 0,-1 -14,0 0,1 z m 9,-3 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z" inkscape:connector-curvature="0" style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" class="ColorScheme-Accent"/>
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
			<g style="fill:none" id="64-64-osd-shutd-laptop">
      <rect id="rect4260" height="64" width="64" x="0" y="0" style="fill:none"/>
      <path style="color:#7b7c7e;fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m 26,11 0,14 1,0 0,-12.998047 32,-0.002 0,18 -20,0 0,1 20,0 0,1 -13,0 -1,0 -6,0 0,1 1,0 0,4 -1,0 0,1 6,0 1,0 4,0 0,-1 -4,0 0,-4 14,0 0,-22 -34,0 z m -22,15 0,22 14,0 0,4 -4,0 0,1 9,0 1,0 4,0 0,-1 -4,0 0,-4 14,0 0,-22 -34,0 z M 37,27 37,45 5,45 5,27.001953 37,27 Z m 4,6 4,0 0,4 -4,0 0,-4 z m -36,13 32,0 0,1 -13,0 -1,0 -18,0 0,-1 z m 14,2 4,0 0,4 -4,0 0,-4 z" id="path4262" inkscape:connector-curvature="0" class="ColorScheme-Text"/>
      <path id="path4270-8" d="m 14.6358,31.0498 1.4141,-1.414 4.9492,4.9492 4.9492,-4.9492 0.002,0 1.4121,1.414 -4.9473,4.9493 1.5841,1.584 0,0.0033 3.3632,3.3619 0,0.002 -1.4141,1.4121 -4.9492,-4.9473 -1.584,1.5841 -0.0011,0 -1.8289,1.83 -0.0021,0 -1.5332,1.5332 -1.414,-1.4141 4.9492,-4.9492 -3.416,-3.4141 0,-0.002 -1.5332,-1.5332 z" inkscape:connector-curvature="0" style="fill:#da4453"/>
      <path id="path4272" d="m 51,15 -16,0 0,10 1,0 0,-5 2,0 0,5 1,0 0,-5 11,0 0,6 -11,0 0,1 12,0 0,-12 z m -15,4 14,0 0,-1 -14,0 0,1 z m 9,-3 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z" inkscape:connector-curvature="0" style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" class="ColorScheme-Accent"/>
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
			<g style="fill:none" id="osd-shutd-laptop">
      <rect id="rect4291" height="128" width="128" x="0" y="0" style="fill:none"/>
      <path style="color:#7b7c7e;fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" d="m -77,-43 0,33 1,0 0,-32 68,0 0,41 -41,0 0,1 2,0 0,8 -2,0 0,1 20,0 0,-1 -8,0 0,-8 30,0 0,-42.998047 L -77,-43 Z m 2,2 0,31 1,0 0,-30 64,0 0,36 -39,0 0,1 40,0 0,-38 -66,0 z m -46,33 0,43 30,0 0,8 -8,0 0,1 26,0 0,-1 -8,0 0,-8 30,0 0,-42.9980469 L -121,-8 Z m 1,1 68,0 0,41 -68,0 0,-41 z m 1,1 0,38 66,0 0,-38 -66,0 z m 1,1 64,0 0,36 -64,0 0,-36 z m 72,5 8,0 0,8 -8,0 0,-8 z m -44,35 8,0 0,8 -8,0 0,-8 z" transform="translate(128,64)" id="path4295" inkscape:connector-curvature="0" class="ColorScheme-Text"/>
      <path id="path4303" d="M 53.748,64.0001 50.1875,67.5626 42.082,75.6681 32.6992,66.2872 32.582,66.17 30.4141,64.002 29,65.4161 l 2.7363,2.7344 0.8262,0.8261 8.1055,8.1055 -9.3828,9.3828 -2.2852,2.2852 1.4141,1.4141 2.7363,-2.7364 0.8262,-0.8261 8.1054,-8.1055 11.668,11.666 1.4121,-1.4121 0.002,-0.002 -11.6679,-11.666 9.498,-9.5 2.168,-2.168 L 53.7501,64.002 53.748,64 l 0,1e-4 z" inkscape:connector-curvature="0" style="fill:#da4453"/>
      <path id="path4309" d="m 70,30 32,0 0,24 -32,0 0,-24 z m 6,23 25,0 0,-15 -25,0 0,15 z m 25,-16 0,-1 -30,0 0,1 30,0 z m -30,1 4,0 0,15 -4,0 0,-15 z m 21,-5 c 0,-0.5523 -0.4477,-1 -1,-1 -0.5523,0 -1,0.4477 -1,1 0,0.5522 0.4477,1 1,1 0.5523,0 1,-0.4478 1,-1 z m 4,0 c 0,-0.5523 -0.4477,-1 -1,-1 -0.5523,0 -1,0.4477 -1,1 0,0.5522 0.4477,1 1,1 0.5523,0 1,-0.4478 1,-1 z m 4,0 c 0,-0.5523 -0.4477,-1 -1,-1 -0.5523,0 -1,0.4477 -1,1 0,0.5522 0.4477,1 1,1 0.5523,0 1,-0.4478 1,-1 z" inkscape:connector-curvature="0" style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" class="ColorScheme-Accent"/>
    </g>
		</svg>
	{/if}
