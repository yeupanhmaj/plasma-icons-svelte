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
        d="M 2 2 L 2 3 L 7 3 L 7 2 L 2 2 z M 9 2 L 9 3 L 14 3 L 14 2 L 9 2 z M 2 5 L 2 6 L 7 6 L 7 5 L 2 5 z M 9 5 L 9 6 L 14 6 L 14 5 L 9 5 z M 12 8 L 12 9 L 14 9 L 14 8 L 12 8 z M 7 11 L 5 12.5 L 7 14 L 7 13 L 9 13 L 9 12 L 7 12 L 7 11 z "
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 7,7 5,8.5 7,10 7,9 9,9 c 0.554,0 1,0.446 1,1 l 0,1 c 0,1.108 0.892,2 2,2 l 2,0 0,-1 -2,0 c -0.554,0 -1,-0.446 -1,-1 l 0,-1 C 11,8.892 10.108,8 9,8 L 7,8 Z"
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
     d="M 3 3 L 3 4 L 10 4 L 10 3 L 3 3 z M 12 3 L 12 4 L 19 4 L 19 3 L 12 3 z M 3 6 L 3 7 L 10 7 L 10 6 L 3 6 z M 12 6 L 12 7 L 19 7 L 19 6 L 12 6 z M 3 9 L 3 10 L 10 10 L 10 9 L 3 9 z M 12 9 L 12 10 L 19 10 L 19 9 L 12 9 z M 3 13 L 3 14 L 10 14 L 10 13 L 3 13 z M 18 13 C 17.55403 13.00075 17.116372 13.120786 16.732422 13.347656 C 16.939542 13.609386 17.115756 13.893491 17.242188 14.207031 C 17.471917 14.071901 17.73349 14.00046 18 14 L 20.009766 14 L 20.009766 13 L 18 13 z M 13 16 L 11 17.5 L 13 19 L 13 18 L 14 18 C 14.44597 17.99925 14.883628 17.879214 15.267578 17.652344 C 15.060458 17.390614 14.884244 17.106509 14.757812 16.792969 C 14.528084 16.928099 14.26651 16.99954 14 17 L 13 17 L 13 16 z M 3 17 L 3 18 L 10 18 L 10 17 L 3 17 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 13 12 L 11 13.5 L 13 15 L 13 14 L 14 14 C 14.82843 14 15.5 14.67157 15.5 15.5 C 15.5 16.88072 16.61929 18.00001 18 18 L 20.03125 18 L 20.03125 17 L 18 17 C 17.17157 17 16.5 16.32843 16.5 15.5 C 16.5 14.11928 15.38071 12.99999 14 13 L 13 13 L 13 12 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
