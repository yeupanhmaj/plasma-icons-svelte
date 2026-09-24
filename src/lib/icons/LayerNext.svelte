<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 16,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 16 16"
	width={size}
	height={size}
	fill={color}
	class="plasma-icon {className}"
	style="color: {color}; {style}"
	{...restProps}
>
	<path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 5,2 2,5 11,5 14,2 5,2 Z m 0,9 -3,3 9,0 3,-3 -9,0 z"
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 11,6.8 8,10 5,6.8 5.75,6 8,8.4 10.25,6 Z"
        class="ColorScheme-Accent"
      />
</svg>
