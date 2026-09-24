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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M2 12V4h11v8zM0 2v12h15v-4h.5c.277 0 .5-.223.5-.5v-3c0-.277-.223-.5-.5-.5H15V2H3zm1 1h13v10H1z"/><path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText" d="M9 8h6c.554 0 1 .446 1 1v6c0 .554-.446 1-1 1H9c-.554 0-1-.446-1-1V9c0-.554.446-1 1-1z"/><path d="M9.707 9L9 9.707 11.293 12 9 14.293l.707.707L12 12.707 14.293 15l.707-.707L12.707 12 15 9.707 14.293 9 12 11.293z" fill="#fff"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M3 15V7h15v8zM1 5v12h19v-4h.5c.277 0 .5-.223.5-.5v-3c0-.277-.223-.5-.5-.5H20V5H4zm1 1h17v10H2z"/><path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText" d="M15 11h6c.554 0 1 .446 1 1v6c0 .554-.446 1-1 1h-6c-.554 0-1-.446-1-1v-6c0-.554.446-1 1-1z"/><path d="M15.707 12l-.707.707L17.293 15 15 17.293l.707.707L18 15.707 20.293 18l.707-.707L18.707 15 21 12.707 20.293 12 18 14.293z" fill="#fff"/>
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
        <path d="M5 12h21v8H5z"/>
    </g>
    <rect class="ColorScheme-NegativeText" fill="currentColor" height="10" rx="1" width="10" x="22" y="16"/>
    <path d="M24.707 18l-.707.707L26.293 21 24 23.293l.707.707L27 21.707 29.293 24l.707-.707L27.707 21 30 18.707 29.293 18 27 20.293z" fill="#fcfcfc"/>
		</svg>
	{/if}
