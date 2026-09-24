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
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m10 2v2h-5v3h-3v2h3v3h5v2l4-2.5-4-2.5v2h-4v-6h4v2l4-2.5z"
     class="ColorScheme-Text"/>
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
     d="M 16 3 L 16 5 L 9 5 L 8 5 L 8 10 L 3 10 L 3 12 L 8 12 L 8 17 L 9 17 L 16 17 L 16 19 L 19 16.5 L 16 14 L 16 16 L 9 16 L 9 12 L 9 10 L 9 6 L 16 6 L 16 8 L 19 5.5 L 16 3 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
