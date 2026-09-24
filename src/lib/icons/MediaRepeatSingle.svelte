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
        <path d="m12.29296875 8-1.5 1.5.70703125.70703125.5-.5v3.29296875h-1v1h3v-1h-1v-5z"/>
        <path d="m5 9v2h5v1h-5v2l-3.33398437-2.5z"/>
        <path d="m11 2v2h-6a3 3 0 0 0 -3 3v1h1v-1a2 2 0 0 1 2-2h6v2l3.33398438-2.5z"/>
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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m6 12-3 2.5 3 2.5v-2h9v-1h-9z"/>
        <path d="m16 5v2h-10c-1.662 0-3 1.338-3 3v1h1v-1c0-1.108.892-2 2-2h10v2l3-2.5z"/>
        <path d="m17.29296875 11-1.5 1.5.70703125.70703125.5-.5v3.29296875h-1v1h3v-1h-1v-5z" fill-rule="evenodd"/>
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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m9 17.5-5.33398437 4 5.33398437 4v-3.5h13v-1.04882813l-13 .046875z"/>
        <path d="m23 6.5v3.5h-14.5c-2.493 0-4.5 2.006999-4.5 4.5v1.5h1v-1.5c0-1.78185 1.6941816-3.5 3.5-3.5h14.5v3.5l5.33398438-4z"/>
        <path d="m25.29296875 17-2.5 2.5.70703125.70703125 1.5-1.5v5.29296875h-2v1h5v-1h-2v-7z" fill-rule="evenodd"/>
    </g>
		</svg>
	{/if}
