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
    style="fill:currentColor;fill-opacity:1;stroke:none" 
	d="m16 3v1 1 1h3v-3h-3m1 1h1v1h-1v-1m-14 12v3h3v-3h-1-1-1m1 1h1v1h-1v-1"
	class="ColorScheme-Text"
    />
  <path
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="M16 4A12 12 0 0 0 4 16H5A11 11 0 0 1 16 5V4"
	class="ColorScheme-Accent"
	/>
</svg>
