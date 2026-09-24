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
     d="M 1 4 L 1 12 L 5 12 L 5 4 L 1 4 z M 11 4 L 11 12 L 15 12 L 15 4 L 11 4 z M 2 5 L 4 5 L 4 11 L 2 11 L 2 5 z M 12 5 L 14 5 L 14 11 L 12 11 L 12 5 z M 6 6 L 6 10 L 7 10 L 7 9 L 9 9 L 9 10 L 10 10 L 10 6 L 9 6 L 9 7 L 7 7 L 7 6 L 6 6 z "
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
     d="m3 7v8h5v-8h-5m11 0v8h5v-8h-5m-10 1h3v6h-3v-6m11 0h3v6h-3v-6m-6 1v4h1v-1h2v1h1v-4h-1v1h-2v-1h-1"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
