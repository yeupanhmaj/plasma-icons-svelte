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
     d="M 9 2 L 6 4 L 9 6 L 9 2 z M 10 2 L 10 6 L 13 4 L 10 2 z M 5 5 L 5 6 L 5 7 L 4 7 L 3 7 L 1 7 L 1 13 L 3 13 L 4 13 L 5 13 L 5 14 L 6 14 L 6 13 L 6 7 L 6 6 L 6 5 L 5 5 z M 13 5 L 13 7 L 9 7 L 9 12 L 9 13 L 13 13 L 13 14 L 14 14 L 14 5 L 13 5 z M 2 8 L 5 8 L 5 12 L 2 12 L 2 8 z M 10 8 L 13 8 L 13 12 L 10 12 L 10 8 z "
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
    d="m13 3l-3 2 3 2v-4m2 0v4l3-2-3-2m-6 3v2h-6v9h6v2h1v-3-8-2h-1m9 0v2h-6v7h6v4h1v-5-6-2h-1m-14 3h5v7h-5v-7m9 0h5v5h-5v-5"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
