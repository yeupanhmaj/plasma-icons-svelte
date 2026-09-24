<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 12,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 12 12"
	width={size}
	height={size}
	fill={color}
	class="plasma-icon {className}"
	style="color: {color}; {style}"
	{...restProps}
>
	<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m1 1v10h10v-10zm1 1h8v8h-8z"
     class="ColorScheme-Text"
     />
</svg>
