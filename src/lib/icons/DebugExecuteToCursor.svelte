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
       d="M 9 2 L 9 3 L 11 3 L 11 13 L 9 13 L 9 14 L 14 14 L 14 13 L 12 13 L 12 3 L 14 3 L 14 2 L 9 2 z M 2 5 L 2 11 L 3 11 L 3 9 L 6 9 L 6 11 L 9 8 L 6 5 L 6 7 L 3 7 L 3 5 L 2 5 z "
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
	 d="m14 3v1h2v14h-2v1h5v-1h-2v-14h2v-1h-5m-11 4v3 2 3h1v-3h4v2l4-3-4-3v2h-4v-3h-1"
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
