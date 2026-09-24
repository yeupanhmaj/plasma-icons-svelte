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
       d="M 2 2 L 2 7 L 4 7 L 4 2 L 2 2 z M 5 2 L 5 14 L 6 14 L 6 2 L 5 2 z M 8 2 L 8 7 L 14 7 L 14 2 L 8 2 z M 9 3 L 13 3 L 13 6 L 9 6 L 9 3 z M 7 9 L 7 14 L 14 14 L 14 9 L 7 9 z M 8 10 L 13 10 L 13 13 L 8 13 L 8 10 z "
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
     d="m556.72237 586.11926h1 3v1 5h-1-3zm6 0h1v16h-1zm3 10h1 6v1 5h-1-6zm1.00033-10h1 4 1v1 4 1h-6v-5zm-.00033 11v4h5v-4zm1.00033-10v4h4v-4z" 
	 transform="translate(-553.72253-583.11926)"
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
     d="m4 4v10h6v-10zm8 0v24h2v-24zm6 0v10h10v-10zm1 1h8v8h-8zm-3 13v10h12v-10zm1 1h10v8h-10z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
