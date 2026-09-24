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
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text">
        <path d="m3 2v12h10v-12zm3 1h4a2 2 0 0 1 2 2v1a1 1 0 1 0 0 2v2l-1 1h-6l-1-1v-2a1 1 0 1 0 0-2v-1a2 2 0 0 1 2-2zm-2 9h4v1h-4zm6 0h2v1h-2z"/>
        <path d="m8 4-3 6h1l3-6z"/>
        <rect height="1" width="3" x="8" y="9"/>
    </g>
		</svg>
	{:else if numericSize <= 43}
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
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text">
        <path d="m5 3v16h12v-16zm4 1h4a3 3 0 0 1 3 3v2.088a1.5 1.5 0 0 0 -1 1.412 1.5 1.5 0 0 0 1 1.412v2.088l-2 2h-6l-2-2v-2.088a1.5 1.5 0 0 0 1-1.412 1.5 1.5 0 0 0 -1-1.412v-2.088a3 3 0 0 1 3-3zm-2 13h4v1h-4zm6 0h2v1h-2z"/>
        <path d="m11 6-4.0000004 8h2.0000004l4-8z"/>
        <rect height="1" width="4" x="11" y="13"/>
    </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="20" x2="20" y1="40" y2="16">
        <stop offset="0" stop-color="#3e3e3e"/>
        <stop offset="1" stop-color="#5c5c5c"/>
    </linearGradient>
    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="16" x2="44" xlink:href="#e" y1="16" y2="44"/>
    <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="386.571" x2="386.571" y1="549.798" y2="497.798">
        <stop offset="0" stop-color="#7f8c8d"/>
        <stop offset="1" stop-color="#afb0b3"/>
    </linearGradient>
    <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="48" y2="10">
        <stop offset="0" stop-color="#eef1f2"/>
        <stop offset="1" stop-color="#f9fafb"/>
    </linearGradient>
    <linearGradient id="e" gradientUnits="userSpaceOnUse" x1="400.571" x2="420.571" y1="511.798" y2="531.798">
        <stop offset="0" stop-color="#292c2f"/>
        <stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <path d="m386.571 497.798h44v52h-44z" fill="url(#c)" transform="translate(-376.571 -491.798)"/>
    <path d="m47 52h7v6h-7zm-37 0h7v6h-7z" fill="#292c2f" opacity=".2"/>
    <path d="m10 52h7v6h-1zm37 0h7v6h-7z" fill="#292c2f" opacity=".2"/>
    <path d="m16 52h32v6h-32z" fill="#292c2e"/>
    <path d="m20 54h14v2h-14zm16 0h8v2h-8z" fill="#f6b44d"/>
    <path d="m390.571 533.798 16 16h24v-38.728l-6.636-6.636z" fill="url(#e)" opacity=".2" transform="translate(-376.571 -491.798)"/>
    <path d="m23 10a9 9 0 0 0 -9 9v8.535a6 6 0 0 1 2 4.465 6 6 0 0 1 -2 4.463v5.537l6 6h24l6-6v-5.535a6 6 0 0 1 -2-4.465 6 6 0 0 1 2-4.463v-8.537a9 9 0 0 0 -9-9z" fill="url(#d)"/>
    <path d="m10 57h44v1h-44z" fill="#292c2f" opacity=".4"/>
    <path d="m36 16-16 24 12 12h12l-12-12 12-2 6 6v-14z" fill="url(#b)" opacity=".2"/>
    <path d="m32 40 12 12h6v-8l-6-6z" fill="url(#b)"/>
    <path d="m32 38h12v2h-12zm0-22-12 24h4l12-24z" fill="url(#a)"/>
		</svg>
	{/if}
