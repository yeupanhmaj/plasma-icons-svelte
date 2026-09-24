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
     d="M 9 1 L 8.375 1.78125 L 11.773438 4.5 L 3 4.5 L 3 5.5 L 11.773438 5.5 L 8.375 8.21875 L 9 9 L 14 5 L 9 1 z M 7 7 L 2 11 L 7 15 L 7 12 L 13 12 L 13 10 L 7 10 L 7 7 z "
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
			<path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="M 3 3 L 3 4 L 3 5 L 3 6 L 1 9 L 1 10 L 1 11.400391 L 1 12 L 1 13 L 2 13 L 2 12 L 2 11 L 2 10.400391 L 2 10 L 2.4003906 10 L 3 10 L 4.078125 10 L 11 13.996094 L 17.921875 10 L 18 10 L 19 10 L 20 10 L 20 10.400391 L 20 11 L 20 12 L 21 12 L 21 11.400391 L 21 9.9863281 L 21 9 L 19 6 L 19 3 L 4 3 L 3 3 z M 4 4 L 18 4 L 18 5 L 18 8.7988281 L 11 12.839844 L 4 8.7988281 L 4 5 L 4 4 z M 5 5 L 5 5.9863281 L 4.9863281 6 L 5 6 L 17 6 L 17.013672 6 L 17 5.9863281 L 17 5 L 5 5 z M 5 7 L 5 8 L 12 8 L 12 7 L 5 7 z M 17.707031 12 L 17 12.707031 L 19.292969 15 L 15 15 L 15 16 L 19.292969 16 L 17 18.292969 L 17.707031 19 L 21 15.707031 L 21.207031 15.5 L 21 15.292969 L 17.707031 12 z M 4 13 L 1 16 L 4 19 L 4 17 L 5 17 L 6 17 L 6 15 L 5 15 L 4 15 L 4 13 z M 7 18 L 7 19 L 8 19 L 14 19 L 14 18 L 7 18 z "
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
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 5 5 L 5 9 L 2 13 L 2 16 L 3 16 L 3 14 L 5 14 L 5.7871094 14 L 16 19.570312 L 26.212891 14 L 27 14 L 29 14 L 29 16 L 30 16 L 30 13 L 27 9 L 27 5 L 5 5 z M 6 6 L 26 6 L 26 12.974609 L 16 18.429688 L 6 12.974609 L 6 6 z M 8 8 L 8 9 L 24 9 L 24 8 L 8 8 z M 8 11 L 8 12 L 17 12 L 17 11 L 8 11 z M 25.484375 16 L 24.755859 16.726562 L 28.996094 20.955078 L 20 21 L 20 22 L 29.060547 21.982422 L 24.755859 26.273438 L 25.484375 27 L 31 21.5 L 25.484375 16 z M 7 18.064453 L 2 22.013672 L 7 25.960938 L 7 23 L 13 23 L 13 21.025391 L 7 21.025391 L 7 18.064453 z M 14 26 L 14 27 L 19 27 L 19 26 L 14 26 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
