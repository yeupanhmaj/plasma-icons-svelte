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
     d="M 2 2 L 2 5 L 3 5 L 3 3 L 5 3 L 5 2 L 3 2 L 2 2 z M 11 2 L 11 3 L 13 3 L 13 4 L 13 5 L 14 5 L 14 3 L 14 2 L 11 2 z M 4 4 L 4 7 L 7 7 L 7 4 L 4 4 z M 9 4 L 9 7 L 12 7 L 12 4 L 9 4 z M 4 9 L 4 12 L 7 12 L 7 9 L 4 9 z M 9 9 L 9 12 L 12 12 L 12 9 L 9 9 z M 2 11 L 2 12 L 2 13 L 2 14 L 5 14 L 5 13 L 3 13 L 3 12 L 3 11 L 2 11 z M 13 11 L 13 12 L 13 13 L 12 13 L 11 13 L 11 14 L 12 14 L 13 14 L 14 14 L 14 12 L 14 11 L 13 11 z "
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
	d="m3 3v1 3h1v-3h3v-1h-3-1m12 0v1h3v3h1v-4h-4zm-10 2v5h5v-5h-5m7 0v5h5v-5h-5m-6 1h3v3h-3v-3m7 0h3v3h-3v-3zm-8 6v5h5v-5h-5m7 0v5h5v-5h-5m-6 1h3v3h-3v-3m7 0h3v3h-3v-3m-10 2v4h1 3v-1h-3v-3h-1m15 0v3h-3v1h4v-1-3h-1"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
