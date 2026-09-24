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
        d="M 6 2 L 6 3.0058594 L 2 3.0058594 L 2 4.0019531 L 6 4.0019531 L 6 5 L 10 5 L 10 4.0019531 L 14 4.0019531 L 14 3.0058594 L 10 3.0058594 L 10 2 L 6 2 z M 7 3 L 9 3 L 9 3.0058594 L 9 4 L 7 4 L 7 3 z M 2 11 L 2 14 L 5 14 L 5 13 L 7 13 L 7 12 L 5 12 L 5 11 L 2 11 z M 11 11 L 11 12 L 9 12 L 9 13 L 11 13 L 11 14 L 14 14 L 14 11 L 11 11 z M 3 12 L 4 12 L 4 13 L 3 13 L 3 12 z M 12 12 L 13 12 L 13 13 L 12 13 L 12 12 z "
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m 5.99975,7.0025 2.00025,3 2.00025,-3 z"
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
     d="M 9 3 L 9 4 L 3 4 L 3 5 L 9 5 L 9 7 L 13 7 L 13 5 L 19 5 L 19 4 L 13 4 L 13 3 L 9 3 z M 10 4 L 12 4 L 12 5 L 12 6 L 10 6 L 10 4 z M 3 16 L 3 19 L 6 19 L 6 18 L 9 18 L 9 17 L 6 17 L 6 16 L 3 16 z M 16 16 L 16 17 L 13 17 L 13 18 L 16 18 L 16 19 L 19 19 L 19 16 L 16 16 z M 4 17 L 5 17 L 5 18 L 4 18 L 4 17 z M 17 17 L 18 17 L 18 18 L 17 18 L 17 17 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 9 9.5 L 11 12.5 L 13 9.5 L 9 9.5 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
