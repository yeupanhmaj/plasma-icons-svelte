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
     d="M 3 2 C 2.4477153 2 2 2.4477153 2 3 C 2 3.5522847 2.4477153 4 3 4 C 3.5522847 4 4 3.5522847 4 3 C 4 2.4477153 3.5522847 2 3 2 z M 5 2 L 5 3 L 7 3 L 13 3 L 13 2 L 7 2 L 5 2 z M 5 4 L 5 5 L 7 5 L 11 5 L 11 4 L 7 4 L 5 4 z M 3 8 C 2.4477153 8 2 8.4477153 2 9 C 2 9.5522847 2.4477153 10 3 10 C 3.5522847 10 4 9.5522847 4 9 C 4 8.4477153 3.5522847 8 3 8 z M 5 8 L 5 9 L 10 9 L 10 8 L 5 8 z M 11 9 L 11 11 L 9 11 L 9 12 L 11 12 L 11 14 L 12 14 L 12 12 L 14 12 L 14 11 L 12 11 L 12 9 L 11 9 z M 5 10 L 5 11 L 8 11 L 8 10 L 5 10 z "
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
    d="M 1 3 L 1 4 L 1 12 L 1 18 L 1 18.414062 L 1 19 L 2 19 L 8 19 L 14 19 L 14 18 L 8 18 L 2 18 L 2 17.414062 L 2.4628906 16.951172 L 8.7304688 10.683594 L 10.183594 12.134766 L 10.998047 12.949219 L 11 12.949219 L 11.816406 12.134766 L 13.269531 10.683594 L 14.585938 12 L 16 12 L 13.976562 9.9765625 L 19.728516 4.2226562 L 19.951172 4 L 20 4 L 20 4.2226562 L 20 12 L 21 12 L 21 3 L 20.951172 3 L 20 3 L 19.537109 3 L 2.4628906 3 L 2 3 L 1 3 z M 2 4 L 2.0488281 4 L 2.2714844 4.2226562 L 8.0234375 9.9765625 L 2 16 L 2 12 L 2 4.2226562 L 2 4 z M 3.4628906 4 L 18.537109 4 L 11 11.537109 L 3.4628906 4 z M 15 14 L 15 15 L 21 15 L 21 14 L 15 14 z M 15 16 L 15 17 L 21 17 L 21 16 L 15 16 z M 15 18 L 15 19 L 21 19 L 21 18 L 15 18 z "
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
     d="M 2 5 L 2 24.683594 L 2 27 L 19 27 L 19 26 L 3 26 L 3 25.111328 L 3.4296875 24.683594 L 12.785156 15.541016 L 16 18.683594 L 19.214844 15.541016 L 21 17.285156 L 21 15.888672 L 19.929688 14.841797 L 28.976562 6 L 29 6 L 29 18 L 30 18 L 30 5 L 2 5 z M 3 6 L 3.0234375 6 L 12.070312 14.841797 L 3 23.707031 L 3 6 z M 4.453125 6 L 27.546875 6 L 16 17.285156 L 4.453125 6 z M 21 20 L 21 21 L 30 21 L 30 20 L 21 20 z M 21 23 L 21 24 L 30 24 L 30 23 L 21 23 z M 21 26 L 21 27 L 30 27 L 30 26 L 21 26 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
