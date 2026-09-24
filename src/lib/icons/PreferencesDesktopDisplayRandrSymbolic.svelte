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
	<g id="22-22-preferences-desktop-display-randr" transform="translate(-1,-1)">
        <rect id="rect3832" x="1" y="1" width="22" height="22" fill-opacity="0"/>
        <path id="rect7235" class="ColorScheme-Text" d="m7 19h10v1h-10zm3-2h4v2h-4zm-6-13v13h16v-13zm1 1h14v9h-14z" fill="currentColor"/>
        <path id="rect3018" class="ColorScheme-Text" d="m6 9 4 4h-4z" fill="currentColor"/>
        <path id="path3028" class="ColorScheme-Text" d="m18 10-4-4h4z" fill="currentColor"/>
    </g>
</svg>
