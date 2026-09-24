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
        d="M 2 2 L 2 3 L 7 3 L 7 2 L 2 2 z M 9 2 L 9 3 L 14 3 L 14 2 L 9 2 z M 2 5 L 2 6 L 7 6 L 7 5 L 2 5 z M 9 5 L 9 6 L 14 6 L 14 5 L 9 5 z M 5 11 C 5 12.108 5.892 13 7 13 L 12 13 L 12 14 L 14 12.5 L 12 11 L 12 12 L 7 12 C 6.446 12 6 11.554 6 11 L 5 11 z "
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 7,7 5,8.5 7,10 7,9 12,9 c 0.554,0 1,0.446 1,1 l 1,0 C 14,8.892 13.108,8 12,8 L 7,8 Z"
        class="ColorScheme-Accent"
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
     d="M 3 3 L 3 4 L 10 4 L 10 3 L 3 3 z M 12 3 L 12 4 L 19 4 L 19 3 L 12 3 z M 3 6 L 3 7 L 10 7 L 10 6 L 3 6 z M 12 6 L 12 7 L 19 7 L 19 6 L 12 6 z M 3 9 L 3 10 L 10 10 L 10 9 L 3 9 z M 12 9 L 12 10 L 19 10 L 19 9 L 12 9 z M 3 13 L 3 14 L 10 14 L 10 13 L 3 13 z M 11 16 C 11 17.10801 11.89199 18 13 18 L 18 18 L 18 19 L 20 17.5 L 18 16 L 18 17 L 13 17 C 12.446 17 12 16.554 12 16 L 11 16 z M 3 17 L 3 18 L 10 18 L 10 17 L 3 17 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 13 12 L 11 13.5 L 13 15 L 13 14 L 18 14 C 18.554 14 19 14.446 19 15 L 20 15 C 20 13.89199 19.10801 13 18 13 L 13 13 L 13 12 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
