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
	<g id="system-search" transform="translate(0 -32) translate(-22,32)">
        <path id="path66" class="ColorScheme-Text" d="m35 4a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 5.994141-2.298828l8.298828 8.298828 0.707031-0.707031-8.300781-8.300782a9 9 0 0 0 2.300781-5.992187 9 9 0 0 0-9-9zm0 1a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8z" fill="currentColor"/>
        <path id="path68" d="m22 0v32h32v-32z" fill="none"/>
    </g>
</svg>
