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
     d="M 8 2 L 8 3 L 14 3 L 14 2 L 8 2 z M 2 4 L 2 5 L 14 5 L 14 4 L 2 4 z M 9 6 L 9 7 L 14 7 L 14 6 L 9 6 z M 4.5019531 6.0019531 L 4.3125 6.2207031 L 2 8.7207031 L 2.65625 9.4082031 L 4 7.9707031 L 4 14 L 5.0019531 14 L 5.0019531 7.9707031 L 6.3457031 9.4082031 L 7.0019531 8.7207031 L 4.6894531 6.2207031 L 4.5019531 6.0019531 z M 8 8 L 8 9 L 14 9 L 14 8 L 8 8 z M 9 10 L 9 11 L 14 11 L 14 10 L 9 10 z M 7 12 L 7 13 L 14 13 L 14 12 L 7 12 z "
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
     d="M 13 3 L 13 4 L 19 4 L 19 3 L 13 3 z M 11 5 L 11 6 L 19 6 L 19 5 L 11 5 z M 3 7 L 3 8 L 19 8 L 19 7 L 3 7 z M 6.5 9 L 6.28125 9.2148438 L 3 12.445312 L 3.71875 13.154297 L 6 10.908203 L 6 15.060547 L 6 19 L 7 19 L 7 15.060547 L 7 10.908203 L 9.28125 13.154297 L 10 12.445312 L 6.71875 9.2148438 L 6.5 9 z M 15 9 L 15 10 L 19 10 L 19 9 L 15 9 z M 10 11 L 10 12 L 19 12 L 19 11 L 10 11 z M 12 13 L 12 14 L 19 14 L 19 13 L 12 13 z M 16 15 L 16 16 L 19 16 L 19 15 L 16 15 z M 10 17 L 10 18 L 19 18 L 19 17 L 10 17 z "
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
     d="M 16 4 L 16 5 L 28 5 L 28 4 L 16 4 z M 4 7 L 4 8 L 27 8 L 27 7 L 4 7 z M 4 10 L 4 11 L 28 11 L 28 10 L 4 10 z M 9.5390625 12 L 4.5390625 17 L 5.2460938 17.707031 L 9.0390625 13.914062 L 9.0390625 28.003906 L 10.039062 28.003906 L 10.039062 13.914062 L 13.832031 17.707031 L 14.539062 17 L 10.539062 13 L 9.5390625 12 z M 16 13 L 16 14 L 21 14 L 21 13 L 16 13 z M 16 16 L 16 17 L 27 17 L 27 16 L 16 16 z M 16 19 L 16 20 L 28 20 L 28 19 L 16 19 z M 16 22 L 16 23 L 22 23 L 22 22 L 16 22 z M 16 25 L 16 26 L 25 26 L 25 25 L 16 25 z "
     id="path116" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
