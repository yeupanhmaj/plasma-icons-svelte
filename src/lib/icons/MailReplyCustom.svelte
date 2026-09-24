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
     d="M 7 3 L 2 7 L 7 11 L 7 8 L 14 8 L 14 6 L 7 6 L 7 3 z M 11.5 9 L 11.021484 10.345703 L 9.7324219 9.7324219 L 10.345703 11.021484 L 9 11.5 L 10.345703 11.978516 L 9.7324219 13.267578 L 11.021484 12.654297 L 11.5 14 L 11.978516 12.654297 L 13.267578 13.267578 L 12.654297 11.978516 L 14 11.5 L 12.654297 11.021484 L 13.267578 9.7324219 L 11.978516 10.345703 L 11.5 9 z "
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
    d="M 1 3 L 1 12 L 2 12 L 2 8 L 20 8 L 20 12 L 20 16 L 20 17.414062 L 20 18 L 8 18 L 8 19 L 14 19 L 20 19 L 21 19 L 21 18.414062 L 21 18 L 21 12 L 21 4 L 21 3 L 20 3 L 19.537109 3 L 2.4628906 3 L 2 3 L 1.0488281 3 L 1 3 z M 2 4 L 2.0488281 4 L 3.4628906 4 L 18.537109 4 L 19.951172 4 L 20 4 L 20 4.2226562 L 20 7 L 2 7 L 2 4.2226562 L 2 4 z M 4 13 L 1 16 L 4 19 L 4 17 L 5 17 L 6 17 L 6 15 L 5 15 L 4 15 L 4 13 z "
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
     d="M 2 5 L 2 18 L 3 18 L 3 12 L 29 12 L 29 26 L 13 26 L 13 27 L 30 27 L 30 5 L 2 5 z M 3 6 L 29 6 L 29 11 L 3 11 L 3 6 z M 7 18.064453 L 2 22.013672 L 7 25.960938 L 7 23 L 13 23 L 13 21.025391 L 7 21.025391 L 7 18.064453 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
