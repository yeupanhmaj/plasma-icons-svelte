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
     d="m 11.23857,18.79071 5.47572,0 L 9.6681,11.29705 6.35954,13.5882 Z"
     style="fill:currentColor;fill-opacity:1;stroke:none;"
     class="ColorScheme-Text" />
  <path
     d="m 11.23857,2.79071 5.47572,0 L 6.36901,13.598 3.71429,10.79071 Z"
     style="fill:currentColor;fill-opacity:1;stroke:none;"
     class="ColorScheme-Text" />
</svg>
