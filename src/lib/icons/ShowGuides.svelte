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
     d="m4 3v1h1v-1zm0 2v1h1v-1zm0 2v1h1v-1zm0 2v1h1v-1zm-2 2v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm-8 2v1h1v-1z"
     class="ColorScheme-Text"/>
</svg>
