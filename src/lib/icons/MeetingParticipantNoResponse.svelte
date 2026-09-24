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
     d="M 7 2 C 5.343 2 4 3.343 4 5 C 4 6.657 5.343 8 7 8 C 8.657 8 10 6.657 10 5 C 10 3.343 8.657 2 7 2 z M 7 3 C 8.105 3 9 3.895 9 5 C 9 6.105 8.105 7 7 7 C 5.895 7 5 6.105 5 5 C 5 3.895 5.895 3 7 3 z M 7 9 C 4.239 9 2 11.01 2 13.5 C 2.001 13.667 2.0122031 13.834 2.0332031 14 L 11.962891 14 C 11.985891 13.834 11.998 13.667 12 13.5 C 12 11.015 9.761 9 7 9 z M 7 10 C 8.987 10.002 10.671078 11.279 10.955078 13 L 3.0449219 13 C 3.3289219 11.279 5.013 10.002 7 10 z "
     class="ColorScheme-Text"
     />
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
    d="M 13 2 A 1 1 0 0 0 12 3 A 1 1 0 0 0 13 4 A 1 1 0 0 0 14 3 A 1 1 0 0 0 13 2 z M 13 5 A 1 1 0 0 0 12 6 A 1 1 0 0 0 13 7 A 1 1 0 0 0 14 6 A 1 1 0 0 0 13 5 z M 13 8 A 1 1 0 0 0 12 9 A 1 1 0 0 0 13 10 A 1 1 0 0 0 14 9 A 1 1 0 0 0 13 8 z "/>
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
     d="M 10 3 C 9.446 3 9 3.446 9 4 C 9 4.554 9.446 5 10 5 C 10.554 5 11 4.554 11 4 C 11 3.446 10.554 3 10 3 z M 14 3 C 13.446 3 13 3.446 13 4 C 13 4.554 13.446 5 14 5 C 14.554 5 15 4.554 15 4 C 15 3.446 14.554 3 14 3 z M 18 3 C 17.446 3 17 3.446 17 4 C 17 4.554 17.446 5 18 5 C 18.554 5 19 4.554 19 4 C 19 3.446 18.554 3 18 3 z "
     />
		</svg>
	{/if}
