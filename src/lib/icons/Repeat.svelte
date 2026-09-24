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
     d="M 7.2480469 1.9980469 L 3 2 L 2 3 L 2 4.3125 L 6 9.96875 L 6 12 L 7 12.5 L 7 9.625 L 3 4 L 3 3 L 13 3 L 13 4 L 10.867188 7 L 12.099609 7 L 13.998047 4.3125 L 13.998047 2.9980469 L 12.998047 1.9980469 L 7.2480469 1.9980469 z "
     class="ColorScheme-Text"/>
  <path
      style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
    d="M 8.99,8 8,8.99 10.01,11 8,13.01 8.99,14 11,11.99 13.01,14 14,13.01 11.99,11 14,8.99 13.01,8 11,10.01 Z" />
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
     d="M 5 3 L 4 4 L 4 5 L 4 5.3046875 L 9 12.367188 L 9 16 L 9 16.039062 L 12.990234 19 L 13 19 L 13 12.367188 L 18 5.3046875 L 18 4 L 17 3 L 5 3 z M 5 4 L 17 4 L 17 4.9882812 L 12.035156 12 L 12 12 L 12 12.048828 L 12 13 L 12 17.019531 L 10 15.535156 L 10 13 L 10 12.048828 L 10 12 L 9.9648438 12 L 5 4.9882812 L 5 4 z M 6 5 L 8 8 L 8 6 L 10 5 L 6 5 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#da4453;fill-opacity:1;stroke:none" 
     d="M 14.990234 13 L 14 13.990234 L 16.009766 16 L 14 18.009766 L 14.990234 19 L 17 16.990234 L 19.009766 19 L 20 18.009766 L 17.990234 16 L 20 13.990234 L 19.009766 13 L 17 15.009766 L 14.990234 13 z "
     />
		</svg>
	{/if}
