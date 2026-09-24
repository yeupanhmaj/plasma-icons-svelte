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
	<path
    style="fill:currentColor;fill-opacity:1;stroke:none"
    d="M 3,3 3,3.5 3,19 19,19 19,3 3,3 Z M 4,4 18,4 18,18 4,18 4,4 Z"
    class="ColorScheme-Text"
    />
 <path
    style="fill:currentColor;fill-opacity:0.6;stroke:none"
    d="M5 5h4v4H5zm4 4h4v4H9zm-4 4h4v4H5zm8 0h4v4h-4zm0-8h4v4h-4z"
    class="ColorScheme-Text"
    />
</svg>
