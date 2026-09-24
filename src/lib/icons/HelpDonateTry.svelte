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
	<g class="ColorScheme-Text" fill="currentColor">
        <path d="M5 2h1v12H5zm6 6a5 5 0 0 1-5 5v1a6 6 0 0 0 6-6z"/>
        <path d="M10.824 5.531l-8 3 .352.938 8-3zm0-2l-8 3 .352.938 8-3z"/>
    </g>
</svg>
