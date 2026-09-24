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
        <path d="M6.5 3A2.5 2.5 0 0 0 4 5.5 2.5 2.5 0 0 0 6.5 8H8a2 2 0 0 1 2 2 2 2 0 0 1-2 2H4v1h4a3 3 0 0 0 3-3 3 3 0 0 0-3-3H6.5A1.5 1.5 0 0 1 5 5.5 1.5 1.5 0 0 1 6.5 4H11V3z"/>
        <path d="M7 2h1v12H7z"/>
    </g>
</svg>
