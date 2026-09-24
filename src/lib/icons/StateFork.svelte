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
     d="M 3.5 2 A 1.4999979 1.5 0 0 0 2 3.5 A 1.4999979 1.5 0 0 0 3 4.9121094 L 3 9 L 3 11.087891 A 1.4999979 1.5 0 0 0 2 12.5 A 1.4999979 1.5 0 0 0 3.5 14 A 1.4999979 1.5 0 0 0 5 12.5 A 1.4999979 1.5 0 0 0 4 11.087891 L 4 9 A 1 1 0 0 1 5 8 L 11 8 A 2 2 0 0 0 13 6 L 13 4.9121094 A 1.4999979 1.5 0 0 0 14 3.5 A 1.4999979 1.5 0 0 0 12.5 2 A 1.4999979 1.5 0 0 0 11 3.5 A 1.4999979 1.5 0 0 0 12 4.9121094 L 12 6 A 1 1 0 0 1 11 7 L 5 7 A 2 2 0 0 0 4 7.2695312 L 4 4.9121094 A 1.4999979 1.5 0 0 0 5 3.5 A 1.4999979 1.5 0 0 0 3.5 2 z M 3.5 3 A 0.5 0.5 0 0 1 4 3.5 A 0.5 0.5 0 0 1 3.5 4 A 0.5 0.5 0 0 1 3 3.5 A 0.5 0.5 0 0 1 3.5 3 z M 12.5 3 A 0.5 0.5 0 0 1 13 3.5 A 0.5 0.5 0 0 1 12.5 4 A 0.5 0.5 0 0 1 12 3.5 A 0.5 0.5 0 0 1 12.5 3 z M 11 9 L 11 11 L 9 11 L 9 12 L 11 12 L 11 14 L 12 14 L 12 12 L 14 12 L 14 11 L 12 11 L 12 9 L 11 9 z M 3.5 12 A 0.5 0.5 0 0 1 4 12.5 A 0.5 0.5 0 0 1 3.5 13 A 0.5 0.5 0 0 1 3 12.5 A 0.5 0.5 0 0 1 3.5 12 z "
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
    d="M 4.5 3 A 1.4999979 1.5 0 0 0 3 4.5 A 1.4999979 1.5 0 0 0 4 5.9121094 L 4 12 L 4 16.087891 A 1.4999979 1.5 0 0 0 3 17.5 A 1.4999979 1.5 0 0 0 4.5 19 A 1.4999979 1.5 0 0 0 6 17.5 A 1.4999979 1.5 0 0 0 5 16.087891 L 5 12 A 1 1 0 0 1 6 11 L 16 11 A 2 2 0 0 0 18 9 L 18 5.9121094 A 1.4999979 1.5 0 0 0 19 4.5 A 1.4999979 1.5 0 0 0 17.5 3 A 1.4999979 1.5 0 0 0 16 4.5 A 1.4999979 1.5 0 0 0 17 5.9121094 L 17 9 A 1 1 0 0 1 16 10 L 6 10 A 2 2 0 0 0 5 10.269531 L 5 5.9121094 A 1.4999979 1.5 0 0 0 6 4.5 A 1.4999979 1.5 0 0 0 4.5 3 z M 4.5 4 A 0.5 0.5 0 0 1 5 4.5 A 0.5 0.5 0 0 1 4.5 5 A 0.5 0.5 0 0 1 4 4.5 A 0.5 0.5 0 0 1 4.5 4 z M 17.5 4 A 0.5 0.5 0 0 1 18 4.5 A 0.5 0.5 0 0 1 17.5 5 A 0.5 0.5 0 0 1 17 4.5 A 0.5 0.5 0 0 1 17.5 4 z M 16 14 L 16 16 L 14 16 L 14 17 L 16 17 L 16 19 L 17 19 L 17 17 L 19 17 L 19 16 L 17 16 L 17 14 L 16 14 z M 4.5 17 A 0.5 0.5 0 0 1 5 17.5 A 0.5 0.5 0 0 1 4.5 18 A 0.5 0.5 0 0 1 4 17.5 A 0.5 0.5 0 0 1 4.5 17 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
