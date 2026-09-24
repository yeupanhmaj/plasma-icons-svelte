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
        d="M 3 2 L 3 14 L 13 14 L 13 2 L 3 2 z M 4 3 L 12 3 L 12 13 L 4 13 L 4 3 z M 5 4 L 5 7 L 11 7 L 11 4 L 5 4 z M 8 8 A 2 2 0 0 0 6 10 A 2 2 0 0 0 8 12 A 2 2 0 0 0 10 10 A 2 2 0 0 0 8 8 z M 8 9 A 1 1 0 0 1 9 10 A 1 1 0 0 1 8 11 A 1 1 0 0 1 7 10 A 1 1 0 0 1 8 9 z " 
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
       style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 5 3 L 5 19 L 17 19 L 17 3 L 5 3 z M 6 4 L 16 4 L 16 18 L 6 18 L 6 4 z M 7 5 L 7 10 L 15 10 L 15 5 L 7 5 z M 11 11 A 3 3 0 0 0 8 14 A 3 3 0 0 0 11 17 A 3 3 0 0 0 14 14 A 3 3 0 0 0 11 11 z M 11 12 A 2 2 0 0 1 13 14 A 2 2 0 0 1 11 16 A 2 2 0 0 1 9 14 A 2 2 0 0 1 11 12 z M 11 13 A 1 1 0 0 0 10 14 A 1 1 0 0 0 11 15 A 1 1 0 0 0 12 14 A 1 1 0 0 0 11 13 z "
       class="ColorScheme-Text"/>
		</svg>
	{/if}
