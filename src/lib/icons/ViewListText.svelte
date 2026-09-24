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
       d="M 2 2 L 2 3 L 14 3 L 14 2 L 2 2 z M 2 4 L 2 5 L 9 5 L 9 4 L 2 4 z M 2 7 L 2 8 L 14 8 L 14 7 L 2 7 z M 2 9 L 2 10 L 7 10 L 7 9 L 2 9 z M 2 12 L 2 13 L 10 13 L 10 12 L 2 12 z M 12 13 L 12 14 L 14 14 L 14 13 L 12 13 z "
     class="ColorScheme-Text"
     />
		</svg>
	{:else if numericSize <= 27}
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
    d="M 3 3 L 3 4 L 19 4 L 19 3 L 3 3 z M 3 5 L 3 6 L 12 6 L 12 5 L 3 5 z M 3 9 L 3 10 L 19 10 L 19 9 L 3 9 z M 3 11 L 3 12 L 13 12 L 13 11 L 3 11 z M 3 15 L 3 16 L 19 16 L 19 15 L 3 15 z M 3 17 L 3 18 L 16 18 L 16 17 L 3 17 z M 17 18 L 17 19 L 19 19 L 19 18 L 17 18 z "
	class="ColorScheme-Text"
    />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 4,4 4,5 28,5 28,4 4,4 Z M 4,7 4,8 17,8 17,7 4,7 Z m 0,6 0,1 24,0 0,-1 -24,0 z m 0,3 0,1 15,0 0,-1 -15,0 z m 0,6 0,1 24,0 0,-1 -24,0 z m 0,3 0,1 19,0 0,-1 -19,0 z m 20,2 0,1 4,0 0,-1 -4,0 z"
     id="rect3424" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
