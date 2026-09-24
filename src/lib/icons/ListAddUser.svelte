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
     d="M8 2A3 3 0 0 0 5 5 3 3 0 0 0 8 8 3 3 0 0 0 11 5 3 3 0 0 0 8 2M8 3A2 2 0 0 1 10 5 2 2 0 0 1 8 7 2 2 0 0 1 6 5 2 2 0 0 1 8 3M8 9A5 4.5 0 0 0 3 13.5 5 4.5 0 0 0 3.033203 14H8V13H4.045A4 3.5 0 0 1 8 10zM11 9V11H9V12H11V14H12V12H14V11H12V9z"
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
    d="M 11 3 C 9.338 3 8 4.338 8 6 C 8 7.662 9.338 9 11 9 C 12.662 9 14 7.662 14 6 C 14 4.338 12.662 3 11 3 z M 11 11 C 8.23 11 6 11.89198 6 13 L 6 18 L 6 19 L 7.2011719 19 L 13 19 L 13 18 L 7 18 L 7 13.427734 C 7 12.636304 8.784 12 11 12 C 12.795116 12 14.289377 12.420682 14.798828 13 L 16 13 C 16 11.89198 13.77 11 11 11 z M 16 14 L 16 16 L 14 16 L 14 17 L 16 17 L 16 19 L 17 19 L 17 17 L 19 17 L 19 16 L 17 16 L 17 14 L 16 14 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
