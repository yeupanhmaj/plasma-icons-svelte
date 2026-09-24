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
     d="m 7,4 0,0 0,3 7,0 0,2 -7,0 0,3 0,0 -5,-4 z"
     class="ColorScheme-Text"
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
    d="M 1 3 L 1 12 L 2 12 L 2 4.2226562 L 2 4 L 2.0488281 4 L 2.2714844 4.2226562 L 8.0234375 9.9765625 L 6 12 L 7.4140625 12 L 8.7304688 10.683594 L 10.183594 12.134766 L 11 12.949219 L 11.001953 12.949219 L 11.816406 12.134766 L 13.269531 10.683594 L 19.537109 16.951172 L 20 17.414062 L 20 18 L 14 18 L 8 18 L 8 19 L 14 19 L 20 19 L 21 19 L 21 18.414062 L 21 18 L 21 12 L 21 4 L 21 3 L 20 3 L 19.537109 3 L 2.4628906 3 L 2 3 L 1.0488281 3 L 1 3 z M 3.4628906 4 L 18.537109 4 L 11 11.537109 L 3.4628906 4 z M 19.951172 4 L 20 4 L 20 4.2226562 L 20 12 L 20 16 L 13.976562 9.9765625 L 19.728516 4.2226562 L 19.951172 4 z M 4 13 L 1 16 L 4 19 L 4 17 L 5 17 L 6 17 L 6 15 L 5 15 L 4 15 L 4 13 z "
    class="ColorScheme-Text"
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
     d="M 2 5 L 2 18 L 3 18 L 3 6 L 3.0234375 6 L 12.070312 14.841797 L 11 15.888672 L 11 17.285156 L 12.785156 15.541016 L 16 18.683594 L 19.214844 15.541016 L 28.570312 24.683594 L 29 25.111328 L 29 26 L 14 26 L 14 27 L 30 27 L 30 24.683594 L 30 5 L 2 5 z M 4.453125 6 L 27.546875 6 L 16 17.285156 L 4.453125 6 z M 28.976562 6 L 29 6 L 29 23.707031 L 19.929688 14.841797 L 28.976562 6 z M 7 19 L 2 23 L 7 27 L 7 24 L 13 24 L 13 22 L 7 22 L 7 19 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
