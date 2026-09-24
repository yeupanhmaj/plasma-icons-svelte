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
     d="M 3 2 L 3 7 L 4 7 L 4 9 L 2 9 L 2 14 L 7 14 L 7 9 L 5 9 L 5 7 L 10 7 L 10 5 L 11 5 L 11 10 L 9 10 L 9 14 L 14 14 L 14 10 L 12 10 L 12 5 L 12 4 L 10 4 L 10 2 L 3 2 z M 4 3 L 9 3 L 9 6 L 4 6 L 4 3 z M 3 10 L 6 10 L 6 13 L 3 13 L 3 10 z "
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
	 d="m4 3v6h2v4h-3v6h6v-6h-2v-4h5v-2h4v7h-2v5h5v-5h-2v-7-1h-5v-3h-8m1 1h6v4h-6v-4m-1 10h4v4h-4v-4"
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
