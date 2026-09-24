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
	<g id="fcitx-vk-active" transform="translate(176,66.000027) translate(-176,-66)">
    <path id="path6-6-3" class="ColorScheme-Text" transform="translate(0,-1030.3622)" d="m 2,1038.3622 0,11 18,0 0,-11 z m 1,1 7,0 1,0 8,0 0,1 -16,0 z m 0,2 16,0 0,7 -4,0 -8,0 -4,0 z m 1,1 0,1 2,0 0,-1 z m 3,0 0,1 2,0 0,-1 z m 3,0 0,1 2,0 0,-1 z m 3,0 0,1 2,0 0,-1 z m 3,0 0,1 2,0 0,-1 z m -12,2 0,1 2,0 0,-1 z m 3,0 0,1 2,0 0,-1 z m 3,0 0,1 2,0 0,-1 z m 3,0 0,1 2,0 0,-1 z m 3,0 0,1 2,0 0,-1 z m -12,2 0,1 2,0 0,-1 z m 3,0 0,1 8,0 0,-1 z m 9,0 0,1 2,0 0,-1 z" style="fill:currentColor;fill-opacity:1;stroke:none"/>
    <path id="path8" d="m 4.5,2.0000008 a 2.4999997,2.4999855 0 0 0 -2.5,2.5 2.4999997,2.4999855 0 0 0 2.5,2.5 2.4999997,2.4999855 0 0 0 2.5,-2.5 2.4999997,2.4999855 0 0 0 -2.5,-2.5 z" class="ColorScheme-PositiveText" style="fill:#11d116;fill-opacity:1;stroke:none"/>
    <rect y="0" x="0" height="22" width="22" id="rect4140" style="fill:none;fill-opacity:1;stroke:none;stroke-linejoin:bevel"/>
  </g>
</svg>
