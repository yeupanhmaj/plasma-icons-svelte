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
       d="M 7 4 L 4 12 L 5 12 L 7 12 L 7.375 11 L 8 9.3339844 L 9 12 L 10 12 L 11 12 L 12.5 8 L 14 12 L 16 12 L 13 4 L 11 4 L 11.005859 4.015625 L 11 4.015625 L 10.625 5.015625 L 9.5039062 8.0078125 L 8 4 L 7 4 z M 11.503906 5.3417969 L 12 6.6660156 L 10.5 10.666016 L 10.003906 9.3417969 L 11.503906 5.3417969 z M 7 6.6660156 L 7.5 8 L 6.375 11 L 5.375 11 L 7 6.6660156 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 0 4 L 3 12 L 4 12 L 4.5 10.666016 L 7 4 L 6 4 L 5 4 L 3.5 8 L 2 4 L 1 4 L 0 4 z "
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
         d="M 0 6 L 3.5 14.75 L 4 16 L 5 16 L 5.5 14.75 L 9 6 L 8 6 L 7 6 L 4.5 12.25 L 2 6 L 1 6 L 0 6 z "
     class="ColorScheme-Text"
     />
      <path
         style="fill:currentColor;fill-opacity:1;stroke:none" 
         d="M 9 6 L 5 16 L 6 16 L 8 16 L 10.5 9.75 L 13 16 L 14 16 L 15 16 L 17.5 9.75 L 20 16 L 21 16 L 22 16 L 18 6 L 17 6 L 16 6 L 13.5 12.25 L 11 6 L 10 6 L 9 6 z M 9.5 7.25 L 10 8.5 L 7.4003906 15 L 6.4003906 15 L 9.5 7.25 z M 16.5 7.25 L 17 8.5 L 14.5 14.75 L 14 13.5 L 16.5 7.25 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
