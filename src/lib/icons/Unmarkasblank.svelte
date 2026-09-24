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
     d="M 2 2 L 2 14 L 5 14 L 5 13 L 3 13 L 3 3 L 5 3 L 5 2 L 2 2 z M 11 2 L 11 3 L 13 3 L 13 8 L 14 8 L 14 2 L 13 2 L 11 2 z M 4 10 L 4 12 L 8 12 L 8 11 L 5 11 L 5 10 L 4 10 z "
     class="ColorScheme-Text"/>
  <path
      style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
     d="M 9.71,9 9.003,9.707 10.796,11.5 9.003,13.293 9.71,14 11.503,12.207 13.296,14 14.003,13.293 12.21,11.5 14.003,9.707 13.296,9 11.503,10.793 Z"
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
     d="M 2 3 L 2 19 L 3 19 L 5 19 L 5 18 L 3 18 L 3 4 L 5 4 L 5 3 L 3 3 L 2 3 z M 16 3 L 16 4 L 18 4 L 18 13 L 19 13 L 19 3 L 18 3 L 16 3 z M 5 14 L 5 15 L 5 16 L 13 16 L 13 15 L 6 15 L 6 14 L 5 14 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#da4453;fill-opacity:1;stroke:none" 
     d="M 14.833984 14 L 14 14.833984 L 15.666016 16.5 L 14 18.166016 L 14.833984 19 L 16.5 17.333984 L 18.166016 19 L 19 18.166016 L 17.333984 16.5 L 19 14.833984 L 18.166016 14 L 16.5 15.666016 L 14.833984 14 z "
     />
		</svg>
	{/if}
