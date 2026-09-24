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

	{#if numericSize <= 12}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 8 8"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<circle style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-PositiveText" cx="4" cy="4" r="4"/>
    <path d="M6 2L3 5 1.5 3.5l-1 1L3 7l4-4z" fill="#fff"/>
		</svg>
	{:else if numericSize <= 19}
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
			<circle style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-PositiveText" cx="8" cy="8" r="8"/>
    <path style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text" d="M8 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm0 1a7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7z"/>
    <path d="M12.586 3.586L6.5 9.672 3.414 6.586 2 8l4.5 4.5L14 5z" fill="#fff"/>
		</svg>
	{:else}
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-PositiveText" d="M11 0A11 11 0 0 0 0 11a11 11 0 0 0 11 11 11 11 0 0 0 11-11A11 11 0 0 0 11 0z"/>
    <path style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text" d="M11 0A11 11 0 0 0 0 11a11 11 0 0 0 11 11 11 11 0 0 0 11-11A11 11 0 0 0 11 0zm0 1a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 1 11 10 10 0 0 1 11 1z"/>
    <path d="M17.586 5.414L9 14 4.414 9.414 3 10.828l6 6 10-10z" fill="#fff"/>
		</svg>
	{/if}
