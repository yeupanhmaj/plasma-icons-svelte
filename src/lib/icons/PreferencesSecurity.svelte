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

	{#if numericSize <= 27}
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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="8" x2="8" y1="14" y2="6"><stop offset="0" stop-color="#7cbaf8"/><stop offset="1" stop-color="#f4fcff"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.68426199 0 0 .64285717 .051808 .714286)" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="30" y2="2"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#20bcfa"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="9.710111" x2="16.78154" y1="7.142858" y2="14.214287"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m11 2c-3 2-4 2-7 2v8.730469c0 2.423571 3.7812327 5.733745 7 7.269531 3.21877-1.535786 7-4.84596 7-7.269531v-8.730469c-3 0-4 0-7-2z" fill="url(#b)" stroke-width=".663236"/><path d="m12 6.1992188-2 .8007812-1 3h-1v4l5.566406 6h4.433594v-7.800781z" fill="url(#c)" opacity=".2" stroke-width=".642857"/><path d="m11 6a2 2 0 0 0 -2 2v2h-1v4h6v-4h-1v-2a2 2 0 0 0 -2-2zm0 1a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 1-1z" fill="url(#a)"/><path d="m4 11.730469v1c0 2.423571 3.781233 5.733745 7 7.269531 3.21877-1.535786 7-4.84596 7-7.269531v-1c0 2.423571-3.78123 5.733745-7 7.269531-3.218767-1.535786-7-4.84596-7-7.269531z" fill="#282d2d" fill-opacity=".2" stroke-width=".663236"/>
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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="30" y2="2"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#20bcfa"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="14" x2="25" y1="10" y2="21"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="14" x2="14" y1="21" y2="9"><stop offset="0" stop-color="#7cbaf8"/><stop offset="1" stop-color="#f4fcff"/></linearGradient><path d="M16 2C12.59 3.806 9.18 4.544 5.77 5.23v13.463c0 3.77 5.526 8.918 10.23 11.307 4.704-2.389 10.23-7.537 10.23-11.307V5.231C22.82 4.544 19.41 3.806 16 2z" fill="url(#a)"/><path d="M16 9l-2 1-1 2v3h-2v6l9 9h6.219l.024-12-8.122-8.121z" fill="url(#b)" opacity=".2"/><path d="M16 9a3 3 0 0 0-3 3v3h-2v6h10v-6h-2v-3a3 3 0 0 0-3-3zm0 1a2 2 0 0 1 2 2v3h-4v-3a2 2 0 0 1 2-2z" fill="url(#c)"/><path d="M5.77 17.693v1c0 3.77 5.526 8.918 10.23 11.307 4.704-2.389 10.23-7.537 10.23-11.307v-1c0 3.77-5.526 8.918-10.23 11.307-4.704-2.389-10.23-7.537-10.23-11.307z" fill="#292c2f" opacity=".2"/>
		</svg>
	{/if}
