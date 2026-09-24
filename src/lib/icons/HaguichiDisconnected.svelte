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
	<path
     d="m 11.23773,2.79071 -7.52344,8 7.52344,8 5.47656,0 -7.59375,-8.06836 7.59375,-7.93164 z m 0.26953,0.99609 3.02344,0 -8.08594,8.35547 -1.38867,-1.39062 z m -2.95026,7.82894 6.01081,6.17888 -2.86915,-0.0391 -4.72564,-5.07536 z"
     style="fill:currentColor;fill-opacity:0.5;stroke:none"
     class="ColorScheme-Text" />
</svg>
