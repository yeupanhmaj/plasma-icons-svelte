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
     d="m 16,13 0,4 1,0 0,-4 -1,0 z m 0,5 0,1 1,0 0,-1 -1,0 z"
     style="fill:#da4453;fill-opacity:1;stroke:none" />
  <path
     class="ColorScheme-Text"
     d="M 5.707031,3 5,3.707031 11.125,9.832031 12.292969,11 11.125,12.167969 5,18.292969 5.707031,19 l 6.125,-6.125 1.875,-1.875 -1.875,-1.875 L 5.707031,3"
     style="fill:currentColor;fill-opacity:1;stroke:none"  />
</svg>
