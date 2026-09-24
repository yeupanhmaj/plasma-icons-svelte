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
     d="M 16.292969 4 L 13 7.2929688 L 12.792969 7.5 L 13 7.7070312 L 16.292969 11 L 17 10.292969 L 14.707031 8 L 19 8 L 19 7 L 14.707031 7 L 17 4.7070312 L 16.292969 4 z M 5 15 L 5 16 L 5 17 L 16 17 L 16 16 L 16 15 L 15 15 L 15 16 L 6 16 L 6 15 L 5 15 z "
	 class="ColorScheme-Text"
     />
</svg>
