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
     d="M 3 2 L 3 6 L 6 4 L 3 2 z M 13 2 L 10 4 L 13 6 L 13 2 z M 6 5 L 6 6 L 6 7 L 5 7 L 4 7 L 2 7 L 2 13 L 4 13 L 5 13 L 6 13 L 6 14 L 7 14 L 7 13 L 7 7 L 7 6 L 7 5 L 6 5 z M 9 5 L 9 6 L 9 7 L 9 13 L 9 14 L 10 14 L 10 13 L 11 13 L 12 13 L 14 13 L 14 7 L 12 7 L 11 7 L 10 7 L 10 6 L 10 5 L 9 5 z M 3 8 L 6 8 L 6 12 L 3 12 L 3 8 z M 10 8 L 13 8 L 13 12 L 10 12 L 10 8 z "
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
	d="m6 3v4l3-2-3-2m10 0l-3 2 3 2v-4m-7 3v2h-6v7h6v4h1v-5-6-2h-1m3 0v3 8 2h1v-2h6v-9h-6v-2h-1m-8 3h5v5h-5v-5m9 0h5v7h-5v-7"
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
