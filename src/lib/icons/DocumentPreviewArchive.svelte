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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 2 L 3 14 L 10 14 L 10 13 L 4 13 L 4 3 L 9 3 L 9 6 L 12 6 L 12 11 L 13 11 L 13 5 L 10 2 L 3 2 Z"/>
    <path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 8.48828 7 C 7.10757 7 5.98828 8.11929 5.98828 9.5 C 5.98828 10.8807 7.10757 12 8.48828 12 C 8.97811 11.9992 9.45691 11.8546 9.86523 11.584 L 12.2813 14 L 12.9883 13.293 L 10.5723 10.877 C 10.8428 10.4686 10.9875 9.98983 10.9883 9.5 C 10.9883 8.11929 9.86899 7 8.48828 7 Z M 8.48828 8 C 9.31671 8 9.98828 8.67157 9.98828 9.5 C 9.98828 10.3284 9.31671 11 8.48828 11 C 7.65985 11 6.98828 10.3284 6.98828 9.5 C 6.98828 8.67157 7.65985 8 8.48828 8 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4 3 L 4 19 L 15 19 L 15 18 L 5 18 L 5 4 L 13 4 L 13 8 L 17 8 L 17 16 L 18 16 L 18 7 L 14 3 L 4 3 Z M 13 11 C 11.338 11 10 12.338 10 14 C 10 15.662 11.338 17 13 17 C 13.6494 17 14.2464 16.7914 14.7363 16.4434 L 17.293 19 L 18 18.293 L 15.4434 15.7363 C 15.7914 15.2464 16 14.6494 16 14 C 16 12.338 14.662 11 13 11 Z M 13 12 C 14.108 12 15 12.892 15 14 C 15 15.108 14.108 16 13 16 C 11.892 16 11 15.108 11 14 C 11 12.892 11.892 12 13 12 Z"/>
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
     d="M 6 4 L 6 28 L 14 28 L 14 27 L 7 27 L 7 5 L 18 5 L 18 12 L 25 12 L 25 16 L 26 16 L 26 11 L 19 4 L 18 4 L 6 4 z M 18.5 16 C 16.007 16 14 18.01 14 20.5 C 14 22.993 16.01 25 18.5 25 C 19.563643 25 20.526341 24.618801 21.294922 24.005859 L 25.292969 28.003906 L 26 27.296875 L 22.001953 23.298828 C 22.617604 22.529048 23 21.565338 23 20.5 C 23 18.007 20.99 16 18.5 16 z M 18.5 17 C 20.439 17 22 18.561 22 20.5 C 22 22.439 20.439 24 18.5 24 C 16.561 24 15 22.439 15 20.5 C 15 18.561 16.561 17 18.5 17 z "
     id="path32" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
