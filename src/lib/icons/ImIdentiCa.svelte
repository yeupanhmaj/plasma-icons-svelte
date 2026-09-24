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
     d="M 7 2 A 5 5.00001 0 0 0 2 7 A 5 5.00001 0 0 0 2.8164062 9.7304688 L 2 13 L 4.5097656 11.328125 A 5 5.00001 0 0 0 7 12 A 5 5.00001 0 0 0 8.7578125 11.675781 A 3.5 3.5 0 0 1 8.25 10.794922 A 4 4 0 0 1 7 11 A 4 4 0 0 1 3 7 A 4 4 0 0 1 7 3 A 4 4 0 0 1 10.882812 6.0566406 A 3.5 3.5 0 0 1 11.5 6 A 3.5 3.5 0 0 1 11.904297 6.0253906 A 5 5.00001 0 0 0 7 2 z M 11.5 7 A 2.5 2.5 0 0 0 9 9.5 A 2.5 2.5 0 0 0 10.361328 11.722656 L 11.5 14 L 12.638672 11.722656 A 2.5 2.5 0 0 0 14 9.5 A 2.5 2.5 0 0 0 11.5 7 z M 11.5 8 A 1.5 1.5 0 0 1 13 9.5 A 1.5 1.5 0 0 1 11.5 11 A 1.5 1.5 0 0 1 10 9.5 A 1.5 1.5 0 0 1 11.5 8 z "
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
    d="M 10 3 C 6.676 3 4 5.676 4 9 L 4 13 L 3 17 L 7 15 L 10 15 C 10.818565 15 11.596956 14.835293 12.306641 14.541016 C 12.177653 14.230639 12.102201 13.895445 12.054688 13.550781 C 11.427015 13.833532 10.735425 14 10 14 L 6.6757812 14 L 5 14 L 5 12.324219 L 5 12 L 5 9 C 5 6.23 7.23 4 10 4 C 12.77 4 15 6.23 15 9 C 15 9.0475903 14.993493 9.093362 14.992188 9.140625 C 15.315538 9.0568158 15.64972 9 16 9 C 16 5.676 13.324 3 10 3 z M 16 10 C 14.338 10 13 11.338 13 13 C 13 13.978064 13.47132 14.833863 14.191406 15.380859 L 16 19 L 17.808594 15.380859 C 18.52868 14.833863 19 13.978064 19 13 C 19 11.338 17.662 10 16 10 z M 16 11 C 17.108 11 18 11.892 18 13 C 18 14.108 17.108 15 16 15 C 14.892 15 14 14.108 14 13 C 14 11.892 14.892 11 16 11 z M 6 11.978516 L 6 12 L 6.0175781 12 C 6.0119981 11.99 6.00554 11.986516 6 11.978516 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
