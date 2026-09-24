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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M 5,3 V 4 H 7 V 5.0507812 C 4.7620407,5.3045267 3,7.1975144 3,9.5 3,11.813856 4.7794406,13.714649 7.0332031,13.953125 6.6992186,13.613635 6.43803,13.209557 6.265625,12.765625 4.9435886,12.265608 4,10.997158 4,9.5 4,7.5670034 5.5670034,6 7.5,6 c 1.4804972,0 2.738502,0.9218541 3.25,2.2207031 0.447476,0.1661231 0.856244,0.4220185 1.201172,0.7519531 -0.10518,-0.8491863 -0.442085,-1.62392 -0.957031,-2.2597656 l 0.754297,-0.7542968 0.398046,0.3949218 0.707032,-0.7070312 -1.5,-1.5 L 10.646484,4.8535156 11.042969,5.25 10.291016,6.0019531 C 9.6449906,5.4911251 8.858964,5.1481728 8,5.0507812 V 4 h 2 V 3 Z"/>
    <path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText" d="m12 11.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5z"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" d="m17 15.5a3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1-3.5-3.5 3.5 3.5 0 0 1 3.5-3.5 3.5 3.5 0 0 1 3.5 3.5z"
      class="ColorScheme-NegativeText"/>
    <path style="fill:currentColor;fill-opacity:1;stroke:none" d="m 7,3 v 1 h 3 V 6.0253906 C 6.654686,6.283393 4,9.0908726 4,12.5 c 0,3.578006 2.9219938,6.5 6.5,6.5 0.05475,0 0.107678,-0.0065 0.162109,-0.0078 A 4.4999997,4.4999997 0 0 1 9.71875,17.9375 C 7.0520257,17.557441 5,15.271759 5,12.5 5,9.4624339 7.4624339,7 10.5,7 c 2.771759,0 5.057441,2.0520257 5.4375,4.71875 a 4.4999997,4.4999997 0 0 1 1.054688,0.945312 C 16.99358,12.608981 17,12.555405 17,12.5 17,10.890075 16.402982,9.4176934 15.425781,8.28125 L 16.501953,7.2050781 17.300781,8 18.005859,7.2910156 15.707031,5.0019531 15.001953,5.7109375 15.792969,6.5 14.71875,7.5742188 C 13.700098,6.7020862 12.413238,6.1343845 11,6.0253906 V 4 h 3 V 3 Z"
      class="ColorScheme-Text"/>
		</svg>
	{/if}
