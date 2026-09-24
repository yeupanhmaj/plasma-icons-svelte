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
			<g id="22-22-apport" transform="translate(0,-10)">
    <path id="path7" class="ColorScheme-Text" d="M 3 13 L 3 29 L 4 29 L 19 29 L 19 28 L 19 13 L 18 13 L 4 13 L 3 13 z M 4 14 L 18 14 L 18 28 L 4 28 L 4 14 z M 5 15 L 5 16 L 6 16 L 6 15 L 5 15 z M 6 16 L 6 18 L 8 18 L 8 16 L 6 16 z M 8 16 L 9 16 L 9 15 L 8 15 L 8 16 z M 8 18 L 8 19 L 9 19 L 9 18 L 8 18 z M 6 18 L 5 18 L 5 19 L 6 19 L 6 18 z M 13 15 L 13 16 L 14 16 L 14 15 L 13 15 z M 14 16 L 14 18 L 16 18 L 16 16 L 14 16 z M 16 16 L 17 16 L 17 15 L 16 15 L 16 16 z M 16 18 L 16 19 L 17 19 L 17 18 L 16 18 z M 14 18 L 13 18 L 13 19 L 14 19 L 14 18 z M 9 21 L 9 23 L 13 23 L 13 21 L 9 21 z M 13 23 L 13 25 L 15 25 L 15 23 L 13 23 z M 15 25 L 15 27 L 17 27 L 17 25 L 15 25 z M 9 23 L 7 23 L 7 25 L 9 25 L 9 23 z M 7 25 L 5 25 L 5 27 L 7 27 L 7 25 z " style="fill:currentColor;fill-opacity:1;stroke:none"/>
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
			<g id="apport" transform="translate(-22,0)">
    <path id="path12" class="ColorScheme-Text" d="M 26 4 L 26 28 L 50 28 L 50 4 L 26 4 z M 27 5 L 49 5 L 49 27 L 27 27 L 27 5 z M 29 7 L 29 9 L 31 9 L 31 7 L 29 7 z M 31 9 L 31 12 L 34 12 L 34 9 L 31 9 z M 34 9 L 36 9 L 36 7 L 34 7 L 34 9 z M 34 12 L 34 14 L 36 14 L 36 12 L 34 12 z M 31 12 L 29 12 L 29 14 L 31 14 L 31 12 z M 40 7 L 40 9 L 42 9 L 42 7 L 40 7 z M 42 9 L 42 12 L 45 12 L 45 9 L 42 9 z M 45 9 L 47 9 L 47 7 L 45 7 L 45 9 z M 45 12 L 45 14 L 47 14 L 47 12 L 45 12 z M 42 12 L 40 12 L 40 14 L 42 14 L 42 12 z M 34 17 L 34 19 L 42 19 L 42 17 L 34 17 z M 42 19 L 42 21 L 44 21 L 44 19 L 42 19 z M 44 21 L 44 23 L 46 23 L 46 21 L 44 21 z M 34 19 L 32 19 L 32 21 L 34 21 L 34 19 z M 32 21 L 30 21 L 30 23 L 32 23 L 32 21 z " style="fill:currentColor;fill-opacity:1;stroke:none"/>
    <path id="path14" d="M 22 0 L 22 32 L 54 32 L 54 0 L 22 0 z " style="opacity:1;fill:none"/>
  </g>
		</svg>
	{/if}
