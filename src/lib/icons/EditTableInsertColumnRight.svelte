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
        d="M 2 2 L 2 14 L 9 14 L 9 13 L 7 13 L 7 10 L 9 10 L 9 9 L 7 9 L 7 7 L 9 7 L 9 6 L 7 6 L 7 3 L 9 3 L 9 2 L 3 2 L 2 2 z M 3 3 L 6 3 L 6 6 L 3 6 L 3 3 z M 3 7 L 6 7 L 6 9 L 3 9 L 3 7 z M 3 10 L 6 10 L 6 13 L 3 13 L 3 10 z M 10 10 L 10 14 L 14 12 L 10 10 z "
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 9,2 10,2 10,3.281 11.281,2 12.719,2 10,4.719 l 0,2.563 3,-3 0,-2.281 1,0 0,7 -1.719,0 L 13,8.282 13,5.719 10,8.719 10,9 9,9 9,3 Z"
        class="ColorScheme-Accent"
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
     d="M 3 3 L 3 4 L 3 19 L 4 19 L 13 19 L 13 18 L 9 18 L 9 16 L 13 16 L 13 15 L 9 15 L 9 13 L 13 13 L 19 13 L 19 12 L 13 12 L 9 12 L 9 10 L 13 10 L 13 9 L 9 9 L 9 7 L 13 7 L 13 6 L 9 6 L 9 5 L 9 4 L 13 4 L 19 4 L 19 3 L 13 3 L 3 3 z M 4 4 L 8 4 L 8 5 L 8 6 L 7 6 L 4 6 L 4 4 z M 4 7 L 7 7 L 8 7 L 8 9 L 4 9 L 4 7 z M 4 10 L 8 10 L 8 12 L 4 12 L 4 10 z M 4 13 L 8 13 L 8 15 L 7 15 L 4 15 L 4 13 z M 14 14 L 14 19 L 19 16.5 L 14 14 z M 4 16 L 7 16 L 8 16 L 8 17.099609 L 8 18 L 4 18 L 4 16 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 13 3 L 13 4 L 13 9.2929688 L 13 12 L 13 13 L 19 13 L 19 12 L 19 4 L 19 3 L 13 3 z M 14 4 L 18 4 L 18 4.2929688 L 14 8.2929688 L 14 4 z M 18 5.7070312 L 18 8.2929688 L 14.292969 12 L 14 12 L 14 9.7070312 L 18 5.7070312 z M 18 9.7070312 L 18 12 L 15.707031 12 L 18 9.7070312 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
