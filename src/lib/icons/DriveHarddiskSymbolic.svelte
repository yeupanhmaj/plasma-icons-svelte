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
	<g id="drive" transform="translate(-22,0)">
        <path id="path14" d="m22 0v32h32v-32z" fill="none"/>
        <path id="path927" d="m29 4v24h18v-24zm5 1h8c2.209139 0 4 1.790861 4 4v3.054688c-1.162442.237281-1.998017 1.258902-2 2.445312.000129 1.187878.836122 2.211643 2 2.449219v4.050781l-4 4h-8l-4-4v-4.054688c1.162442-.237281 1.998017-1.258902 2-2.445312-.000129-1.187878-.836122-2.211643-2-2.449219v-3.050781c0-2.209139 1.790861-4 4-4zm-2 21h7v1h-7zm9 0h3v1h-3z" class="ColorScheme-Text" fill="currentColor"/>
    </g>
</svg>
