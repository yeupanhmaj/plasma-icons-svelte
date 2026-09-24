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
     style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     class="ColorScheme-Text"
     id="path4136"
     d="M 20,11 13,13 11,20 9,13 2,11 9,9 11,2 13,9 Z" />
</svg>
