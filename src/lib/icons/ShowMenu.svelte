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
     d="M 2 2 L 2 5 L 5 5 L 5 2 L 2 2 z M 6 2 L 6 3 L 10.878906 3 L 11.878906 2 L 6 2 z M 13.314453 2 L 2 13.294922 L 2.7148438 14 L 14 2.6972656 L 13.314453 2 z M 6 4 L 6 5 L 8.8789062 5 L 9.8789062 4 L 6 4 z M 14 4.1210938 L 13.121094 5 L 14 5 L 14 4.1210938 z M 2 7 L 2 10 L 3.8789062 10 L 5 8.8789062 L 5 7 L 2 7 z M 6 7 L 6 7.8789062 L 6.8789062 7 L 6 7 z M 11.121094 7 L 10.121094 8 L 14 8 L 14 7 L 11.121094 7 z M 9.1210938 9 L 8.1210938 10 L 14 10 L 14 9 L 9.1210938 9 z M 6.1210938 12 L 5.1210938 13 L 14 13 L 14 12 L 6.1210938 12 z "
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
     d="M 3 3 L 3 6 L 6 6 L 6 3 L 3 3 z M 7 3 L 7 4 L 16 4 L 17 3 L 7 3 z M 18.292969 3 L 3 18.292969 L 3.7070312 19 L 19 3.7070312 L 18.292969 3 z M 7 5 L 7 6 L 11 6 L 12 6 L 13.169922 6 L 14.169922 5 L 7 5 z M 3 10 L 3 11 L 3 12 L 3 13 L 6 13 L 6 12 L 6 11 L 6 10 L 3 10 z M 7 10 L 7 11 L 9 11 L 10 10 L 7 10 z M 14 10 L 13 11 L 17 11 L 17 10 L 14 10 z M 12 12 L 11 13 L 13 13 L 13 12 L 12 12 z M 8.8300781 15 L 7.8300781 16 L 17 16 L 17 15 L 11 15 L 10 15 L 8.8300781 15 z M 7 17 L 6 18 L 14 18 L 14 17 L 7 17 z M 17 18 L 17 19 L 19 19 L 19 18 L 17 18 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
