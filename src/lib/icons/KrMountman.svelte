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
        d="m 2,2 0,12 12,0 0,-12 z m 1,1 10,0 0,8 -5,0 0,1 -2,0 0,-1 -3,0 0,-1 z m 1,1 0,6 8,0 0,-6 z m 1,1 1,0 0,2 4,0 0,-2 1,0 0,4 -6,0 z m -2,7 2,0 0,1 -2,0 z m 6,0 3,0 0,1 -3,0 z"
        class="ColorScheme-Text"
        />
  <path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-PositiveText"
     d="m 6,5.9999852 c 2.216,0 4,1.784 4,4 0,2.2159998 -1.784,3.9999998 -4,3.9999998 -2.216,0 -4,-1.784 -4,-3.9999998 0,-2.216 1.784,-4 4,-4 z"
      />
  <path
     d="M 8,8 5,11 4,10 3,11 5,13 9,9 Z"
     style="fill:#ffffff;fill-rule:evenodd"
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
     d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 16 L 11 16 L 11 17 L 8 17 L 8 16 L 7 17 L 7 18 L 6 18 L 4 18 L 4 17 L 5 17 L 4 16 L 4 4 z M 6 6 L 6 14 L 8 14 L 9 13 L 7 13 L 7 12 L 7 7 L 8 7 L 9 7 L 9 11 L 13 11 L 13 7 L 14 7 L 15 7 L 15 12 L 15 13 L 9 13 L 10 14 L 16 14 L 16 6 L 6 6 z M 12 17 L 18 17 L 18 18 L 12 18 L 12 17 z "
     class="ColorScheme-Text"
     />
    <path
     style="fill:#2ecc71;fill-opacity:1;stroke:none"
     d="M 7 11 C 4.784 11 3 12.784 3 15 C 3 17.216 4.784 19 7 19 C 9.216 19 11 17.216 11 15 C 11 12.784 9.216 11 7 11 z M 9 13 L 10 14 L 6 18 L 5 17 L 4 16 L 5 15 L 6 16 L 9 13 z "
     />
		</svg>
	{/if}
