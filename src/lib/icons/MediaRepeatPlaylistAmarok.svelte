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
     d="M 3 2 A 1 1 0 0 0 2 3 A 1 1 0 0 0 3 4 A 1 1 0 0 0 4 3 A 1 1 0 0 0 3 2 z M 5 2 L 5 3 L 7 3 L 13 3 L 13 2 L 7 2 L 5 2 z M 5 4 L 5 5 L 7 5 L 11 5 L 11 4 L 7 4 L 5 4 z M 12 7 L 12 8 L 7 8 C 5.89201 8 5 8.89201 5 10 L 6 10 C 6 9.446 6.446 9 7 9 L 11 9 L 12 9 L 12 10 L 14 8.5 L 12 7 z M 3 8 A 1 1 0 0 0 2 9 A 1 1 0 0 0 3 10 A 1 1 0 0 0 4 9 A 1 1 0 0 0 3 8 z M 7 11 L 5 12.5 L 7 14 L 7 13 L 12 13 C 13.10799 13 14 12.10799 14 11 L 13 11 C 13 11.554 12.554 12 12 12 L 8 12 L 7 12 L 7 11 z "
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
    d="M 4.5,3 C 3.8,3 3,3.7 3,4.5 3,5.3 3.8,6 4.5,6 5.33,6 6,5.3 6,4.5 6,3.7 5.33,3 4.5,3 Z M 8,3 V 4 H 19 V 3 Z m 0,2 v 1 h 4 V 5 Z M 4.5,9 C 3.7,9 3,9.71 3,10.5 3,11.3 3.7,12 4.5,12 5.3,12 6,11.3 6,10.5 6,9.71 5.3,9 4.5,9 Z M 8,9 v 1 H 19 V 9 Z m 4,3 -2,1.5 2,1.5 v -1 h 5 c 0.5,0 1,0.4 1,1 h 1 c 0,-1.1 -0.9,-2 -2,-2 H 12 Z M 4.5,15 C 3.7,15 3,15.7 3,16.5 3,17.3 3.7,18 4.5,18 5.3,18 6,17.3 6,16.5 6,15.7 5.3,15 4.5,15 Z m 5.5,1 c 0,1.1 0.9,2 2,2 h 5 v 1 L 19,17.5 17,16 v 1 h -5 c -0.5,0 -1,-0.4 -1,-1 z"
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
