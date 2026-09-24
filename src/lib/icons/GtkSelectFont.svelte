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
     d="m 6.39,3 -4.383,11 1.357,0 1.189,-3 4.928,0 1.152,3 1.373,0 L 7.754,3 Z M 7.07,4.328 C 7.183,4.704 7.781,6.41 8.867,9.443 L 9.092,10 4.949,10 Z"
     class="ColorScheme-Text"
     />
  <path
     style="fill:currentColor;fill-rule:evenodd"
     d="M 13 2 A 1 1 0 0 0 12 3 A 1 1 0 0 0 13 4 A 1 1 0 0 0 14 3 A 1 1 0 0 0 13 2 z M 13 5 A 1 1 0 0 0 12 6 A 1 1 0 0 0 13 7 A 1 1 0 0 0 14 6 A 1 1 0 0 0 13 5 z M 13 8 A 1 1 0 0 0 12 9 A 1 1 0 0 0 13 10 A 1 1 0 0 0 14 9 A 1 1 0 0 0 13 8 z "
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
     d="M 9.9101562 4 L 6.5957031 13.59375 L 6.4726562 14 L 5 18 L 6.6582031 18 L 8.2832031 13.5625 L 13.716797 13.5625 L 15.341797 18 L 17 18 L 15.527344 14 L 15.404297 13.59375 L 12.089844 4 L 11.875 4 L 10.125 4 L 9.9101562 4 z M 11.015625 5.9375 L 13.195312 12.28125 L 8.8046875 12.28125 L 11.015625 5.9375 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 18 3 C 17.44771 3 17 3.4477 17 4 C 17 4.5523 17.44771 5 18 5 C 18.55228 5 19 4.5523 19 4 C 19 3.4477 18.55228 3 18 3 z M 18 7 C 17.44771 7 17 7.4477 17 8 C 17 8.5523 17.44771 9 18 9 C 18.55228 9 19 8.5523 19 8 C 19 7.4477 18.55228 7 18 7 z M 18 11 C 17.44771 11 17 11.4477 17 12 C 17 12.5523 17.44771 13 18 13 C 18.55228 13 19 12.5523 19 12 C 19 11.4477 18.55228 11 18 11 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
