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
        <path d="M3 6h8v1H3zm0 3h7v1H3z"/>
        <path d="M8 2a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4 4 4 0 0 0 3.459-2h-1.227A3 3 0 0 1 8 13a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3 3 3 0 0 1 2.23 1h1.229A4 4 0 0 0 8 2z"/>
    </g>
</svg>
