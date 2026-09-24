<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 16,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 16
	);
</script>

	{#if numericSize <= 14}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 12 12"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
	d="M 1 1 L 1 2 L 10 2 L 10 9 L 11 9 L 11 1 L 1 1 z M 1 5 L 1 6 L 6 6 L 6 7 L 7 7 L 7 5 L 1 5 z "
	class="ColorScheme-Text"
    />
  <path
    style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 3.1 7 C 3.7 7.7 4.4 8.3 5 9 L 1 9 L 1 10 L 5 10 C 4.4 10.7 3.7 11.3 3 12 L 4.5 12 L 7 9.5 L 4.5 7 L 3.1 7 z "
	class="ColorScheme-Accent"
     />
		</svg>
	{:else}
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
    style="fill:currentColor;fill-opacity:0.5;stroke:none" 
	d="M 2 3 L 2 6 L 10 6 L 10 11 L 13 11 L 13 3 L 2 3 z "
	class="ColorScheme-Text"
    />
 <path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
	d="M 2 2 L 2 3 L 13 3 L 13 11 L 14 11 L 14 2 L 2 2 z M 2 6 L 2 7 L 9 7 L 9 11 L 10 11 L 10 6 L 2 6 z "
	class="ColorScheme-Text"
    />
  <path
    style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 5.2 8.7 L 4.5 9.4 L 6.1 11 L 2 11 L 2 12 L 6.1 12 L 4.5 13.6 L 5.2 14.3 L 7.3 12.2 L 8 11.5 L 5.2 8.7 z "
	class="ColorScheme-Accent"
     />
		</svg>
	{/if}
