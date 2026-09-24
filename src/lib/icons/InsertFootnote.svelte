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
        d="M 2 2 L 2 9 L 2 11 L 2 14 L 11 14 L 11 13 L 3 13 L 3 11 L 3 9 L 3 3 L 13 3 L 13 7 L 14 7 L 14 2 L 2 2 z M 4 4 L 4 5 L 11 5 L 11 4 L 4 4 z M 4 6 L 4 7 L 9 7 L 9 6 L 4 6 z M 4 9 L 4 10 L 10 10 L 10 9 L 4 9 z "
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 13 8 L 12 10 L 13 10 L 13 14 L 14 14 L 14 8 L 13 8 z M 4 11 L 4 12 L 8 12 L 8 11 L 4 11 z "
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
     d="M 4 3 L 4 19 L 5 19 L 11 19 L 11 18 L 5 18 L 5 4 L 17 4 L 17 12 L 18 12 L 18 3 L 17 3 L 5 3 L 4 3 z M 6 6 L 6 7 L 16 7 L 16 6 L 6 6 z M 6 8 L 6 9 L 12 9 L 12 8 L 6 8 z M 6 13 L 6 14 L 13 14 L 13 13 L 6 13 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 16 13 L 15 15 L 16 15 L 16 19 L 17 19 L 17 13 L 16 13 z M 6 15 L 6 16 L 13 16 L 13 15 L 6 15 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
