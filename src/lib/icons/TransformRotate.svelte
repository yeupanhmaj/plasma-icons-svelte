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
       d="M 2 2 L 2 10 L 7 10 L 7 5 L 9 5 C 10.10801 5 11 5.89199 11 7 L 11 9 L 9 9 L 8 9 L 8 11 L 6 11 L 6 14 L 14 14 L 14 9 L 12 9 L 12 7 C 12 5.33799 10.66201 4 9 4 L 7 4 L 7 2 L 2 2 z "
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
    d="M 3 3 L 3 19 L 4 19 L 10 19 L 10 18 L 4 18 L 4 4 L 12 4 L 12 6 L 12 7 L 12 11 L 13 11 L 13 7.1386719 C 14.726297 7.5823639 16 9.13145 16 11 L 16 12 L 11 12 L 11 13 L 11 19 L 12 19 L 19 19 L 19 18 L 19 13 L 19 12 L 17 12 L 17 11 C 17 8.572831 15.287361 6.5606044 13 6.0996094 L 13 3 L 4 3 L 3 3 z M 12 13 L 18 13 L 18 18 L 12 18 L 12 13 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
