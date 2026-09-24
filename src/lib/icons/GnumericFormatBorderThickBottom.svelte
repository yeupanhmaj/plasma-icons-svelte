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
	<g fill="currentColor">
        <path id="path4" class="ColorScheme-Text" fill="currentColor" d="m3 2v17h1v-8h7v8h1v-8h7v8h1v-17h-16zm1 1h7v7h-7zm8 0h7v7h-7z" fill-opacity=".1"/>
        <path id="path6" class="ColorScheme-Text" fill="currentColor" d="m4 3v7h7v-7zm8 0v7h7v-7zm-8 8v7h7v-7zm8 0v7h7v-7z" fill-opacity=".5"/>
        <path id="path8" class="ColorScheme-Text" fill="currentColor" d="m3 17v2h17v-2z"/>
    </g>
</svg>
