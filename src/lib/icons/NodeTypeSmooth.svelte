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
        d="M 1.0039062 2 A 7 9 0 0 0 7.0039062 10.898438 L 7.0039062 9.8789062 A 6 8 0 0 1 2.0039062 2 L 1.0039062 2 z M 14.003906 2 A 6 8 0 0 1 9.0039062 9.8867188 L 9.0039062 10.896484 A 7 9 0 0 0 15.003906 2.0019531 L 14.003906 2 z M 3.5039062 10 A 1.5 1.5 0 0 0 2.0039062 11.5 A 1.5 1.5 0 0 0 3.5039062 13 A 1.5 1.5 0 0 0 4.9179688 12 L 7 12 L 7 11 L 4.9179688 11 A 1.5 1.5 0 0 0 3.5039062 10 z M 13.503906 10 A 1.5 1.5 0 0 0 12.091797 11 L 11 11 L 11 12 L 12.091797 12 A 1.5 1.5 0 0 0 13.503906 13 A 1.5 1.5 0 0 0 15.003906 11.5 A 1.5 1.5 0 0 0 13.503906 10 z M 3.5039062 11 A 0.500002 0.5 0 0 1 4 11.441406 L 4 11.5625 A 0.500002 0.5 0 0 1 3.5039062 12 A 0.500002 0.5 0 0 1 3.0039062 11.5 A 0.500002 0.5 0 0 1 3.5039062 11 z M 13.503906 11 A 0.500002 0.5 0 0 1 14.003906 11.5 A 0.500002 0.5 0 0 1 13.503906 12 A 0.500002 0.5 0 0 1 13.003906 11.5 A 0.500002 0.5 0 0 1 13.503906 11 z "
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m 6,9 0,4 4,0 0,-4 z m 1,1 2,0 0,2 -2,0 z"
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
     d="M 1 2 A 10 15 0 0 0 9 16.679688 L 9 15.636719 A 9 14 0 0 1 2 2 L 1 2 z M 20 2 A 9 14 0 0 1 13 15.632812 L 13 16.695312 A 10 15 0 0 0 21 2 L 20 2 z M 3 15 L 3 18 L 6 18 L 6 17 L 7 17 L 7 16 L 6 16 L 6 15 L 3 15 z M 18 15 L 18 16 L 17 16 L 17 17 L 18 17 L 18 18 L 21 18 L 21 15 L 18 15 z M 4 16 L 5 16 L 5 17 L 4 17 L 4 16 z M 15 16 L 15 17 L 16 17 L 16 16 L 15 16 z M 19 16 L 20 16 L 20 17 L 19 17 L 19 16 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 8.5 14 L 8.5 19 L 13.5 19 L 13.5 14 L 8.5 14 z M 9.5 15 L 12.5 15 L 12.5 18 L 9.5 18 L 9.5 15 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
