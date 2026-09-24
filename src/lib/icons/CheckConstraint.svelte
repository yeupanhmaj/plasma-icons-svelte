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
     d="M 8 2 A 5 6 0 0 0 3 8 A 5 6 0 0 0 8 14 A 5 6 0 0 0 12.101562 11.417969 L 11.326172 10.771484 A 4 5 0 0 1 8 13 A 4 5 0 0 1 4 8 A 4 5 0 0 1 8 3 A 4 5 0 0 1 11.326172 5.2285156 L 12.105469 4.578125 A 5 6 0 0 0 8 2 z "
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
			<g transform="translate(-421.71429,-525.79074)">
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
	 d="M 12 7 L 12 15 L 12 19 L 13 19 L 13 17.638672 A 4 4 0 0 0 16 19 A 4 4 0 0 0 20 15 A 4 4 0 0 0 16 11 A 4 4 0 0 0 13 12.361328 L 13 7 L 12 7 z M 6 11 A 4 4 0 0 0 2 15 A 4 4 0 0 0 6 19 A 4 4 0 0 0 9 17.638672 L 9 19 L 10 19 L 10 11 L 9 11 L 9 12.361328 A 4 4 0 0 0 6 11 z M 6 12 A 3 3 0 0 1 9 15 A 3 3 0 0 1 6 18 A 3 3 0 0 1 3 15 A 3 3 0 0 1 6 12 z M 16 12 A 3 3 0 0 1 19 15 A 3 3 0 0 1 16 18 A 3 3 0 0 1 13 15 A 3 3 0 0 1 16 12 z "
     transform="translate(421.71429,525.79074)"
      class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
	 d="m 434.71429,528.79074 3,4 3,-4 z"
	 class="ColorScheme-Accent"
     />
 </g>
		</svg>
	{/if}
