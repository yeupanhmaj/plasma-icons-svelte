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
     d="M8 4A6 4 0 0 0 2 8 6 4 0 0 0 8 12 6 4 0 0 0 14 8 6 4 0 0 0 8 4M8 5A5 3 0 0 1 13 8 5 3 0 0 1 8 11 5 3 0 0 1 3 8 5 3 0 0 1 8 5"
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
    d="M 11 5 A 9 6 0 0 0 2 11 A 9 6 0 0 0 11 17 A 9 6 0 0 0 20 11 A 9 6 0 0 0 11 5 z M 11 6 A 8 5 0 0 1 19 11 A 8 5 0 0 1 11 16 A 8 5 0 0 1 3 11 A 8 5 0 0 1 11 6 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
