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
     d="M 8 2 C 4.6862915 2 2 4.6862915 2 8 C 2 11.313708 4.6862915 14 8 14 C 11.313708 14 14 11.313708 14 8 C 14 4.6862915 11.313708 2 8 2 z M 8 3 C 10.761424 3 13 5.2385763 13 8 C 13 10.761424 10.761424 13 8 13 C 5.2385763 13 3 10.761424 3 8 C 3 5.2385763 5.2385763 3 8 3 z M 7 4 L 7 8 L 7 9 L 12 9 L 12 8 L 8 8 L 8 4 L 7 4 z "
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
	d="m11 3c-4.431998 0-8 3.568002-8 8 0 4.431998 3.568002 8 8 8 4.431998 0 8-3.568002 8-8 0-4.431998-3.568002-8-8-8m0 1c3.877999 0 7 3.122001 7 7 0 3.877999-3.122001 7-7 7-3.877999 0-7-3.122001-7-7 0-3.877999 3.122001-7 7-7m-1 1v7h1 5v-1h-5v-6h-1"
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
     d="M 16 4 A 12 12 0 0 0 4 16 A 12 12 0 0 0 16 28 A 12 12 0 0 0 28 16 A 12 12 0 0 0 16 4 z M 16 5 A 11 11 0 0 1 27 16 A 11 11 0 0 1 16 27 A 11 11 0 0 1 5 16 A 11 11 0 0 1 16 5 z M 15 7 L 15 17 L 24 17 L 24 16 L 16 16 L 16 7 L 15 7 z "
     id="path78" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
