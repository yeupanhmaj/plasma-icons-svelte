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
			<g id="22-22-touchpad_disabled" inkscape:label="#22-22-touchpad_disabled" transform="translate(0,-10)">
    <path id="path17" class="ColorScheme-Text" d="m 4,13 c -0.554,0 -1,0.446 -1,1 l 0,14 c 0,0.554 0.446,1 1,1 l 14,0 c 0.554,0 1,-0.446 1,-1 l 0,-14 c 0,-0.554 -0.446,-1 -1,-1 L 4,13 Z m 0,1 14,0 0,11 -14,0 0,-11 z m 0,12 6,0 0,2 -6,0 0,-2 z m 8,0 6,0 0,2 -6,0 0,-2 z" style="fill:currentColor;fill-opacity:0.6;stroke:none"/>
    <path id="path19" d="M 0 10 L 0 32 L 22 32 L 22 10 L 0 10 z " style="opacity:1;fill:none"/>
    <path id="path21" class="ColorScheme-NegativeText" d="M 8.8476562,17 8,17.847656 10.152344,20 8,22.152344 8.8476562,23 11,20.847656 13.152344,23 14,22.152344 11.847656,20 14,17.847656 13.152344,17 11,19.152344 8.8476562,17 Z" style="fill:currentColor;fill-opacity:1;stroke:none"/>
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
			<g id="touchpad_disabled" inkscape:label="#touchpad_disabled" transform="translate(-22,0)">
      <path id="path28" class="ColorScheme-NegativeText" d="M 34,10.207 37.293,13.5 34,16.793 c 0.013,0.025 0.707,0.707 0.707,0.707 L 38,14.207 41.293,17.5 42,16.793 38.707,13.5 42,10.207 41.293,9.5 38,12.793 34.707,9.5 Z" style="fill:currentColor;fill-opacity:1;stroke:none"/>
    <path id="path24" class="ColorScheme-Text" d="M 27 4 C 26.446 4 26 4.446 26 5 L 26 27 C 26 27.554 26.446 28 27 28 L 49 28 C 49.554 28 50 27.554 50 27 L 50 5 C 50 4.446 49.554 4 49 4 L 27 4 z M 27 5 L 49 5 L 49 22 L 27 22 L 27 5 z M 27 23 L 37 23 L 37 27 L 27 27 L 27 23 z M 39 23 L 49 23 L 49 27 L 39 27 L 39 23 z " style="fill:currentColor;fill-opacity:0.6;stroke:none"/>
    <path id="path26" d="M 22 0 L 22 32 L 54 32 L 54 0 L 22 0 z " style="opacity:1;fill:none"/>
  </g>
		</svg>
	{/if}
