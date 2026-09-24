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
	<g id="preferences-desktop-display-randr" transform="translate(-26,10)">
        <rect id="rect3832-6" x="26" y="-10" width="32" height="32" fill-opacity="0"/>
        <path id="rect7235-7" class="ColorScheme-Text" d="m35.011249 15h11.977502l0.011249 2h-11.977502zm3.988751-2h4v2h-4zm-9-18v18h22v-18zm1 1h20v14h-20z" fill="currentColor"/>
        <path id="rect3018-5" class="ColorScheme-Text" d="m32 4 5 5h-5z" fill="currentColor"/>
        <path id="path3028-3" class="ColorScheme-Text" d="m50 2-5-5h5z" fill="currentColor"/>
    </g>
</svg>
