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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M2 4h2l1 8H2zM0 2v12h15v-4h.5c.277 0 .5-.223.5-.5v-3c0-.277-.223-.5-.5-.5H15V2zm1 1h13v10H1z"/><path d="M9 5a3 3 0 0 0-2.826 2H5v2h1.176A3 3 0 0 0 9 11v-1h2V9H9V7h2V6H9z" class="ColorScheme-PositiveText" fill="currentColor"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M3 7v8h3V7zM1 5v12h19v-4h.5c.277 0 .5-.223.5-.5v-3c0-.277-.223-.5-.5-.5H20V5H4zm1 1h17v10H2z"/><path d="M12 8a3 3 0 0 0-2.826 2H8v2h1.176A3 3 0 0 0 12 14v-1h2v-1h-2v-2h2V9h-2z" class="ColorScheme-PositiveText" fill="currentColor"/>
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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="M3 10v12h25v-3c.554 0 1-.446 1-1v-4c0-.554-.446-1-1-1v-3zm1 1h23v10H4z"/>
        <path d="M5 12h4l2 8H5z"/>
    </g>
    <path d="M16 13a3 3 0 0 0-2.826 2H12v2h1.176A3 3 0 0 0 16 19v-1h2v-1h-2v-2h2v-1h-2z" class="ColorScheme-PositiveText" fill="currentColor"/>
		</svg>
	{/if}
