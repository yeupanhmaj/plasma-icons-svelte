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
	<path id="path4" class="ColorScheme-Text" d="m3 3v16h16v-16h-15zm11.621094 1 1.378906 0.8183594 1.378906-0.8183594 0.621094 0.8183594-1.689453 1-0.310547 0.1816406-0.310547-0.1816406-1.689453-1zm-10.621094 3h14v11h-14zm1 2v1h12v-1zm0 3v1h10v-1zm0 3v1h8v-1z" fill="currentColor"/>
</svg>
