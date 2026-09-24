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
	<g id="notification-progress-active" transform="translate(39 -1) translate(-40,0)">
        <path id="empty-rectangle" d="m1 1h22v22h-22z" fill="none"/>
        <circle id="circle-blue" cx="12" cy="12" r="8" class="ColorScheme-Accent" fill="currentColor"/>
    </g>
</svg>
