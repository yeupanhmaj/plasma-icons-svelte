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
     d="M 8.171875 1.671875 L 7.4648438 2.3789062 L 8.4140625 3.328125 L 9.0859375 4 L 5 4 L 5 5 L 9.0859375 5 L 8.4140625 5.671875 L 7.4648438 6.6210938 L 8.171875 7.328125 L 9.1210938 6.3789062 L 11 4.5 L 9.1210938 2.6210938 L 8.171875 1.671875 z M 3.5 5 C 3.22386 5 3 5.22386 3 5.5 C 3 5.77614 3.22386 6 3.5 6 C 3.77614 6 4 5.77614 4 5.5 C 4 5.22386 3.77614 5 3.5 5 z M 10.46875 6.5625 L 6.5625 10.46875 L 10.09375 14 L 14 10.09375 L 10.46875 6.5625 z M 2.5 8 C 2.22386 8 2 8.22386 2 8.5 C 2 8.77614 2.22386 9 2.5 9 C 2.77614 9 3 8.77614 3 8.5 C 3 8.22386 2.77614 8 2.5 8 z M 3.5 11 C 3.22386 11 3 11.22386 3 11.5 C 3 11.77614 3.22386 12 3.5 12 C 3.77614 12 4 11.77614 4 11.5 C 4 11.22386 3.77614 11 3.5 11 z M 6.5 12 C 6.22386 12 6 12.22386 6 12.5 C 6 12.77614 6.22386 13 6.5 13 C 6.77614 13 7 12.77614 7 12.5 C 7 12.22386 6.77614 12 6.5 12 z "
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
    d="M 9.5996094 3 L 8.8925781 3.7070312 L 11.185547 6 L 8.9003906 6 L 8 6 L 8 7 L 8.9003906 7 L 11.185547 7 L 8.8925781 9.2929688 L 9.5996094 10 L 12.892578 6.7070312 L 13.099609 6.5 L 12.892578 6.2929688 L 9.5996094 3 z M 6.5 6 C 6.223 6 6 6.223 6 6.5 C 6 6.777 6.223 7 6.5 7 C 6.777 7 7 6.777 7 6.5 C 7 6.223 6.777 6 6.5 6 z M 3.5 8 C 3.223 8 3 8.223 3 8.5 C 3 8.777 3.223 9 3.5 9 C 3.777 9 4 8.777 4 8.5 C 4 8.223 3.777 8 3.5 8 z M 15.050781 8 L 9 14.050781 L 13.949219 19 L 20 12.949219 L 15.050781 8 z M 15.050781 9.4140625 L 18.585938 12.949219 L 13.808594 17.726562 L 10.273438 14.191406 L 15.050781 9.4140625 z M 2.5 11 C 2.223 11 2 11.223 2 11.5 C 2 11.777 2.223 12 2.5 12 C 2.777 12 3 11.777 3 11.5 C 3 11.223 2.777 11 2.5 11 z M 3.5 14 C 3.223 14 3 14.223 3 14.5 C 3 14.777 3.223 15 3.5 15 C 3.777 15 4 14.777 4 14.5 C 4 14.223 3.777 14 3.5 14 z M 6.5 16 C 6.223 16 6 16.223 6 16.5 C 6 16.777 6.223 17 6.5 17 C 6.777 17 7 16.777 7 16.5 C 7 16.223 6.777 16 6.5 16 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
