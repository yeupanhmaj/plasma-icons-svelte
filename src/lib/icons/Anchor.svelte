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
     d="M 8 2 C 6.89543 2 6 2.89543 6 4 C 6 4.93198 6.6373 5.71554 7.5 5.9375 L 7.5 8 L 5 8 L 5 9 L 7.5 9 L 7.5 10 L 7.5 12.96875 C 6.3123571 12.892642 4.936375 12.390014 3.9375 11.84375 L 4.4375 11.1875 L 3.59375 10.625 L 2 12.78125 C 2 12.78125 2.84332 13.30831 2.84375 13.3125 L 3.3125 12.6875 C 4.6170785 13.429365 6.4060192 14 8 14 C 9.598782 14 11.351983 13.401328 12.65625 12.65625 L 13.15625 13.3125 L 14 12.75 L 12.375 10.59375 L 11.5625 11.1875 L 12.03125 11.8125 C 11.030728 12.365584 9.7016152 12.891717 8.5 12.96875 L 8.5 10 L 8.5 9 L 11 9 L 11 8 L 8.5 8 L 8.5 5.9375 C 9.3627 5.71554 10 4.93198 10 4 C 10 2.89543 9.10457 2 8 2 z M 8 3 C 8.55228 3 9 3.44772 9 4 C 9 4.55228 8.55228 5 8 5 C 7.44772 5 7 4.55228 7 4 C 7 3.44772 7.44772 3 8 3 z "
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
	transform="translate(-1-1)" d="m12 4c-1.104569 0-2 .89543-2 2 0 .93198.637301 1.715537 1.5 1.9375v2.0625h-2.5v1h2.5v7.96875c-2.539039-.162769-4.748393-1.512158-6.09375-3.5l.1875-.09375.90625-.5-.5-.875c.000019.000017-3 1.625-3 1.625l.5.875 1.03125-.5625c1.604162 2.435643 4.335597 4.0625 7.46875 4.0625 3.133153 0 5.863905-1.626857 7.46875-4.0625l1.03125.5625.5-.875c.000014-.000633-3-1.625-3-1.625l-.5.875.90625.5.1875.09375c-1.345357 1.987842-3.554711 3.337231-6.09375 3.5v-7.96875h2.5v-1h-2.5v-2.0625c.862699-.221963 1.5-1.00552 1.5-1.9375 0-1.10457-.895431-2-2-2m0 1c.552285 0 1 .447715 1 1 0 .552285-.447715 1-1 1-.552285 0-1-.447715-1-1 0-.552285.447715-1 1-1z" 
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
