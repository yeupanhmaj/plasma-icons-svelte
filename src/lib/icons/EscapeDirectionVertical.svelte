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
     class="ColorScheme-NegativeText"
    d="m 9.0019532,2.0039063 -2.0039064,0 0,4.9999999 2.0039064,0 0,-4.9999999 z m 0,7 -2.0039064,0 0,4.9999997 2.0039064,0 0,-4.9999997 z" />
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="m 2,2 0,12 12,0 0,-12 z m 0.99975,0.99975 9.99975,0 0,9.99975 -9.99975,0 z"
     class="ColorScheme-Text"
     id="path6" />
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="m 8,6.005 c -1.10475,0 -2.00025,0.8955 -2.00025,2.00025 0,1.10475 0.8955,2.00025 2.00025,2.00025 1.10475,0 2.00025,-0.8955 2.00025,-2.00025 C 10.00025,6.9005 9.10475,6.005 8,6.005 m 0,0.99975 c 0.552,0 0.99975,0.44775 0.99975,0.99975 C 8.99975,8.5565 8.552,9.00425 8,9.00425 7.448,9.00425 7.00025,8.5565 7.00025,8.0045 7.00025,7.4525 7.448,7.00475 8,7.00475"
     class="ColorScheme-Accent"
     id="path10" />
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
     d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 18 L 4 18 L 4 4 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#da4453;fill-opacity:1;stroke:none" 
     d="M 10 4 L 10 9 L 12 9 L 12 4 L 10 4 z M 10 13 L 10 18 L 12 18 L 12 13 L 10 13 z "
     class="ColorScheme-Accent"
     /> 
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11 8 C 9.34314 8 8 9.3431 8 11 C 8 12.6569 9.34314 14 11 14 C 12.65686 14 14 12.6569 14 11 C 14 9.3431 12.65686 8 11 8 z M 11 10 C 11.55228 10 12 10.4477 12 11 C 12 11.5523 11.55228 12 11 12 C 10.44772 12 10 11.5523 10 11 C 10 10.4477 10.44772 10 11 10 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
