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
        d="M 8 8 m -7 0 a 6 6 0 1 0 14 0 a 6 6 0 1 0 -14 0 z M 8 8 m -6 0 a 5 5 0 1 1 12 0 a 5 5 0 1 1 -12 0 z M 12 4 L 6.5 6.5 L 4 12 L 9.5 9.5 z M 8 8 m -1 0 a 0.5 0.5 0 1 1 2 0 a 0.5 0.5 0 1 1 -2 0 z M 1.5 8 L 1.5 9 L 3.5 8 z M 8 1.5 L 7 1.5 L 8 3.5 z M 14.5 8 L 14.5 7 L 12.5 8 z M 8 14.5 L 9 14.5 L 8 12.5 z"
        class="ColorScheme-Text"
        />
		</svg>
	{:else if numericSize <= 27}
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 11 11 m -9 0 a 8 8 0 1 0 18 0 a 8 8 0 1 0 -18 0 z M 11 11 m -8 0 a 7 7 0 1 1 16 0 a 7 7 0 1 1 -16 0 z M 16.4 5.6 L 9.4 9.4 L 5.6 16.4 L 12.6 12.6 z M 11 11 m -1 0 a 0.5 0.5 0 1 1 2 0 a 0.5 0.5 0 1 1 -2 0 z M 2.5 11 L 2.5 12 L 5 11 z M 11 2.5 L 10 2.5 L 11 5 z M 19.5 11 L 19.5 10 L 17 11 z M 11 19.5 L 12 19.5 L 11 17 z"
        class="ColorScheme-Text"
        />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 16 16 m -13 0 a 12 12 0 1 0 26 0 a 12 12 0 1 0 -26 0 z M 16 16 m -12 0 a 11 11 0 1 1 24 0 a 11 11 0 1 1 -24 0 z M 24 8 L 13.8 13.8 L 8 24 L 18.2 18.2 z M 16 16 m -1.5 0 a 0.5 0.5 0 1 1 3 0 a 0.5 0.5 0 1 1 -3 0 z M 3.5 15.8 L 3.5 17.2 L 6.5 16 z M 16.2 3.5 L 14.8 3.5 L 16 6.5 z M 28.5 16.2 L 28.5 14.8 L 25.5 16 z M 15.8 28.5 L 17.2 28.5 L 16 25.5 z"
        class="ColorScheme-Text"
        />
		</svg>
	{/if}
