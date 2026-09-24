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
       d="M 2 2 L 2 3 L 10 3 L 10 2 L 2 2 z M 11 3 L 11 4 L 11 9.5 C 10.5818 9.1852 10.066 9 9.5 9 C 8.115 9 7 10.115 7 11.5 C 7 12.885 8.115 14 9.5 14 C 10.885 14 12 12.885 12 11.5 L 12 5 L 14 5 C 14 3.892 13.108 3 12 3 L 11 3 z M 2 5 L 2 6 L 9 6 L 9 5 L 2 5 z M 2 8 L 2 9 L 7 9 L 7 8 L 2 8 z M 2 11 L 2 12 L 6 12 L 6 11 L 2 11 z "
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
     d="M 3 3 L 3 4 L 19 4 L 19 3 L 3 3 z M 3 6 L 3 7 L 12 7 L 12 6 L 3 6 z M 16 8 L 16 9 L 16 14.5 C 15.5818 14.1852 15.066 14 14.5 14 C 13.115 14 12 15.115 12 16.5 C 12 17.885 13.115 19 14.5 19 C 15.885 19 17 17.885 17 16.5 L 17 10 L 19 10 C 19 8.892 18.108 8 17 8 L 16 8 z M 3 9 L 3 10 L 14 10 L 14 9 L 3 9 z M 3 12 L 3 13 L 12 13 L 12 12 L 3 12 z M 3 15 L 3 16 L 10 16 L 10 15 L 3 15 z M 3 18 L 3 19 L 10 19 L 10 18 L 3 18 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
