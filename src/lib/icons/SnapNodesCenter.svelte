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
        d="M8 2A6 6 0 0 0 2 8 6 6 0 0 0 8 14 6 6 0 0 0 14 8 6 6 0 0 0 8 2M8 3A5 5 0 0 1 13 8 5 5 0 0 1 8 13 5 5 0 0 1 3 8 5 5 0 0 1 8 3"
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M8 6A2 2 0 0 0 6 8 2 2 0 0 0 8 10 2 2 0 0 0 10 8 2 2 0 0 0 8 6M8 7A1 1 0 0 1 9 8 1 1 0 0 1 8 9 1 1 0 0 1 7 8 1 1 0 0 1 8 7"
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
     d="M 11 4 A 8 7 0 0 0 3 11 A 8 7 0 0 0 11 18 A 8 7 0 0 0 19 11 A 8 7 0 0 0 11 4 z M 11 5 A 7 6 0 0 1 18 11 A 7 6 0 0 1 11 17 A 7 6 0 0 1 4 11 A 7 6 0 0 1 11 5 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11 9 A 2 2 0 0 0 9 11 A 2 2 0 0 0 11 13 A 2 2 0 0 0 13 11 A 2 2 0 0 0 11 9 z M 11 10 A 1 1 0 0 1 12 11 A 1 1 0 0 1 11 12 A 1 1 0 0 1 10 11 A 1 1 0 0 1 11 10 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
