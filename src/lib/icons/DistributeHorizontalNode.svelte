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
	<path id="path4" class="ColorScheme-Text" d="m9 9v4h4v-4zm1 1h2v2h-2zm-7 5v4h4v-4zm12 0v4h4v-4zm-11 1h2v2h-2zm12 0h2v2h-2z" fill="currentColor"/>
    <path id="path6" class="ColorScheme-Accent" d="m5 3v4h1v-1h2v1h1v-4h-1v1h-2v-1zm8 0v4h1v-1h2v1h1v-4h-1v1h-2v-1z" fill="currentColor"/>
</svg>
