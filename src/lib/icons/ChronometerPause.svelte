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
     d="M 5.2558594 2.5976562 C 3.8841694 3.1992162 2.74191 4.2168562 2 5.5039062 L 2.8671875 6.0039062 C 3.5025175 4.9029763 4.4774706 4.0328381 5.6503906 3.5175781 L 5.2558594 2.5976562 z M 10.744141 2.5976562 L 10.349609 3.5175781 C 11.522527 4.0328363 12.497481 4.90298 13.132812 6.0039062 L 14 5.5039062 C 13.258085 4.2168579 12.115833 3.1992164 10.744141 2.5976562 z M 8 4 A 5 5 0 0 0 3 9 A 5 5 0 0 0 8 14 A 5 5 0 0 0 13 9 A 5 5 0 0 0 8 4 z M 8 5 A 4 4 0 0 1 12 9 A 4 4 0 0 1 8 13 A 4 4 0 0 1 4 9 A 4 4 0 0 1 8 5 z M 6 7 L 6 11 L 7 11 L 7 7 L 6 7 z M 9 7 L 9 11 L 10 11 L 10 7 L 9 7 z "
     class="ColorScheme-Text"
     />
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
	 d="M 6.8769531 3 C 5.2125201 3.856171 3.856173 5.2125201 3 6.8769531 L 3 7 L 3.921875 7.3066406 C 4.676479 5.8567456 5.8567456 4.676479 7.3066406 3.921875 L 7 3 L 6.8769531 3 z M 15.005859 3 L 14.699219 3.921875 C 16.149109 4.676485 17.329374 5.8567506 18.083984 7.3066406 L 19.005859 7 L 19.005859 6.8769531 C 18.149689 5.2125231 16.793336 3.856173 15.128906 3 L 15.005859 3 z M 11 5 C 7.122005 5 4 8.122005 4 12 C 4 15.877995 7.122005 19 11 19 C 14.877995 19 18 15.877995 18 12 C 18 8.122005 14.877995 5 11 5 z M 11 6 C 14.323996 6 17 8.676004 17 12 C 17 15.323996 14.323996 18 11 18 C 7.676004 18 5 15.323996 5 12 C 5 8.676004 7.676004 6 11 6 z M 7.9980469 9.0019531 L 7.9980469 15.001953 L 9.9980469 15.001953 L 9.9980469 9.0019531 L 7.9980469 9.0019531 z M 12.005859 9.0019531 L 12.005859 15.001953 L 14.005859 15.001953 L 14.005859 9.0019531 L 12.005859 9.0019531 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
