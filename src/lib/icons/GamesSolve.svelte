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
     d="m8 2c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6m0 1c1.713 0 3.222.865 4.123 2.178l-4.662 4.49-2.77-2.668-.691.666 3.461 3.334.693-.666 4.449-4.287c.255.6.396 1.26.396 1.953 0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5"
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
    d="M 11 3 C 6.5680032 3 3 6.5680032 3 11 C 3 15.431997 6.5680032 19 11 19 C 15.431997 19 19 15.431997 19 11 C 19 6.5680032 15.431997 3 11 3 z M 11 4 C 14.877998 4 18 7.1220024 18 11 C 18 14.877998 14.877998 18 11 18 C 7.1220024 18 4 14.877998 4 11 C 4 7.1220024 7.1220024 4 11 4 z M 14 8 L 9 13 L 7 11 L 6 12 L 9 15 L 15 9 L 14 8 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
