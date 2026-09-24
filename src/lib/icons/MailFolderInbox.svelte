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
			<path style="fill:currentColor"
          d="M 3.9 6 L 1 11 L 1 11 L 1 13 L 1 14 L 4 14 L 15 14 L 15 13 L 15 13 L 15 11 L 15 11 L 12.1 6 L 12 6 L 5 6 L 3.9 6 z M 4.5 7 L 11.5 7 L 13.8 11 L 12 11 L 11 12 L 5 12 L 4 11 L 2.1 11 L 4.5 7 z " 
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
       style="fill:currentColor"
       d="M 6 8 L 2 14.8 L 2 16.3 L 2 19 L 6 19 L 16 19 L 20 19 L 20 16.3 L 20 14.8 L 16 8 L 16 8 L 13 8 L 9 8 L 7.1 8 L 6 8 z M 6.5 9 L 9 9 L 13 9 L 15.5 9 L 18.9 15 L 16 15 L 15 17 L 7 17 L 6 15 L 3 15 L 6.5 9 z "
       class="ColorScheme-Text" />
		</svg>
	{/if}
