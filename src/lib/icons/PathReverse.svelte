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
        d="M 5 2 L 3 3.5 L 5 5 L 5 4 L 9 4 L 9 3 L 5 3 L 5 2 z M 13 2 C 13 4.419 11.282 6.8209062 9 7.3789062 L 9 8.3945312 C 11.837 7.8345313 14 4.973 14 2 L 13 2 z M 7 7.6054688 C 4.163 8.1654687 2 11.027 2 14 L 3 14 C 3 11.581 4.718 9.1790938 7 8.6210938 L 7 7.6054688 z M 11 11 L 11 12 L 7 12 L 7 13 L 11 13 L 11 14 L 13 12.5 L 11 11 z "
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m 6,6 0,4 4,0 0,-4 z M 7,7 9,7 9,9 7,9 Z"
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
     d="M 18 3 C 18 6.52526 15.39058 9.8481831 12 10.408203 L 12 11.421875 C 15.94528 10.863365 19 7.07891 19 3 L 18 3 z M 7 4 L 5 5.5 L 7 7 L 7 6 L 12 6 L 12 5 L 7 5 L 7 4 z M 10 10.578125 C 6.05472 11.136625 3 14.92112 3 19 L 4 19 C 4 15.47474 6.60942 12.151817 10 11.591797 L 10 10.578125 z M 15 15 L 15 16 L 10 16 L 10 17 L 15 17 L 15 18 L 17 16.5 L 15 15 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 9 9 L 9 13 L 13 13 L 13 9 L 9 9 z M 10 10 L 12 10 L 12 12 L 10 12 L 10 10 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
