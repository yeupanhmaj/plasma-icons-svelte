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
     d="M 9 4 L 9 10 L 10 10 L 10 9.2304688 A 3 3 0 0 0 12 10 A 3 3 0 0 0 15 7 A 3 3 0 0 0 12 4 A 3 3 0 0 0 10 4.7675781 L 10 4 L 9 4 z M 12 5 A 2 2 0 0 1 14 7 A 2 2 0 0 1 12 9 A 2 2 0 0 1 10 7 A 2 2 0 0 1 12 5 z M 4.0039062 8 A 3 3 0 0 0 1.0039062 11 A 3 3 0 0 0 4.0039062 14 A 3 3 0 0 0 6.0039062 13.232422 L 6.0039062 14.001953 L 7.0039062 14.001953 L 7.0039062 8.0019531 L 6.0039062 8.0019531 L 6.0039062 8.7714844 A 3 3 0 0 0 4.0039062 8.0019531 L 4.0039062 8 z M 4.0039062 9.0019531 A 2 2 0 0 1 6.0039062 11.001953 A 2 2 0 0 1 4.0039062 13.001953 A 2 2 0 0 1 2.0039062 11.001953 A 2 2 0 0 1 4.0039062 9.0019531 z "
     class="ColorScheme-Text"/>
  <path
     style="fill:#1d99f3"
     d="M 7.5 2 L 7.5 14 L 8.5 14 L 8.5 12 L 15 12 L 15 11 L 8.5 11 L 8.5 2 L 7.5 2 z " />
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
	d="M 12 5 L 12 9 L 12 13 L 13 13 L 13 11.638672 A 4 4 0 0 0 16 13 A 4 4 0 0 0 20 9 A 4 4 0 0 0 16 5 A 4 4 0 0 0 13 6.3613281 L 13 5 L 12 5 z M 16 6 A 3 3 0 0 1 19 9 A 3 3 0 0 1 16 12 A 3 3 0 0 1 13 9 A 3 3 0 0 1 16 6 z M 5 11 A 4 4 0 0 0 1 15 A 4 4 0 0 0 5 19 A 4 4 0 0 0 8 17.638672 L 8 19 L 9 19 L 9 15 L 9 11 L 8 11 L 8 12.361328 A 4 4 0 0 0 5 11 z M 5 12 A 3 3 0 0 1 8 15 A 3 3 0 0 1 5 18 A 3 3 0 0 1 2 15 A 3 3 0 0 1 5 12 z "
       class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
	d="M 10 3 L 10 19 L 11 19 L 11 15 L 20 15 L 20 14 L 11 14 L 11 3 L 10 3 z "
       class="ColorScheme-Accent"
     />
		</svg>
	{/if}
