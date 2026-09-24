<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 16,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 16
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="m424.8 542.79l.367.379 1.621 1.621h-2.076v1h2.076l-1.621 1.621-.381.379h1.417l2.5-2.5-2.5-2.5zm-2.088 2v1h2v-1z" 
       transform="translate(-421.71-535.79)" 
       class="ColorScheme-Accent" 
       />
 <path style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="m1 1v2h8v6h2v-8zm0 4v1h5v1h1v-2z"
       class="ColorScheme-Text"
       />
		</svg>
	{:else}
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
     d="M 2 2 L 2 4 L 12 4 L 12 11 L 14 11 L 14 2 L 2 2 z M 2 6 L 2 7 L 9 7 L 9 11 L 10 11 L 10 6 L 2 6 z "
     class="ColorScheme-Text"/>
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m 5.17,14.33 -0.707,-0.707 1.621,-1.621 -4.076,0 0,-1 4.076,0 L 4.463,9.381 5.17,8.674 7.998,11.502 7.291,12.209 Z"
     class="ColorScheme-Accent"/>
		</svg>
	{/if}
