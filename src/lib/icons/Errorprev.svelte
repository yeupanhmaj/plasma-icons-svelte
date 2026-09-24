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
     id="path8"
     d="m 16,13 0,4 1,0 0,-4 -1,0 z m 0,5 0,1 1,0 0,-1 -1,0 z"
     style="fill:#da4453;fill-opacity:1;stroke:none" />
  <path
     id="path6"
     class="ColorScheme-Text"
     d="m 13,3 0.707031,0.707031 -6.125,6.125 L 6.414062,11 l 1.167969,1.167969 6.125,6.125 L 13,19 6.875,12.875 5,11 6.875,9.125 13,3"
     style="fill:currentColor;fill-opacity:1;stroke:none"  />
</svg>
