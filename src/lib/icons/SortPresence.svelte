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
     d="M 6 2 L 6 3 L 14 3 L 14 2 L 6 2 z M 6 4 L 6 5 L 12 5 L 12 4 L 6 4 z M 6 8 L 6 9 L 14 9 L 14 8 L 6 8 z M 6 10 L 6 11 L 11 11 L 11 10 L 6 10 z "
     class="ColorScheme-Text"/>
  <path
      style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-PositiveText"
    d="M 3.5,2 C 2.672,2 2,2.672 2,3.5 2,4.328 2.672,5 3.5,5 4.328,5 5,4.328 5,3.5 5,2.672 4.328,2 3.5,2" />
  <path
      style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
    d="M 3.5 8 C 2.672 8 2 8.672 2 9.5 C 2 10.328 2.672 11 3.5 11 C 4.328 11 5 10.328 5 9.5 C 5 8.672 4.328 8 3.5 8 z M 12 13 L 12 14 L 14 14 L 14 13 L 12 13 z "
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
     d="M 7 3 L 7 4 L 19 4 L 19 3 L 7 3 z M 7 5 L 7 6 L 12 6 L 12 5 L 7 5 z M 7 9 L 7 10 L 19 10 L 19 9 L 7 9 z M 7 11 L 7 12 L 13 12 L 13 11 L 7 11 z M 7 15 L 7 16 L 19 16 L 19 15 L 7 15 z M 7 17 L 7 18 L 16 18 L 16 17 L 7 17 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#2ecc71;fill-opacity:1;stroke:none" 
     d="M 4.5 3 C 3.67158 3 3.00001 3.67157 3 4.5 C 3.00001 5.32843 3.67158 6 4.5 6 C 5.32842 6 5.99999 5.32843 6 4.5 C 5.99999 3.67157 5.32842 3 4.5 3 z M 4.5 9 C 3.67157 9 3 9.67157 3 10.5 C 3 11.32843 3.67157 12 4.5 12 C 5.32843 12 6 11.32843 6 10.5 C 6 9.67157 5.32843 9 4.5 9 z "
     />
    <path
       style="opacity:1;fill:#da4453;fill-opacity:1;stroke:none"
       d="M 4.5 15 C 3.67157 15 3 15.67157 3 16.5 C 3 17.32843 3.67157 18 4.5 18 C 5.32843 18 6 17.32843 6 16.5 C 6 15.67157 5.32843 15 4.5 15 z M 17 18 L 17 19 L 19 19 L 19 18 L 17 18 z "
        />
		</svg>
	{/if}
