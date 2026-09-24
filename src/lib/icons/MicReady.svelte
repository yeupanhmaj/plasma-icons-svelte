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
     d="M 5 2 C 3.892 2 3 2.892 3 4 L 3 8 C 3 9.108 3.892 10 5 10 C 6.108 10 7 9.108 7 8 L 7 4 C 7 2.892 6.108 2 5 2 z M 1 7 L 1 8 C 1 9.847 2.286 11.405469 4 11.855469 L 4 13 L 3 13 L 3 14 L 7 14 L 7 13 L 6 13 L 6 11.855469 C 7.714 11.404469 9 9.845 9 8 L 9 7 L 8 7 L 8 8 C 8 9.645 6.645 11 5 11 C 3.355 11 2 9.645 2 8 L 2 7 L 1 7 z "
     class="ColorScheme-Text"
     /> 
 <path
      d="M 12,2 A 2,2 0 0 1 14,4 2,2 0 0 1 12,6 2,2 0 0 1 10,4 2,2 0 0 1 12,2 Z"
        style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NeutralText"
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
     style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none"
     d="M 17.000017,3 A 1.9999828,1.9999828 0 0 1 19,5 1.9999828,1.9999828 0 0 1 17.000017,7 1.9999828,1.9999828 0 0 1 15.000034,5 1.9999828,1.9999828 0 0 1 17.000017,3 Z"
     class="ColorScheme-NeutralText" />
  <path
     style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none"
     d="M 7.5,3 C 6.115,3 5,4.115 5,5.5 l 0,6 C 5,12.885 6.115,14 7.5,14 8.885,14 10,12.885 10,11.5 l 0,-6 C 10,4.115 8.885,3 7.5,3 Z M 2,10 2,11 c 9.163e-4,2.235554 1.6341118,4.198898 4,4.808594 L 6,18 l -2,0 0,1 7,0 0,-1 -2,0 0,-2.193359 C 11.365122,15.197142 12.998124,13.23483 13,11 l 0,-1 -1,0 0,1 C 12,13.209139 9.9852814,15 7.5,15 5.0147186,15 3,13.209139 3,11 l 0,-1 z"
     class="ColorScheme-Text" />
		</svg>
	{/if}
