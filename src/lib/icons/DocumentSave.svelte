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
     d="M 2 2 L 2 14 L 3 14 L 4 14 L 10 14 L 11 14 L 12 14 L 14 14 L 14 4.28125 L 11.71875 2 L 11.6875 2 L 11 2 L 4 2 L 3 2 L 2 2 z M 3 3 L 4 3 L 5 3 L 5 6 L 5 7 L 11 7 L 11 6 L 11 3 L 11.28125 3 L 13 4.71875 L 13 5 L 13 13 L 12 13 L 12 9 L 11 9 L 5 9 L 3.96875 9 L 3.96875 13 L 3 13 L 3 3 z M 6 3 L 7.90625 3 L 7.90625 6 L 6 6 L 6 3 z M 5 10 L 6 10 L 10 10 L 11 10 L 11 13 L 10 13 L 6 13 L 5 13 L 5 10 z "
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
    d="M 3 2.9980469 L 3 3 L 3 4 L 3 19 L 4 19 L 19 19 L 19 18 L 19 7 L 19 6.3007812 L 18.992188 6.3007812 L 19 6.2910156 L 15.707031 2.9980469 L 15.699219 3.0078125 L 15.699219 2.9980469 L 15 2.9980469 L 3 2.9980469 z M 4 4 L 7 4 L 7 8 L 7 9 L 15 9 L 15 8 L 15 4 L 15.292969 4 L 18 6.7070312 L 18 7 L 18 18 L 16 18 L 16 11 L 15 11 L 7 11 L 6 11 L 6 18 L 4 18 L 4 4 z M 8 4 L 11.900391 4 L 11.900391 8 L 8 8 L 8 4 z M 7 12 L 15 12 L 15 18 L 7 18 L 7 12 z "
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
     d="M 4 4 L 4 28 L 9 28 L 23 28 L 28 28 L 28 10 L 27 9 L 23 5 L 22 4 L 21 4 L 10 4 L 4 4 z M 5 5 L 10 5 L 10 13 L 21 13 L 21 5 L 21.585938 5 L 27 10.414062 L 27 27 L 23 27 L 23 19 L 9 19 L 9 27 L 5 27 L 5 5 z M 11 5 L 17 5 L 17 12 L 11 12 L 11 5 z M 10 20 L 22 20 L 22 27 L 10 27 L 10 20 z "
     id="path60" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
