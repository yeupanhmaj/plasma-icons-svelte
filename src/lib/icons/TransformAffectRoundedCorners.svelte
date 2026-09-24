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
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m1 1v1h4a5 5 0 0 1 5 5v2h1v-2a6 6 0 0 0 -6 -6zm0 3v1h4a2 2 0 0 1 2 2v1h1v-1a3 3 0 0 0 -3 -3z"
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
     d="M 2 2 L 2 3 L 8 3 A 5 5 0 0 1 13 8 L 13 11 L 14 11 L 14 8 A 6 6 0 0 0 8 2 L 2 2 z M 2 6 L 2 7 L 8 7 A 1 1 0 0 1 9 8 L 9 11 L 10 11 L 10 8 A 2 2 0 0 0 8 6 L 2 6 z "
     class="ColorScheme-Text"/>
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m 5.17,14.33 -0.707,-0.707 1.621,-1.621 -4.076,0 0,-1 4.076,0 L 4.463,9.381 5.17,8.674 7.998,11.502 7.291,12.209 Z" 
     class="ColorScheme-Accent"/>
		</svg>
	{/if}
