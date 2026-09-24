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
     class="ColorScheme-Text"
     d="M 6,4 1,8 6,12 6,10.71875 2.6015625,8 6,5.28125 6,4 Z"
     id="rect3348-8-9-7" />
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     class="ColorScheme-Text"
     d="M 9,4 4,8 9,12 9,9 14,9 14,7 9,7 Z"
     id="rect3348-8-9" />
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
    d="M 1 3 L 1 12 L 2 12 L 2 4.2226562 L 2 4 L 2.0488281 4 L 2.2714844 4.2226562 L 8.0234375 9.9765625 L 6 12 L 7.4140625 12 L 8.7304688 10.683594 L 10.183594 12.134766 L 11 12.949219 L 11.001953 12.949219 L 11.816406 12.134766 L 13.269531 10.683594 L 19.537109 16.951172 L 20 17.414062 L 20 18 L 14 18 L 8 18 L 8 19 L 14 19 L 20 19 L 21 19 L 21 18.414062 L 21 18 L 21 12 L 21 4 L 21 3 L 20 3 L 19.537109 3 L 2.4628906 3 L 2 3 L 1.0488281 3 L 1 3 z M 3.4628906 4 L 18.537109 4 L 11 11.537109 L 3.4628906 4 z M 19.951172 4 L 20 4 L 20 4.2226562 L 20 12 L 20 16 L 13.976562 9.9765625 L 19.728516 4.2226562 L 19.951172 4 z M 4 13 L 1 16 L 4 19 L 4 17 L 4 15 L 4 13 z M 5 15 L 5 17 L 6 17 L 6 15 L 5 15 z M 7 15 L 7 17 L 8 17 L 8 15 L 7 15 z "
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
     d="M 5 5 L 5 9 L 2 13 L 2 16 L 3 16 L 3 14 L 5 14 L 5.7871094 14 L 16 19.570312 L 26.212891 14 L 27 14 L 29 14 L 29 26 L 14 26 L 14 27 L 30 27 L 30 26 L 30 13 L 27 9 L 27 5 L 5 5 z M 6 6 L 26 6 L 26 12.974609 L 16 18.429688 L 6 12.974609 L 6 6 z M 8 8 L 8 9 L 24 9 L 24 8 L 8 8 z M 8 11 L 8 12 L 17 12 L 17 11 L 8 11 z M 7 18.064453 L 2 22.013672 L 7 25.960938 L 7 23 L 7 21.025391 L 7 21 L 7 18.064453 z M 8 21.025391 L 8 23 L 10 23 L 10 21.025391 L 8 21.025391 z M 11 21.025391 L 11 23 L 13 23 L 13 21.025391 L 11 21.025391 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
