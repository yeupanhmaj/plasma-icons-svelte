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
     d="m8 2c-2.77 0-5 2.23-5 5v7h4v-7c0-.554.446-1 1-1 .554 0 1 .446 1 1v7h4v-7c0-2.77-2.23-5-5-5m0 1c2.216 0 4 1.784 4 4v6h-2v-6c0-1.108-.892-2-2-2-1.108 0-2 .892-2 2v6h-2v-6c0-2.216 1.784-4 4-4"
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
	d="m11 3c-2.769999 0-5 2.230001-5 5v6 5h1 3v-.09961-.175782-1.724608-8-1c0-.554.446-1 1-1 .554 0 1 .446 1 1v9 1 .724609.175782.09961h1 2 1v-1-9-1c0-2.77-2.230001-5-5-5m0 1c2.215999 0 4 1.784001 4 4v6 2.982422 1.017578h-1.021484-.978516v-.558594-8.441406-1c0-1.107999-.892001-2-2-2-1.107999 0-2 .892001-2 2v9 1h-2v-1.017578-2.982422-5-1c0-2.215999 1.784001-4 4-4"
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
