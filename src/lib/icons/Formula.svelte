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
       d="M 9.1484375 2 L 6.6289062 11.408203 L 4.6621094 8 L 4.3691406 8 L 3.5058594 8 L 2 8 L 2 9 L 4.0839844 9 L 6.9707031 14 L 9.9179688 3 L 14 3 L 14 2 L 10.185547 2 L 9.5292969 2 L 9.1484375 2 z "
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
    d="M 13.220703 3 L 9.6289062 16.408203 L 7.0839844 12 L 7 12 L 3 12 L 3 13 L 6.5058594 13 L 9.9707031 19 L 14 3.9628906 L 14 4 L 19 4 L 19 3 L 14.257812 3 L 14 3 L 13.220703 3 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
