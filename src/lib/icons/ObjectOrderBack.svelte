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
     d="M 4 2 L 4 10.029297 L 2.65625 8.5917969 L 2 9.2792969 L 4.3125 11.779297 L 4.5019531 11.998047 L 4.6894531 11.779297 L 7.0019531 9.2792969 L 6.3457031 8.5917969 L 5.0019531 10.029297 L 5.0019531 2 L 4 2 z M 7 3 L 7 4 L 14 4 L 14 3 L 7 3 z M 9 5 L 9 6 L 14 6 L 14 5 L 9 5 z M 8 7 L 8 8 L 14 8 L 14 7 L 8 7 z M 9 9 L 9 10 L 14 10 L 14 9 L 9 9 z M 7 11 L 7 12 L 14 12 L 14 11 L 7 11 z M 2 13 L 2 14 L 14 14 L 14 13 L 2 13 z "
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
     d="M 6 3 L 6 6.9394531 L 6 15.091797 L 3.71875 12.845703 L 3 13.554688 L 6.28125 16.785156 L 6.5 17 L 6.71875 16.785156 L 10 13.554688 L 9.28125 12.845703 L 7 15.091797 L 7 6.9394531 L 7 3 L 6 3 z M 10 4 L 10 5 L 19 5 L 19 4 L 10 4 z M 16 6 L 16 7 L 19 7 L 19 6 L 16 6 z M 12 8 L 12 9 L 19 9 L 19 8 L 12 8 z M 10 10 L 10 11 L 19 11 L 19 10 L 10 10 z M 15 12 L 15 13 L 19 13 L 19 12 L 15 12 z M 12 14 L 12 15 L 19 15 L 19 14 L 12 14 z M 11 16 L 11 17 L 19 17 L 19 16 L 11 16 z M 3 18 L 3 19 L 19 19 L 19 18 L 3 18 z "
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
     d="M 9.0390625 3.9960938 L 9.0390625 24.085938 L 5.2460938 20.292969 L 4.5390625 21 L 9.5390625 26 L 10.539062 25 L 14.539062 21 L 13.832031 20.292969 L 10.039062 24.085938 L 10.039062 3.9960938 L 9.0390625 3.9960938 z M 16 6 L 16 7 L 25 7 L 25 6 L 16 6 z M 16 9 L 16 10 L 22 10 L 22 9 L 16 9 z M 16 12 L 16 13 L 28 13 L 28 12 L 16 12 z M 16 15 L 16 16 L 27 16 L 27 15 L 16 15 z M 16 18 L 16 19 L 21 19 L 21 18 L 16 18 z M 16 21 L 16 22 L 28 22 L 28 21 L 16 21 z M 16 24 L 16 25 L 27 25 L 27 24 L 16 24 z M 4 27 L 4 28 L 28 28 L 28 27 L 4 27 z "
     id="path42" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
