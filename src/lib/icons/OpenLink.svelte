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

	{#if numericSize <= 14}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 12 12"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path style="fill:currentColor;fill-opacity:1;stroke:none" d="M 10.000641,8.0008275 V 10.00042 L 2.000167,10.000584 2,2.0001643 4.0000006,2.0000002 4.0000007,1 1,1.0001643 1.000167,11.000584 11.000641,11.000421 V 8.0008275 M 6.0004738,1.9999998 9.283674,2.0096898 5.4754464,5.8174465 6.1825535,6.5245535 9.990781,2.7167967 l 0.0097,3.2832027 0.999999,7e-7 -7e-6,-5 H 6.0004733" class="ColorScheme-Text" />
		</svg>
	{:else if numericSize <= 19}
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
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="m 13.000328,10.000326 0,2.999589 -10.0003273,1.64e-4 0,-9.9999172 2.9999999,-1.641e-4 1e-7,-1.0000002 -4,1.643e-4 0,11.9999172 12.0003273,-1.63e-4 0,-3.99959 m -5.0000002,-7.0003287 3.2832002,0.00969 -4.8079811,4.808206 0.7071071,0.7071071 4.807981,-4.8082062 0.0097,3.2832027 0.999999,7e-7 -7e-6,-5 -4.9999998,0"
     class="ColorScheme-Text"/>
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
     d="m 18.000327,11 v 6.999918 L 4,18.000082 V 3.9998357 l 7,-1.643e-4 v -1 L 3,2.9998357 V 19.000082 l 16.000327,-1.64e-4 V 11 m -5,-7.0003284 3.2832,0.00969 -8.3438606,8.3440854 0.7071072,0.707107 8.3438604,-8.3440856 0.0097,3.2832031 h 1 l -7e-6,-5 -5,-10e-8"
     class="ColorScheme-Text" />
		</svg>
	{/if}
