<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 22,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 22
	);
</script>

	{#if numericSize <= 27}
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
			<g id="22-22-klipper" transform="translate(49,4.999999) translate(-49,-5)">
    <path style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none" d="M 7,3 7,5 5,5 4,5 4,19 5,19 18,19 18,18 18,5 17,5 15,5 15,3 7,3 Z M 5,6 6,6 6,8 16,8 16,6 17,6 17,18 5,18 5,6 Z m 2,3 0,1 8,0 0,-1 -8,0 z m 0,3 0,1 6,0 0,-1 -6,0 z m 0,3 0,1 3,0 0,-1 -3,0 z" id="path4146" class="ColorScheme-Text"/>
  </g>
		</svg>
	{:else}
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
			<g id="klipper" transform="translate(2.89535e-08,1e-06)">
    <path id="rect4202" d="m 13.000002,4 0,2 -2,0 0,1 -5.0000001,0 0,21 20.0000001,0 0,-21 -5,0 0,-1 -2,0 0,-2 z m -6.0000001,4 4.0000001,0 0,1.3 10,0 0,-1.3 4,0 0,19 -18.0000001,0 z m 3.0000001,3 0,1 12,0 0,-1 z m 0,3 0,1 12,0 0,-1 z m 0,4 0,1 5,0 0,-1 z m 0,3 0,1 5,0 0,-1 z m 0,3 0,1 11,0 0,-1 z" style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
  </g>
		</svg>
	{/if}
