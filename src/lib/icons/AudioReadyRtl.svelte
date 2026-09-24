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
	<path class="ColorScheme-Text" d="m11.011719 3 4.988281 4.9902344v6.0195656l-4.988281 4.9902h-1.011719v-16zm7.988281 5v6h-2v-6z" fill="currentColor"/>
    <circle class="ColorScheme-NeutralText" transform="scale(-1,1)" cx="-6" cy="11" r="3" fill="currentColor"/>
</svg>
