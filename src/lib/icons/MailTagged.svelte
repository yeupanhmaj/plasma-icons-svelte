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
     d="M 1 2 L 1 14 L 9 14 L 9 13 L 2.65625 13 L 6.6425781 8.3496094 L 8 9.7070312 C 7.986852 9.6833613 14 3.7070312 14 3.7070312 L 14 8 L 15 8 L 15 2 L 1 2 z M 2.7070312 3 L 13.292969 3 L 8 8.2929688 L 2.7070312 3 z M 2 3.7070312 L 5.9335938 7.640625 L 2 12.230469 L 2 3.7070312 z M 10 9 L 10 10.666016 L 13.333984 14 L 15 12.333984 L 11.666016 9 L 10 9 z "
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
    d="M 1 3 L 1 4 L 1 12 L 1 18 L 1 18.414062 L 1 19 L 2 19 L 8 19 L 11 19 L 11 18 L 8 18 L 2 18 L 2 17.414062 L 2.4628906 16.951172 L 8.7304688 10.683594 L 10.183594 12.134766 L 10.998047 12.949219 L 11 12.949219 L 11.816406 12.134766 L 13.269531 10.683594 L 14.585938 12 L 16 12 L 13.976562 9.9765625 L 19.728516 4.2226562 L 19.951172 4 L 20 4 L 20 4.2226562 L 20 10 L 21 10 L 21 3 L 20.951172 3 L 20 3 L 19.537109 3 L 2.4628906 3 L 2 3 L 1 3 z M 2 4 L 2.0488281 4 L 2.2714844 4.2226562 L 8.0234375 9.9765625 L 2 16 L 2 12 L 2 4.2226562 L 2 4 z M 3.4628906 4 L 18.537109 4 L 11 11.537109 L 3.4628906 4 z M 15 13 L 15 15 L 19 19 L 21 17 L 17 13 L 15 13 z M 16.5 14 C 16.777 14 17 14.223 17 14.5 C 17 14.777 16.777 15 16.5 15 C 16.223 15 16 14.777 16 14.5 C 16 14.223 16.223 14 16.5 14 z "
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
     d="M 2 5 L 2 24.683594 L 2 27 L 19 27 L 19 26 L 3 26 L 3 25.111328 L 3.4296875 24.683594 L 12.785156 15.541016 L 16 18.683594 L 28.976562 6 L 29 6 L 29 16 L 30 16 L 30 5 L 2 5 z M 3 6 L 3.0234375 6 L 12.070312 14.841797 L 3 23.707031 L 3 6 z M 4.453125 6 L 27.546875 6 L 16 17.285156 L 4.453125 6 z M 20 17 L 20 22 L 25.390625 26.974609 L 29.974609 22.390625 L 25 17 L 20 17 z M 22.890625 18.640625 C 23.580625 18.640625 24.140625 19.200625 24.140625 19.890625 C 24.140625 20.580625 23.580625 21.140625 22.890625 21.140625 C 22.200625 21.140625 21.640625 20.580625 21.640625 19.890625 C 21.640625 19.200625 22.200625 18.640625 22.890625 18.640625 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
