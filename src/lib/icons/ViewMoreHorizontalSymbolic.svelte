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
     d="M 3,7 V 9 H 5 V 7 Z M 7,7 V 9 H 9 V 7 Z m 4,0 v 2 h 2 V 7 Z"
     class="ColorScheme-Text"
     id="path4"/>
</svg>
