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
     d="m2 2v12h4v-8h8v-4h-11zm1 1h10v2h-8v8h-2v-4zm5 5v6h4v-2h2v-4h-4zm1 1h4v2h-2v2h-2z"
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
	d="m5 3v1 6 9h1 3v-1-8-3h4 3 1v-1-2-1h-1-10-1m1 1h10v2h-3-4-1v1 3 8h-2v-8-6m5 5v1 9h1 3v-1-5h1 1v-1-2-1h-1-1-2-2m1 1h3 1v2h-1-1v1 5h-2v-8"
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
