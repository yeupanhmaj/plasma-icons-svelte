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
     d="M 1 2 L 1 14 L 9 14 L 9 13 L 2.65625 13 L 6.6425781 8.3496094 L 8 9.7070312 C 7.986852 9.6833613 14 3.7070312 14 3.7070312 L 14 8 L 15 8 L 15 2 L 1 2 z M 2.7070312 3 L 13.292969 3 L 8 8.2929688 L 2.7070312 3 z M 2 3.7070312 L 5.9335938 7.640625 L 2 12.230469 L 2 3.7070312 z M 12 8 C 10.338 8 9 9.338 9 11 C 9 12.662 10.338 14 12 14 C 13.662 14 15 12.662 15 11 C 15 9.338 13.662 8 12 8 z M 12 9 C 13.108 9 14 9.892 14 11 C 14 12.108 13.108 13 12 13 C 10.892 13 10 12.108 10 11 C 10 9.892 10.892 9 12 9 z M 11 10 L 11 11 L 11 12 L 13 12 L 13 11 L 12 11 L 12 10 L 11 10 z "
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
    d="M 1 3 L 1 4 L 1 12 L 1 18 L 1 18.414062 L 1 19 L 2 19 L 8 19 L 14 19 L 14 18 L 8 18 L 2 18 L 2 17.414062 L 2.4628906 16.951172 L 8.7304688 10.683594 L 10.183594 12.134766 L 10.998047 12.949219 L 11 12.949219 L 11.816406 12.134766 L 13.269531 10.683594 L 14.585938 12 L 16 12 L 13.976562 9.9765625 L 19.728516 4.2226562 L 19.951172 4 L 20 4 L 20 4.2226562 L 20 12 L 21 12 L 21 3 L 20.951172 3 L 20 3 L 19.537109 3 L 2.4628906 3 L 2 3 L 1 3 z M 2 4 L 2.0488281 4 L 2.2714844 4.2226562 L 8.0234375 9.9765625 L 2 16 L 2 12 L 2 4.2226562 L 2 4 z M 3.4628906 4 L 18.537109 4 L 11 11.537109 L 3.4628906 4 z M 18 13 C 16.338 13 15 14.338 15 16 C 15 17.662 16.338 19 18 19 C 19.662 19 21 17.662 21 16 C 21 14.338 19.662 13 18 13 z M 18 14 C 19.108 14 20 14.892 20 16 C 20 17.108 19.108 18 18 18 C 16.892 18 16 17.108 16 16 C 16 14.892 16.892 14 18 14 z M 17 15 L 17 16 L 17 17 L 19 17 L 19 16 L 18 16 L 18 15 L 17 15 z "
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
     d="M 2,5 2,24.683594 2,27 17,27 17,26 3,26 3,25.111328 3.4296875,24.683594 12.785156,15.541016 16,18.683594 C 16,18.683594 29,6 28.976562,6 L 29,6 l 0,8 1,0 0,-9 z M 3,6 3.0234375,6 12.070312,14.841797 3,23.707031 Z M 4.453125,6 27.546875,6 16,17.285156 Z M 24,15 c -3.313708,0 -6,2.686291 -6,6 0,3.313708 2.686292,6 6,6 3.313708,0 6,-2.686292 6,-6 0,-3.313709 -2.686292,-6 -6,-6 z m 0,1 c 2.761424,0 5,2.238576 5,5 0,2.761424 -2.238576,5 -5,5 -2.761423,0 -5,-2.238576 -5,-5 0,-2.761424 2.238577,-5 5,-5 z m -1,1 0,4 0,1 5,0 0,-1 -4,0 0,-4 z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
