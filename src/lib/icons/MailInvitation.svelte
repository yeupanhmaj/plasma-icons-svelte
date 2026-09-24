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
     d="M 3 2 L 3 4 L 1 6 L 1 14 L 9 14 L 9 13 L 2 13 L 2 7 L 3.9980469 7 L 4 7 L 7.9785156 8.9902344 L 7.9785156 8.9921875 L 8 9 L 8.0214844 8.9921875 L 8.0214844 8.9902344 L 12 7 L 12.001953 7 L 13 7 L 14 7 L 14 9 L 15 9 L 15 6 L 13 4 L 13 2 L 3 2 z M 4 3 L 12 3 L 12 5.8632812 L 11.753906 6.0058594 L 8 7.8828125 L 4.2460938 6.0058594 L 4 5.8691406 L 4 3 z M 5 4 L 5 5 L 11 5 L 11 4 L 5 4 z M 12 9 A 1 1 0 0 0 11 10 A 1 1 0 0 0 12 11 A 1 1 0 0 0 13 10 A 1 1 0 0 0 12 9 z M 10.679688 12 A 2 2 0 0 0 10 13.5 L 10 14 L 14 14 L 14 13.5 A 2 2 0 0 0 13.320312 12 L 10.679688 12 z "
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
    d="M 3 3 L 3 4 L 3 5 L 3 6 L 1 9 L 1 10 L 1 11.400391 L 1 12 L 1 18 L 1 18.414062 L 1 19 L 2 19 L 8 19 L 14 19 L 14 18 L 2 18 L 2 17.414062 L 2 16 L 2 12 L 2 11 L 2 10.400391 L 2 10 L 2.4003906 10 L 3 10 L 4.078125 10 L 11 13.996094 L 17.921875 10 L 18 10 L 19 10 L 20 10 L 20 10.400391 L 20 11 L 20 12 L 21 12 L 21 11.400391 L 21 9.9863281 L 21 9 L 19 6 L 19 3 L 4 3 L 3 3 z M 4 4 L 18 4 L 18 5 L 18 8.7988281 L 11 12.839844 L 4 8.7988281 L 4 5 L 4 4 z M 5 5 L 5 5.9863281 L 4.9863281 6 L 5 6 L 17 6 L 17.013672 6 L 17 5.9863281 L 17 5 L 5 5 z M 5 7 L 5 8 L 12 8 L 12 7 L 5 7 z M 18.5 12 C 17.669 12 17 12.669 17 13.5 C 17 14.331 17.669 15 18.5 15 C 19.331 15 20 14.331 20 13.5 C 20 12.669 19.331 12 18.5 12 z M 18 16 C 16.892 16 16 16.892 16 18 L 16 19 L 21 19 L 21 18 C 21 16.892 20.108 16 19 16 L 18 16 z "
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
     d="M 5 5 L 5 9 L 2 13 L 2 27 L 20 27 L 20 26 L 3 26 L 3 14 L 5 14 L 5.7871094 14 L 16 19.570312 L 26.212891 14 L 27 14 L 29 14 L 29 16 L 30 16 L 30 13 L 27 9 L 27 5 L 5 5 z M 6 6 L 26 6 L 26 12.974609 L 16 18.429688 L 6 12.974609 L 6 6 z M 8 8 L 8 9 L 24 9 L 24 8 L 8 8 z M 8 11 L 8 12 L 17 12 L 17 11 L 8 11 z M 25.5 17 C 24.119288 17 23 18.119288 23 19.5 C 23 20.880712 24.119288 22 25.5 22 C 26.880712 22 28 20.880712 28 19.5 C 28 18.119288 26.880712 17 25.5 17 z M 25.5 23 C 23.567004 22.999999 22 24.79086 22 27 L 29 27 C 29 24.79086 27.432996 22.999999 25.5 23 z M 25.5 24 C 26.55817 24.0018 27.500793 24.802816 27.853516 26 L 23.146484 26 C 23.499207 24.802815 24.44183 24.001782 25.5 24 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
