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
     d="M 5 2 L 5 3.9394531 L 5 12.091797 L 2.71875 9.8457031 L 2 10.554688 L 5.28125 13.785156 L 5.5 14 L 5.71875 13.785156 L 9 10.554688 L 8.28125 9.8457031 L 6 12.091797 L 6 3.9394531 L 6 2 L 5 2 z M 10.5 2 L 10.28125 2.2148438 L 7 5.4453125 L 7.71875 6.1542969 L 10 3.9082031 L 10 12.060547 L 10 14 L 11 14 L 11 12.060547 L 11 3.9082031 L 13.28125 6.1542969 L 14 5.4453125 L 10.71875 2.2148438 L 10.5 2 z "
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
    d="M 14.5 3 L 14.28125 3.2148438 L 11 6.4453125 L 11.71875 7.1542969 L 14 4.9082031 L 14 13.060547 L 14 17 L 15 17 L 15 13.060547 L 15 4.9082031 L 17.28125 7.1542969 L 18 6.4453125 L 14.71875 3.2148438 L 14.5 3 z M 7 5 L 7 8.9394531 L 7 17.091797 L 4.71875 14.845703 L 4 15.554688 L 7.28125 18.785156 L 7.5 19 L 7.71875 18.785156 L 11 15.554688 L 10.28125 14.845703 L 8 17.091797 L 8 8.9394531 L 8 5 L 7 5 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
