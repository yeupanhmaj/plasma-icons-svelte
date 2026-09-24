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

	{#if numericSize <= 27}
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
        d="M 10 3 L 10 10 L 12 10 L 12 3 L 10 3 z M 9 3.265625 C 5.5444518 4.1502188 3 7.2610109 3 11 C 3 15.432 6.568 19 11 19 C 15.432 19 19 15.432 19 11 C 19 7.2610109 16.455548 4.1502188 13 3.265625 L 13 4.3027344 C 15.895041 5.15992 18 7.819625 18 11 C 18 14.878 14.878 18 11 18 C 7.122 18 4 14.878 4 11 C 4 7.819625 6.1049587 5.15992 9 4.3027344 L 9 3.265625 z " 
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
     d="M 15,4 15,4.05078 15,5.054686 15,13 17,13 17,5.050781 17,4.046875 17,4 16,4 15,4 Z m 3,0.169922 0,1.021484 A 11,11 0 0 1 27,16 11,11 0 0 1 16,27 11,11 0 0 1 5,16 11,11 0 0 1 14,5.189453 L 14,4.181641 A 12,12 0 0 0 4,16 12,12 0 0 0 16,28 12,12 0 0 0 28,16 12,12 0 0 0 18,4.169922 Z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
