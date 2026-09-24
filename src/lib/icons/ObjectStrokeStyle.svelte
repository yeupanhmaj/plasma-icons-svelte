<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 16,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 16
	);
</script>

	{#if numericSize <= 14}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 12 12"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m1 1v2h10v-2zm0 3v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 3v1h10v-1zm0 2v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm3 0v1h1v-1zm2 0v1h1v-1z"
     class="ColorScheme-Text"
       />
		</svg>
	{:else}
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
     d="M 2 2 L 2 4 L 13 4 L 13 2 L 2 2 z M 2 6 L 2 8 L 4 8 L 4 6 L 2 6 z M 5 6 L 5 8 L 7 8 L 7 6 L 5 6 z M 8 6 L 8 8 L 10 8 L 10 6 L 8 6 z M 11 6 L 11 8 L 13 8 L 13 6 L 11 6 z M 2 10 L 2 11 L 13 11 L 13 10 L 2 10 z M 2 13 L 2 14 L 3 14 L 3 13 L 2 13 z M 4 13 L 4 14 L 5 14 L 5 13 L 4 13 z M 6 13 L 6 14 L 7 14 L 7 13 L 6 13 z M 8 13 L 8 14 L 9 14 L 9 13 L 8 13 z M 10 13 L 10 14 L 11 14 L 11 13 L 10 13 z M 12 13 L 12 14 L 13 14 L 13 13 L 12 13 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
