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
        d="m 7.95,2 -3.551,9 0.605,0 0,1 0.223,0 1.07,-2.727 4.434,0 L 11.768,12 13.004,12 9.178,2 Z m 0.611,1.207 c 0.102,0.342 0.64,1.893 1.617,4.65 l 0.201,0.506 -3.729,0 z"
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m 2,10 0,4 4,0 0,-4 z m 1,1 2,0 0,2 -2,0 z"
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
     d="M 9.9101562 3 L 6.5957031 12.59375 L 6.4726562 13 L 5.3671875 16 L 6 16 L 6 17 L 6.6582031 17 L 8.2832031 12.5625 L 13.716797 12.5625 L 15.341797 17 L 17 17 L 15.527344 13 L 15.404297 12.59375 L 12.089844 3 L 11.875 3 L 10.125 3 L 9.9101562 3 z M 11.015625 4.9375 L 13.195312 11.28125 L 8.8046875 11.28125 L 11.015625 4.9375 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 3 15 L 3 19 L 7 19 L 7 15 L 3 15 z M 4 16 L 6 16 L 6 18 L 4 18 L 4 16 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
