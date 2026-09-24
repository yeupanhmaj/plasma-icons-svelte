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
     d="M 2 2 L 2 14 L 8 14 L 8 13 L 3 13 L 3 5 L 13 5 L 13 8 L 14 8 L 14 2 L 3 2 L 2 2 z "
     class="ColorScheme-Text"/>
   <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
    d="M 9.71,9 9.003,9.707 10.796,11.5 9.003,13.293 9.71,14 11.503,12.207 13.296,14 14.003,13.293 12.21,11.5 14.003,9.707 13.296,9 11.503,10.793 Z" />
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
     d="M 3 3 L 3 7 L 3 18 L 3 19 L 4 19 L 13 19 L 13 18 L 4 18 L 4 7 L 18 7 L 18 13 L 19 13 L 19 7 L 19 3 L 3 3 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#da4453;fill-opacity:1;stroke:none" 
     d="M 14.707031 14 L 14 14.707031 L 15.792969 16.5 L 14 18.292969 L 14.707031 19 L 16.5 17.207031 L 18.292969 19 L 19 18.292969 L 17.207031 16.5 L 19 14.707031 L 18.292969 14 L 16.5 15.792969 L 14.707031 14 z "
     />
		</svg>
	{/if}
