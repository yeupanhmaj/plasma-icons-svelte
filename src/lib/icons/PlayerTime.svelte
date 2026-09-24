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
     d="M 5.2597656 2.5996094 C 3.8884717 3.200699 2.7475734 4.2193554 2.0058594 5.5058594 L 2.8710938 6.0058594 C 3.5060937 4.9048594 4.4812969 4.0345313 5.6542969 3.5195312 L 5.2597656 2.5996094 z M 10.75 2.5996094 L 10.355469 3.5195312 C 11.528469 4.0345313 12.503672 4.9048594 13.138672 6.0058594 L 14.005859 5.5058594 C 13.264145 4.2193554 12.121294 3.200699 10.75 2.5996094 z M 8.0039062 4 A 5 5 0 0 0 3.0039062 9 A 5 5 0 0 0 8.0039062 14 A 5 5 0 0 0 13.003906 9 A 5 5 0 0 0 8.0039062 4 z M 8.0039062 5 A 4 4 0 0 1 12.003906 9 A 4 4 0 0 1 8.0039062 13 A 4 4 0 0 1 4.0039062 9 A 4 4 0 0 1 8.0039062 5 z M 6.5 6.5 L 6.5 11.5 L 10 9 L 6.5 6.5 z "
     class="ColorScheme-Text"/>
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
     d="M 6.8769531 3 C 5.2125198 3.8561715 3.8561715 5.2125198 3 6.8769531 L 3 7 L 3.921875 7.3066406 C 4.6764786 5.8567461 5.8567461 4.6764786 7.3066406 3.921875 L 7 3 L 6.8769531 3 z M 15.005859 3 L 14.699219 3.921875 C 16.149109 4.676485 17.329374 5.8567506 18.083984 7.3066406 L 19.005859 7 L 19.005859 6.8769531 C 18.149689 5.2125231 16.793336 3.85617 15.128906 3 L 15.005859 3 z M 11 5 C 7.1220048 5 4 8.1220048 4 12 C 4 15.877995 7.1220048 19 11 19 C 14.877995 19 18 15.877995 18 12 C 18 8.1220048 14.877995 5 11 5 z M 11 6 C 14.323996 6 17 8.676004 17 12 C 17 15.323996 14.323996 18 11 18 C 7.676004 18 5 15.323996 5 12 C 5 8.676004 7.676004 6 11 6 z M 9 9 L 9 15 L 14 12 L 9 9 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
