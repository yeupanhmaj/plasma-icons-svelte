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
     d="M5.5 4A2.5 2.5 0 0 0 3 6.5 2.5 2.5 0 0 0 5.5 9 2.5 2.5 0 0 0 8 6.5 2.5 2.5 0 0 0 5.5 4M5.5 10A3.499998 4 0 0 0 2 14H9A3.499998 4 0 0 0 5.5 10M5.5 11A2.5 3 0 0 1 7.853516 13H3.146A2.5 3 0 0 1 5.5 11"
       class="ColorScheme-Text"/>
 <path d="M11.5 2A2.5 2.5 0 0 0 9 4.5 2.5 2.5 0 0 0 11.5 7 2.5 2.5 0 0 0 14 4.5 2.5 2.5 0 0 0 11.5 2M11.646484 8A3.499998 4 0 0 0 8.492188 10.273438 4.5 5 0 0 1 9.617188 12H15.15A3.499998 4 0 0 0 11.646484 8M11.646484 9A2.5 3 0 0 1 14 11H9.293A2.5 3 0 0 1 11.646484 9"  style="fill:currentColor;fill-opacity:1;stroke:none" 
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
     d="M 8 6 C 6.3380003 6 5 7.3380003 5 9 C 5 10.662 6.3380003 12 8 12 C 9.6619997 12 11 10.662 11 9 C 11 7.3380003 9.6619997 6 8 6 z M 8 13 C 5.2299834 13 3 15.229983 3 18 L 3 19 L 13 19 L 13 18 C 13 15.229983 10.770017 13 8 13 z M 8 14 C 10.216017 14 12 15.783983 12 18 L 4 18 C 4 15.783983 5.7839834 14 8 14 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#da4453;fill-opacity:1;stroke:none" 
     d="M 14 3 C 12.338 3 11 4.338 11 6 C 11 7.662 12.338 9 14 9 C 15.662 9 17 7.662 17 6 C 17 4.338 15.662 3 14 3 z M 14 10 C 13.353654 10 12.744006 10.134157 12.181641 10.361328 L 12.636719 11.275391 C 13.064535 11.114885 13.514485 11 14 11 C 16.21602 11 18 12.78398 18 15 L 14.5 15 L 15 16 L 19 16 L 19 15 C 19 12.22998 16.77002 10 14 10 z "
     />
		</svg>
	{/if}
