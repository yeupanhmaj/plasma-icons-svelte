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
     d="M 8 2 L 2.03125 2.03125 L 2 8 L 8 13.539062 L 8 8 L 9 8 L 10 8 L 13.539062 8 L 8 2 z M 5.5 4 C 6.3284271 4 7 4.6715728 7 5.5 C 7 6.3284272 6.3284271 7 5.5 7 C 4.6715729 7 4 6.3284272 4 5.5 C 4 4.6715728 4.6715729 4 5.5 4 z M 11 9 L 11 11 L 9 11 L 9 12 L 11 12 L 11 14 L 12 14 L 12 12 L 14 12 L 14 11 L 12 11 L 12 9 L 11 9 z "
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
     d="M 9 3 L 3 5 L 5 11 L 13 15 L 13 13 L 16.5 13 L 19 8 L 9 3 z M 3 5 L 3 11 L 11 19 L 13 17 L 13 15.910156 L 4 11 L 3 5 z M 6.5 5 C 7.331 5 8 5.669 8 6.5 C 8 7.331 7.331 8 6.5 8 C 5.669 8 5 7.331 5 6.5 C 5 5.669 5.669 5 6.5 5 z M 16 14 L 16 16 L 14 16 L 14 17 L 16 17 L 16 19 L 17 19 L 17 17 L 19 17 L 19 16 L 17 16 L 17 14 L 16 14 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
