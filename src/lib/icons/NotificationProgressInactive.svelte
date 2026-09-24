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
	<g id="notification-progress-inactive" transform="translate(39 39) translate(-40,-40)">
        <path id="path10" d="m1 1h22v22h-22z" fill="none"/>
        <circle id="circle-transparent" cx="12" cy="12" r="8" class="ColorScheme-Text" fill="currentColor" opacity=".4"/>
    </g>
</svg>
