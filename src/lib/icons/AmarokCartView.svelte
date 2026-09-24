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
     d="M 8 2 A 3 3 0 0 0 5 5 L 2 5 L 2 6 L 2 13 L 2 14 L 14 14 L 14 13 L 14 6 L 14 5 L 11 5 A 3 3 0 0 0 8 2 z M 8 3 A 2 2 0 0 1 10 5 L 6 5 A 2 2 0 0 1 8 3 z M 3 6 L 5 6 L 5 7.0878906 A 1.5 1.5 0 0 0 4 8.5 A 1.5 1.5 0 0 0 5.5 10 A 1.5 1.5 0 0 0 7 8.5 A 1.5 1.5 0 0 0 6 7.0878906 L 6 6 L 10 6 L 10 7.0878906 A 1.5 1.5 0 0 0 9 8.5 A 1.5 1.5 0 0 0 10.5 10 A 1.5 1.5 0 0 0 12 8.5 A 1.5 1.5 0 0 0 11 7.0878906 L 11 6 L 13 6 L 13 13 L 3 13 L 3 6 z M 5.5 8 A 0.5 0.5 0 0 1 6 8.5 A 0.5 0.5 0 0 1 5.5 9 A 0.5 0.5 0 0 1 5 8.5 A 0.5 0.5 0 0 1 5.5 8 z M 10.5 8 A 0.5 0.5 0 0 1 11 8.5 A 0.5 0.5 0 0 1 10.5 9 A 0.5 0.5 0 0 1 10 8.5 A 0.5 0.5 0 0 1 10.5 8 z "
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
	d="M 11 3 A 3 3 0 0 0 8 6 L 5 6 L 5 7 L 5 18 L 5 19 L 17 19 L 17 18 L 17 7 L 17 6 L 14 6 A 3 3 0 0 0 11 3 z M 11 4 A 2 2 0 0 1 13 6 L 9 6 A 2 2 0 0 1 11 4 z M 6 7 L 8 7 L 8 8.0878906 A 1.5 1.5 0 0 0 7 9.5 A 1.5 1.5 0 0 0 8.5 11 A 1.5 1.5 0 0 0 10 9.5 A 1.5 1.5 0 0 0 9 8.0878906 L 9 7 L 13 7 L 13 8.0878906 A 1.5 1.5 0 0 0 12 9.5 A 1.5 1.5 0 0 0 13.5 11 A 1.5 1.5 0 0 0 15 9.5 A 1.5 1.5 0 0 0 14 8.0878906 L 14 7 L 16 7 L 16 18 L 6 18 L 6 7 z M 8.5 9 A 0.5 0.5 0 0 1 9 9.5 A 0.5 0.5 0 0 1 8.5 10 A 0.5 0.5 0 0 1 8 9.5 A 0.5 0.5 0 0 1 8.5 9 z M 13.5 9 A 0.5 0.5 0 0 1 14 9.5 A 0.5 0.5 0 0 1 13.5 10 A 0.5 0.5 0 0 1 13 9.5 A 0.5 0.5 0 0 1 13.5 9 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
