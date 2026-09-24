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
	<path class="ColorScheme-Text" d="M 3,19 19,3 v 16 z" style="opacity:0.35;fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" id="path4330" />
  <path class="ColorScheme-Text" d="M 15,7 3,19 h 12 z" style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" id="path4317" />
  <path class="ColorScheme-Text" id="path6025" d="M 3,3 V 7 8 H 7 V 7 H 4 V 3 Z" style="fill:currentColor;fill-opacity:1;stroke:none" />
</svg>
