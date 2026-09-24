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
     d="M 5 2 L 5 7 L 6 7 L 6 3 L 13 3 L 13 8 L 7 8 L 7 9 L 11 9 L 11 12 L 14 9 L 14 2 L 5 2 z M 5 8 L 3 10 L 2 10 L 2 12 L 3 12 L 5 14 L 6 14 L 6 8 L 5 8 z "
     class="ColorScheme-Text"/>
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
     d="M 6 3 L 6 10 L 14 10 L 14 13 L 17 10 L 17 3 L 6 3 z M 7 4 L 16 4 L 16 9 L 7 9 L 7 4 z M 9 11 L 6 13.5 L 5 13.5 L 5 16.5 L 6 16.5 L 9 19 L 9.5 19 L 10 19 L 10 11 L 9.5 11 L 9 11 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
