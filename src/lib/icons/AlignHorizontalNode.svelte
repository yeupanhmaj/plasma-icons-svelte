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
	<path id="path4" class="ColorScheme-Text" d="m3 3v4h4v-4zm8 0v1h1v-1zm-7 1h2v2h-2zm7 2v1h1v-1zm0 3v1h1v-1zm5 0v4h4v-4zm1 1h2v2h-2zm-6 2v1h1v-1zm-8 3v4h4v-4zm8 0v1h1v-1zm-7 1h2v2h-2zm7 2v1h1v-1z" fill="currentColor"/>
    <path id="path6" class="ColorScheme-Accent" d="m8 3v4l3-2zm7 6-3 2 3 2zm-7 6v4l3-2z" fill="currentColor"/>
</svg>
