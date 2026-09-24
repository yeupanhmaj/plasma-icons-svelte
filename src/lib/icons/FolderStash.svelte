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
       d="M 2 2 L 2 3 L 2 6 L 2 7 L 2 13 L 2 14 L 9 14 L 9 13 L 3 13 L 3 7 L 13 7 L 14 7 L 14 6 L 14 5 L 14 4 L 9.0078125 4 L 7.0078125 2 L 7 2.0078125 L 7 2 L 3 2 L 2 2 z M 3 3 L 6.5917969 3 L 7.59375 4 L 7 4 L 7 4.0078125 L 6.9921875 4 L 4.9921875 6 L 3 6 L 3 3 z M 11 8 L 11 9 L 10 9 L 10 13 L 10 14 L 15 14 L 15 13 L 15 9 L 14 9 L 14 8 L 11 8 z M 11 10 L 14 10 L 14 13 L 11 13 L 11 10 z "
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
    d="M 3 3 L 3 4 L 3 19 L 4 19 L 10 19 L 10 18 L 4 18 L 4 10 L 5.5625 10 L 7 10 L 7 9.9921875 L 7.0078125 10 L 9.0078125 8 L 18 8 L 18 10 L 19 10 L 19 5 L 12.007812 5 L 10.007812 3 L 10 3.0078125 L 10 3 L 4 3 L 3 3 z M 4 4 L 7 4 L 9.5859375 4 L 10.589844 5.0039062 L 6.5703125 9 L 6.5683594 9 L 4 9 L 4 4 z M 13 11 L 13 12 L 12 12 L 11 12 L 11 19 L 19 19 L 19 12 L 18 12 L 17 12 L 17 11 L 13 11 z M 12 13 L 18 13 L 18 18 L 12 18 L 12 13 z M 13 14 L 13 15 L 17 15 L 17 14 L 14 14 L 13 14 z M 13 16 L 13 17 L 15 17 L 15 16 L 13 16 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
