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
       d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 3 3 L 7 3 L 7 13 L 3 13 L 3 3 z M 8 3 L 13 3 L 13 13 L 8 13 L 8 3 z M 5.0390625 4 A 1 1 0 0 0 4.3105469 4.2753906 A 1 1 0 0 0 4.125 5.484375 A 1 1 0 0 0 5.25 5.96875 A 1 1 0 0 0 6 5 L 5 5 L 5.5292969 4.1523438 A 1 1 0 0 0 5.0390625 4 z M 11 9 L 11 12 L 12 12 L 12 9 L 11 9 z M 9 11 L 9 12 L 10 12 L 10 11 L 9 11 z "
        class="ColorScheme-Text" />
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
	d="M 2 3 L 2 19 L 19 19 L 19 3 L 2 3 z M 3 4 L 10 4 L 10 18 L 3 18 L 3 11 L 3 10 L 3 4 z M 11 4 L 18 4 L 18 10 L 18 11 L 18 18 L 11 18 L 11 4 z M 6.0800781 5.0019531 A 2 2 0 0 0 4.6230469 5.5507812 A 2 2 0 0 0 4.2519531 7.9707031 A 2 2 0 0 0 6.5019531 8.9355469 A 2 2 0 0 0 8 7 L 6 7 L 7.0585938 5.3027344 A 2 2 0 0 0 6.0800781 5.0019531 z M 16 12 L 16 17 L 17 17 L 17 12 L 16 12 z M 14 14 L 14 17 L 15 17 L 15 14 L 14 14 z M 12 15 L 12 17 L 13 17 L 13 15 L 12 15 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
