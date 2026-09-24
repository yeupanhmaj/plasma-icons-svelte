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
       d="M 5.3046875 2 C 5.3146577 1.9977052 2 5.3125 2 5.3125 L 2 6 L 2 13.3125 L 2 14 L 2.6875 14 L 10 14 L 10.6875 14 C 10.6875 14 14.01095 10.717346 14 10.71875 L 14 10 L 14 2 L 6 2 L 5.3046875 2 z M 6 3 L 12.28125 3 C 11.447912 3.8443302 10.654056 4.6611779 10.3125 5 L 6 5 L 6 3 z M 5 3.71875 L 5 5 L 3.6875 5 L 5 3.71875 z M 13 3.71875 L 13 10 L 11 10 L 11 6 L 11 5.6875 L 13 3.71875 z M 3 6 L 5 6 L 5 10.28125 L 4.65625 10.65625 L 3 12.3125 L 3 6 z M 6 6 L 10 6 L 10 10 L 6 10 L 6 6 z M 5.71875 11 L 10 11 L 10 13 L 3.6875 13 L 5.34375 11.34375 L 5.71875 11 z M 11 11 L 12.28125 11 C 11.736618 11.551816 11.545683 11.761999 11 12.3125 L 11 11 z "
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
     d="M 6 3 L 5.90625 3.09375 L 3 6 L 3 6.90625 L 3 18.3125 L 3 19 L 3.6875 19 L 15.125 19 L 15.96875 19 L 16 18.96875 L 18.90625 16.0625 L 18.96875 16 L 19 15.96875 L 19 15.4375 L 19 3.6875 L 19 3 L 18.3125 3 L 6.53125 3 L 6 3 z M 7 4 L 17.3125 4 L 15.375 5.9375 L 15.3125 6 L 7 6 L 7 4 z M 6 4.375 L 6 6 L 4.375 6 L 6 4.375 z M 18 4.6875 L 18 15 L 16 15 L 16 6.6875 L 16.0625 6.625 L 18 4.6875 z M 4 7 L 6 7 L 6 15.28125 L 5.65625 15.65625 L 4 17.3125 L 4 7 z M 7 7 L 15 7 L 15 15 L 7 15 L 7 7 z M 6.71875 16 L 15 16 L 15 18 L 4.6875 18 L 6.34375 16.34375 L 6.71875 16 z M 16 16 L 17.59375 16 L 16 17.59375 L 16 16 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
