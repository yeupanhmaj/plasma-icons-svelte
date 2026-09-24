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
     d="M 4 2 L 4 3 L 4 5 L 3 5 L 2 5 L 2 6 L 2 11 L 2 12 L 3 12 L 5 12 L 5 13 L 5 14 L 10 14 L 11 14 L 11 13 L 11 12 L 13 12 L 14 12 L 14 11 L 14 6 L 14 5 L 12 5 L 12 3 L 12 2 L 4 2 z M 5 3 L 11 3 L 11 5 L 5 5 L 5 3 z M 3 6 L 13 6 L 13 11 L 12 11 L 12 10 L 4 10 L 4 11 L 3 11 L 3 6 z M 10 7 L 10 8 L 12 8 L 12 7 L 10 7 z M 6 12 L 10 12 L 10 13 L 6 13 L 6 12 z "
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
	d="m5 3v1 4h-2v1 7h1 3v2 1h8v-1-2h4v-1-6-1h-2v-4-1h-12m1 1h10v4h-1v-1h-8v1h-1v-4m1 1v1h8v-1h-8m-3 4h14v6h-2v-2h-10v2h-2v-6m10 1v1h3v-1h-3m-6 6h6v2h-6v-2"
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="m7 4v8h-3v12h6v4h12v-4h6v-12h-3v-8zm1 1h16v7h-16zm2 2v1h12v-1zm0 3v1h12v-1zm-5 3h22v10h-3v-4h-16v4h-3zm17 2v1h4v-1zm-11 9h10v3h-10z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
