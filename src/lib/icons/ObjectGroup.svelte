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
     d="M 2 2 L 2 14 L 14 14 L 14 2 L 3 2 L 2 2 z M 3 3 L 13 3 L 13 13 L 3 13 L 3 5 L 3 3 z M 6 4 C 4.895 4 4 4.895 4 6 C 4 7.105 4.895 8 6 8 C 7.105 8 8 7.105 8 6 C 8 4.895 7.105 4 6 4 z M 9 4 L 9 8 L 12 8 L 12 4 L 9 4 z M 5 9 L 5 12 L 7 12 L 7 9 L 5 9 z M 10.5 9 L 9 12 L 12 12 L 10.5 9 z "
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
     d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 7 L 18 18 L 4 18 L 4 7 L 4 4 z M 7.5 5 A 2.5 2.5 0 0 0 5 7.5 A 2.5 2.5 0 0 0 7.5 10 A 2.5 2.5 0 0 0 10 7.5 A 2.5 2.5 0 0 0 7.5 5 z M 12 5 L 12 10 L 17 10 L 17 5 L 12 5 z M 6 12 L 6 17 L 9 17 L 9 12 L 6 12 z M 14.5 12 L 12 17 L 17 17 L 14.5 12 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
