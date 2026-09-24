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
     d="M 9 3 L 9 13 L 10 13 L 10 12.232422 A 3 3 0 0 0 12 13 A 3 3 0 0 0 15 10 A 3 3 0 0 0 12 7 A 3 3 0 0 0 10 7.7675781 L 10 3 L 9 3 z M 3.8964844 3.0058594 L 1.0078125 13.005859 L 2.1757812 13.005859 L 3.0078125 10.005859 L 6.0078125 10.005859 L 6.8417969 13.005859 L 8.0078125 13.005859 L 5.3632812 3.0058594 L 3.8964844 3.0058594 z M 4.6289062 4.5566406 L 5.7226562 8.7207031 L 3.4199219 8.7207031 L 4.6289062 4.5566406 z M 12 8 A 2 2 0 0 1 14 10 A 2 2 0 0 1 12 12 A 2 2 0 0 1 10 10 A 2 2 0 0 1 12 8 z "
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
			<g transform="translate(-326,-534.3622)">
 <path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="m 339,539.3622 0,8 0,4 1,0 0,-1.36133 a 4,4 0 0 0 3,1.36133 4,4 0 0 0 4,-4 4,4 0 0 0 -4,-4 4,4 0 0 0 -3,1.36133 l 0,-5.36133 -1,0 z m 4,5 a 3,3 0 0 1 3,3 3,3 0 0 1 -3,3 3,3 0 0 1 -3,-3 3,3 0 0 1 3,-3 z"
    class="ColorScheme-Text"
    />  
 <path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="m 331.67226,537.3622 -4.84123,14 1.16897,0 1.73532,-4.66667 6.03963,0 1.72854,4.66667 1.32754,0 -4.90693,-14 -2.25184,0 z m 1.08967,1.20085 2.58033,6.96582 -5.17198,0 2.59165,-6.96582 z"
    class="ColorScheme-Accent"
    />  
 </g>
		</svg>
	{/if}
