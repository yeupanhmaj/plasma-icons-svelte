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
       d="M 2 2 L 2 14 L 8 14 L 8 13 L 3 13 L 3 5 L 13 5 L 13 8 L 14 8 L 14 2 L 12 2 L 12 4 L 10 4 L 10 2 L 6 2 L 6 4 L 4 4 L 4 2 L 2 2 z M 4 6 L 4 9 L 5 9 L 5 8 L 9 8 L 9 9 L 10 9 L 10 6 L 9 6 L 9 7 L 5 7 L 5 6 L 4 6 z M 11 9 L 11 11 L 9 11 L 9 12 L 11 12 L 11 14 L 12 14 L 12 12 L 14 12 L 14 11 L 12 11 L 12 9 L 11 9 z "
       id="rect4449" 
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
    d="M 3 3 L 3 19 L 14 19 L 14 18 L 4 18 L 4 7 L 18 7 L 18 14 L 19 14 L 19 3 L 17 3 L 17 6 L 15 6 L 15 3 L 7 3 L 7 6 L 5 6 L 5 3 L 3 3 z M 5 8 L 5 11 L 6 11 L 6 10 L 10 10 L 10 11 L 11 11 L 11 8 L 10 8 L 10 9 L 6 9 L 6 8 L 5 8 z M 8 12 L 8 15 L 9 15 L 9 14 L 13 14 L 13 15 L 14 15 L 14 12 L 13 12 L 13 13 L 9 13 L 9 12 L 8 12 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
