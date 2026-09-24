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
			<path
    d="m2 2v1h11v2h1v-3zm0 2v10h4v-1h-3v-8h9v-1zm2 2v1h2v-1zm3 0v8h7v-8zm1 1h5v6h-5zm1 1v2h3v-2zm-5 1v1h1v-1zm0 2v1h2v-1zm5 0v1h1v-1zm2 0v1h1v-1z"
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    class="ColorScheme-Text"
    />
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
			<path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="M 3 3 L 3 4 L 3 6 L 4 6 L 4 4 L 18 4 L 18 9 L 19 9 L 19 3 L 3 3 z M 3 7 L 3 8 L 3 19 L 4 19 L 9 19 L 9 18 L 4 18 L 4 8 L 12 8 L 12 9 L 13 9 L 13 7 L 3 7 z M 5 10 L 5 11 L 9 11 L 9 10 L 5 10 z M 10 10 L 10 11 L 10 19 L 11 19 L 18 19 L 19 19 L 19 11 L 19 10 L 10 10 z M 11 11 L 18 11 L 18 18 L 11 18 L 11 11 z M 12 12 L 12 14 L 17 14 L 17 12 L 12 12 z M 5 13 L 5 14 L 7 14 L 7 13 L 5 13 z M 5 15 L 5 16 L 9 16 L 9 15 L 5 15 z M 14 15 L 14 16 L 15 16 L 15 15 L 14 15 z M 16 15 L 16 16 L 17 16 L 17 15 L 16 15 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
