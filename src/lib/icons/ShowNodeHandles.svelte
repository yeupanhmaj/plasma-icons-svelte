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
        d="M 11 2 L 11 3 A 8 8 0 0 0 3 11 L 4 11 A 7 7 0 0 1 11 4 L 11 5 L 14 5 L 14 2 L 11 2 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z "
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 3.5 2 A 1.5 1.500015 0 0 0 2 3.5 A 1.5 1.500015 0 0 0 3 4.9121094 L 3 7 L 4 7 L 4 4.9121094 A 1.5 1.500015 0 0 0 5 3.5 A 1.5 1.500015 0 0 0 3.5 2 z M 3.5 3 A 0.5 0.5 0 0 1 4 3.5 A 0.5 0.5 0 0 1 3.5 4 A 0.5 0.5 0 0 1 3 3.5 A 0.5 0.5 0 0 1 3.5 3 z M 3 8 L 3 9 L 4 9 L 4 8 L 3 8 z M 3 10 L 3 11 L 2 11 L 2 14 L 5 14 L 5 11 L 4 11 L 4 10 L 3 10 z M 3 12 L 4 12 L 4 13 L 3 13 L 3 12 z "
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
     d="M 16 4 L 16 4.9980469 A 11.559518 11 0 0 0 15.886719 4.9980469 L 15.886719 5 A 11.559518 11 0 0 0 4.5 15 L 5.546875 15 A 10.508653 10 0 0 1 15.896484 6 A 10.508653 10 0 0 1 16 6 L 16 7 L 19 7 L 19 4 L 16 4 z M 17 5 L 18 5 L 18 6 L 17 6 L 17 5 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 4.9804688 3 A 2 2 0 0 0 3 5.0136719 A 2 2 0 0 0 4.5 6.9355469 L 4.5 9 L 5.5 9 L 5.5 6.9335938 A 2 2 0 0 0 7 5 L 7 4.9746094 A 2 2 0 0 0 4.9804688 3 z M 4.9902344 4 A 1 1 0 0 1 6 4.9863281 L 6 5 A 1 1 0 0 1 5.0039062 6 A 1 1 0 0 1 4 5.0058594 A 1 1 0 0 1 4.9902344 4 z M 4.5 10 L 4.5 11 L 5.5 11 L 5.5 10 L 4.5 10 z M 3 15 L 3 19 L 7 19 L 7 15 L 3 15 z M 4 16 L 6 16 L 6 18 L 4 18 L 4 16 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
