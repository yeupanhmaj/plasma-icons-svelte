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
       d="M 6.3828125 2 L 2 13 L 3.3574219 13 L 4.546875 10 L 7 10 L 9.5214844 10 L 10.710938 13 L 12.068359 13 L 7.6855469 2 L 7 2 L 6.3828125 2 z M 12.5 2 L 12.28125 2.1875 L 10 4.5 L 10 5.90625 L 12 3.90625 L 12 7 L 13 7 L 13 3.90625 L 15 5.90625 L 15 4.5 L 12.71875 2.1875 L 12.5 2 z M 7.0058594 3.328125 L 9.1269531 9 L 7 9 L 4.9414062 9 C 4.9401662 9.00746 7.0058594 3.328125 7.0058594 3.328125 z "
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
    d="M 8.2167969 3 L 3 17 L 4.6875 17 L 6.3554688 12.570312 L 11.917969 12.570312 L 12.066406 13 L 13.732422 13 L 10.210938 3 L 8.2167969 3 z M 9.2324219 4.6113281 L 11.361328 11.285156 L 6.8730469 11.285156 L 9.2324219 4.6113281 z M 15.5 12.792969 L 15.292969 13 L 12 16.292969 L 12.707031 17 L 15 14.707031 L 15 19 L 16 19 L 16 14.707031 L 18.292969 17 L 19 16.292969 L 15.707031 13 L 15.5 12.792969 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
