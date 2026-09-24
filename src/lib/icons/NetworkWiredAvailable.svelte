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
	<path class="ColorScheme-Text" d="m9 3v1h9v10h-11v1 1h1 1v1 0.726562 0.273438 1h1 2 3v-1h-1-1v-2h1 4 1v-13h-1-9zm-6 7v6h1v-6h-1z" fill="currentColor"/>
    <path class="ColorScheme-Accent" d="m3 3v6h2v7c0 1.662 1.338 3 3 3h1v-1h-1c-1.108 0-2-0.892-2-2v-7h2v-6zm1 1h3v4h-3zm1 1v2h1v-2z" fill="currentColor"/>
    <rect width="22" height="22" fill="none"/>
</svg>
