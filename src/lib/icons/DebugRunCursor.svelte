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
       d="M 9 2 L 9 3 L 11 3 L 11 13 L 9 13 L 9 14 L 14 14 L 14 13 L 12 13 L 12 3 L 14 3 L 14 2 L 9 2 z M 5 5 L 5 7 L 2 7 L 2 9 L 5 9 L 5 11 L 8 8 L 5 5 z "
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
	d="m14 3v1h2v14h-2v1h5v-1h-2v-14h2v-1h-5m-9 5v2h-2v2h2v2l4-3-4-3" 
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
