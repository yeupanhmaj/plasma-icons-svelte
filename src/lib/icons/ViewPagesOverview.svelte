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
			<path d="m6 1v2h-2v2h-2v10h8v-2h2v-2h2v-7l-3-3h-5zm1 1h3v2l-1-1h-2v-1zm-2 2h3v2l-1-1h-2v-1zm6 1h2v5h-1v-4l-1-1zm-8 1h3v3h3v5h-6v-8zm6 1h2v5h-1v-4l-1-1z"  style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
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
			<path d="m8 3v2h-2v2h-2v12h10v-2h2v-2h2v-8l-4-4h-6zm1 1h4v2l-1-1h-3v-1zm-2 2h4v2l-1-1h-3v-1zm-2 2h4v4h4v6h-8v-10zm10 0h2v6h-1v-5l-1-1zm-2 2h2v6h-1v-5l-1-1z"  style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
		</svg>
	{/if}
