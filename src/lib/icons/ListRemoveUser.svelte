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
     class="ColorScheme-NegativeText"
    d="m8 2c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3 0-1.657-1.343-3-3-3m0 1c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2-1.105 0-2-.895-2-2 0-1.105.895-2 2-2m0 6c-2.761 0-5 2.01-5 4.5.001.167.012.334.033.5h4.967v-1h-3.955c.284-1.721 1.968-2.998 3.955-3zm1 2v1h5v-1z" />
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
     d="M 11 3 C 9.338 3 8 4.338 8 6 C 8 7.662 9.338 9 11 9 C 12.662 9 14 7.662 14 6 C 14 4.338 12.662 3 11 3 z M 11 11 C 8.23 11 6 11.89198 6 13 L 6 18 L 6 19 L 7.2011719 19 L 13 19 L 13 18 L 7 18 L 7 13.427734 C 7 12.636304 8.784 12 11 12 C 12.795116 12 14.289377 12.420682 14.798828 13 L 16 13 C 16 11.89198 13.77 11 11 11 z "
     class="ColorScheme-Text"
     />
    <path
       style="fill:#da4453;fill-opacity:1;stroke:none"
       d="M 14 16 L 14 17 L 19 17 L 19 16 L 14 16 z "
        />
		</svg>
	{/if}
