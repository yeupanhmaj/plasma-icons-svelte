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
    class="ColorScheme-Text"
    style="fill:currentColor"
    d="m11 3c-4.4123515 0-8 3.5876487-8 8 0 4.412351 3.5876485 8 8 8 4.412351 0 8-3.587649 8-8 0-4.4123511-3.587649-7.9999997-8-8zm0 1c3.871912.0000003 7 3.1280885 7 7 0 3.871911-3.128088 7-7 7s-7-3.128088-7-7c0-3.8719117 3.128088-7 7-7zm-2.5 4-3 3 3 3v-2h5v2l3-3-3-3v2h-5z"
  />
</svg>
