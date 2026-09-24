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
			<path
     transform="translate(-421.71,-531.79)"
     d="m 429.71429,533.79074 c -1.65685,0 -3,1.34315 -3,3 0,1.65685 1.34315,3 3,3 1.65685,0 3,-1.34315 3,-3 0,-1.65685 -1.34315,-3 -3,-3 m 0,7 c -2.76142,0 -5,2.01472 -5,4.5 7.4e-4,0.16709 0.0118,0.33402 0.0332,0.5 h 9.93 c 0.0227,-0.16592 0.0351,-0.33284 0.0371,-0.5 0,-2.48528 -2.23858,-4.5 -5,-4.5"
     style="fill:currentColor;fill-opacity:1;stroke:none"
     class="ColorScheme-Text" />
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
			<circle
     r="4"
     cy="7"
     cx="11"
     class="ColorScheme-Text"
     style="fill:currentColor;fill-opacity:1;stroke:none" />
  <path
     class="ColorScheme-Text"
     d="M 11,12 C 6.9720209,12.004767 3.5757736,15.003572 3.0722656,19 19,19 16.155595,19 18.929688,19 18.426086,15.002835 15.028723,12.003784 11,12 Z"
     style="fill:currentColor;fill-opacity:1;stroke:none" />
		</svg>
	{/if}
