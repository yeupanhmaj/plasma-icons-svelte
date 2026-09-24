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
        d="M 11,4.3175 4.31225,11.00525 5,11.00525 5,11.693 11.68775,5.00525 11,5.00525 Z" 
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 11 2 L 11 5 L 14 5 L 14 2 L 11 2 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 2 11 L 2 14 L 5 14 L 5 11 L 2 11 z M 3 12 L 4 12 L 4 13 L 3 13 L 3 12 z "
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
     d="M 16 5.3125 L 5.3125 16 L 6 16 L 6 16.6875 L 16.6875 6 L 16 6 L 16 5.3125 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 15 3 L 15 7 L 19 7 L 19 3 L 15 3 z M 16 4 L 18 4 L 18 6 L 16 6 L 16 4 z M 3 15 L 3 19 L 7 19 L 7 15 L 3 15 z M 4 16 L 6 16 L 6 18 L 4 18 L 4 16 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
