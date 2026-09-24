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
        d="M3 2v12h10V2zm3 1h4a2 2 0 0 1 2 2v1a1 1 0 1 0 0 2v2l-1 1H5l-1-1V8a1 1 0 1 0 0-2V5a2 2 0 0 1 2-2zm-2 9h4v1H4zm6 0h2v1h-2z"
        class="ColorScheme-Text"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M5 3v16h12V3zm4 1h4a3 3 0 0 1 3 3v2.088a1.5 1.5 0 0 0-1 1.412 1.5 1.5 0 0 0 1 1.412V14l-2 2H8l-2-2v-2.088A1.5 1.5 0 0 0 7 10.5a1.5 1.5 0 0 0-1-1.412V7a3 3 0 0 1 3-3zM7 17h4v1H7zm6 0h2v1h-2z"
        class="ColorScheme-Text"/>
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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="386.571" x2="386.571" y1="549.798" y2="497.798"><stop offset="0" stop-color="#7f8c8d"/><stop offset="1" stop-color="#afb0b3"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="48" y2="10"><stop offset="0" stop-color="#eef1f2"/><stop offset="1" stop-color="#f9fafb"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="400.571" x2="420.571" y1="511.798" y2="531.798"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="M386.571 497.798h44v52h-44z" fill="url(#a)" transform="translate(-376.571 -491.798)"/><path d="M47 52h7v6h-7zm-37 0h7v6h-7z" fill="#292c2f" opacity=".2"/><g stroke-width="1.857"><path d="M10 52h7v6h-1zm37 0h7v6h-7z" fill="#292c2f" opacity=".2"/><path d="M16 52h32v6H16z" fill="#292c2e"/><path d="M20 54h14v2H20zm16 0h8v2h-8z" fill="#f6b44d"/></g><path d="M390.571 533.798l16 16h24V511.07l-6.636-6.636z" fill="url(#b)" opacity=".2" transform="translate(-376.571 -491.798)"/><path d="M23 10a9 9 0 0 0-9 9v8.535A6 6 0 0 1 16 32a6 6 0 0 1-2 4.463V42l6 6h24l6-6v-5.535A6 6 0 0 1 48 32a6 6 0 0 1 2-4.463V19a9 9 0 0 0-9-9z" fill="url(#c)"/><path d="M10 57h44v1H10z" fill="#292c2f" opacity=".4"/>
		</svg>
	{/if}
