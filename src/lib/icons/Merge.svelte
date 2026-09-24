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
     d="m2 2v4h6v4h-6v4h7v-4h6v-4h-6v-4zm1 1h5v2h-5zm6 4h5v2h-5zm-6 4h5v2h-5z"
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
     d="M 3 3 L 3 7 L 9 7 L 10 7 L 11 7 L 11 15 L 10 15 L 9 15 L 3 15 L 3 19 L 12 19 L 12 15 L 12 13 L 19 13 L 19 9 L 12 9 L 12 7 L 12 3 L 3 3 z M 4 4 L 11 4 L 11 6 L 4 6 L 4 4 z M 7.5 8 C 7.223 8 7 8.223 7 8.5 C 7 8.777 7.223 9 7.5 9 C 7.777 9 8 8.777 8 8.5 C 8 8.223 7.777 8 7.5 8 z M 12 10 L 13 10 L 14 10 L 18 10 L 18 12 L 14 12 L 13 12 L 12 12 L 12 10 z M 7.5 13 C 7.223 13 7 13.223 7 13.5 C 7 13.777 7.223 14 7.5 14 C 7.777 14 8 13.777 8 13.5 C 8 13.223 7.777 13 7.5 13 z M 4 16 L 11 16 L 11 18 L 4 18 L 4 16 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
