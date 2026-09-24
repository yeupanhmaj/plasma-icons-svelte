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
        d="M 1,2 A 7,9 0 0 0 5.503906,10.396484 2.5,2.5 0 0 1 5.755859,9.404297 6,8 0 0 1 2,2 Z M 14,2 A 6,8 0 0 1 10.248047,9.410156 2.5,2.5 0 0 1 10.496094,10.388672 7,9 0 0 0 15,2 Z" 
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m 8.00429,8.00074 a 2.499985,2.499985 0 0 0 -2.5,2.5 2.499985,2.499985 0 0 0 2.5,2.5 2.499985,2.499985 0 0 0 2.5,-2.5 2.499985,2.499985 0 0 0 -2.5,-2.5 m 0,1 a 1.5,1.5 0 0 1 1.5,1.5 1.5,1.5 0 0 1 -1.5,1.5 1.5,1.5 0 0 1 -1.5,-1.5 1.5,1.5 0 0 1 1.5,-1.5"
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
     d="M 1 2 A 10 15 0 0 0 9 16.679688 L 9 15.636719 A 9 14 0 0 1 2 2 L 1 2 z M 20 2 A 9 14 0 0 1 13 15.632812 L 13 16.695312 A 10 15 0 0 0 21 2 L 20 2 z M 1 15 L 1 18 L 4 18 L 4 17 L 5 17 L 5 16 L 4 16 L 4 15 L 1 15 z M 18 15 L 18 16 L 17 16 L 17 17 L 18 17 L 18 18 L 21 18 L 21 15 L 18 15 z M 2 16 L 3 16 L 3 17 L 2 17 L 2 16 z M 6 16 L 6 17 L 7 17 L 7 16 L 6 16 z M 15 16 L 15 17 L 16 17 L 16 16 L 15 16 z M 19 16 L 20 16 L 20 17 L 19 17 L 19 16 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11 14 A 2.5 2.5 0 0 0 8.5 16.5 A 2.5 2.5 0 0 0 11 19 A 2.5 2.5 0 0 0 13.5 16.5 A 2.5 2.5 0 0 0 11 14 z M 11 15 A 1.5 1.5 0 0 1 12.5 16.5 A 1.5 1.5 0 0 1 11 18 A 1.5 1.5 0 0 1 9.5 16.5 A 1.5 1.5 0 0 1 11 15 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
