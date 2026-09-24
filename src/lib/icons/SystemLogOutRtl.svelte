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
        d="M 4.75 2 C 4.5 2.24 4.25 2.5 4 2.7 C 5.8 4.5 7.7 6.26 9.5 8 C 7.67 9.7 5.8 11.5 4 13.3 L 4.74 14 C 6.8 12 8.9 10 11 8 C 8.9 6 6.8 4 4.75 2 z "
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
       d="M 11 3 C 6.6 3 3 6.6 3 11 C 3 15.4 6.6 19 11 19 C 15.4 19 19 15.4 19 11 C 19 6.6 15.4 3 11 3 z M 11 4 C 14.9 4 18 7.1 18 11 C 18 14.9 14.9 18 11 18 C 7.1 18 4 14.9 4 11 C 4 7.1 7.1 4 11 4 z M 9.7 7 L 9 7.7 L 12.3 11 L 9 14.3 L 9.7 15 L 13.7 11 L 9.7 7 z "
        class="ColorScheme-Text" />
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
     d="M 16 4 A 12 12 0 0 0 4 16 A 12 12 0 0 0 16 28 A 12 12 0 0 0 28 16 A 12 12 0 0 0 16 4 z M 16 5 A 11 11 0 0 1 27 16 A 11 11 0 0 1 16 27 A 11 11 0 0 1 5 16 A 11 11 0 0 1 16 5 z M 12.7 8 L 12 8.7 L 19.5 16 L 12 23.3 L 12.7 24 L 21 16 L 12.7 8 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
