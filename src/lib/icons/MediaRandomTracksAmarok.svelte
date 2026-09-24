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
     d="M 3 2 A 1 1 0 0 0 2 3 A 1 1 0 0 0 3 4 A 1 1 0 0 0 4 3 A 1 1 0 0 0 3 2 z M 5 2 L 5 3 L 7 3 L 13 3 L 13 2 L 7 2 L 5 2 z M 5 4 L 5 5 L 7 5 L 11 5 L 11 4 L 7 4 L 5 4 z M 12 7 L 12 8 L 10 8 C 8.89201 8 8 8.89201 8 10 L 8 11 C 8 11.554 7.554 12 7 12 L 5 12 L 5 13 L 6 13 L 7 13 C 8.10799 13 9 12.10799 9 11 L 9 10 C 9 9.446 9.446 9 10 9 L 11 9 L 12 9 L 12 10 L 14 8.5 L 12 7 z M 3 8 A 1 1 0 0 0 2 9 A 1 1 0 0 0 3 10 A 1 1 0 0 0 4 9 A 1 1 0 0 0 3 8 z M 5 8 L 5 9 L 7 9 L 7 8 L 5 8 z M 12 11 L 12 12 L 10 12 L 10 13 L 12 13 L 12 14 L 14 12.5 L 12 11 z "
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
    d="M 4.5,3 C 3.8,3 3,3.7 3,4.5 3,5.3 3.8,6 4.5,6 5.33,6 6,5.3 6,4.5 6,3.7 5.33,3 4.5,3 Z M 8,3 V 4 H 19 V 3 Z m 0,2 v 1 h 4 V 5 Z M 4.5,9 C 3.732,9 3,9.71 3,10.5 3,11.3 3.732,12 4.5,12 5.3,12 6,11.3 6,10.5 6,9.71 5.3,9 4.5,9 Z M 17,11 v 1 h -1 -0 C 14.3,12 13,13.3 13,14.976562 V 15 c 0,1.108 -0.892,2 -2,2 H 8 v 1 h 3 0 C 12.7,18 14,16.672447 14,15 V 15 c 0,-1.108 0.892,-2 2,-2 h 1 v 1 l 2,-1.5 z m -9,1 v 1 h 3 c 0.4,0 0.766765,0.1 1.078125,0.3 0.0757,-0.33686 0.2,-0.64922 0.4,-0.9 C 12,12.1 11.551108,12 11,12 H 11 Z M 4.5,15 C 3.732,15 3,15.7 3,16.5 3,17.3 3.732,18 4.5,18 5.3,18 6,17.3 6,16.5 6,15.7 5.3,15 4.5,15 Z M 17,16 v 1 h -1 c -0.4,0 -0.8,-0.1 -1.1,-0.3 -0.0757,0.33686 -0.209872,0.64922 -0.4,0.9 C 14.962083,17.852191 15.448892,18 15.976562,18 H 16 17 v 1 l 2,-1.5 z"
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
