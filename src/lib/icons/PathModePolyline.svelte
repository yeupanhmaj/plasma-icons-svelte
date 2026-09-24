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
       d="M 2 2 L 2 5 L 4.125 5 L 9 11.5 L 9 14 L 12 14 L 12 11 L 9.875 11 L 5 4.4980469 L 5 4 L 11 4 L 11 5 L 14 5 L 14 2 L 11 2 L 11 3 L 5 3 L 5 2 L 2 2 z M 3 3 L 4 3 L 4 4 L 3.9980469 4 L 3 4 L 3 3 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 10 12 L 11 12 L 11 13 L 10 13 L 10 12 z "
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
     d="M 3 3 L 3 6 L 5.0664062 6 L 12 16.402344 L 12 19 L 15 19 L 15 16 L 12.933594 16 L 6 5.5996094 L 6 5 L 16 5 L 16 6 L 19 6 L 19 3 L 16 3 L 16 4 L 6 4 L 6 3 L 3 3 z M 4 4 L 5 4 L 5 5 L 4 5 L 4 4 z M 17 4 L 18 4 L 18 5 L 17 5 L 17 4 z M 13 17 L 14 17 L 14 18 L 13 18 L 13 17 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
