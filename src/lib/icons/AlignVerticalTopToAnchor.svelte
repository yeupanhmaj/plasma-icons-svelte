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
	d="m13 3v3 1h5 1v-3-1h-6m-10 6v1h16v-1h-16m0 3v6 1h5 1v-6-1h-6m10 0v6h6v-6h-6m-9 1h4v5h-4v-5m10 0h4v4h-4v-4"
	 class="ColorScheme-Text"
     />
</svg>
