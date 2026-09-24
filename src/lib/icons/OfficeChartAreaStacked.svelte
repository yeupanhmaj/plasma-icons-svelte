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
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 2 2 L 2 4.9960938 L 1.0078125 4.9960938 L 1.0078125 5.0058594 L 2 5.0058594 L 2 14 L 14 14 L 14 13 L 3 13 L 3 5.0058594 L 7.46875 5.0058594 L 4.46875 8.0058594 L 3.0078125 8.0058594 L 3.0078125 9.0058594 L 4.8828125 9.0058594 L 9.0058594 4.8828125 L 11.128906 7.0058594 L 11.134766 7.0019531 L 11.138672 7.0058594 L 13.966797 4.1777344 C 13.969797 4.1827344 13.259766 3.4707031 13.259766 3.4707031 L 11.134766 5.5957031 L 9.0078125 3.4707031 L 9.0058594 3.4726562 L 9.0039062 3.4707031 L 7.4765625 4.9960938 L 3 4.9960938 L 3 2 L 2 2 z M 7.5996094 9 L 5.5996094 11 L 3.0058594 11 L 3.0058594 12 L 6.0058594 12 L 6.0058594 11.992188 L 6.0136719 12 L 8.0136719 10 L 9.6054688 10 L 11.605469 12 L 14.005859 12 L 14.005859 11 L 12.019531 11 L 10.019531 9 L 8.6054688 9 L 7.5996094 9 z "
     class="ColorScheme-Text"/>
 <path 
     style="fill:currentColor;fill-opacity:0.5;stroke:none" 
     d="M 13.46,3.67 11.14,6.001 11.136,5.997 11.13,6.001 9.007,3.878 4.884,8.001 l -1.875,0 0,5 11,0 0,-8.778 z"
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
     d="M 4 3 L 4 9 L 4 10 L 4 15 L 4 16 L 4 17 L 3 17 L 3 18 L 4 18 L 4 19 L 5 19 L 5 18 L 19 18 L 19 17 L 5 17 L 5 16 L 5.0078125 16 L 6 16 L 8 16 L 8 15.992188 L 8.0078125 16 L 10.007812 14 L 11.599609 14 L 13.599609 16 L 17.099609 16 L 19 16 L 19 15 L 17.099609 15 L 14.013672 15 L 12.013672 13 L 12 13 L 11.007812 13 L 10.599609 13 L 9.59375 13 L 7.59375 15 L 6 15 L 5.0078125 15 L 5 15 L 5 12 L 5 11 L 5 10 L 6 10 L 7 10 L 8.8730469 10 L 8.875 10 L 10.875 8 L 11.703125 7.171875 L 12.998047 5.8769531 L 15.121094 8 L 15.126953 7.9960938 L 15.130859 8 L 17.130859 6 L 17.958984 5.171875 L 19 4.1308594 L 18.292969 3.4238281 L 17.251953 4.4648438 L 16.423828 5.2929688 L 15.126953 6.5898438 L 13 4.4648438 L 12.998047 4.4667969 L 12.996094 4.4648438 L 11.46875 5.9921875 L 5 5.9921875 L 5 5 L 5 3 L 4 3 z M 5 6 L 11.460938 6 L 10.996094 6.4648438 L 10.167969 7.2929688 L 8.4609375 9 L 7 9 L 6 9 L 5 9 L 5 6 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.5;stroke:none" 
     d="M 18.933594 4.0644531 L 19 4.1308594 L 19 4.1269531 L 18.933594 4.0644531 z M 19 4.1308594 L 17.958984 5.171875 L 17.130859 6 L 15.130859 8 L 15.126953 7.9960938 L 15.121094 8 L 12.998047 5.8769531 L 11.703125 7.171875 L 10.875 8 L 8.875 10 L 8.8730469 10 L 7 10 L 6 10 L 5 10 L 5 11 L 5 12 L 5 15 L 5.0078125 15 L 7.59375 15 L 9.59375 13 L 10 13 L 12 12.992188 L 12.007812 13 L 12.013672 13 L 14.005859 14.992188 L 19 15 L 19 4.1308594 z M 10 14 L 8 16 L 5 16 L 5 17 L 19 17 L 19 16 L 13.599609 16 L 11.599609 14 L 10 14 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
