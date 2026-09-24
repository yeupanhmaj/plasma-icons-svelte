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
       d="M 5 2 L 5 3 L 3 3 L 3 14 L 7 14 L 8 14 L 9 14 L 9 13 L 8 13 L 7 13 L 4 13 L 4 12 L 4 6 L 4 4 L 5 4 L 5 5 L 11 5 L 11 4 L 12 4 L 12 6 L 12 9 L 13 9 L 13 3 L 11 3 L 11 2 L 5 2 z M 5 7 L 5 8 L 10 8 L 10 7 L 5 7 z M 11.5 9 L 11.021484 10.345703 L 9.7324219 9.7324219 L 10.345703 11.021484 L 9 11.5 L 10.345703 11.978516 L 9.7324219 13.267578 L 11.021484 12.654297 L 11.5 14 L 11.978516 12.654297 L 13.267578 13.267578 L 12.654297 11.978516 L 14 11.5 L 12.654297 11.021484 L 13.267578 9.7324219 L 11.978516 10.345703 L 11.5 9 z M 5 10 L 5 11 L 8 11 L 8 10 L 5 10 z "
     class="ColorScheme-Text"
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
	 d="M 7 3 L 7 5 L 5 5 L 4 5 L 4 19 L 5 19 L 13 19 L 13 18 L 5 18 L 5 6 L 6 6 L 6 8 L 16 8 L 16 6 L 17 6 L 17 13 L 18 13 L 18 5 L 17 5 L 15 5 L 15 3 L 7 3 z M 7 9 L 7 10 L 15 10 L 15 9 L 7 9 z M 7 12 L 7 13 L 13 13 L 13 12 L 7 12 z M 16 13 L 15.425781 14.613281 L 13.878906 13.878906 L 14.613281 15.425781 L 13 16 L 14.613281 16.574219 L 13.878906 18.121094 L 15.425781 17.386719 L 16 19 L 16.574219 17.386719 L 18.121094 18.121094 L 17.386719 16.574219 L 19 16 L 17.386719 15.425781 L 18.121094 13.878906 L 16.574219 14.613281 L 16 13 z M 7 15 L 7 16 L 10 16 L 10 15 L 7 15 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
