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
	<path id="path4" d="m16.5 3c-1.932997 0-3.5 1.7909-3.5 4v3c0 2.2091 1.567003 4 3.5 4s3.5-1.7909 3.5-4v-3c0-2.2091-1.567003-4-3.5-4zm0 1c1.380712 0 2.5 1.3431 2.5 3v3c0 1.6569-1.119288 3-2.5 3s-2.5-1.3431-2.5-3v-3c0-1.6569 1.119288-3 2.5-3z" fill="#b3b3b3"/>
    <path id="path6" d="m15.085938 15-0.707032 0.707031 1.414063 1.414063-1.414063 1.414062 0.707032 0.707032 1.414062-1.414063 1.414062 1.414063 0.707032-0.707032-1.414063-1.414062 1.414063-1.414063-0.707032-0.707031-1.414062 1.414062z" fill="#da4453"/>
    <path id="path8" class="ColorScheme-Text" d="m8.5 3c-1.932997 0-3.5 1.7909-3.5 4v3c0 2.2091 1.567003 4 3.5 4s3.5-1.7909 3.5-4v-3c0-2.2091-1.567003-4-3.5-4zm0 1c1.380712 0 2.5 1.3431458 2.5 3v3c0 1.656854-1.119288 3-2.5 3-1.3807119 0-2.5-1.343146-2.5-3v-3c0-1.6568542 1.1192881-3 2.5-3zm-5.5 9v1h1v-1z" fill="currentColor"/>
</svg>
