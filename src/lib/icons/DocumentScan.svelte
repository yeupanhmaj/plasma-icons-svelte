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
			<path class="ColorScheme-Text" style="fill:currentColor;fill-opacity:1;stroke:none" d="m3 2v5h1v-4h5v3h3v1h1v-1-1l-3-3h-1-6zm-1 6v1h12v-1h-12zm1 2v2h1v-2h-1zm9 0v2h1v-2h-1zm-9 3v1h2v-1h-2zm4 0v1h2v-1h-2zm4 0v1h2v-1h-2z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor;fill-opacity:1;stroke:none" d="m4 3v7h1v-6h8v4h4v2h1v-3l-4-4h-10zm-1 8v1h16v-1h-16zm1 2v2h1v-2h-1zm13 0v2h1v-2h-1zm-13 3v3h2v-1h-1v-2h-1zm13 0v2h-1v1h2v-3h-1zm-10 2v1h2v-1h-2zm3 0v1h2v-1h-2zm3 0v1h2v-1h-2z" fill="currentColor"/>
		</svg>
	{/if}
