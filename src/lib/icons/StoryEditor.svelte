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
     d="M 3 2 L 3 14 L 7 14 L 7 13 L 4 13 L 4 5 L 12 5 L 12 7 L 13 7 L 13 2 L 12 2 L 12 4 L 11 4 L 11 2 L 5 2 L 5 4 L 4 4 L 4 2 L 3 2 z M 5 6 L 5 7 L 11 7 L 11 6 L 5 6 z M 5 8 L 5 9 L 8 9 L 8 8 L 5 8 z M 12 8 L 8 12 L 8 14 L 10 14 L 14 10 L 12 8 z M 11.689453 9.6894531 L 12.28125 10.28125 L 10.59375 11.96875 L 10.59375 11.984375 L 9.3125 13.28125 L 8.71875 12.6875 L 11.689453 9.6894531 z M 5 10 L 5 11 L 7 11 L 7 10 L 5 10 z "
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
     d="M 3 3 L 3 6 L 3 19 L 4 19 L 9 19 L 9 18 L 4 18 L 4 6 L 16 6 L 16 10 L 17 10 L 17 6 L 17 5 L 17 3 L 15 3 L 15 4 L 14 4 L 14 3 L 6 3 L 6 4 L 5 4 L 5 3 L 3 3 z M 5 7 L 5 8 L 15 8 L 15 7 L 5 7 z M 5 10 L 5 11 L 15 11 L 15 10 L 5 10 z M 17 11 L 16.003906 11.994141 L 16 11.990234 L 11 16.988281 L 11.007812 16.996094 L 11.003906 18 L 11 18 L 11 18.990234 L 11 19 L 13 19 L 13.005859 18.994141 L 13.009766 18.990234 C 13.013766 18.990214 13.015531 18.992187 13.019531 18.992188 L 13.013672 18.986328 L 14 18 L 18 14.003906 L 17.294922 13.294922 L 12.304688 18.28125 L 11.710938 17.689453 L 16.703125 12.701172 L 17.294922 13.294922 L 18 13.998047 L 19 12.998047 L 17 11 z M 5 13 L 5 14 L 12 14 L 12 13 L 5 13 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
