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
			<path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 3 3 L 3 5 A 14 14 0 0 1 17 19 L 19 19 A 16 16 0 0 0 3 3 z M 3 8 L 3 10 A 9 9 0 0 1 12 19 L 14 19 A 11 11 0 0 0 3 8 z M 5.5 14 A 2.5 2.5 0 0 0 3 16.5 A 2.5 2.5 0 0 0 5.5 19 A 2.5 2.5 0 0 0 8 16.5 A 2.5 2.5 0 0 0 5.5 14 z "
       class="ColorScheme-Text"
        />
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
			<g id="akregator" transform="translate(-22,0)">
    <path id="path12" d="M 26 4 L 26 8 A 20 20 0 0 1 46 28 L 50 28 A 24 24 0 0 0 26 4 z M 26 12 L 26 16 A 12 12 0 0 1 38 28 L 42 28 A 16 16 0 0 0 26 12 z M 29.5 21 A 3.5 3.5 0 0 0 26 24.5 A 3.5 3.5 0 0 0 29.5 28 A 3.5 3.5 0 0 0 33 24.5 A 3.5 3.5 0 0 0 29.5 21 z " style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
    <path id="path14" style="opacity:1;fill:none" d="M 22 0 L 22 32 L 54 32 L 54 0 L 22 0 z "/>
  </g>
		</svg>
	{/if}
