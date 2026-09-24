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
	<g transform="translate(132,-81.999973) translate(-132,-88)" id="ime-fullwidth">
    <rect y="170" x="-2.4709701e-09" height="22" width="22" id="rect4214" style="fill:none;fill-opacity:1;stroke:none"/>
    <ellipse ry="7.9999995" rx="8" cy="181" cx="11" id="path4218" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
  </g>
</svg>
