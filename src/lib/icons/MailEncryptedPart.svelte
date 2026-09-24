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
     d="M 1 2 L 1 14 L 9 14 L 9 13 L 2.65625 13 L 6.6425781 8.3496094 L 8 9.7070312 C 7.986852 9.6833613 14 3.7070312 14 3.7070312 L 14 8 L 15 8 L 15 2 L 1 2 z M 2.7070312 3 L 13.292969 3 L 8 8.2929688 L 2.7070312 3 z M 2 3.7070312 L 5.9335938 7.640625 L 2 12.230469 L 2 3.7070312 z M 12.5 8 A 1.5 1.5 0 0 0 11 9.5 L 11 11 L 10 11 L 10 14 L 15 14 L 15 11 L 14 11 L 14 9.5 A 1.5 1.5 0 0 0 12.5 8 z M 12.5 9 A 0.5 0.5 0 0 1 13 9.5 L 13 11 L 12 11 L 12 9.5 A 0.5 0.5 0 0 1 12.5 9 z M 11 12 L 14 12 L 14 13 L 11 13 L 11 12 z "
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
    d="M 1 3 L 1 4 L 1 12 L 1 18 L 1 18.414062 L 1 19 L 2 19 L 8 19 L 14 19 L 14 18 L 8 18 L 2 18 L 2 17.414062 L 2.4628906 16.951172 L 8.7304688 10.683594 L 10.183594 12.134766 L 10.998047 12.949219 L 11 12.949219 L 11.816406 12.134766 L 13.269531 10.683594 L 14.585938 12 L 16 12 L 13.976562 9.9765625 L 19.728516 4.2226562 L 19.951172 4 L 20 4 L 20 4.2226562 L 20 12 L 21 12 L 21 3 L 20.951172 3 L 20 3 L 19.537109 3 L 2.4628906 3 L 2 3 L 1 3 z M 2 4 L 2.0488281 4 L 2.2714844 4.2226562 L 8.0234375 9.9765625 L 2 16 L 2 12 L 2 4.2226562 L 2 4 z M 3.4628906 4 L 18.537109 4 L 11 11.537109 L 3.4628906 4 z M 18.5 13 C 17.669 13 17 13.669 17 14.5 L 17 16 L 16 16 L 16 19 L 21 19 L 21 16 L 20 16 L 20 14.5 C 20 13.669 19.331 13 18.5 13 z M 18.5 14 C 18.777 14 19 14.223 19 14.5 L 19 16 L 18 16 L 18 14.5 C 18 14.223 18.223 14 18.5 14 z M 17 17 L 20 17 L 20 18 L 17 18 L 17 17 z "
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
     d="M 2 5 L 2 24.683594 L 2 27 L 19 27 L 19 26 L 3 26 L 3 25.111328 L 3.4296875 24.683594 L 12.785156 15.541016 L 16 18.683594 L 19.214844 15.541016 L 21 17.285156 L 21 15.888672 L 19.929688 14.841797 L 28.976562 6 L 29 6 L 29 14 L 30 14 L 30 5 L 2 5 z M 3 6 L 3.0234375 6 L 12.070312 14.841797 L 3 23.707031 L 3 6 z M 4.453125 6 L 27.546875 6 L 16 17.285156 L 4.453125 6 z M 25 15 C 23.343 15 22 16.343 22 18 L 22 21 L 20 21 L 20 27 L 30 27 L 30 21 L 28 21 L 28 18 C 28 16.343 26.657 15 25 15 z M 25 16 C 26.105 16 27 16.895 27 18 L 27 21 L 23 21 L 23 18 C 23 16.895 23.895 16 25 16 z M 21 22 L 29 22 L 29 26 L 21 26 L 21 22 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
