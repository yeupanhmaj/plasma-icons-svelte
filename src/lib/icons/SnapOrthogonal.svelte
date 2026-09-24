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
     d="m7 2v2h1v-2zm0 3v1h1v-1zm-1 2v3h3v-3zm-4 1v1h1v-1zm2 0v1h1v-1zm6 0v1h1v-1zm2 0v1h2v-1zm-5 3v1h1v-1zm0 2v1h1v-1z"
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
     d="M 11 3 L 11 4 L 12 4 L 12 3 L 11 3 z M 11 6 L 11 7 L 12 7 L 12 6 L 11 6 z M 9 8 L 9 13 L 14 13 L 14 8 L 9 8 z M 3 10 L 3 11 L 4 11 L 4 10 L 3 10 z M 5 10 L 5 11 L 6 11 L 6 10 L 5 10 z M 7 10 L 7 11 L 8 11 L 8 10 L 7 10 z M 15 10 L 15 11 L 16 11 L 16 10 L 15 10 z M 18 10 L 18 11 L 19 11 L 19 10 L 18 10 z M 11 14 L 11 15 L 12 15 L 12 14 L 11 14 z M 11 16 L 11 17 L 12 17 L 12 16 L 11 16 z M 11 18 L 11 19 L 12 19 L 12 18 L 11 18 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
