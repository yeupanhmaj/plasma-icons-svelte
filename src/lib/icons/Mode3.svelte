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
        d="M 2 2 L 2 3 L 7 3 L 7 2 L 2 2 z M 9 2 L 9 3 L 14 3 L 14 2 L 9 2 z M 2 5 L 2 6 L 7 6 L 7 5 L 2 5 z M 9 5 L 9 6 L 14 6 L 14 5 L 9 5 z M 5 8 L 5 9 L 7 9 L 7 8 L 5 8 z M 12 11 L 12 12 L 10 12 L 10 13 L 12 13 L 12 14 L 14 12.5 L 12 11 z "
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m 12,7 0,1 -2,0 C 8.892,8 8,8.892 8,10 l 0,1 c 0,0.554 -0.446,1 -1,1 l -2,0 0,1 2,0 c 1.108,0 2,-0.892 2,-2 L 9,10 C 9,9.446 9.446,9 10,9 l 2,0 0,1 2,-1.5 z"
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
     d="M 3 3 L 3 4 L 10 4 L 10 3 L 3 3 z M 12 3 L 12 4 L 19 4 L 19 3 L 12 3 z M 3 6 L 3 7 L 10 7 L 10 6 L 3 6 z M 12 6 L 12 7 L 19 7 L 19 6 L 12 6 z M 3 9 L 3 10 L 10 10 L 10 9 L 3 9 z M 12 9 L 12 10 L 19 10 L 19 9 L 12 9 z M 3 13 L 3 14 L 10 14 L 10 13 L 3 13 z M 11 13 L 11 14 L 13.009766 14 C 13.276276 14.00046 13.537848 14.071901 13.767578 14.207031 C 13.894008 13.893491 14.070224 13.609386 14.277344 13.347656 C 13.893394 13.120786 13.455736 13.00075 13.009766 13 L 11 13 z M 18.009766 16 L 18.009766 17 L 17.009766 17 C 16.743256 16.99954 16.481683 16.928099 16.251953 16.792969 C 16.125523 17.106509 15.949307 17.390614 15.742188 17.652344 C 16.126138 17.879214 16.563796 17.99925 17.009766 18 L 18.009766 18 L 18.009766 19 L 20.009766 17.5 L 18.009766 16 z M 3 17 L 3 18 L 10 18 L 10 17 L 3 17 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 18.009766 12 L 18.009766 13 L 17.009766 13 C 15.629056 12.99999 14.509766 14.11928 14.509766 15.5 C 14.509766 16.32843 13.838196 17 13.009766 17 L 10.978516 17 L 10.978516 18 L 13.009766 18 C 14.390476 18.00001 15.509766 16.88072 15.509766 15.5 C 15.509766 14.67157 16.181336 14 17.009766 14 L 18.009766 14 L 18.009766 15 L 20.009766 13.5 L 18.009766 12 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
