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
     d="M 5 2 L 2 4 L 5 6 L 5 2 z M 7 2 L 7 6 L 10 4 L 7 2 z M 2 5 L 2 7 L 2 13 L 2 14 L 3 14 L 3 13 L 7 13 L 7 7 L 3 7 L 3 5 L 2 5 z M 9 5 L 9 7 L 9 13 L 9 14 L 10 14 L 10 13 L 14 13 L 14 7 L 10 7 L 10 5 L 9 5 z M 3 8 L 6 8 L 6 12 L 3 12 L 3 8 z M 10 8 L 13 8 L 13 12 L 10 12 L 10 8 z "
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
	d="m7 3l-3 2 3 2v-4m2 0v4l3-2-3-2m-6 3v3 6 4h1v-4h6v-7h-6v-2h-1m9 0v3 8 2h1v-2h6v-9h-6v-2h-1m-8 3h5v5h-5v-5m9 0h5v7h-5v-7"
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
