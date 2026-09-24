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
       d="M 2 2 L 2 13.28125 L 2 14 L 14 14 L 14 13 L 14 12 L 14 11 L 14 10 L 14 2 L 2 2 z M 3 3 L 13 3 L 13 9 L 11 7 L 7.65625 10.34375 L 6.3125 9 L 6.28125 9 L 3 12.28125 L 3 3 z M 6 4 C 4.8954305 4 4 4.8954305 4 6 C 4 7.1045695 4.8954305 8 6 8 C 7.1045695 8 8 7.1045695 8 6 C 8 4.8954305 7.1045695 4 6 4 z "
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
    d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 18 L 4 18 L 4 4 z M 7.5 5 C 6.115 5 5 6.115 5 7.5 C 5 8.885 6.115 10 7.5 10 C 8.885 10 10 8.885 10 7.5 C 10 6.115 8.885 5 7.5 5 z M 7.5 6 C 8.331 6 9 6.669 9 7.5 C 9 8.331 8.331 9 7.5 9 C 6.669 9 6 8.331 6 7.5 C 6 6.669 6.669 6 7.5 6 z M 13.994141 10 L 10.648438 13.34375 L 9.3066406 12 L 9.3007812 12.007812 L 9.2929688 12 L 5 16.292969 L 5.7070312 17 L 9.2988281 13.408203 L 9.9414062 14.050781 L 10.648438 14.757812 L 11.355469 14.050781 L 14 11.40625 L 16.292969 13.699219 L 17 12.992188 L 14.007812 10 L 14 10.007812 L 13.994141 10 z "
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="m4 4v24h24v-24zm1 1h22v22h-22zm6 2a4 4 0 0 0 -4 4 4 4 0 0 0 4 4 4 4 0 0 0 4 -4 4 4 0 0 0 -4 -4m0 1a3 3 0 0 1 3 3 3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3 3 3 0 0 1 3 -3m9.5 6.793l-5 5-2-2-6.5 6.5.707.707 5.793-5.793 2 2 5-5 3.793 3.793.707-.707z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
