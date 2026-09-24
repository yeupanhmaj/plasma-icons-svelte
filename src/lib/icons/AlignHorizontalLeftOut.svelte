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
       d="M 5 2 L 5 14 L 6 14 L 6 2 L 5 2 z M 7 2 L 7 7 L 14 7 L 14 2 L 7 2 z M 8 3 L 13 3 L 13 6 L 8 6 L 8 3 z M 2 9 L 2 14 L 4 14 L 4 9 L 2 9 z M 7 9 L 7 14 L 12 14 L 12 9 L 7 9 z M 8 10 L 11 10 L 11 13 L 8 13 L 8 10 z "
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
     d="m556.72236 602.11926h1 3v-1-5h-1-3zm6 0h1v-16h-1zm3-10h1 6v-1-5h-1-6zm1.00033 10h1 4 1v-1-4-1h-6v5zm-.00033-11v-4h5v4zm1.00033 10v-4h4v4z" transform="translate(-553.72253-583.11926)"
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
			<path class="ColorScheme-Text" d="m4 28v-10h6v10zm8 0v-24h2v24zm6 0v-10h10v10zm1-1h8v-8h-8zm-3-13v-10h12v10zm1-1h10v-8h-10z" fill="currentColor"/>
		</svg>
	{/if}
