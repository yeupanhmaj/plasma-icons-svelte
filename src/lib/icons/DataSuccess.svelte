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
	<rect id="rect3" class="ColorScheme-PositiveText" x="3" y="3" width="16" height="16" rx="1.4545455" fill="currentColor"/>
    <path id="path5" d="M 18.99323,4.3805651 9,14 5.7332785,10.623339 4.3852425,12.059327 9,16.828 l 10,-10 z" fill="#fff"/>
</svg>
