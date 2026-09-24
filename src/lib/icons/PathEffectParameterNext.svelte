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
        d="M 11 2 L 11 5 L 14 5 L 14 2 L 11 2 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 13 9 L 13 14 L 14 14 L 14 9 L 13 9 z M 9.6074219 9.0019531 C 9.6364219 8.9859531 9 9.609375 9 9.609375 L 10.904297 11.501953 L 9.03125 13.435547 L 9.6074219 14.001953 L 12 11.501953 L 9.6074219 9.0019531 z M 3.5 11 C 2.669 11 2 11.02227 2 11.048828 L 2 13.951172 C 2 13.97773 2.669 14 3.5 14 C 4.331 14 5 13.97773 5 13.951172 L 5 11.048828 C 5 11.02227 4.331 11 3.5 11 z M 3 12 L 4 12 L 4 13 L 3 13 L 3 12 z "
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m 11,3 a 8,8 0 0 0 -8,8 l 1,0 a 7,7 0 0 1 7,-7 z"
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
     d="M 16 3 L 16 6 L 19 6 L 19 3 L 16 3 z M 17 4 L 18 4 L 18 5 L 17 5 L 17 4 z M 14.607422 14 C 14.636922 13.984 14 14.609375 14 14.609375 L 15.904297 16.5 L 14.03125 18.435547 L 14.607422 19 L 17 16.5 L 14.607422 14 z M 18 14 L 18 19 L 19 19 L 19 14 L 18 14 z M 3 16 L 3 19 L 6 19 L 6 16 L 3 16 z M 4 17 L 5 17 L 5 18 L 4 18 L 4 17 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 16 4 A 12 12 0 0 0 4 16 L 5 16 A 11 11 0 0 1 16 5 L 16 4 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
