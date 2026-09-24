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
	<path id="path4" class="ColorScheme-Text" d="m3 3v16h16v-16zm1 1h4v2h-4zm5 0h4v2h-4v-1zm5 0h4v2h-4v-1zm-10 3h4v2h-4zm5 0h9v8.099609h-9v-3.099609zm-5 3h4v2h-4zm0 3h4v2.099609h-4zm0 3.099609h4v1.900391h-4zm5 0h4v1.900391h-4v-0.900391zm5 0h4v1.900391h-4v-0.900391z" fill="currentColor"/>
</svg>
