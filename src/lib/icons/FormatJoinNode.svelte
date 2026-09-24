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
        d="m 5.99975,14 0,-0.99975 -3.99975,0 0,-0.99975 3.99975,0 0,-0.99975 3.99975,0 0,0.99975 3.99975,0 0,0.99975 -3.99975,0 0,0.99975 z m 0.99975,-0.99975 2.00025,0 0,-0.99975 -2.00025,0 z M 1.99925,5 l 0,-3 3,0 0,0.99975 2.00025,0 0,0.99975 -2.00025,0 0,0.99975 z m 9,0 0,-0.99975 -2.00025,0 0,-0.99975 2.00025,0 0,-0.99975 3,0 0,3 z M 2.999,4.00025 l 0.99975,0 0,-0.99975 -0.99975,0 z m 9,0 0.99975,0 0,-0.99975 -0.99975,0 z"
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m 5.99975,7.0025 2.00025,3 2.00025,-3 z"
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
     d="M 3 3 L 3 6 L 6 6 L 6 5 L 9 5 L 13 5 L 16 5 L 16 6 L 19 6 L 19 3 L 16 3 L 16 4 L 13 4 L 9 4 L 6 4 L 6 3 L 3 3 z M 4 4 L 5 4 L 5 5 L 4 5 L 4 4 z M 17 4 L 18 4 L 18 5 L 17 5 L 17 4 z M 9 15 L 9 17 L 3 17 L 3 18 L 9 18 L 9 19 L 13 19 L 13 18 L 19 18 L 19 17 L 13 17 L 13 15 L 9 15 z M 10 16 L 12 16 L 12 17 L 12 18 L 10 18 L 10 16 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 9 9.5 L 11 12.5 L 13 9.5 L 9 9.5 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
