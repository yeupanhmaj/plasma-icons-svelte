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
     d="M 2 2 L 2 3 L 2 6 L 2 7 L 2 11 L 3 11 L 3 7 L 13 7 L 13 11 L 14 11 L 14 6 L 14 5 L 14 4 L 9.0078125 4 L 7.0078125 2 L 7 2.0078125 L 7 2 L 3 2 L 2 2 z M 3 3 L 6.5917969 3 L 7.59375 4 L 7 4 L 7 4.0078125 L 6.9921875 4 L 4.9921875 6 L 3 6 L 3 3 z M 6 11 L 6 12 L 2 12 L 2 13 L 6 13 L 6 14 L 10 14 L 10 13 L 14 13 L 14 12 L 10 12 L 10 11 L 6 11 z M 7 12 L 8 12 L 9 12 L 9 13 L 8 13 L 7 13 L 7 12 z "
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
	d="m3 3v1 11h1v-5h3v-.007813l.007813.007813 2-2h8.992188v7h1v-10h-6.992188l-2-2-.007812.007813v-.007813h-6-1m6 13v1h-6v1h6v1h4v-1h6v-1h-6v-1h-4m2 .5c.554 0 1 .446 1 1 0 .554-.446 1-1 1-.554 0-1-.446-1-1 0-.554.446-1 1-1"
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
     d="M 4 4 L 4 23 L 5 23 L 5 14 L 10 14 L 13 11 L 27 11 L 27 23 L 28 23 L 28 7 L 18 7 L 15 4 L 4 4 z M 12 23 L 12 25 L 4 25 L 4 26 L 12 26 L 12 28 L 20 28 L 20 26 L 28 26 L 28 25 L 20 25 L 20 23 L 12 23 z M 16 24 A 1.5 1.5 0 0 1 17.5 25.5 A 1.5 1.5 0 0 1 16 27 A 1.5 1.5 0 0 1 14.5 25.5 A 1.5 1.5 0 0 1 16 24 z "
     id="path74" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
