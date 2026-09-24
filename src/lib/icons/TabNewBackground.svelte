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
     d="M 2 2 L 2 14 L 8 14 L 8 13 L 3 13 L 3 3 L 6 3 L 6 5 L 11 5 L 13 5 L 13 8 L 14 8 L 14 4 L 11 4 L 11 2 L 10 2 L 6 2 L 2 2 z M 11.501953 9.0019531 L 11.023438 10.345703 L 9.734375 9.7324219 L 10.347656 11.021484 L 9.0019531 11.5 L 10.347656 11.978516 L 9.734375 13.267578 L 11.023438 12.654297 L 11.501953 13.998047 L 11.978516 12.654297 L 13.267578 13.267578 L 12.654297 11.978516 L 14 11.5 L 12.654297 11.021484 L 13.267578 9.7324219 L 11.978516 10.345703 L 11.501953 9.0019531 z "
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
     d="M 3 3 L 3 4 L 3 18 L 3 19 L 13 19 L 13 18 L 4 18 L 4 4 L 8 4 L 8 7 L 16 7 L 18 7 L 18 13 L 19 13 L 19 6 L 18 6 L 16 6 L 16 3 L 8 3 L 4 3 L 3 3 z M 16 13 L 15.425781 14.613281 L 13.878906 13.878906 L 14.613281 15.425781 L 13 16 L 14.613281 16.574219 L 13.878906 18.121094 L 15.425781 17.386719 L 16 19 L 16.574219 17.386719 L 18.121094 18.121094 L 17.386719 16.574219 L 19 16 L 17.386719 15.425781 L 18.121094 13.878906 L 16.574219 14.613281 L 16 13 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
