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
    d="M 11,3 8.523,8.266 3,9.11 7,13.21 6.055,19 11,16.266 15.945,19 15,13.21 19,9.11 13.477,8.266 11,3 Z"
    class="ColorScheme-Text"
    />
</svg>
