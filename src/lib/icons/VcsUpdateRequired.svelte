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

	{#if numericSize <= 12}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 8 8"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs
     id="defs11" />
  
  
  <circle
     style="fill:currentColor;fill-opacity:1;stroke:none"
     class="ColorScheme-NeutralText"
     cx="4"
     cy="4"
     r="4"
     id="circle3" />
  <path
     d="M 4,0 V 1 C 2.3431458,1 1,2.3431458 1,4 1,5.6568542 2.3431458,7 4,7 5.6568542,7 7,5.6568542 7,4 H 5 C 5,4.5522847 4.5522847,5 4,5 3.4477153,5 3,4.5522847 3,4 3,3.4477153 3.4477153,3 4,3 V 4 L 7,2 Z"
     id="path5"
     style="fill:#ffffff" />
		</svg>
	{:else if numericSize <= 19}
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
			<circle style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText" cx="8" cy="8" r="8"/>
    <path style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text" d="M8 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm0 1a7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7z"/>
    <path d="M8 1v2a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5h-2a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3v2l4-3z" fill="#fff"/>
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
			<path d="M11 0A11 11 0 0 0 0 11a11 11 0 0 0 11 11 11 11 0 0 0 11-11A11 11 0 0 0 11 0z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText"/>
    <path d="M11 0A11 11 0 0 0 0 11a11 11 0 0 0 11 11 11 11 0 0 0 11-11A11 11 0 0 0 11 0zm0 1a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 1 11 10 10 0 0 1 11 1z" style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text"/>
    <path d="M11 1v2a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8h-2a6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6v2l4-3z" fill="#fff"/>
		</svg>
	{/if}
