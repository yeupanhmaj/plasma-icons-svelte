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
       d="M 6.3828125 2 L 2 13 L 3.3574219 13 L 4.546875 10 L 9 10 L 9.4746094 10 L 10 10 L 10 9 L 10 7.828125 L 7.7480469 2 L 6.3828125 2 z M 7.0625 3.328125 C 7.17566 3.704205 7.773975 5.4100894 8.859375 8.4433594 L 9.0839844 9 L 4.9414062 9 L 7.0625 3.328125 z M 11 9 L 11 14 L 12 14 L 13.5 14 C 14.32843 14 15 13.32843 15 12.5 C 15 11.9667 14.73181 11.48473 14.3125 11.21875 C 14.42796 11.00621 14.5 10.75888 14.5 10.5 C 14.5 9.67157 13.82844 9 13 9 L 12 9 L 11 9 z M 12 10 L 13 10 C 13.27614 10 13.5 10.22386 13.5 10.5 C 13.5 10.77614 13.27614 11 13 11 L 12 11 L 12 10 z M 12 12 L 13 12 L 13.5 12 C 13.77615 12 14 12.22386 14 12.5 C 14 12.77614 13.77615 13 13.5 13 L 12 13 L 12 12 z "
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
    d="M 8.2167969 3 L 3 17 L 4.6875 17 L 6.3554688 12.570312 L 11.917969 12.570312 L 12.066406 13 L 13.732422 13 L 10.210938 3 L 8.2167969 3 z M 9.2324219 4.6113281 L 11.361328 11.285156 L 6.8730469 11.285156 L 9.2324219 4.6113281 z M 14 13 L 14 15 L 14 16 L 14 18 L 14 19 L 15 19 L 17 19 C 18.108 19 19 18.108 19 17 C 19 16.18906 18.518735 15.498104 17.828125 15.183594 C 17.934075 14.977744 18 14.74831 18 14.5 C 18 13.669 17.331 13 16.5 13 L 15 13 L 14 13 z M 15 14 L 16.5 14 C 16.777 14 17 14.223 17 14.5 C 17 14.777 16.777 15 16.5 15 L 15 15 L 15 14 z M 15 16 L 16.5 16 L 17 16 C 17.554 16 18 16.446 18 17 C 18 17.554 17.554 18 17 18 L 15 18 L 15 16 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
