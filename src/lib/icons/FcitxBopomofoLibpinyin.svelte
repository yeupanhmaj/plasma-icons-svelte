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
	<g id="fcitx-bopomofo-libpinyin" transform="translate(66,22) translate(-66,-22)" style="fill:#cccccc">
    <rect y="0" x="0" height="22" width="22" id="rect4147" style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/>
    <path class="ColorScheme-Text" style="fill:currentColor;fill-opacity:1;stroke:none" d="m 3,3.0000076 0,16.0000004 16,0 0,-16.0000004 -16,0 z" id="path4274"/>
    <path class="ColorScheme-Text" style="fill:currentColor;fill-opacity:1;stroke:none" d="m 11.300781,4.5996166 -0.601562,0.800782 2,1.5 0.601562,-0.800782 -2,-1.5 z" id="path4270"/>
    <path class="ColorScheme-Text" style="fill:currentColor;fill-opacity:1;stroke:none" d="m 5.3535156,4.6464866 -0.7070312,0.707032 2,2 0.7070312,-0.707032 -2,-2 z" id="path4268"/>
    <path class="ColorScheme-Text" style="fill:currentColor;fill-opacity:1;stroke:none" d="m 8,7.0000076 0,1 4,0 0,3.0000004 -3,0 0,1 3,0 0,4 -4,0 0,1 9,0 0,-1 -4,0 0,-4 3,0 0,-1 -3,0 0,-3.0000004 4,0 0,-1 -9,0 z" id="path4266"/>
    <path class="ColorScheme-Text" style="fill:currentColor;fill-opacity:1;stroke:none" d="m 5.3535156,7.6464916 -0.7070312,0.707032 2,2.0000004 0.7070312,-0.7070324 -2,-2 z" id="path4264"/>
    <path class="ColorScheme-Text" style="fill:currentColor;fill-opacity:1;stroke:none" d="m 6.5253906,10.841805 -2,6 0.9492188,0.316406 2,-6 -0.9492188,-0.316406 z" id="path4166"/>
  </g>
</svg>
