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
	<g id="fcitx-fullwidth-active" transform="translate(132,-81.999973) translate(-132,-88)">
    <rect style="fill:none;fill-opacity:1;stroke:none" id="rect4214" width="22" height="22" x="-2.4709701e-09" y="170"/>
    <ellipse class="ColorScheme-Text" style="fill:currentColor;fill-opacity:1;stroke:none" id="path4218" cx="11" cy="181" rx="8" ry="7.9999995"/>
  </g>
</svg>
