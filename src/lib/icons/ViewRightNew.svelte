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
       d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 3 4 L 5 4 L 5 13 L 3 13 L 3 4 z M 6 4 L 13 4 L 13 13 L 6 13 L 6 4 z M 9 6 L 9 8 L 7 8 L 7 9 L 9 9 L 9 11 L 10 11 L 10 9 L 12 9 L 12 8 L 10 8 L 10 6 L 9 6 z "
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
    d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 7 L 8 7 L 8 18 L 4 18 L 4 7 z M 9 7 L 18 7 L 18 18 L 9 18 L 9 7 z M 13 10 L 13 12 L 11 12 L 11 13 L 13 13 L 13 15 L 14 15 L 14 13 L 16 13 L 16 12 L 14 12 L 14 10 L 13 10 z "
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
     d="M 4 4 L 4 28 L 28 28 L 28 4 L 4 4 z M 5 9 L 12 9 L 12 27 L 5 27 L 5 9 z M 13 9 L 27 9 L 27 27 L 13 27 L 13 9 z M 19.5 13.5 L 19.5 17.5 L 15.5 17.5 L 15.5 18.5 L 19.5 18.5 L 19.5 22.5 L 20.5 22.5 L 20.5 18.5 L 24.5 18.5 L 24.5 17.5 L 20.5 17.5 L 20.5 13.5 L 19.5 13.5 z "
     id="path8" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
