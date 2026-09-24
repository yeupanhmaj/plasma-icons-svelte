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
     d="M 4.0039062 8 A 3 3 0 0 0 1.0039062 11 A 3 3 0 0 0 4.0039062 14 A 3 3 0 0 0 6.0039062 13.232422 L 6.0039062 14.001953 L 7.0039062 14.001953 L 7.0039062 8.0019531 L 6.0039062 8.0019531 L 6.0039062 8.7714844 A 3 3 0 0 0 4.0039062 8.0019531 L 4.0039062 8 z M 9 8 L 9 14 L 10 14 L 10 13.230469 A 3 3 0 0 0 12 14 A 3 3 0 0 0 15 11 A 3 3 0 0 0 12 8 A 3 3 0 0 0 10 8.7675781 L 10 8 L 9 8 z M 12 9 A 2 2 0 0 1 14 11 A 2 2 0 0 1 12 13 A 2 2 0 0 1 10 11 A 2 2 0 0 1 12 9 z M 4.0039062 9.0019531 A 2 2 0 0 1 6.0039062 11.001953 A 2 2 0 0 1 4.0039062 13.001953 A 2 2 0 0 1 2.0039062 11.001953 A 2 2 0 0 1 4.0039062 9.0019531 z "
     class="ColorScheme-Text"/>
  <path
     style="fill:#1d99f3"
     d="M 7 2 L 4 4.5 L 7 7 L 7 2 z M 9 2 L 9 7 L 12 4.5 L 9 2 z " />
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
	d="M 5 11 A 4 4 0 0 0 1 15 A 4 4 0 0 0 5 19 A 4 4 0 0 0 8 17.638672 L 8 19 L 9 19 L 9 15 L 9 11 L 8 11 L 8 12.361328 A 4 4 0 0 0 5 11 z M 13 11 L 13 15 L 13 19 L 14 19 L 14 17.638672 A 4 4 0 0 0 17 19 A 4 4 0 0 0 21 15 A 4 4 0 0 0 17 11 A 4 4 0 0 0 14 12.361328 L 14 11 L 13 11 z M 5 12 A 3 3 0 0 1 8 15 A 3 3 0 0 1 5 18 A 3 3 0 0 1 2 15 A 3 3 0 0 1 5 12 z M 17 12 A 3 3 0 0 1 20 15 A 3 3 0 0 1 17 18 A 3 3 0 0 1 14 15 A 3 3 0 0 1 17 12 z "
        class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
	 d="M 9 3 L 5 6 L 9 9 L 9 3 z M 13 3 L 13 9 L 17 6 L 13 3 z "
       class="ColorScheme-Accent"
     />
		</svg>
	{/if}
