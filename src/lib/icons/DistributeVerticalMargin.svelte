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
     d="M 1 1 L 1 15 L 15 15 L 15 1 L 1 1 z M 2 2 L 14 2 L 14 14 L 2 14 L 2 2 z M 4 3 L 4 7 L 12 7 L 12 3 L 4 3 z M 5 4 L 11 4 L 11 6 L 5 6 L 5 4 z M 4 9 L 4 13 L 12 13 L 12 9 L 4 9 z M 5 10 L 11 10 L 11 12 L 5 12 L 5 10 z "
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
    d="m397.85714 543.07647h-1-15v1 14 1h1 14 1v-16m-1 1v14h-14v-14h14m-3 1h-8v5h8v-5m0 7h-8v5h8v-5m-1-6v3h-6v-3h6m0 7v3h-6v-3h6" transform="translate(-378.85714-540.07647)"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
