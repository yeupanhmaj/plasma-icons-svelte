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
        d="M 2,2 2,3 7,3 7,2 2,2 Z M 9,2 9,3 14,3 14,2 9,2 Z M 2,5 2,6 7,6 7,5 2,5 Z m 7,0 0,1 5,0 0,-1 -5,0 z"
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 6 7 L 4 8.5 L 6 10 L 6 9 L 8 9 C 8.554 9 9 9.446 9 10 L 9 11 C 9 12.108 9.892 13 11 13 L 13 13 L 13 12 L 11 12 C 10.446 12 10 11.554 10 11 L 10 10 C 10 8.892 9.108 8 8 8 L 6 8 L 6 7 z M 12 7 L 12 8 L 11 8 L 11 9 L 12 9 L 12 10 L 14 8.5 L 12 7 z M 5 12 L 5 13 L 8 13 L 8 12 L 5 12 z "
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
     d="M 3 3 L 3 4 L 10 4 L 10 3 L 3 3 z M 12 3 L 12 4 L 19 4 L 19 3 L 12 3 z M 3 6 L 3 7 L 10 7 L 10 6 L 3 6 z M 12 6 L 12 7 L 19 7 L 19 6 L 12 6 z M 3 9 L 3 10 L 10 10 L 10 9 L 3 9 z M 12 9 L 12 10 L 19 10 L 19 9 L 12 9 z M 3 13 L 3 14 L 10 14 L 10 13 L 3 13 z M 3 17 L 3 18 L 10 18 L 10 17 L 3 17 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 12.5 12 L 10.5 13.5 L 12.5 15 L 12.5 14 L 13.5 14 C 14.32843 14 15 14.67157 15 15.5 C 15 16.88072 16.11929 18.00001 17.5 18 L 19.53125 18 L 19.53125 17 L 17.5 17 C 16.67157 17 16 16.32843 16 15.5 C 16 14.11928 14.88071 12.99999 13.5 13 L 12.5 13 L 12.5 12 z M 18.53125 12 L 18.53125 13 L 17.53125 13 C 17.037155 12.999996 16.579232 13.149125 16.191406 13.396484 A 2 2 0 0 1 16.822266 14.179688 A 2 2 0 0 1 16.828125 14.181641 C 17.038704 14.068834 17.275641 14 17.53125 14 L 18.53125 14 L 18.53125 15 L 20.53125 13.5 L 18.53125 12 z M 14.189453 16.841797 C 13.989891 16.940029 13.76871 17 13.53125 17 L 11.5 17 L 11.5 18 L 13.53125 18 C 14.012649 18.000003 14.460445 17.863343 14.839844 17.626953 A 2 2 0 0 1 14.189453 16.841797 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
