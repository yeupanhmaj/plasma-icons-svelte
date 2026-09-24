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
     d="M 2 2 L 2 8 L 14 8 L 14 2 L 2 2 z M 3 3 L 13 3 L 13 7 L 3 7 L 3 3 z M 2 9 L 2 12 L 4 12 L 4 9 L 2 9 z M 6 9 L 6 14 L 8 14 L 8 9 L 6 9 z M 10 9 L 10 11 L 14 11 L 14 9 L 10 9 z "
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
	 d="m3 3v1 6h1 15v-1-6h-1-14-1m1 1h14v5h-14v-5m-1 8v5h2v-5h-2m4 0v7h2v-7h-2m4 0v3h2v-3h-2m4 0v3h4v-3h-4"
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
