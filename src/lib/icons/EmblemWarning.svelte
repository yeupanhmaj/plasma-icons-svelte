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
			<path d="M4 0c-.204 0-.355.096-.463.313 0 0-3.46 6.888-3.457 6.916A.664.664 0 0 0 0 7.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5c0-.113-.018-.132-.107-.31L4.455.29C4.346.098 4.195 0 4 0z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText"/>
    <path d="M3 2v4h2V2zm0 5v1h2V7z" fill="#fff"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText" d="M8.008 0a1 1 0 0 0-.903.553l-7 14A1 1 0 0 0 1 16h14a1 1 0 0 0 .895-1.447l-7-14A1 1 0 0 0 8.008 0z"/>
    <path style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text" d="M8.008 0a1 1 0 0 0-.903.553l-7 14A1 1 0 0 0 1 16h14a1 1 0 0 0 .895-1.447l-7-14A1 1 0 0 0 8.008 0zM8 1l7 14H1z"/>
    <path d="M7 3v9h2V3zm0 10v2h2v-2z" fill="#fff"/>
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
			<path d="M11.008 0a1 1 0 0 0-.903.553l-10 20A1 1 0 0 0 1 22h20a1 1 0 0 0 .895-1.447l-10-20A1 1 0 0 0 11.008 0z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText"/>
    <path d="M10 4v12h2V4zm0 14v2h2v-2z" fill="#fff"/>
    <path d="M11.008 0a1 1 0 0 0-.903.553l-10 20A1 1 0 0 0 1 22h20a1 1 0 0 0 .895-1.447l-10-20A1 1 0 0 0 11.008 0zM11 1l10 20H1z" style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text"/>
		</svg>
	{/if}
