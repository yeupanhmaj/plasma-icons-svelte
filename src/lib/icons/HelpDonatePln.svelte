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
        <path d="M1 6v1h6.293l-6 6-.293.293V14h8v-1H2.707L9 6.707V6zm11-4h1v12h-1z"/>
        <path d="M14.73 5.55l-5 3 .54.9 5-3z"/>
    </g>
</svg>
