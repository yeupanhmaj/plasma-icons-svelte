<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 16,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 16 16"
	width={size}
	height={size}
	fill={color}
	class="plasma-icon {className}"
	style="color: {color}; {style}"
	{...restProps}
>
	<path class="ColorScheme-Text" d="m13 2v12h-7.5c-1.385 0-2.5-1.115-2.5-2.5s1.115-2.5 2.5-2.5h1.7929688l-1.4999998-1.5 0.707031-0.7070312 2.7070312 2.7070312-2.7070312 2.707031-0.707031-0.707031 1.4999998-1.5h-1.7929688c-0.831 0-1.5 0.669-1.5 1.5s0.669 1.5 1.5 1.5h6.5v-10h-5v3h-3v2h-1v-3l3-3z" fill="currentColor"/>
</svg>
