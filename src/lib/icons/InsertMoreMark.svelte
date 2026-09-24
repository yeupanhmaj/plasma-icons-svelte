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
        d="M 2,2 2,3 14,3 14,2 2,2 Z M 2,4 2,5 9,5 9,4 2,4 Z m 0,6 0,1 12,0 0,-1 -12,0 z m 0,2 0,1 8,0 0,-1 -8,0 z m 10,1 0,1 2,0 0,-1 -2,0 z"
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 2,7 14,7 14,8 2,8 Z"
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
     d="M 3 3 L 3 4 L 19 4 L 19 3 L 3 3 z M 3 5 L 3 6 L 12 6 L 12 5 L 3 5 z M 3 15 L 3 16 L 19 16 L 19 15 L 3 15 z M 3 17 L 3 18 L 16 18 L 16 17 L 3 17 z M 17 18 L 17 19 L 19 19 L 19 18 L 17 18 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 3 10 L 3 11 L 19 11 L 19 10 L 3 10 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
