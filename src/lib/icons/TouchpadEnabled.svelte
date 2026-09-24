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
			<g transform="translate(0,32) translate(0,-42)" id="22-22-touchpad_enabled">
    <path id="path7" class="ColorScheme-Text" d="m 4,13 c -0.554,0 -1,0.446 -1,1 l 0,14 c 0,0.554 0.446,1 1,1 l 14,0 c 0.554,0 1,-0.446 1,-1 l 0,-14 c 0,-0.554 -0.446,-1 -1,-1 L 4,13 Z m 0,1 14,0 0,11 -14,0 0,-11 z m 0,12 6,0 0,2 -6,0 0,-2 z m 8,0 6,0 0,2 -6,0 0,-2 z" style="fill:currentColor;fill-opacity:1;stroke:none"/>
    <path id="path9" d="M 0 10 L 0 32 L 22 32 L 22 10 L 0 10 z " style="opacity:1;fill:none"/>
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
			<g transform="translate(0,32) translate(-22,-32)" id="touchpad_enabled" inkscape:label="#touchpad_enabled">
    <path id="path12" class="ColorScheme-Text" d="M 27 4 C 26.446 4 26 4.446 26 5 L 26 27 C 26 27.554 26.446 28 27 28 L 49 28 C 49.554 28 50 27.554 50 27 L 50 5 C 50 4.446 49.554 4 49 4 L 27 4 z M 27 5 L 49 5 L 49 22 L 27 22 L 27 5 z M 27 23 L 37 23 L 37 27 L 27 27 L 27 23 z M 39 23 L 49 23 L 49 27 L 39 27 L 39 23 z " style="fill:currentColor;fill-opacity:1;stroke:none"/>
    <path id="path14" d="M 22 0 L 22 32 L 54 32 L 54 0 L 22 0 z " style="opacity:1;fill:none"/>
  </g>
		</svg>
	{/if}
