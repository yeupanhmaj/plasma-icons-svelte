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
     d="M 7,2 C 5.343,2 4,3.343 4,5 4,6.657 5.343,8 7,8 8.657,8 10,6.657 10,5 10,3.343 8.657,2 7,2 M 7,3 C 8.105,3 9,3.895 9,5 9,6.105 8.105,7 7,7 5.895,7 5,6.105 5,5 5,3.895 5.895,3 7,3 m 0,6 c -2.761,0 -5,2.01 -5,4.5 10e-4,0.167 0.012,0.334 0.033,0.5 l 9.93,0 C 11.986,13.834 11.998,13.667 12,13.5 12,11.015 9.761,9 7,9 m 0,1 c 1.987,0.002 3.671,1.279 3.955,3 l -7.91,0 C 3.329,11.279 5.013,10.002 7,10"
     class="ColorScheme-Text"
     />
  <path 
      d="m 13,2 0,4 1,0 0,-4 -1,0 z m 0,5 0,1 1,0 0,-1 -1,0 z"
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NeutralText"
   />
		</svg>
	{:else if numericSize <= 27}
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
     d="M 1 3 L 1 4 L 1 12 L 1 18 L 1 18.414062 L 1 19 L 2 19 L 8 19 L 14 19 L 14 18 L 8 18 L 2 18 L 2 17.414062 L 2.4628906 16.951172 L 8.7304688 10.683594 L 10.183594 12.134766 L 10.998047 12.949219 L 11 12.949219 L 11.816406 12.134766 L 13.269531 10.683594 L 14.585938 12 L 16 12 L 13.976562 9.9765625 L 19.728516 4.2226562 L 19.951172 4 L 20 4 L 20 4.2226562 L 20 12 L 21 12 L 21 3 L 20.951172 3 L 20 3 L 19.537109 3 L 2.4628906 3 L 2 3 L 1 3 z M 2 4 L 2.0488281 4 L 2.2714844 4.2226562 L 8.0234375 9.9765625 L 2 16 L 2 12 L 2 4.2226562 L 2 4 z M 3.4628906 4 L 18.537109 4 L 11 11.537109 L 3.4628906 4 z "
     class="ColorScheme-Text"
     />
    <path
     style="fill:#fdbc4b;fill-opacity:1;stroke:none"
     d="M 18 13 L 18 17 L 19 17 L 19 13 L 18 13 z M 18 18 L 18 19 L 19 19 L 19 18 L 18 18 z "
     />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 2,5 2,24.683594 2,27 19,27 19,26 3,26 3,25.111328 3.4296875,24.683594 12.785156,15.541016 16,18.683594 19.214844,15.541016 21,17.285156 21,15.888672 19.929688,14.841797 28.976562,6 29,6 l 0,8 1,0 0,-9 z M 3,6 3.0234375,6 12.070312,14.841797 3,23.707031 Z M 4.453125,6 27.546875,6 16,17.285156 Z"
     class="ColorScheme-Text"
     />
    <path
     style="fill:#fdbc4b;fill-opacity:1;stroke:none"
     d="M 24 15 L 24 23 L 26 23 L 26 15 L 24 15 z M 24 25 L 24 27 L 26 27 L 26 25 L 24 25 z "
     />
		</svg>
	{/if}
