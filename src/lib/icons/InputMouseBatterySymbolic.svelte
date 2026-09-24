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
	<g id="input-mouse-battery" transform="translate(-332,-300.36238) translate(-38,-256)">
        <path class="ColorScheme-Text" d="m386 560.36238a8 9 0 0 0-8 9v6a8 9 0 0 0 8 9 8 9 0 0 0 8-9v-6a8 9 0 0 0-8-9zm0 1a7 8 0 0 1 7 8v6a7 8 0 0 1-7 8 7 8 0 0 1-7-8v-6a7 8 0 0 1 7-8zm0 3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm0 8-2 5h2v3l2-5h-2z" fill="currentColor"/>
    </g>
</svg>
