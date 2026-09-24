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
        d="m 4,3 0,1 3,0 0,9 5,0 0,-1 -4,0 0,-9 -0.5,0 z"
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
     d="M 3.5 2 A 1.499998 1.5 0 0 0 2 3.5 A 1.499998 1.5 0 0 0 3.5 5 A 1.499998 1.5 0 0 0 5 3.5 A 1.499998 1.5 0 0 0 3.5 2 z M 3.5 3 A 0.5 0.5 0 0 1 4 3.5 A 0.5 0.5 0 0 1 3.5 4 A 0.5 0.5 0 0 1 3 3.5 A 0.5 0.5 0 0 1 3.5 3 z M 12.503906 11 A 1.499998 1.5 0 0 0 11.003906 12.5 A 1.499998 1.5 0 0 0 12.503906 14 A 1.499998 1.5 0 0 0 14.003906 12.5 A 1.499998 1.5 0 0 0 12.503906 11 z M 12.503906 12 A 0.5 0.5 0 0 1 13.003906 12.5 A 0.5 0.5 0 0 1 12.503906 13 A 0.5 0.5 0 0 1 12.003906 12.5 A 0.5 0.5 0 0 1 12.503906 12 z "
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
     d="M 5 4 L 5 5 L 11 5 L 11 17 L 11 18 L 17 18 L 17 17 L 12 17 L 12 4 L 11 4 L 5 4 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 4.5 3 A 1.4999979 1.5 0 0 0 3 4.5 A 1.4999979 1.5 0 0 0 4.5 6 A 1.4999979 1.5 0 0 0 6 4.5 A 1.4999979 1.5 0 0 0 4.5 3 z M 4.5 4 A 0.5 0.5 0 0 1 5 4.5 A 0.5 0.5 0 0 1 4.5 5 A 0.5 0.5 0 0 1 4 4.5 A 0.5 0.5 0 0 1 4.5 4 z M 17.5 16 A 1.4999979 1.5 0 0 0 16 17.5 A 1.4999979 1.5 0 0 0 17.5 19 A 1.4999979 1.5 0 0 0 19 17.5 A 1.4999979 1.5 0 0 0 17.5 16 z M 17.5 17 A 0.5 0.5 0 0 1 18 17.5 A 0.5 0.5 0 0 1 17.5 18 A 0.5 0.5 0 0 1 17 17.5 A 0.5 0.5 0 0 1 17.5 17 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
