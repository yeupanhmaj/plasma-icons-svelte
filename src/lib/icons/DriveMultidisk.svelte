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
			<path d="M3 2v12h10V2zm2 1h6a1 1 0 0 1 1 1c-1.333 0-1.333 2 0 2l-1 1H5L4 6c1.333 0 1.333-2 0-2a1 1 0 0 1 1-1zM4 8h4v1H4zm6 0h2v1h-2zm-6 2h4v1H4zm6 0h2v1h-2zm-6 2h4v1H4zm6 0h2v1h-2z" fill="currentColor" class="ColorScheme-Text"/>
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
			<path d="M5 3v16h12V3zm2 1h8a1 1 0 0 1 1 1v2a1 1 0 1 0 0 2v2l-1 1H7l-1-1V9a1 1 0 0 0 0-2V5a1 1 0 0 1 1-1zm0 9h4v1H7zm6 0h2v1h-2zm-6 2h4v1H7zm6 0h2v1h-2zm-2 2v1H7v-1zm2 0h2v1h-2z" fill="currentColor" class="ColorScheme-Text"/>
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
			<linearGradient id="c" gradientUnits="userSpaceOnUse" x1="10" x2="10" xlink:href="#a" y1="50" y2="6"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="10" x2="10" xlink:href="#a" y1="42" y2="6"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="386.571" x2="386.571" xlink:href="#a" y1="549.798" y2="497.798"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="14" x2="14" y1="35" y2="7"><stop offset="0" stop-color="#edf1f3"/><stop offset="1" stop-color="#f9fafb"/></linearGradient><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="386.571" x2="386.571" y1="549.798" y2="497.798"><stop offset="0" stop-color="#7f8c8d"/><stop offset="1" stop-color="#afb0b3"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="24" x2="42" y1="18" y2="36"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="M386.571 497.798h44v52h-44z" fill="url(#b)" transform="translate(-376.571 -491.798)"/><path d="M10 57h44v1H10z" fill="#292c2f" opacity=".4"/><path d="M10 44v6h44v-6z" fill="url(#c)"/><path d="M10 36v6h44v-6z" fill="url(#d)"/><path d="M47 36h7v6h-7zm-37 0h7v6h-7zm37 8h7v6h-7zm-37 0h7v6h-7zm37 8h7v6h-7zm-37 0h7v6h-7z" fill="#292c2f" opacity=".2"/><g stroke-width="1.857"><path d="M10 36h7v6h-1zm37 0h7v6h-7zm-37 8h7v6h-1zm37 0h7v6h-7zm-37 8h7v6h-1zm37 0h7v6h-7z" fill="#292c2f" opacity=".2"/><path d="M16 36h32v6H16zm0 8h32v6H16zm0 8h32v6H16z" fill="#292c2e"/><path d="M20 38h14v2H20zm16 0h8v2h-8zm-16 8h14v2H20zm16 0h8v2h-8zm-16 8h14v2H20zm16 0h8v2h-8z" fill="#f6b44d"/></g><path d="M11 42h42v2H11zm0 8h42v2H11z" fill="#252c33" opacity=".6"/><path d="M14 30l6 6h34V15.519L48.481 10z" fill="url(#e)" opacity=".2"/><path d="M20 8a6 6 0 0 0-6 6v4.541A4 4 0 0 1 16 22a4 4 0 0 1-2 3.459V30l4 4h28l4-4v-4.541A4 4 0 0 1 48 22a4 4 0 0 1 2-3.459V14a6 6 0 0 0-6-6z" fill="url(#f)"/><path d="M11 42h4v2h-4zm38 0h4v2h-4zm0 8h4v2h-4zm-38 0h4v2h-4z" fill="#232629"/>
		</svg>
	{/if}
