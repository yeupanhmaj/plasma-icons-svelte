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
       d="M 2 2 L 2 3 L 4 3 L 4 13 L 2 13 L 2 14 L 7 14 L 7 13 L 5 13 L 5 3 L 7 3 L 7 2 L 2 2 z M 7 5 L 7 11 L 8 11 L 8 9 L 11 9 L 11 11 L 14 8 L 11 5 L 11 7 L 8 7 L 8 5 L 7 5 z "
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
	d="m3 3v1h2v14h-2v1h5v-1h-2v-14h2v-1h-5m7 4v3 2 3h1v-3h4v2l4-3-4-3v2h-4v-3h-1"
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
