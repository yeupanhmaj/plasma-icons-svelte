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
			<style type="text/css">.ColorScheme-Text {
            color:#232629;
        }</style>
    <rect x="2" y="2" width="12" height="12" rx="2" fill="#7f8c8d"/>
    <path d="m8 2.9788194c-1.6568542 0-3 1.3431458-3 3v2.0211806h-1v5h7.975521v-5h-0.975521v-2.0211806c0-1.6568542-1.3431458-3-3-3zm0 1c1.1045695 0 2 0.8954305 2 2v2.0211806h-4v-2.0211806c0-1.1045695 0.8954305-2 2-2z" fill="#fff"/>
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
			<style type="text/css">.ColorScheme-Text {
            color:#232629;
        }</style>
    <rect x="3" y="3" width="16" height="16" rx="2" fill="#7f8c8d"/>
    <path d="m11 5a3 3 0 0 0-3 3v3h-2v6h10v-6h-2v-3a3 3 0 0 0-3-3zm0 1a2 2 0 0 1 2 2v3h-4v-3a2 2 0 0 1 2-2z" fill="#fff"/>
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
			<path d="m32 59c14.3594 0 26-11.6406 26-26s-11.6406-26-26-26-26 11.6406-26 26 11.6406 26 26 26z" fill="url(#paint0_linear_1698_20544)"/>
    <path d="m32 59c14.3594 0 26-11.6406 26-26s-11.6406-26-26-26-26 11.6406-26 26 11.6406 26 26 26z" fill="#000" fill-opacity=".2"/>
    <path d="m32 58c14.3594 0 26-11.6406 26-26s-11.6406-26-26-26-26 11.6406-26 26 11.6406 26 26 26z" fill="url(#paint1_linear_1698_20544)"/>
    <defs>
        <linearGradient id="paint0_linear_1698_20544" x1="-1.90735e-6" x2="64" y1="1" y2="65" gradientUnits="userSpaceOnUse">
            <stop stop-color="#727272" offset="0"/>
            <stop stop-color="#555" offset="1"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1698_20544" x1="-1.90735e-6" x2="64" y1="1.90735e-6" y2="64" gradientUnits="userSpaceOnUse">
            <stop stop-color="#727272" offset="0"/>
            <stop stop-color="#545752" offset="1"/>
        </linearGradient>
        <linearGradient id="f" x1="393.57144" x2="407.57147" y1="520.79797" y2="534.79797" gradientTransform="matrix(2,0,0,2,-769.14287,-1023.596)" gradientUnits="userSpaceOnUse">
            <stop offset="0"/>
            <stop stop-opacity="0" offset="1"/>
        </linearGradient>
        <linearGradient id="e" x2="0" y1="533.79797" y2="521.79797" gradientTransform="matrix(2,0,0,2,-769.14287,-1023.596)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#eff0f1" offset="0"/>
            <stop stop-color="#fcfcfc" offset="1"/>
        </linearGradient>
    </defs>
    <path d="m32 18v2h-2l-4 4v8h-4v14l12 12h30v-10l-28-28z" fill="url(#f)" fill-rule="evenodd" opacity=".2" stroke-width="1.99999"/>
    <path d="m32 18c-3.324 0-6 2.676-6 6v8h-4v14h20v-14h-4v-8c0-3.324-2.676-6-6-6zm0 2c2.493 0 4 1.0916 4 4v8h-8v-8c0-2.9084 1.50702-4 4-4z" fill="url(#e)" stroke-width="1.99999"/>
		</svg>
	{/if}
