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
			<path d="M 3 2 L 3 9 L 5 7 L 7 9 L 7 2 L 3 2 Z M 8 2 L 8 3 L 9 3 L 9 6 L 12 6 L 12 13 L 4 13 L 4 10 L 3 10 L 3 14 L 13 14 L 13 5 L 10 2 L 8 2 Z" fill="#d24d57"/>
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
			<path d="M 4 3 L 4 13 L 7 11 L 10 13 L 10 3 L 4 3 Z M 11 3 L 11 4 L 13 4 L 13 8 L 17 8 L 17 18 L 5 18 L 5 14 L 4 14 L 4 19 L 18 19 L 18 7 L 14 3 L 11 3 Z M 7 6 L 9 6 C 7.93838 7.56429 6.64844 9.03808 5 10 C 5.37765 8.71307 5.70447 7.3445 6.53507 6.26245 C 6.65702 6.13275 6.81187 6.00207 7 6 Z" fill="#d24d57"/>
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
			<path fill="#d24d57" d="M 16 4 L 16 5 L 18 5 L 18 12 L 25 12 L 25 27 L 7 27 L 7 19 L 6 19 L 6 28 L 26 28 L 26 11 L 19 4 L 16 4 Z"/>
    <path fill="#d24d57" d="M 6 4 L 6 18 L 10.5 15 L 15 18 L 15 4 L 6 4 Z M 13 8 C 12.08 10.361 10.191 11.443 8 13 C 8.833 8.506 9.4 8 13 8 Z"/>
		</svg>
	{/if}
