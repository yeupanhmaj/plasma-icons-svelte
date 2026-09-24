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
       style="fill:currentColor"
       class="ColorScheme-Text"
       d="M 7 2 L 7 5 L 8 5 L 8 2 L 7 2 z M 5 3 L 5 5 L 6 5 L 6 3 L 5 3 z M 9 3 L 9 5 L 10 5 L 10 3 L 9 3 z M 3 4 L 3 5 L 4 5 L 4 4 L 3 4 z M 12 6 L 2 6 L 2 10 C 2 11.813 3.01 13 5 13 L 3 13 L 3 14 L 11 14 L 11 13 L 9 13 C 10.572 13 11.507 12.273 12 11 L 13 11 C 14 11 14 11 14 9.90625 L 14 8.8125 C 14 6.9945 14 7 13 7 L 12 7 L 12 6 z M 3 7 L 11 7 L 11 10 C 11 11.511 9.662 12 8 12 L 6 12 C 4.338 12 3 11.511 3 10 L 3 7 z M 12 8 L 13 8 L 13 10 L 12 10 L 12 8 z "
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
       style="fill:currentColor"
       class="ColorScheme-Text"
       d="M 8 3 L 8 7 L 9 7 L 9 3 L 8 3 z M 10 4 L 10 7 L 11 7 L 11 4 L 10 4 z M 6 5 L 6 7 L 7 7 L 7 5 L 6 5 z M 12 5 L 12 7 L 13 7 L 13 5 L 12 5 z M 4 6 L 4 7 L 5 7 L 5 6 L 4 6 z M 14 6 L 14 7 L 15 7 L 15 6 L 14 6 z M 3 8 L 3 9 L 3 14 A 4 4 0 0 0 3 14 A 4 4 0 0 0 7 18 L 4 18 L 4 19 L 15 19 L 15 18 L 12 18 A 4 4 0 0 0 16 14 A 4 4 0 0 0 16 14 L 18 14 C 18.5 14 19 13.5 19 13 L 19 10 C 19 9.5 18.5 9 18 9 L 16 9 L 16 8 L 3 8 z M 4 9 L 15 9 L 15 10 L 15 13 L 15 14 A 3 3 0 0 1 12 17 L 7 17 A 3 3 0 0 1 4 14 L 4 9 z M 16 10 L 18 10 L 18 13 L 16 13 L 16 10 z "
       />
		</svg>
	{/if}
