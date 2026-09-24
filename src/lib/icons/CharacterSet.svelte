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
     d="M 2 2 L 2 9 L 2 14 L 3 14 L 3 9 L 8 9 L 8 11 L 14 11 L 14 4 L 9 4 L 9 2 L 6 2 L 3 2 L 2 2 z M 3 3 L 8 3 L 8 8 L 3 8 L 3 3 z M 9 5 L 13 5 L 13 10 L 9 10 L 9 5 z "
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
	 d="M4.5 3A1.499996 1.499996 0 0 0 3 4.5 1.499996 1.499996 0 0 0 4 5.912109V6 13 19H5V13H12V14H19V7H13V6H5V5.912109A1.499996 1.499996 0 0 0 6 4.5 1.499996 1.499996 0 0 0 4.5 3M5 7H12V12H5V7M13 8H18V13H13V8"
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
