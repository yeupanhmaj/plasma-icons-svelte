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
       d="M 2 3 L 2 4 L 6 4 L 6 13 L 7 13 L 7 4 L 11 4 L 11 3 L 2 3 z M 12 7 C 11.61083 8.27687 10.63869 9.37115 10.21875 10.25 C 10.0718 10.5113 10 10.80798 10 11.125 C 10 12.16375 10.892 13 12 13 C 13.108 13 14 12.16375 14 11.125 C 14 10.80798 13.89698 10.5113 13.75 10.25 C 13.33006 9.37115 12.38916 8.27687 12 7 z "
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
    d="M 17.5 4 C 17.013545 5.7025 15.8218 7.1660906 15.296875 8.3378906 C 15.113175 8.6862906 15 9.0773 15 9.5 C 15 10.885 16.115 12 17.5 12 C 18.885 12 20 10.885 20 9.5 C 20 9.0773 19.886825 8.6862906 19.703125 8.3378906 C 19.1782 7.1660906 17.98645 5.7025 17.5 4 z M 4 8 L 4 10 L 8 10 L 8 20 L 10 20 L 10 10 L 14 10 L 14 8 L 4 8 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
