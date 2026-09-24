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
     d="M 8 2 A 6 6.0000086 0 0 0 2 8 A 6 6.0000086 0 0 0 7 13.914062 L 7 12.898438 A 5 5 0 0 1 3 8 A 5 5 0 0 1 8 3 A 5 5 0 0 1 13 8 L 14 8 A 6 6.0000086 0 0 0 8 2 z M 8 4 C 5.790861 4 4 5.790861 4 8 L 6 8 C 6 6.8954305 6.8954305 6 8 6 L 8 4 z M 8.5 8 C 7.669 8 7 8.669 7 9.5 C 7 10.1542 7.418077 10.702203 8 10.908203 L 8 14 L 12 14 L 12 12 L 12 11 C 12.554 11 13 10.554 13 10 C 13 9.446 12.554 9 12 9 C 11.446 9 11 9.446 11 10 L 9.9082031 10 C 9.9638631 9.8428 10 9.6768 10 9.5 C 10 8.669 9.331 8 8.5 8 z M 12 12 L 14 14 L 14 10 L 12 12 z M 9 11 L 11 11 L 11 13 L 9 13 L 9 11 z "
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
    d="M 11 3 C 6.568 3 3 6.568 3 11 C 3 15.432 6.568 19 11 19 L 11 18 C 7.122 18 4 14.878 4 11 C 4 7.122 7.122 4 11 4 C 14.878 4 18 7.122 18 11 L 19 11 C 19 6.568 15.432 3 11 3 z M 11 5 C 7.676 5 5 7.676 5 11 L 8 11 C 8 9.338 9.338 8 11 8 L 11 5 z M 11 9 C 9.892 9 9 9.892 9 11 C 9 12.108 9.892 13 11 13 L 11 12 C 10.446 12 10 11.554 10 11 C 10 10.446 10.446 10 11 10 C 11.554 10 12 10.446 12 11 L 13 11 C 13 9.892 12.108 9 11 9 z M 13.5 13 C 12.669 13 12 13.669 12 14.5 C 12 15.15424 12.418077 15.702197 13 15.908203 L 13 19 L 17 19 L 17 17 L 17 16 C 17.554 16 18 15.554 18 15 C 18 14.446 17.554 14 17 14 C 16.446 14 16 14.446 16 15 L 14.908203 15 C 14.963861 14.842779 15 14.67676 15 14.5 C 15 13.669 14.331 13 13.5 13 z M 17 17 L 19 19 L 19 15 L 17 17 z M 14 16 L 16 16 L 16 18 L 14 18 L 14 16 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
