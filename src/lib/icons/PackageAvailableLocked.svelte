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
	<rect style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText" height="16" rx="2" width="16"/>
    <path d="m2 0c-1.108 0-2 .892-2 2v12c0 1.108.892 2 2 2h12c1.108 0 2-.892 2-2v-12c0-1.108-.892-2-2-2zm0 1h12c.554 0 1 .446 1 1v12c0 .554-.446 1-1 1h-12c-.554 0-1-.446-1-1v-12c0-.554.446-1 1-1z" style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text"/>
    <path d="m8 2a6 6 0 0 0 -6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0 -6-6zm0 2a4 4 0 0 1 4 4 4 4 0 0 1 -.558594 2.027344l-5.4687498-5.4687502a4 4 0 0 1 2.0273438-.5585938zm-3.4414062 1.9726562 5.4687502 5.4687498a4 4 0 0 1 -2.027344.558594 4 4 0 0 1 -4-4 4 4 0 0 1 .5585938-2.0273438z" fill="#fff"/>
</svg>
