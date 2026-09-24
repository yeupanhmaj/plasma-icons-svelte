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
     d="M 9 2 L 9 3 L 14 3 L 14 2 L 9 2 z M 5.5 4 A 2.5 2.5 0 0 0 3 6.5 A 2.5 2.5 0 0 0 5.5 9 A 2.5 2.5 0 0 0 8 6.5 A 2.5 2.5 0 0 0 5.5 4 z M 9 5 L 9 6 L 14 6 L 14 5 L 9 5 z M 9 8 L 9 9 L 14 9 L 14 8 L 9 8 z M 5.5 10 A 3.499998 4 0 0 0 2 14 L 9 14 A 3.499998 4 0 0 0 5.5 10 z M 5.5 11 A 2.5 3 0 0 1 7.8535156 13 L 3.1464844 13 A 2.5 3 0 0 1 5.5 11 z "
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
    d="M 10 3 L 10 4 L 19 4 L 19 3 L 10 3 z M 8 6 C 6.338 6 5 7.338 5 9 C 5 10.662 6.338 12 8 12 C 9.662 12 11 10.662 11 9 C 11 7.338 9.662 6 8 6 z M 12 8 L 12 9 L 19 9 L 19 8 L 12 8 z M 8 13 C 5.229983 13 3 15.229983 3 18 L 3 19 L 13 19 L 13 18 C 13 15.229983 10.770017 13 8 13 z M 13 13 L 13 14 L 19 14 L 19 13 L 13 13 z M 8 14 C 10.216017 14 12 15.783983 12 18 L 4 18 C 4 15.783983 5.783983 14 8 14 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
