<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 32 32"
	width={size}
	height={size}
	fill={color}
	class="plasma-icon {className}"
	style="color: {color}; {style}"
	{...restProps}
>
	<g id="view-history" transform="translate(0,32) translate(-22,-32)">
        <path id="path22" class="ColorScheme-Text" d="m38 4a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12zm0 1a11 11 0 0 1 11 11 11 11 0 0 1-11 11 11 11 0 0 1-11-11 11 11 0 0 1 11-11zm-1 2v10h9v-1h-8v-9h-1z" fill="currentColor"/>
        <path id="path24" d="m22 0v32h32v-32h-32z" fill="none"/>
    </g>
</svg>
