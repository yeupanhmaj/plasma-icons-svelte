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
     d="M 2 2 L 2 5 L 3 5 L 3 3 L 5 3 L 5 2 L 2 2 z M 6 2 L 6 3 L 10 3 L 10 2 L 6 2 z M 11 2 L 11 3 L 13 3 L 13 5 L 14 5 L 14 2 L 11 2 z M 8 4 A 1.5 1.5 0 0 0 6.5 5.5 A 1.5 1.5 0 0 0 8 7 A 1.5 1.5 0 0 0 9.5 5.5 A 1.5 1.5 0 0 0 8 4 z M 2 6 L 2 10 L 3 10 L 3 6 L 2 6 z M 13 6 L 13 10 L 14 10 L 14 6 L 13 6 z M 8 8 A 3 3 0 0 0 5 11 L 5 12 L 11 12 L 11 11 A 3 3 0 0 0 8 8 z M 8 9 A 2 2 0 0 1 10 11 L 6 11 A 2 2 0 0 1 8 9 z M 2 11 L 2 14 L 5 14 L 5 13 L 3 13 L 3 11 L 2 11 z M 13 11 L 13 13 L 11 13 L 11 14 L 14 14 L 14 11 L 13 11 z M 6 13 L 6 14 L 10 14 L 10 13 L 6 13 z "
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
	d="m3 3v1 15h1 15v-1-15h-16m1 1h14v14h-14v-14m1 1v1 1h1v-1h1v-1h-2m6 0c-1.385 0-2.5 1.115-2.5 2.5 0 1.385 1.115 2.5 2.5 2.5 1.385 0 2.5-1.115 2.5-2.5 0-1.385-1.115-2.5-2.5-2.5m4 0v1h1v1h1v-2h-2m-4 1c.831 0 1.5.669 1.5 1.5 0 .831-.669 1.5-1.5 1.5-.831 0-1.5-.669-1.5-1.5 0-.831.669-1.5 1.5-1.5m-6 3v1 1h2v-1h-1v-1h-1m11 0v1h-1v1h2v-1-1h-1m-5 2c-2.49299 0-4.5 2.00701-4.5 4.5v.5 1h.275391.724609.345703 6.308594 1.070312.275391v-1-.5c0-2.49299-2.00701-4.5-4.5-4.5m0 1c1.93899 0 3.5 1.56101 3.5 3.5v.5h-7v-.5c0-1.93899 1.56101-3.5 3.5-3.5"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
