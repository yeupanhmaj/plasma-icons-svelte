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
     d="M 8 2 C 6.3431458 2 5 3.3431458 5 5 L 2 5 L 2 6 L 2 13 L 2 14 L 9 14 L 9 13 L 3 13 L 3 6 L 5 6 L 5 7.0878906 C 4.4014078 7.2995242 4.0008908 7.8650979 4 8.5 C 4 9.3284271 4.6715729 10 5.5 10 C 6.3284271 10 7 9.3284271 7 8.5 C 6.9991092 7.8650979 6.5985922 7.2995242 6 7.0878906 L 6 6 L 10 6 L 10 8 L 11 8 L 11 6 L 13 6 L 13 9 L 14 9 L 14 6 L 14 5 L 11 5 C 11 3.3431458 9.6568542 2 8 2 z M 8 3 C 9.1045695 3 10 3.8954305 10 5 L 6 5 C 6 3.8954305 6.8954305 3 8 3 z M 5.5 8 C 5.7761424 8 6 8.2238576 6 8.5 C 6 8.7761424 5.7761424 9 5.5 9 C 5.2238576 9 5 8.7761424 5 8.5 C 5 8.2238576 5.2238576 8 5.5 8 z M 11 9 L 11 11 L 9 11 L 9 12 L 11 12 L 11 14 L 12 14 L 12 12 L 14 12 L 14 11 L 12 11 L 12 9 L 11 9 z "
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
	d="M 11 3 A 3 3 0 0 0 8 6 L 5 6 L 5 7 L 5 18 L 5 19 L 14 19 L 14 18 L 6 18 L 6 7 L 8 7 L 8 8.0878906 A 1.5 1.5 0 0 0 7 9.5 A 1.5 1.5 0 0 0 8.5 11 A 1.5 1.5 0 0 0 10 9.5 A 1.5 1.5 0 0 0 9 8.0878906 L 9 7 L 13 7 L 13 8.0878906 A 1.5 1.5 0 0 0 12 9.5 A 1.5 1.5 0 0 0 13.5 11 A 1.5 1.5 0 0 0 15 9.5 A 1.5 1.5 0 0 0 14 8.0878906 L 14 7 L 16 7 L 16 13 L 17 13 L 17 7 L 17 6 L 14 6 A 3 3 0 0 0 11 3 z M 11 4 A 2 2 0 0 1 13 6 L 9 6 A 2 2 0 0 1 11 4 z M 8.5 9 A 0.5 0.5 0 0 1 9 9.5 A 0.5 0.5 0 0 1 8.5 10 A 0.5 0.5 0 0 1 8 9.5 A 0.5 0.5 0 0 1 8.5 9 z M 13.5 9 A 0.5 0.5 0 0 1 14 9.5 A 0.5 0.5 0 0 1 13.5 10 A 0.5 0.5 0 0 1 13 9.5 A 0.5 0.5 0 0 1 13.5 9 z M 16 14 L 16 16 L 14 16 L 14 17 L 16 17 L 16 19 L 17 19 L 17 17 L 19 17 L 19 16 L 17 16 L 17 14 L 16 14 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
