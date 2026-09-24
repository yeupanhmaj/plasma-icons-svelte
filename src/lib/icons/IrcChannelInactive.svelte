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
     style="fill:currentColor;fill-opacity:0.5;stroke:none" 
     d="m 10.49997,7.00003 c 1.939,0 3.5,1.561 3.5,3.5 0,1.939 -1.561,3.5 -3.5,3.5 -1.939,0 -3.5,-1.561 -3.5,-3.5 0,-1.939 1.561,-3.5 3.5,-3.5 z"
     class="ColorScheme-Text" />
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 4 2 L 4 4 L 2 4 L 2 5 L 4 5 L 4 11 L 2 11 L 2 12 L 4 12 L 4 14 L 5 14 L 5 12 L 7.3457031 12 C 7.1981011 11.689116 7.0994754 11.353795 7.0488281 11 L 5 11 L 5 5 L 11 5 L 11 7.0488281 C 11.353795 7.0994754 11.689116 7.1981011 12 7.3457031 L 12 5 L 14 5 L 14 4 L 12 4 L 12 2 L 11 2 L 11 4 L 5 4 L 5 2 L 4 2 z M 13.951172 11 C 13.900525 11.353795 13.801899 11.689116 13.654297 12 L 14 12 L 14 11 L 13.951172 11 z M 12 13.654297 C 11.689116 13.801899 11.353795 13.900525 11 13.951172 L 11 14 L 12 14 L 12 13.654297 z "
     class="ColorScheme-Text" />
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
     d="M 7 3 L 7 7 L 3 7 L 3 8 L 7 8 L 7 14 L 3 14 L 3 15 L 7 15 L 7 19 L 8 19 L 8 15 L 11 15 L 11 14 L 8 14 L 8 8 L 14 8 L 14 11 L 15 11 L 15 8 L 19 8 L 19 7 L 15 7 L 15 3 L 14 3 L 14 7 L 8 7 L 8 3 L 7 3 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.51;stroke:none" 
     d="M 15.5 12 C 13.561 12 12 13.561 12 15.5 C 12 17.439 13.561 19 15.5 19 C 17.439 19 19 17.439 19 15.5 C 19 13.561 17.439 12 15.5 12 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
