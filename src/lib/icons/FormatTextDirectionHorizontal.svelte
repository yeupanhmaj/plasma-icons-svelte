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
       d="M 4.6875 3 L 2 10 L 2.84375 10 L 3.6875 7.78125 L 6.46875 7.78125 L 7.28125 10 L 8.125 10 L 5.53125 3 L 4.6875 3 z M 7 3 L 7 4 L 11 4 L 11 3 L 7 3 z M 12 3 L 12 7 L 14 5 L 12 3 z M 5.09375 3.84375 C 5.16302 4.08307 5.52308 5.16349 6.1875 7.09375 L 3.9375 7.09375 L 5.09375 3.84375 z M 8 6 L 8 7 L 11 7 L 11 6 L 8 6 z M 9 9 L 9 10 L 11 10 L 11 9 L 9 9 z M 12 9 L 12 13 L 14 11 L 12 9 z M 2 12 L 2 13 L 11 13 L 11 12 L 2 12 z "
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
    d="M 6.9433594 3 L 3 9.828125 L 3 10 L 4.0566406 10 L 5.2109375 8 L 9.7890625 8 L 10.943359 10 L 12 10 L 12 9.828125 L 8.0566406 3 L 8 3 L 6.9433594 3 z M 11 3 L 11 4 L 16 4 L 16 3 L 11 3 z M 17 3 L 17 7 L 19 5 L 17 3 z M 7.5 4.0371094 L 9.2109375 7 L 5.7890625 7 L 7.5 4.0371094 z M 12 6 L 12 7 L 16 7 L 16 6 L 12 6 z M 13 9 L 13 10 L 16 10 L 16 9 L 13 9 z M 17 9 L 17 13 L 19 11 L 17 9 z M 3 12 L 3 13 L 16 13 L 16 12 L 3 12 z M 3 15 L 3 16 L 16 16 L 16 15 L 3 15 z M 17 15 L 17 19 L 19 17 L 17 15 z M 3 18 L 3 19 L 16 19 L 16 18 L 3 18 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
