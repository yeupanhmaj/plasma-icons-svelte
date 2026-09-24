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
     d="M 4 2 L 2 5 L 3 5 L 3 7 L 5 4 L 4 4 L 4 2 z M 9 9 L 9 14 L 14 14 L 14 9 L 9 9 z M 2 10 L 2 11 L 6 11 L 6 10 L 2 10 z M 4 12 L 4 13 L 7 13 L 7 12 L 4 12 z "
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
    d="M 7 3 L 3 10 L 5 10 L 5 15 L 9 8 L 7 8 L 7 3 z M 11 11 L 11 19 L 19 19 L 19 11 L 11 11 z M 4 16 L 4 17 L 7 17 L 7 16 L 4 16 z M 6 18 L 6 19 L 10 19 L 10 18 L 6 18 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
