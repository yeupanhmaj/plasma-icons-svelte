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
     d="M 4 2 L 4 14 L 5 14 L 5 8 L 9 8 A 3.000015 3.000015 0 0 0 12 5 A 3.000015 3.000015 0 0 0 9 2 L 5 2 L 4 2 z M 5 3 L 9 3 A 2 2 0 0 1 11 5 A 2 2 0 0 1 9 7 L 5 7 L 5 3 z "
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
    d="M 6 3 L 6 4 L 6 10 L 6 11 L 6 19 L 7 19 L 7 11 L 13 11 A 4 4 0 0 0 17 7 A 4 4 0 0 0 13 3 L 7 3 L 6 3 z M 7 4 L 13 4 A 3 3 0 0 1 16 7 A 3 3 0 0 1 13 10 L 7 10 L 7 4 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
