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
     d="M 4 2 A 1.9999999 2.0000002 0 0 0 2 4 A 1.9999999 2.0000002 0 0 0 4 6 L 4 7 L 3 7 L 2 7 L 2 12 L 2 13 L 4 13 L 4 14 L 14 14 L 14 11 L 4 11 L 4 12 L 3 12 L 3 8 L 4 8 L 4 10 L 14 10 L 14 4 L 6 4 A 1.9999999 2.0000002 0 0 0 4 2 z M 4 3 A 0.99999988 1 0 0 1 5 4 A 0.9999999 1 0 0 1 4 5 A 0.99999988 1 0 0 1 3 4 A 0.99999988 1 0 0 1 4 3 z M 5 5 L 13 5 L 13 9 L 5 9 L 5 5 z "
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
	 d="m5 3c-1.108 0-2 .892-2 2 0 1.108.892 2 2 2v3h-2v1 6 1h2v1h14v-3h-14v1h-1v-6h1v2 .652344.347656h14v-.347656-.652344-8h-12c0-1.108-.892-2-2-2m0 1c.554 0 1 .446 1 1 0 .554-.446 1-1 1-.554 0-1-.446-1-1 0-.554.446-1 1-1m1 2h12v7h-12v-7"
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
