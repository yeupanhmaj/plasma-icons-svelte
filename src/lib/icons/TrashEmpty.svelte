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
     d="m5 2v2h1v-1h4v1h1v-2h-5zm-3 3v1h2v8h8v-8h2v-1zm3 1h6v7h-6z"
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
    d="M 8 3 L 8 4 L 8 5 L 9 5 L 9 4 L 13 4 L 13 5 L 14 5 L 14 4 L 14 3 L 8 3 z M 4 6 L 4 7 L 18 7 L 18 6 L 4 6 z M 6 8 L 6 19 L 7 19 L 16 19 L 16 18 L 16 8 L 15 8 L 15 18 L 7 18 L 7 8 L 6 8 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
