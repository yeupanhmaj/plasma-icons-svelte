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
       d="M 2 2 L 2 7 L 3 7 L 4.5 7 C 5.32843 7 6 6.32843 6 5.5 C 6 4.9666982 5.7318023 4.484728 5.3125 4.21875 C 5.4279583 4.00621 5.5 3.7588844 5.5 3.5 C 5.5 2.67157 4.82843 2 4 2 L 3 2 L 2.5 2 L 2 2 z M 10 2 L 10 7 L 11 7 L 12.5 7 C 13.32843 7 14 6.32843 14 5.5 L 14 3.5 C 14 2.67157 13.32843 2 12.5 2 L 11 2 L 10 2 z M 3 3 L 4 3 C 4.27614 3 4.5 3.22386 4.5 3.5 C 4.5 3.77614 4.27614 4 4 4 L 3 4 L 3 3 z M 11 3 L 12.5 3 C 12.77614 3 13 3.22386 13 3.5 L 13 4.09375 L 13 4.90625 L 13 5.5 C 13 5.77614 12.77614 6 12.5 6 L 11 6 L 11 3 z M 7 4 L 7 5 L 9 5 L 9 4 L 7 4 z M 3 5 L 4.5 5 C 4.77614 5 5 5.22386 5 5.5 C 5 5.77614 4.77614 6 4.5 6 L 3 6 L 3 5 z M 2 9 L 2 10 L 5 10 L 5 9 L 2 9 z M 7 9 L 7 10 L 9 10 L 9 9 L 7 9 z M 11 9 L 11 10 L 14 10 L 14 9 L 11 9 z M 6 11 L 2 12.5 L 6 14 L 6 11 z M 10 11 L 10 14 L 14 12.5 L 10 11 z M 8 12 C 7.7238576 12 7.5 12.223858 7.5 12.5 C 7.5 12.776142 7.7238576 13 8 13 C 8.2761424 13 8.5 12.776142 8.5 12.5 C 8.5 12.223858 8.2761424 12 8 12 z "
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
     d="M 3 3 L 3 5 L 3 6 L 3 8 L 3 9 L 4 9 L 6 9 C 7.108 9 8 8.108 8 7 C 8 6.18906 7.518735 5.4981037 6.828125 5.1835938 C 6.934075 4.9777437 7 4.74831 7 4.5 C 7 3.669 6.331 3 5.5 3 L 4 3 L 3 3 z M 14 3 L 14 9 L 16 9 L 17 9 C 18.10801 9 19 8.10801 19 7 L 19 5 C 19 3.89199 18.10801 3 17 3 L 16 3 L 14 3 z M 4 4 L 5.5 4 C 5.777 4 6 4.223 6 4.5 C 6 4.777 5.777 5 5.5 5 L 4 5 L 4 4 z M 15 4 L 16 4 L 17 4 C 17.55401 4 18 4.44599 18 5 L 18 7 C 18 7.55401 17.55401 8 17 8 L 16 8 L 15 8 L 15 4 z M 4 6 L 5.5 6 L 6 6 C 6.554 6 7 6.446 7 7 C 7 7.554 6.554 8 6 8 L 4 8 L 4 6 z M 10 6 L 10 7 L 12 7 L 12 6 L 10 6 z M 4 12 L 4 13 L 6 13 L 6 12 L 4 12 z M 8 12 L 8 13 L 10 13 L 10 12 L 8 12 z M 12 12 L 12 13 L 14 13 L 14 12 L 12 12 z M 16 12 L 16 13 L 18 13 L 18 12 L 16 12 z M 5 15 L 3 17 L 5 19 L 5 15 z M 17 15 L 17 19 L 19 17 L 17 15 z M 11 16 C 10.446 16 10 16.446 10 17 C 10 17.554 10.446 18 11 18 C 11.554 18 12 17.554 12 17 C 12 16.446 11.554 16 11 16 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
