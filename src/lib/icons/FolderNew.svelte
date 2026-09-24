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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 2 2 L 2 3 L 2 6 L 2 7 L 2 13 L 2 14 L 9 14 L 9 13 L 3 13 L 3 7 L 13 7 L 13 9 L 14 9 L 14 6 L 14 5 L 14 4 L 9.0078125 4 L 7.0078125 2 L 7 2.0078125 L 7 2 L 3 2 L 2 2 z M 3 3 L 6.5917969 3 L 7.59375 4 L 7 4 L 7 4.0078125 L 6.9921875 4 L 4.9921875 6 L 3 6 L 3 3 z M 11 9 L 11 11 L 9 11 L 9 12 L 11 12 L 11 14 L 12 14 L 12 12 L 14 12 L 14 11 L 12 11 L 12 9 L 11 9 z "
     class="ColorScheme-Text"
     />
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
			<path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
	d="m3 3v1 15h1 9v-1h-9v-8h3v-.009766l.007813.009766 2-2h8.992188v5h1v-8h-6.992188l-2-2-.007812.009766v-.009766h-6-1m13 11v2h-2v1h2v2h1v-2h2v-1h-2v-2h-1"
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
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 4 4 L 4 28 L 17 28 L 17 27 L 5 27 L 5 14 L 10 14 L 13 11 L 27 11 L 27 17 L 28 17 L 28 7 L 18 7 L 15 4 L 4 4 z M 22 17 L 22 22 L 17 22 L 17 23 L 22 23 L 22 28 L 23 28 L 23 23 L 28 23 L 28 22 L 23 22 L 23 17 L 22 17 z "
     id="path99" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
