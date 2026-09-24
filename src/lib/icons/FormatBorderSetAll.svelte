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
     d="M 2,1 2,14 15,14 15,1 2,1 Z M 3,2 8,2 8,7 3,7 3,2 Z M 9,2 14,2 14,7 9,7 9,2 Z M 3,8 8,8 8,13 3,13 3,8 Z m 6,0 5,0 0,5 -5,0 0,-5 z"
     class="ColorScheme-Text"
     />
 <path style="fill:currentColor;fill-opacity:0.5;stroke:none" 
     d="M 3,2 14,2 14,13 3,13 Z"
     class="ColorScheme-Text"
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
     d="M 3 2 L 3 3 L 3 10 L 3 11 L 3 18 L 3 19 L 4 19 L 11 19 L 12 19 L 19 19 L 20 19 L 20 18 L 20 2 L 3 2 z M 4 3 L 11 3 L 11 10 L 4 10 L 4 3 z M 12 3 L 19 3 L 19 10 L 12 10 L 12 3 z M 4 11 L 11 11 L 11 18 L 4 18 L 4 11 z M 12 11 L 19 11 L 19 18 L 12 18 L 12 11 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.5;stroke:none" 
     d="M 4 3 L 4 10 L 11 10 L 11 3 L 4 3 z M 12 3 L 12 10 L 19 10 L 19 3 L 12 3 z M 4 11 L 4 18 L 11 18 L 11 11 L 4 11 z M 12 11 L 12 18 L 19 18 L 19 11 L 12 11 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
