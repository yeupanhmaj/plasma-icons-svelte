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
     d="M 5 2 L 3 5 L 4 5 L 4 7 L 6 4 L 5 4 L 5 2 z M 10 2 L 10 3 L 8 3 L 8 13 L 10 13 L 10 14 L 13 14 L 13 11 L 10 11 L 10 12 L 9 12 L 9 4 L 10 4 L 10 5 L 13 5 L 13 2 L 10 2 z "
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
    d="M 7 3 L 3 10 L 5 10 L 5 15 L 9 8 L 7 8 L 7 3 z M 14 3 L 14 5 L 11 5 L 11 6 L 11 17 L 12 17 L 14 17 L 14 19 L 19 19 L 19 14 L 14 14 L 14 16 L 12 16 L 12 6 L 14 6 L 14 8 L 19 8 L 19 3 L 14 3 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
