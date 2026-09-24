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
    d="m547.57141 761.93359l9.05664-12.94336-3.05664-3.05664h10v10l-3.05664-3.05664-12.94336 9.05664" transform="translate(-544.57141-742.93359)"
	class="ColorScheme-Text"
    />
</svg>
