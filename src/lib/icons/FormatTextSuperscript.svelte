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
       d="M 6.3828125 2 L 2 13 L 3.3574219 13 L 4.546875 10 L 9.4746094 10 L 10.626953 13 L 12 13 L 7.7480469 2 L 6.3828125 2 z M 11 2 L 11 7 L 12 7 L 13.5 7 C 14.32843 7 15 6.32843 15 5.5 C 15 4.9667 14.73181 4.48473 14.3125 4.21875 C 14.42796 4.00621 14.5 3.75888 14.5 3.5 C 14.5 2.67157 13.82844 2 13 2 L 12 2 L 11 2 z M 12 3 L 13 3 C 13.27614 3 13.5 3.22386 13.5 3.5 C 13.5 3.77614 13.27614 4 13 4 L 12 4 L 12 3 z M 7.0625 3.328125 C 7.17566 3.704205 7.773975 5.4100894 8.859375 8.4433594 L 9.0839844 9 L 4.9414062 9 L 7.0625 3.328125 z M 12 5 L 13 5 L 13.5 5 C 13.77615 5 14 5.22386 14 5.5 C 14 5.77614 13.77615 6 13.5 6 L 12 6 L 12 5 z "
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
    d="M 14 3 L 14 5 L 14 6 L 14 8 L 14 9 L 15 9 L 17 9 C 18.108 9 19 8.108 19 7 C 19 6.1891 18.518727 5.4980937 17.828125 5.1835938 C 17.934063 4.9776938 18 4.7483 18 4.5 C 18 3.669 17.330999 3 16.5 3 L 15 3 L 14 3 z M 15 4 L 16.5 4 C 16.777 4 17 4.223 17 4.5 C 17 4.777 16.777 5 16.5 5 L 15 5 L 15 4 z M 8.2167969 5 L 3 19 L 4.6875 19 L 6.3554688 14.570312 L 11.917969 14.570312 L 13.451172 19 L 15.140625 19 L 10.210938 5 L 8.2167969 5 z M 15 6 L 16.5 6 L 17 6 C 17.553999 6 18 6.446 18 7 C 18 7.554 17.553999 8 17 8 L 15 8 L 15 6 z M 9.2324219 6.6113281 L 11.361328 13.285156 L 6.8730469 13.285156 L 9.2324219 6.6113281 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
