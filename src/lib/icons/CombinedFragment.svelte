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
     d="M 2 4 L 2 12 L 14 12 L 14 4 L 2 4 z M 3 5 L 6 5 L 6 7 L 3 7 L 3 5 z M 7 5 L 13 5 L 13 11 L 3 11 L 3 8 L 7 8 L 7 7 L 7 5 z "
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
    d="M 2 5 L 2 17 L 20 17 L 20 5 L 2 5 z M 3 6 L 7 6 A 4 4.0000086 0 0 1 3 10 L 3 6 z M 8 6 L 19 6 L 19 16 L 3 16 L 3 11 A 5 5 0 0 0 8 6 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
