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
     d="m 11.23773,2.79071 -7.52344,8 7.52344,8 5.47656,0 -7.59766,-8.06445 7.59766,-7.93555 z m 0.26953,0.99609 3.02344,0 -8.08594,8.35547 -1.38867,-1.39062 z"
     style="fill:currentColor;fill-opacity:1;stroke:none;"
     class="ColorScheme-Text" />
</svg>
