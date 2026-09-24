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
     d="M 2 2 L 2 5 L 3 5 L 3 3 L 5 3 L 5 2 L 2 2 z M 6 2 L 6 3 L 10 3 L 10 2 L 6 2 z M 11 2 L 11 3 L 13 3 L 13 5 L 14 5 L 14 2 L 11 2 z M 6 5 A 1 1 0 0 0 5 6 A 1 1 0 0 0 6 7 A 1 1 0 0 0 7 6 A 1 1 0 0 0 6 5 z M 10 5 A 1 1 0 0 0 9 6 A 1 1 0 0 0 10 7 A 1 1 0 0 0 11 6 A 1 1 0 0 0 10 5 z M 2 6 L 2 10 L 3 10 L 3 6 L 2 6 z M 13 6 L 13 10 L 14 10 L 14 6 L 13 6 z M 4 9 A 4 3 0 0 0 8 12 A 4 3 0 0 0 12 9 L 11 9 A 3 2 0 0 1 8 11 A 3 2 0 0 1 5 9 L 4 9 z M 2 11 L 2 14 L 5 14 L 5 13 L 3 13 L 3 11 L 2 11 z M 13 11 L 13 13 L 11 13 L 11 14 L 14 14 L 14 11 L 13 11 z M 6 13 L 6 14 L 10 14 L 10 13 L 6 13 z "
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
	d="m3 3v1 15h1 15v-1-15h-16m1 1h14v14h-14v-14m1 1v1 2h1v-2h2v-1h-3m9 0v1h2v2h1v-2-1h-3m-6 2c-.554 0-1 .446-1 1 0 .554.446 1 1 1 .554 0 1-.446 1-1 0-.554-.446-1-1-1m6 0c-.554 0-1 .446-1 1 0 .554.446 1 1 1 .554 0 1-.446 1-1 0-.554-.446-1-1-1m-6.871094 4.966797l-.964844.242187c.54051 2.178456 2.485695 3.791016 4.835938 3.791016 2.350243 0 4.295426-1.61256 4.835938-3.791016l-.964844-.242187c-.431884 1.743522-1.990365 3.033203-3.871094 3.033203-1.880729 0-3.43921-1.289681-3.871094-3.033203m-2.128906 2.033203v2 1h3v-1h-2v-2h-1m11 0v2h-2v1h3v-1-2h-1"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
