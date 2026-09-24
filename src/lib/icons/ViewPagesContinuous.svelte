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
			<path  d="m3 14v-7h7l3 3v4h-1v-3h-3v-3h-5v6z"  style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
    <path  d="m13 2v4h-10v-4h1v3h8v-3z"  style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
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
			<path  d="m4 19v-9h10l4 4v5h-1v-4h-4v-4h-8v8z"  style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
    <path d="m4 9v-6h1v5h12v-5h1v6z"  style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
		</svg>
	{/if}
