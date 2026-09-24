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
	<g transform="translate(0,22.000008) translate(0,-22)" id="ime-libpinyin-pinyin">
    <path style="fill:currentColor;fill-opacity:1;stroke:none" d="M 3,3 3,19 19,19 19,3 3,3 Z m 7.900391,1.7011719 1.5,2 L 12.001953,7 l 1.996094,0 -0.398438,-0.2988281 1.5,-2 0.800782,0.5996093 L 14.625,7 17,7 l 0,1 -2,0 0,3 2,0 0,1 -2,0 0,5 -1,0 0,-5 -2.041016,0 c -0.09614,1.118701 -0.477091,2.02943 -0.925781,2.806641 -0.620717,1.075 -1.6914061,2.058593 -1.6914061,2.058593 L 8.6582031,16.136719 c 0,0 1.0124506,-0.968778 1.5097659,-1.830078 C 10.569285,13.61152 10.872261,12.895032 10.960938,12 L 9,12 l 0,-0.941406 -1,0.5 L 8,17 5,17 5,16 7,16 7,12.058594 5.2226562,12.947266 4.7773438,12.052734 7,10.941406 7,8 5,8 5,7 7,7 7,5 8,5 8,7 9,7 9,8 8,8 8,10.441406 8.7773438,10.052734 9.2226562,10.947266 9.1171875,11 11,11 11,8 10,8 10,7 11.375,7 10.099609,5.3007812 10.900391,4.7011719 Z M 12,8 l 0,3 2,0 0,-3 -2,0 z" class="ColorScheme-Text" id="path6-4"/>
    <rect style="fill:none;fill-opacity:1;stroke:none" id="rect4138-2" width="22" height="22" x="0" y="0"/>
  </g>
</svg>
