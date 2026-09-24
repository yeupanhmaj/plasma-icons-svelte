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
     d="M 2 2 L 2 5 L 3 5 L 3 3 L 5 3 L 5 2 L 2 2 z M 6 2 L 6 3 L 10 3 L 10 2 L 6 2 z M 11 2 L 11 3 L 13 3 L 13 5 L 14 5 L 14 2 L 11 2 z M 8 4 A 1.5 1.5 0 0 0 6.5 5.5 A 1.5 1.5 0 0 0 8 7 A 1.5 1.5 0 0 0 9.5 5.5 A 1.5 1.5 0 0 0 8 4 z M 2 6 L 2 10 L 3 10 L 3 6 L 2 6 z M 13 6 L 13 9 L 14 9 L 14 6 L 13 6 z M 8 8 A 3 3 0 0 0 5 11 L 5 12 L 8 12 L 8 11 L 6 11 A 2 2 0 0 1 8 9 L 10.232422 9 A 3 3 0 0 0 8 8 z M 11 9 L 11 11 L 9 11 L 9 12 L 11 12 L 11 14 L 12 14 L 12 12 L 14 12 L 14 11 L 12 11 L 12 9 L 11 9 z M 2 11 L 2 14 L 5 14 L 5 13 L 3 13 L 3 11 L 2 11 z M 6 13 L 6 14 L 9 14 L 9 13 L 6 13 z "
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
	d="m3 3v1 14 1h10v-1h-9v-14h14v9h1v-9-1h-1-15m8 2c-1.385 0-2.5 1.115-2.5 2.5 0 1.385 1.115 2.5 2.5 2.5 1.385 0 2.5-1.115 2.5-2.5 0-1.385-1.115-2.5-2.5-2.5m0 1c.831 0 1.5.669 1.5 1.5 0 .831-.669 1.5-1.5 1.5-.831 0-1.5-.669-1.5-1.5 0-.831.669-1.5 1.5-1.5m0 5c-2.49299 0-4.5 2.00701-4.5 4.5v.5 1h.275391.724609.345703 5.154297v-1h-5.5v-.5c0-1.93899 1.56101-3.5 3.5-3.5.955954 0 1.816828.382914 2.447266 1h1.296875c-.805483-1.206782-2.178208-2-3.744141-2m5 3v2h-2v1h2v2h1v-2h2v-1h-2v-2h-1"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
