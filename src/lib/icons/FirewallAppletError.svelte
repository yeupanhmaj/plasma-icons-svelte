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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText" d="M7 2L4 5h4V2zm2 0v3h5V2zM2 7v2h2V6H3zm3-1v3h1V6zm-3 4v3h4v-3z"/>
    <path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText" d="M8 6c-.554 0-1 .446-1 1v6c0 .554.446 1 1 1h6c.554 0 1-.446 1-1V7c0-.554-.446-1-1-1z"/>
    <path d="M9 7L8 8l2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2-1-1-2 2z" fill="#fff"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText" d="M13 3l-1 1v2h7V3zM9 7L7 9v1h8V7zm7 0v3h3V7zM5 11l-2 2v1h8v-3zm-2 4v3h3v-3zm4 0v3h4v-3zM13 11c-.554 0-1 .446-1 1v6c0 .554.446 1 1 1h6c.554 0 1-.446 1-1v-6c0-.554-.446-1-1-1z"/>
    <path d="M14 12l-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2-1-1-2 2z" fill="#fff"/>
		</svg>
	{/if}
