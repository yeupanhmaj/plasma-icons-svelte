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
       d="M 9.08984,2 5.94336,13.74023 6.91016,14 10.05664,2.25977 9.08984,2 Z M 5.28516,4 2.32422,7.14453 2,7.49219 2.32422,7.83789 5.26758,11 5.98242,10.30469 3.36133,7.49219 6,4.69531 5.28516,4 Z M 10.71484,4 10,4.69531 12.63867,7.49219 10.01758,10.30469 10.73242,11 13.67578,7.83789 14,7.49219 13.67578,7.14453 10.71484,4 Z"
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
    d="M 12.5 3 L 8.5 18.753906 L 9.5 19 L 13.5 3.2460938 L 12.5 3 z M 7.2539062 6 L 3.2792969 10.644531 L 3 11 L 3.2792969 11.355469 L 7.2539062 16 L 8 15.291016 L 4.3359375 11 L 8 6.7089844 L 7.2539062 6 z M 14.746094 6 L 14 6.7089844 L 17.664062 11 L 14 15.291016 L 14.746094 16 L 18.720703 11.355469 L 19 11 L 18.720703 10.644531 L 14.746094 6 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
