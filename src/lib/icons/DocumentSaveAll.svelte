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
     d="M 5 2 L 5 4 L 2 4 L 2 14 L 12 14 L 12 12 L 14 12 L 14 4.28125 L 11.71875 2 L 11.6875 2 L 11 2 C 10.99995 1.99997 5 2 5 2 z M 6 3 L 11.28125 3 L 13 4.71875 L 13 5 L 13 11 L 12 11 L 12 6.28125 L 9.71875 4 L 9.6875 4 L 9 4 L 6 4 L 6 3 z M 3 5 L 4 5 L 4 8 L 9 8 L 9 7 L 9 5 L 9.28125 5 L 11 6.71875 L 11 7 L 11 13 L 10 13 L 10 11 L 4 11 L 4 13 L 3 13 L 3 5 z M 5 5 L 7 5 L 7 7 L 5 7 L 5 5 z M 5 12 L 9 12 L 9 13 L 5 13 L 5 12 z "
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
    d="M 7 3.0039062 L 7 4 L 7 7 L 8 7 L 8 4 L 10 4 L 10 7 L 11 7 L 11 4 L 13 4 L 13 7 L 16 7 L 16 4 L 16.582031 4 L 18 5.4179688 L 18 14 L 16 14 L 16 15 L 18 15 L 19 15 L 19 14 L 19 5.7578125 L 19 5.0039062 L 18.996094 5.0039062 L 17 3.0039062 L 7 3.0039062 z M 3 8 L 3 9 L 3 19 L 3 20 L 4 20 L 6 20 L 7 20 L 11 20 L 12 20 L 14 20 L 15 20 L 15 19 L 15 10.757812 L 15 10.003906 L 15 10 L 14.996094 10 L 13 8.0039062 L 13 8 L 3 8 z M 4 9 L 6 9 L 6 12 L 6 13 L 12 13 L 12 12 L 12 9 L 12.582031 9 L 14 10.417969 L 14 19 L 12 19 L 12 15 L 6 15 L 6 16 L 6 19 L 4 19 L 4 9 z M 7 9 L 9 9 L 9 12 L 7 12 L 7 9 z M 7 16 L 11 16 L 11 19 L 7 19 L 7 16 z "
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
     d="M 11 4 L 11 10 L 12 10 L 12 5 L 15 5 L 15 10 L 23 10 L 23 5 L 24.292969 5 L 27 7.7070312 L 27 20 L 25 20 L 25 14 L 22 14 L 22 15 L 24 15 L 24 20 L 22 20 L 22 21 L 28 21 L 28 7.3007812 L 27.992188 7.3007812 L 28 7.2929688 L 24.707031 4 L 24.699219 4.0078125 L 24.699219 4 L 24 4 L 11 4 z M 16 5 L 20 5 L 20 9 L 16 9 L 16 5 z M 4 11 L 4 28 L 21 28 L 21 14.300781 L 20.992188 14.300781 L 21 14.292969 L 17.707031 11 L 17.699219 11.007812 L 17.699219 11 L 17 11 L 4 11 z M 5 12 L 8 12 L 8 17 L 16 17 L 16 12 L 17.292969 12 L 20 14.707031 L 20 27 L 18 27 L 18 21 L 7 21 L 7 27 L 5 27 L 5 12 z M 9 12 L 13 12 L 13 16 L 9 16 L 9 12 z M 8 22 L 17 22 L 17 27 L 8 27 L 8 22 z "
     id="path90" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
