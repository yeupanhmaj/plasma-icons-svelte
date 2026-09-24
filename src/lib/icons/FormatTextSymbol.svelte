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
       d="M 5.75 2 C 5.75 2 2 2.0000094 2 5.75 C 2.7491174 4.2518037 3.4651563 4.032975 5.7089844 4.03125 C 5.7000181 12.233905 3.5018638 12.269153 3.5 13.578125 C 4.6256188 14.442198 6.384518 13.963246 6.5136719 12.265625 L 7.1894531 4.0078125 L 10.177734 3.9960938 L 9.5 12.3125 C 9.5 14.562494 12.499999 14.562494 13.25 12.3125 L 14 10.0625 C 13.250001 11.562496 11.000612 13.812957 11.066406 11.523438 L 11.701172 4.0078125 L 14 4 L 14 2 L 5.75 2 z "
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
    d="M 8 3 C 8 3 3 3 3 8 C 3.9988232 6.0023537 4.9984639 5.0023509 7.9902344 5 C 7.9782762 15.936865 5.002485 16.692212 5 18.4375 C 6.5008252 19.5896 8.8453725 18.951 9.0175781 16.6875 L 9.9941406 5 L 13.978516 5 L 13 16.75 C 13 19.75 17 19.75 18 16.75 L 19 13.75 C 18 15.75 15.000165 18.749966 15.087891 15.697266 L 15.978516 5 L 19 5 L 19 3 L 8 3 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
