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
        d="M 4 2 A 1 1 0 0 0 3 3 A 1 1 0 0 0 4 4 A 1 1 0 0 0 5 3 A 1 1 0 0 0 4 2 z M 6 2 L 6 3 L 14 3 L 14 2 L 8 2 L 6 2 z M 6 4 L 6 5 L 12 5 L 12 4 L 8 4 L 6 4 z M 4 8 A 1 1 0 0 0 3 9 A 1 1 0 0 0 4 10 A 1 1 0 0 0 5 9 A 1 1 0 0 0 4 8 z M 6 8 L 6 9 L 10 9 L 10 8 L 8 8 L 6 8 z M 6 10 L 6 11 L 9 11 L 9 10 L 8 10 L 6 10 z M 12 13 L 12 14 L 14 14 L 14 13 L 12 13 z "
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 14,12 14,7 11,9.5 Z"
        class="ColorScheme-Accent"
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
     d="M 4.5,3 C 3.787,3 3,3.704 3,4.5 3,5.3 3.787,6 4.5,6 5.33,6 6,5.3 6,4.5 6,3.704 5.33,3 4.5,3 Z M 8,3 V 4 H 19 V 3 Z m 0,2 v 1 h 4 V 5 Z M 4.5,9 C 3.732,9 3,9.71 3,10.5 3,11.3 3.732,12 4.5,12 5.3,12 6,11.3 6,10.5 6,9.71 5.3,9 4.5,9 Z M 8,9 v 1 h 6 V 9 Z m 0,2 v 1 h 5 V 11 Z M 4.5,15 C 3.732,15 3,15.7 3,16.5 3,17.3 3.732,18 4.5,18 5.3,18 6,17.3 6,16.5 6,15.7 5.3,15 4.5,15 Z M 8,15 v 1 h 9 v -1 z m 0,2 v 1 h 7 v -1 z"
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 19 8 L 15 11 L 19 14 L 19 8 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
