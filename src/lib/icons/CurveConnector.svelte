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
        d="M 4.5 4.0058594 A 2.4999938 2.5000125 0 0 0 2 6.5058594 A 2.4999938 2.5000125 0 0 0 4.5 9.0058594 L 11.5 9.0058594 A 1.4999963 1.5000075 0 0 1 13 10.505859 A 1.4999963 1.5000075 0 0 1 11.5 12.005859 L 4 12.005859 L 4 13.005859 L 11.5 13.005859 A 2.4999938 2.5000125 0 0 0 14 10.505859 A 2.4999938 2.5000125 0 0 0 11.5 8.0058594 L 4.5 8.0058594 A 1.4999963 1.5000075 0 0 1 3 6.5058594 A 1.4999963 1.5000075 0 0 1 4.5 5.0058594 L 12 5.0058594 L 12 4.0058594 L 4.5 4.0058594 z "
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 12.5 3.0019531 A 1.5 1.5 0 0 0 11 4.5019531 A 1.5 1.5 0 0 0 12.5 6.0019531 A 1.5 1.5 0 0 0 14 4.5019531 A 1.5 1.5 0 0 0 12.5 3.0019531 z M 12.5 4.0019531 A 0.50000025 0.500001 0 0 1 13 4.5019531 A 0.50000025 0.500001 0 0 1 12.5 5.0019531 A 0.50000025 0.500001 0 0 1 12 4.5019531 A 0.50000025 0.500001 0 0 1 12.5 4.0019531 z M 3.5 11.001953 A 1.5 1.5 0 0 0 2 12.501953 A 1.5 1.5 0 0 0 3.5 14.001953 A 1.5 1.5 0 0 0 5 12.501953 A 1.5 1.5 0 0 0 3.5 11.001953 z M 3.5 12.001953 A 0.50000025 0.500001 0 0 1 4 12.501953 A 0.50000025 0.500001 0 0 1 3.5 13.001953 A 0.50000025 0.500001 0 0 1 3 12.501953 A 0.50000025 0.500001 0 0 1 3.5 12.001953 z "
        class="ColorScheme-Accent"
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
	d="M 7 6 L 7 7 L 16 7 A 2 2 0 0 1 18 9 A 2 2 0 0 1 16 11 L 7 11 A 3 3 0 0 0 4 14 A 3 3 0 0 0 7 17 L 15 17 L 15 16 L 7 16 A 2 2 0 0 1 5 14 A 2 2 0 0 1 7 12 L 16 12 A 3 3 0 0 0 19 9 A 3 3 0 0 0 16 6 L 7 6 z "
	class="ColorScheme-Text"
    />
  <path
    style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 5.5 4 A 2.5 2.5 0 0 0 3 6.5 A 2.5 2.5 0 0 0 5.5 9 A 2.5 2.5 0 0 0 8 6.5 A 2.5 2.5 0 0 0 5.5 4 z M 5.5 5 A 1.5 1.5 0 0 1 7 6.5 A 1.5 1.5 0 0 1 5.5 8 A 1.5 1.5 0 0 1 4 6.5 A 1.5 1.5 0 0 1 5.5 5 z M 16.5 14 A 2.5 2.5 0 0 0 14 16.5 A 2.5 2.5 0 0 0 16.5 19 A 2.5 2.5 0 0 0 19 16.5 A 2.5 2.5 0 0 0 16.5 14 z M 16.5 15 A 1.5 1.5 0 0 1 18 16.5 A 1.5 1.5 0 0 1 16.5 18 A 1.5 1.5 0 0 1 15 16.5 A 1.5 1.5 0 0 1 16.5 15 z "
	class="ColorScheme-Accent"
     id="path10" />
		</svg>
	{/if}
