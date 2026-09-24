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
     d="m4 4v10l3 4v-3-1h13v-10h-16m1 1h14v8h-14v-8m12 10v2h-2v1h2v2h1v-2h2v-1h-2v-2h-1"
	 class="ColorScheme-Text"
     />
</svg>
