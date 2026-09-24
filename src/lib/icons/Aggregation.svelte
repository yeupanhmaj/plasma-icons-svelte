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
     d="M 7 2 L 7 6.6660156 L 4.5 10 L 7.5 14 L 10.5 10 L 8 6.6660156 L 8 2 L 7 2 z M 7.5 7.6699219 L 9.25 10.001953 L 7.5 12.332031 L 5.75 10.001953 L 7.5 7.6699219 z "
     class="ColorScheme-Text"/>
  <path
     d="M 7.5,12.33 9.25,9.998 7.5,7.666 5.75,9.998 Z"
     style="fill:currentColor;fill-opacity:0.5;stroke:none" 
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
     d="M 10 3 L 10 11.666016 L 7.5 15 L 10.5 19 L 13.5 15 L 11 11.666016 L 11 3 L 10 3 z M 10.5 12.667969 L 12.25 15 L 10.5 17.332031 L 8.75 15 L 10.5 12.667969 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.5;stroke:none" 
     d="M 10.5 12.667969 L 8.75 15 L 10.5 17.332031 L 12.25 15 L 10.5 12.667969 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
