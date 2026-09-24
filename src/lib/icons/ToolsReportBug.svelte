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
     d="m2 2v12h12v-12zm1 1h10v10h-10zm1 2v2h2v-2zm6 0v2h2v-2zm-4 4v1h4v-1zm4 1v1h1v-1zm1 1v1h1v-1zm-5-1h-1v1h1zm-1 1h-1v1h1z"
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
    d="M 3 3 L 3 19 L 4 19 L 19 19 L 19 18 L 19 3 L 18 3 L 4 3 L 3 3 z M 4 4 L 18 4 L 18 18 L 4 18 L 4 4 z M 5 5 L 5 6 L 6 6 L 6 5 L 5 5 z M 6 6 L 6 8 L 8 8 L 8 6 L 6 6 z M 8 6 L 9 6 L 9 5 L 8 5 L 8 6 z M 8 8 L 8 9 L 9 9 L 9 8 L 8 8 z M 6 8 L 5 8 L 5 9 L 6 9 L 6 8 z M 13 5 L 13 6 L 14 6 L 14 5 L 13 5 z M 14 6 L 14 8 L 16 8 L 16 6 L 14 6 z M 16 6 L 17 6 L 17 5 L 16 5 L 16 6 z M 16 8 L 16 9 L 17 9 L 17 8 L 16 8 z M 14 8 L 13 8 L 13 9 L 14 9 L 14 8 z M 9 11 L 9 13 L 13 13 L 13 11 L 9 11 z M 13 13 L 13 15 L 15 15 L 15 13 L 13 13 z M 15 15 L 15 17 L 17 17 L 17 15 L 15 15 z M 9 13 L 7 13 L 7 15 L 9 15 L 9 13 z M 7 15 L 5 15 L 5 17 L 7 17 L 7 15 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
