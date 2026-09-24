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
     d="M 2,2 2,3 14,3 14,2 Z M 2,4 2,5 9,5 9,4 Z M 2,7 2,8 8,8 8,7 Z m 0,2 0,1 4,0 0,-1 z m 0,3 0,1 8,0 0,-1 z"
     class="ColorScheme-Text"/>
  <path
     style="fill:#1d99f3"
     d="M 9 7 L 9 8 L 10.5 8 C 11.885 8 13 9.115 13 10.5 C 13 11.319 12.604 12.045 12 12.5 L 12 11 L 11 11 L 11 14 L 14 14 L 14 13 L 12.9375 13 C 13.5955 12.368 14 11.49 14 10.5 C 14 8.561 12.439 7 10.5 7 L 10 7 L 9 7 z "
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
     d="M 3 3 L 3 4 L 19 4 L 19 3 L 3 3 z M 3 5 L 3 6 L 12 6 L 12 5 L 3 5 z M 3 9 L 3 10 L 13 10 L 13 9 L 3 9 z M 3 11 L 3 12 L 7 12 L 7 11 L 3 11 z M 3 15 L 3 16 L 13 16 L 13 15 L 3 15 z M 3 17 L 3 18 L 10 18 L 10 17 L 3 17 z M 11 18 L 11 19 L 13 19 L 13 18 L 11 18 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11 12 L 11 13 L 15 13 L 15.5 13 C 16.885 13 18 14.115 18 15.5 C 18 16.3187 17.604493 17.035134 17 17.490234 L 17 16 L 16 16 L 16 17.949219 L 16 18 L 16 18.951172 L 16 19 L 17 19 L 19 19 L 19 18 L 17.923828 18 C 18.581798 17.3681 19 16.4903 19 15.5 C 19 13.561 17.439 12 15.5 12 L 11 12 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
