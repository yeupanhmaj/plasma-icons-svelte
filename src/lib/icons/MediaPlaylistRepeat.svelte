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

	{#if numericSize <= 19}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m11 2v2h-6a3 3 0 0 0 -3 3v1h1v-1a2 2 0 0 1 2-2h6v2l3.33398438-2.5z"/>
        <path d="m5 14v-2h6a3 3 0 0 0 3-3v-1h-1v1a2 2 0 0 1 -2 2h-6v-2l-3.33398438 2.5z"/>
    </g>
		</svg>
	{:else if numericSize <= 27}
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
			<path class="ColorScheme-Text" d="m16 5v2h-10c-1.662 0-3 1.338-3 3v1h1v-1c0-1.108 0.892-2 2-2h10v2l3-2.5zm2 6v1c0 1.108-0.892 2-2 2h-10v-2l-3 2.5 3 2.5v-2h10c1.662 0 3-1.338 3-3v-1z" fill="currentColor"/>
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
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="m 23.499999,7.0000003 v 3.0000007 0 H 8.5000006 C 6.0070006,10.000001 4,12.007 4,14.500001 V 16 H 5 V 14.500001 C 5,12.718151 6.6941822,11 8.5000006,11 H 23.5 l -1e-6,3 L 28,10.5 Z M 27,16 v 1.500001 C 27,19.287 25.286999,21 23.499999,21 H 8.5000006 V 18 L 4,21.5 8.5000006,25 v -3 0 H 23.499999 C 25.993,22 28,19.993 28,17.500001 V 16 Z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
