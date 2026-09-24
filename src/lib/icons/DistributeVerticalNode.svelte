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
	<path id="path4" class="ColorScheme-Text" d="m3 3v4h4v-4zm1 1h2v2h-2zm11 5v4h4v-4zm1 1h2v2h-2zm-13 5v4h4v-4zm1 1h2v2h-2z" fill="currentColor"/>
    <path id="path6" class="ColorScheme-Accent" d="m9 5v1h1v2h-1v1h4v-1h-1v-2h1v-1zm0 8v1h1v2h-1v1h4v-1h-1v-2h1v-1z" fill="currentColor"/>
</svg>
