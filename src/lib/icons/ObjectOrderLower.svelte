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
     d="M 4 2 L 4 6 L 4 8.03125 L 2.65625 6.59375 L 2 7.28125 L 4.3125 9.78125 L 4.5 10 L 4.6875 9.78125 L 7 7.28125 L 6.34375 6.59375 L 5 8.03125 L 5 6 L 5 2 L 4 2 z M 7 3 L 7 4 L 14 4 L 14 3 L 7 3 z M 9 5 L 9 6 L 14 6 L 14 5 L 9 5 z M 8 7 L 8 8 L 14 8 L 14 7 L 8 7 z M 9 9 L 9 10 L 14 10 L 14 9 L 9 9 z M 2 11 L 2 12 L 14 12 L 14 11 L 2 11 z M 8 13 L 8 14 L 14 14 L 14 13 L 8 13 z "
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
     d="M 6 3 L 6 6.9394531 L 6 11.091797 L 3.71875 8.8457031 L 3 9.5546875 L 6.28125 12.785156 L 6.5 13 L 6.71875 12.785156 L 10 9.5546875 L 9.28125 8.8457031 L 7 11.091797 L 7 6.9394531 L 7 3 L 6 3 z M 10 4 L 10 5 L 19 5 L 19 4 L 10 4 z M 16 6 L 16 7 L 19 7 L 19 6 L 16 6 z M 12 8 L 12 9 L 19 9 L 19 8 L 12 8 z M 10 10 L 10 11 L 19 11 L 19 10 L 10 10 z M 15 12 L 15 13 L 19 13 L 19 12 L 15 12 z M 3 14 L 3 15 L 19 15 L 19 14 L 3 14 z M 11 16 L 11 17 L 19 17 L 19 16 L 11 16 z M 13 18 L 13 19 L 19 19 L 19 18 L 13 18 z "
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
     d="M 9.0390625 3.9960938 L 9.0390625 18.085938 L 5.2460938 14.292969 L 4.5390625 15 L 9.5390625 20 L 10.539062 19 L 14.539062 15 L 13.832031 14.292969 L 10.039062 18.085938 L 10.039062 3.9960938 L 9.0390625 3.9960938 z M 16 6 L 16 7 L 25 7 L 25 6 L 16 6 z M 16 9 L 16 10 L 22 10 L 22 9 L 16 9 z M 16 12 L 16 13 L 28 13 L 28 12 L 16 12 z M 16 15 L 16 16 L 27 16 L 27 15 L 16 15 z M 16 18 L 16 19 L 21 19 L 21 18 L 16 18 z M 4 21 L 4 22 L 28 22 L 28 21 L 4 21 z M 4 24 L 4 25 L 27 25 L 27 24 L 4 24 z M 16 27 L 16 28 L 28 28 L 28 27 L 16 27 z "
     id="path130" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
