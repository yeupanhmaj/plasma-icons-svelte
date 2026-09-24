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
     d="M 8 2 C 6.343 2 5 3.343 5 5 L 2 5 L 2 14 L 8 14 L 8 13 L 3 13 L 3 6 L 5 6 L 5 7.0878906 C 4.401 7.2998906 4.001 7.865 4 8.5 C 4 9.328 4.672 10 5.5 10 C 6.328 10 7 9.328 7 8.5 C 6.999 7.865 6.599 7.2998906 6 7.0878906 L 6 6 L 10 6 L 10 8 L 11 8 L 11 6 L 13 6 L 13 8 L 14 8 L 14 5 L 11 5 C 11 3.343 9.657 2 8 2 z M 8 3 C 9.105 3 10 3.895 10 5 L 6 5 C 6 3.895 6.895 3 8 3 z M 5.5 8 C 5.776 8 6 8.224 6 8.5 C 6 8.776 5.776 9 5.5 9 C 5.224 9 5 8.776 5 8.5 C 5 8.224 5.224 8 5.5 8 z "
     class="ColorScheme-Text"/>
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 9,9.83 10.667,11.497 9,13.164 9.833,13.997 11.5,12.33 13.167,13.997 14,13.164 12.333,11.497 14,9.83 13.167,8.997 11.5,10.664 9.833,8.997 Z" 
     class="ColorScheme-NegativeText"
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
     d="M 11 3 A 3 3 0 0 0 8 6 L 5 6 L 5 7 L 5 18 L 5 19 L 13 19 L 13 18 L 6 18 L 6 7 L 8 7 L 8 8.0878906 A 1.5 1.5 0 0 0 7 9.5 A 1.5 1.5 0 0 0 8.5 11 A 1.5 1.5 0 0 0 10 9.5 A 1.5 1.5 0 0 0 9 8.0878906 L 9 7 L 13 7 L 13 8.0878906 A 1.5 1.5 0 0 0 12 9.5 A 1.5 1.5 0 0 0 13.5 11 A 1.5 1.5 0 0 0 15 9.5 A 1.5 1.5 0 0 0 14 8.0878906 L 14 7 L 16 7 L 16 13 L 17 13 L 17 7 L 17 6 L 14 6 A 3 3 0 0 0 11 3 z M 11 4 A 2 2 0 0 1 13 6 L 9 6 A 2 2 0 0 1 11 4 z M 8.5 9 A 0.5 0.5 0 0 1 9 9.5 A 0.5 0.5 0 0 1 8.5 10 A 0.5 0.5 0 0 1 8 9.5 A 0.5 0.5 0 0 1 8.5 9 z M 13.5 9 A 0.5 0.5 0 0 1 14 9.5 A 0.5 0.5 0 0 1 13.5 10 A 0.5 0.5 0 0 1 13 9.5 A 0.5 0.5 0 0 1 13.5 9 z "
     class="ColorScheme-Text"
     />
    <path
     style="fill:#da4453;fill-opacity:1;stroke:none"
     d="M 14.833984 14 L 14 14.833984 L 15.666016 16.5 L 14 18.166016 L 14.833984 19 L 16.5 17.333984 L 18.166016 19 L 19 18.166016 L 17.333984 16.5 L 19 14.833984 L 18.166016 14 L 16.5 15.666016 L 14.833984 14 z "
     />
		</svg>
	{/if}
