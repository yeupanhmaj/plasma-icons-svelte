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
      d="M 2 2 L 2 5 L 2 14 L 3 14 L 14 14 L 14 13 L 14 2 L 3 2 L 2 2 z M 3 5 L 13 5 L 13 13 L 3 13 L 3 5 z M 4 6 L 4 12 L 6 12 L 6 6 L 4 6 z M 7 7 L 7 8 L 12 8 L 12 7 L 7 7 z M 7 10 L 7 11 L 12 11 L 12 10 L 7 10 z "
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
	 d="m3 3v16h1 15v-1-15h-1-14-1m1 4h14v11h-14v-11m1 1v9h5v-9h-5m6 1v1h6v-1h-6m0 3v1h4v-1h-4m0 3v1h2v-1h-2"
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
     d="M 4 4 L 4 28 L 28 28 L 28 4 L 4 4 z M 5 9 L 27 9 L 27 27 L 5 27 L 5 9 z M 7 11 L 7 25 L 13 25 L 13 11 L 7 11 z M 15 12 L 15 13 L 25 13 L 25 12 L 15 12 z M 15 17 L 15 18 L 23 18 L 23 17 L 15 17 z M 15 22 L 15 23 L 19 23 L 19 22 L 15 22 z "
     id="path18" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
