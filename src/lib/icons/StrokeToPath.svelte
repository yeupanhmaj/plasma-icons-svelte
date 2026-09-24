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
        d="M 11.003906 3.5 A 7.5 7.5 0 0 0 3.5039062 11 L 4.5039062 11 A 6.5 6.5 0 0 1 11.003906 4.5 L 11.003906 3.5 z M 12 10 A 2 2 0 0 0 10 12 A 2 2 0 0 0 10.279297 13.013672 L 11.039062 12.257812 A 1 1 0 0 1 11 12 A 1 1 0 0 1 12 11 A 1 1 0 0 1 12.257812 11.035156 L 13.009766 10.279297 A 2 2 0 0 0 12 10 z M 13.720703 10.986328 L 12.964844 11.742188 A 1 1 0 0 1 13 12 A 1 1 0 0 1 12 13 A 1 1 0 0 1 11.742188 12.964844 L 10.986328 13.720703 A 2 2 0 0 0 12 14 A 2 2 0 0 0 14 12 A 2 2 0 0 0 13.720703 10.986328 z "
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:0.5;stroke:none"
        d="M 10,4.59 C 7.211,5.028 5.023,7.215 4.586,10.004 l 1.414,0 0,3 3.178,0 C 9.062,12.683 9.002,12.345 9,12.004 c 0,-1.657 1.343,-3 3,-3 0.341,0.001 0.679,0.061 1,0.176 l 0,-3.176 -3,0 z"
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
     d="M 10 2 L 10 6 L 14 6 L 14 2 L 10 2 z M 11 3 L 13 3 L 13 5 L 11 5 L 11 3 z M 2 10 L 2 14 L 6 14 L 6 10 L 2 10 z M 3 11 L 5 11 L 5 13 L 3 13 L 3 11 z "
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
     d="M 15 4.5 A 10.5 10.5 0 0 0 4.5 15 L 5.5 15 A 9.5 9.5 0 0 1 15 5.5 L 15 4.5 z M 16.5 14 A 2.4999914 2.4999914 0 0 0 14 16.5 A 2.4999914 2.4999914 0 0 0 14.416016 17.876953 L 15.148438 17.144531 A 1.5 1.5 0 0 1 15 16.5 A 1.5 1.5 0 0 1 16.5 15 A 1.5 1.5 0 0 1 17.144531 15.148438 L 17.876953 14.416016 A 2.4999914 2.4999914 0 0 0 16.5 14 z M 18.583984 15.123047 L 17.851562 15.855469 A 1.5 1.5 0 0 1 18 16.5 A 1.5 1.5 0 0 1 16.5 18 A 1.5 1.5 0 0 1 15.855469 17.851562 L 15.123047 18.583984 A 2.4999914 2.4999914 0 0 0 16.5 19 A 2.4999914 2.4999914 0 0 0 19 16.5 A 2.4999914 2.4999914 0 0 0 18.583984 15.123047 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.5;stroke:none" 
     d="M 15 5.5 A 9.5 9.5 0 0 0 5.5 15 L 7 15 L 7 18 L 13 18 L 13 16.5 A 3.5 3.4999914 0 0 1 16.5 13 L 18 13 L 18 7 L 15 7 L 15 5.5 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 15 3 L 15 7 L 19 7 L 19 3 L 15 3 z M 16 4 L 18 4 L 18 6 L 16 6 L 16 4 z M 3 15 L 3 19 L 7 19 L 7 15 L 3 15 z M 4 16 L 6 16 L 6 18 L 4 18 L 4 16 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
