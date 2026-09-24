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
       d="M 3 2 L 3 3 L 3 4 L 2 4 L 2 5 L 3 5 L 3 11 L 2 11 L 2 12 L 3 12 L 3 13 L 3 14 L 5 14 L 7 14 L 7 13 L 5 13 L 5 3 L 13 3 L 13 7 L 14 7 L 14 2 L 13 2 L 3 2 z M 11.171875 8.671875 L 10.464844 9.3789062 L 11.414062 10.328125 L 12.085938 11 L 8 11 L 8 12 L 12.085938 12 L 11.414062 12.671875 L 10.464844 13.621094 L 11.171875 14.328125 L 12.121094 13.378906 L 14 11.5 L 12.121094 9.6210938 L 11.171875 8.671875 z "
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
     d="M 4 3 L 4 5 L 3 5 L 3 6 L 4 6 L 4 7 L 3 7 L 3 8 L 4 8 L 4 14 L 3 14 L 3 15 L 4 15 L 4 16 L 3 16 L 3 17 L 4 17 L 4 19 L 7 19 L 11 19 L 11 18 L 10 18 L 9 18 L 7 18 L 7 16 L 7 15 L 7 13 L 7 12 L 7 10 L 7 9 L 7 7 L 7 6 L 7 4 L 9 4 L 10 4 L 18 4 L 18 6 L 18 7 L 18 9 L 18 10 L 18 11 L 19 11 L 19 3 L 7 3 L 4 3 z M 15.707031 12 L 15 12.707031 L 17.292969 15 L 13 15 L 13 16 L 17.292969 16 L 15 18.292969 L 15.707031 19 L 19 15.707031 L 19.207031 15.5 L 19 15.292969 L 15.707031 12 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
