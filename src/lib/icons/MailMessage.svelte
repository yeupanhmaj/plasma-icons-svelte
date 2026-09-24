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
        d="M 3 2 L 3 3 L 3 6 L 2 6 L 1 6 L 1 7 L 1 13 L 1 14 L 15 14 L 15 13 L 15 6 L 13 6 L 13 5.6 L 13 5.6 L 13 3 L 13 2 L 3 2 z M 4 3 L 12 3 L 12 6.6 L 11.6 7 L 11.6 7 L 8 10.6 L 4.4 7 L 4 6.6 L 4 3 z M 5 4 L 5 5 L 11 5 L 11 4 L 5 4 z M 5 6 L 5 7 L 11 7 L 11 6 L 5 6 z M 2 7 L 3 7 L 5 9 L 5.7 9.7 L 8 12 L 10.3 9.7 L 11 9 L 13 7 L 13 7 L 14 7 L 14 13 L 2 13 L 2 7 z " 
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
       d="M 3 3 L 3 4 L 3 5 L 3 6 L 1 9 L 1 10 L 1 11.4 L 1 12 L 1 18 L 1 18.4 L 1 19 L 2 19 L 8 19 L 14 19 L 20 19 L 21 19 L 21 18 L 21 12 L 21 11.4 L 21 10 L 21 9 L 19 6 L 19 3 L 4 3 L 3 3 z M 4 4 L 18 4 L 18 6 L 18 8.8 L 11 12.8 L 4 8.8 L 4 5 L 4 4 z M 5 5 L 5 6 L 5 6 L 5 6 L 17 6 L 17 6 L 17 6 L 17 5 L 5 5 z M 5 7 L 5 8 L 12 8 L 12 7 L 5 7 z M 2 10 L 2.4 10 L 3 10 L 4 10 L 11 14 L 18 10 L 18 10 L 19 10 L 20 10 L 20 10.4 L 20 11 L 20 12 L 20 18 L 14 18 L 2 18 L 2 17.4 L 2 16 L 2 12 L 2 11 L 2 10.4 L 2 10 z "
       class="ColorScheme-Text" />
		</svg>
	{/if}
