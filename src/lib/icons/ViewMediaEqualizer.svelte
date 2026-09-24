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
       d="M 3 2 L 3 3.0917969 C 2.4180804 3.2978015 2 3.8457631 2 4.5 C 2 5.1542369 2.4180804 5.7021985 3 5.9082031 L 3 14 L 4 14 L 4 5.9082031 C 4.5825646 5.7025435 5 5.1546973 5 4.5 C 5 3.8453027 4.5825646 3.2974565 4 3.0917969 L 4 2 L 3 2 z M 7.5 2 L 7.5 10.091797 C 6.9180754 10.297803 6.5 10.84576 6.5 11.5 C 6.5 12.15424 6.9180754 12.702197 7.5 12.908203 L 7.5 14 L 8.5 14 L 8.5 12.908203 C 9.0819246 12.702197 9.5 12.15424 9.5 11.5 C 9.5 10.84576 9.0819246 10.297803 8.5 10.091797 L 8.5 2 L 7.5 2 z M 12 2 L 12 6.0917969 C 11.418075 6.2978026 11 6.8457598 11 7.5 C 11 8.1542402 11.418075 8.7021974 12 8.9082031 L 12 14 L 13 14 L 13 8.9082031 C 13.581925 8.7021974 14 8.1542402 14 7.5 C 14 6.8457598 13.581925 6.2978026 13 6.0917969 L 13 2 L 12 2 z "
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
    d="M 15.5 6 C 14.845303 6 14.297456 6.417435 14.091797 7 L 3 7 L 3 8 L 14.091797 8 C 14.297802 8.58192 14.845763 9 15.5 9 C 16.154237 9 16.702198 8.58192 16.908203 8 L 19 8 L 19 7 L 16.908203 7 C 16.702544 6.417435 16.154697 6 15.5 6 z M 8.5 13 C 7.845299 13 7.2974579 13.41743 7.0917969 14 L 3 14 L 3 15 L 7.0917969 15 C 7.2978029 15.581925 7.84576 16 8.5 16 C 9.15424 16 9.7021971 15.581925 9.9082031 15 L 19 15 L 19 14 L 9.9082031 14 C 9.7025421 13.41743 9.154701 13 8.5 13 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
