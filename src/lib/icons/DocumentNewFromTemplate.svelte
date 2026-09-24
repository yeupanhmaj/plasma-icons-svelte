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
     d="M 3 2 L 3 3 L 3 13 L 3 14 L 9 14 L 9 13 L 4 13 L 4 3 L 9 3 L 9 6 L 12 6 L 12 9 L 13 9 L 13 7 L 13 6 L 13 5 L 10 2 L 8 2 L 3 2 z M 11.5 9 L 11.021484 10.345703 L 9.7324219 9.7324219 L 10.345703 11.021484 L 9 11.5 L 10.345703 11.978516 L 9.7324219 13.267578 L 11.021484 12.654297 L 11.5 14 L 11.978516 12.654297 L 13.267578 13.267578 L 12.654297 11.978516 L 14 11.5 L 12.654297 11.021484 L 13.267578 9.7324219 L 11.978516 10.345703 L 11.5 9 z "
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
	d="M 4 3 L 4 19 L 5 19 L 13 19 L 13 18 L 5 18 L 5 4 L 13 4 L 13 7 L 13 8 L 17 8 L 17 13 L 18 13 L 18 8.40625 L 18 7 L 18 6.9921875 L 14.007812 3 L 14 3.0097656 L 14 3 L 13 3 L 5 3 L 4 3 z M 16 13 L 15.425781 14.613281 L 13.878906 13.878906 L 14.613281 15.425781 L 13 16 L 14.613281 16.574219 L 13.878906 18.121094 L 15.425781 17.386719 L 16 19 L 16.574219 17.386719 L 18.121094 18.121094 L 17.386719 16.574219 L 19 16 L 17.386719 15.425781 L 18.121094 13.878906 L 16.574219 14.613281 L 16 13 z "
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
     d="M 6 4 L 6 28 L 14 28 L 14 27 L 7 27 L 7 5 L 18 5 L 18 12 L 25 12 L 25 16 L 26 16 L 26 11 L 19 4 L 18 4 L 6 4 z M 20 16 L 18.851562 19.228516 L 15.757812 17.757812 L 17.228516 20.851562 L 14 22 L 17.228516 23.148438 L 15.757812 26.242188 L 18.851562 24.771484 L 20 28 L 21.148438 24.771484 L 24.242188 26.242188 L 22.771484 23.148438 L 26 22 L 22.771484 20.851562 L 24.242188 17.757812 L 21.148438 19.228516 L 20 16 z "
     id="path8" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
