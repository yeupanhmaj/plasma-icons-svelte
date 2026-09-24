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
       d="M 2 2 L 2 5 L 2 14 L 3 14 L 8 14 L 8 13 L 3 13 L 3 5 L 13 5 L 13 8 L 14 8 L 14 2 L 3 2 L 2 2 z M 11 8 L 11 10 L 8 10 L 8 12 L 11 12 L 11 14 L 14 11 L 11 8 z "
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
	d="m3 3v4 12h1 5v-1h-5v-11h14v5h1v-5-4h-16m12 10v2h-2v2h2v2l4-3-4-3" 
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
