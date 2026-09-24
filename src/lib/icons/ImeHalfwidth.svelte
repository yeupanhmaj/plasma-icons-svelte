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
	<g id="ime-halfwidth" transform="translate(154,-81.999973) translate(-154,-88)">
    <rect style="fill:none;fill-opacity:1;stroke:none" id="rect4222" width="22" height="22" x="-2.4709701e-09" y="170"/>
    <path id="ellipse4224" transform="translate(-154,81.999973)" d="M 167.56641 91.431641 A 8 7.9999995 0 0 1 168 94 A 8 7.9999995 0 0 1 160 102 A 8 7.9999995 0 0 1 157.43359 101.56836 A 8 7.9999995 0 0 0 165 107 A 8 7.9999995 0 0 0 173 99 A 8 7.9999995 0 0 0 167.56641 91.431641 z " style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
  </g>
</svg>
