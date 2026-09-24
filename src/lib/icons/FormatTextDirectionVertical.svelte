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
       d="M 4.625 2 L 2 9 L 2.8125 9 L 3.65625 6.78125 L 6.375 6.78125 L 7.1875 9 L 8 9 L 5.4375 2 L 4.625 2 z M 9 2 L 9 11 L 10 11 L 10 2 L 9 2 z M 12 2 L 12 11 L 13 11 L 13 2 L 12 2 z M 5.03125 2.84375 C 5.09915 3.08307 5.47376 4.16349 6.125 6.09375 L 3.90625 6.09375 L 5.03125 2.84375 z M 3 10 L 3 11 L 4 11 L 4 10 L 3 10 z M 6 10 L 6 11 L 7 11 L 7 10 L 6 10 z M 3 12 L 5 14 L 7 12 L 3 12 z M 9 12 L 11 14 L 13 12 L 9 12 z "
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
    d="M 6.9433594 3 L 3 9.828125 L 3 10 L 4.0566406 10 L 5.2109375 8 L 9.7890625 8 L 10.943359 10 L 12 10 L 12 9.828125 L 8.0566406 3 L 8 3 L 6.9433594 3 z M 15 3 L 15 16 L 16 16 L 16 3 L 15 3 z M 18 3 L 18 16 L 19 16 L 19 3 L 18 3 z M 7.5 4.0371094 L 9.2109375 7 L 5.7890625 7 L 7.5 4.0371094 z M 3 11 L 3 16 L 4 16 L 4 11 L 3 11 z M 6 11 L 6 16 L 7 16 L 7 11 L 6 11 z M 9 11 L 9 16 L 10 16 L 10 11 L 9 11 z M 12 11 L 12 16 L 13 16 L 13 11 L 12 11 z M 3 17 L 5 19 L 7 17 L 3 17 z M 9 17 L 11 19 L 13 17 L 9 17 z M 15 17 L 17 19 L 19 17 L 15 17 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
