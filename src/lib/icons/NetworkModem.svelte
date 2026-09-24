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
       d="M 6 3 A 3 3 0 0 0 3 6 L 4 6 A 2 2 0 0 1 6 4 A 2 2 0 0 1 8 6 L 9 6 A 3 3 0 0 0 6 3 z M 6 5 A 1 1 0 0 0 5 6 A 1 1 0 0 0 6 7 A 1 1 0 0 0 7 6 A 1 1 0 0 0 6 5 z M 2 8 L 2 13 L 14 13 L 14 8 L 2 8 z M 3 9 L 13 9 L 13 12 L 3 12 L 3 9 z M 7 10 L 7 11 L 8 11 L 8 10 L 7 10 z M 9 10 L 9 11 L 10 11 L 10 10 L 9 10 z M 11 10 L 11 11 L 12 11 L 12 10 L 11 10 z "
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
       d="M 8 4 A 5 5 0 0 0 3 9 L 4 9 A 4 4 0 0 1 8 5 A 4 4 0 0 1 12 9 L 13 9 A 5 5 0 0 0 8 4 z M 8 6 A 3 3 0 0 0 5 9 L 6 9 A 2 2 0 0 1 8 7 A 2 2 0 0 1 10 9 L 11 9 A 3 3 0 0 0 8 6 z M 8 8 A 1 1 0 0 0 7 9 A 1 1 0 0 0 8 10 A 1 1 0 0 0 9 9 A 1 1 0 0 0 8 8 z M 3 11 L 3 18 L 19 18 L 19 11 L 3 11 z M 4 12 L 18 12 L 18 17 L 4 17 L 4 12 z M 12 15 L 12 16 L 13 16 L 13 15 L 12 15 z M 14 15 L 14 16 L 15 16 L 15 15 L 14 15 z M 16 15 L 16 16 L 17 16 L 17 15 L 16 15 z "
       id="rect3343" 
       class="ColorScheme-Text"/>
		</svg>
	{/if}
