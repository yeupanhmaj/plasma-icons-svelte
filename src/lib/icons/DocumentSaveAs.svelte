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
     d="M 2 2 L 2 14 L 3 14 L 4 14 L 7 14 L 7 13 L 6 13 L 5 13 L 5 10 L 6 10 L 7 10 L 8 10 L 8 9 L 7 9 L 5 9 L 3.96875 9 L 3.96875 13 L 3 13 L 3 3 L 4 3 L 5 3 L 5 6 L 5 7 L 7 7 L 11 7 L 11 6 L 11 3 L 11.28125 3 L 13 4.71875 L 13 5 L 13 7 L 14 7 L 14 4.28125 L 11.71875 2 L 11.6875 2 L 11 2 L 4 2 L 3 2 L 2 2 z M 6 3 L 7.90625 3 L 7.90625 6 L 6 6 L 6 3 z M 12 8 L 11 9 L 10 10 L 8 12 L 8 13 L 8 14 L 10 14 L 11 13 L 12 12 L 13 11 L 14 10 L 12 8 z M 11.689453 9.6894531 L 12.28125 10.28125 L 10.59375 11.96875 L 10.59375 11.984375 L 9.3125 13.28125 L 8.71875 12.6875 L 11.689453 9.6894531 z "
     class="ColorScheme-Text"
     />
		</svg>
	{:else if numericSize <= 27}
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
    d="M 2 2.9980469 L 2 3 L 2 4 L 2 19 L 3 19 L 11 19 L 11 18 L 6 18 L 6 12 L 11 12 L 11 11 L 6 11 L 5 11 L 5 18 L 3 18 L 3 4 L 6 4 L 6 8 L 6 9 L 14 9 L 14 8 L 14 4 L 14.292969 4 L 17 6.7070312 L 17 7 L 17 10 L 18 10 L 18 7 L 18 6.3007812 L 17.992188 6.3007812 L 18 6.2910156 L 14.707031 2.9980469 L 14.699219 3.0078125 L 14.699219 2.9980469 L 14 2.9980469 L 2 2.9980469 z M 7 4 L 10.900391 4 L 10.900391 8 L 7 8 L 7 4 z M 18 11 L 17.003906 11.994141 L 17 11.994141 L 12 16.992188 L 12.007812 17.001953 L 12.003906 18.005859 L 12 18.005859 L 12 18.996094 L 12 19.005859 L 14 19.005859 L 14.005859 18.996094 L 14.009766 18.996094 L 14.019531 18.996094 L 14.013672 18.986328 L 15 18 L 19 14.003906 L 18.294922 13.294922 L 13.304688 18.28125 L 12.710938 17.689453 L 17.703125 12.701172 L 18.294922 13.294922 L 19 13.998047 L 20 12.998047 L 18 11 z "
    class="ColorScheme-Text"
    />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 4 4 L 4 28 L 15 28 L 15 27 L 10 27 L 10 20 L 18 20 L 18 19 L 9 19 L 9 27 L 5 27 L 5 5 L 10 5 L 10 13 L 21 13 L 21 5 L 21.585938 5 L 27 10.414062 L 27 16 L 28 16 L 28 10 L 22 4 L 10 4 L 4 4 z M 11 5 L 17 5 L 17 12 L 11 12 L 11 5 z M 24.398438 16 L 19.287109 21.111328 L 16 24.398438 L 16 28 L 19.601562 28 L 28 19.601562 L 24.398438 16 z M 22.349609 19.490234 L 24.509766 21.650391 L 21.335938 24.824219 L 21.335938 24.150391 L 20.322266 24.173828 L 19.287109 24.173828 L 19.287109 23.136719 L 19.287109 22.552734 L 22.349609 19.490234 z M 18.273438 23.564453 L 18.273438 25.185547 L 20.300781 25.185547 L 20.322266 25.839844 L 19.240234 26.919922 L 17.800781 26.919922 L 17.080078 26.199219 L 17.080078 24.757812 L 18.273438 23.564453 z "
     id="path76" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
