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
     d="M 3 2 L 3 4 L 3 5 L 3 6 L 2 6 L 2 7 L 3 7 L 9 7 L 10 7 L 10 6 L 9 6 L 9 5 L 9 4 L 9 2 L 3 2 z M 4 3 L 8 3 L 8 6 L 4 6 L 4 3 z M 12 7 L 10 10 L 14 10 L 12 7 z M 3 9 L 3 13 L 2 13 L 2 14 L 10 14 L 10 13 L 9 13 L 9 9 L 4 9 L 3 9 z M 4 10 L 8 10 L 8 13 L 4 13 L 4 10 z M 10 11 L 12 14 L 14 11 L 10 11 z "
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
    d="m397.85714 553.07647l-2-3-2 3h4m0 2h-4l2 3 2-3m-3-6h-2v-6h-9v6h-2v1h3 8 2v-1m0 9h-2v-6h-7v6h-4v1h5 6 2v-1m-3-14v5h-7v-5h7m0 9v5h-5v-5h5" transform="translate(-378.85714-540.07647)"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
