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
     d="M 4 1 L 4 5 L 12 5 L 12 1 L 4 1 z M 5 2 L 11 2 L 11 4 L 5 4 L 5 2 z M 6 6 L 6 7 L 7 7 L 7 9 L 6 9 L 6 10 L 10 10 L 10 9 L 9 9 L 9 7 L 10 7 L 10 6 L 6 6 z M 4 11 L 4 15 L 12 15 L 12 11 L 4 11 z M 5 12 L 11 12 L 11 14 L 5 14 L 5 12 z "
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
    d="m393.85714 543.07647h-8v5h8v-5m0 11h-8v5h8v-5m-1-10v3h-6v-3h6m0 11v3h-6v-3h6m-1-6h-4v1h1v2h-1v1h4v-1h-1v-2h1v-1" transform="translate(-378.85714-540.07647)" 
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
