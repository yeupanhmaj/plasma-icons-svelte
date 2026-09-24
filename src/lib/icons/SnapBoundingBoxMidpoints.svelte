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
			<g transform="translate(-421.71-531.79)" >
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 2 2 L 2 5 L 5 5 L 5 2 L 2 2 z M 11 2 L 11 5 L 14 5 L 14 2 L 11 2 z M 3 3 L 4 3 L 4 4 L 3 4 L 3 3 z M 6 3 L 6 4 L 7 4 L 7 3 L 6 3 z M 9 3 L 9 4 L 10 4 L 10 3 L 9 3 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 3 6 L 3 7 L 4 7 L 4 6 L 3 6 z M 3 9 L 3 10 L 4 10 L 4 9 L 3 9 z M 2 11 L 2 14 L 5 14 L 5 11 L 2 11 z M 11 11 L 11 14 L 14 14 L 14 11 L 11 11 z M 3 12 L 4 12 L 4 13 L 3 13 L 3 12 z M 6 12 L 6 13 L 7 13 L 7 12 L 6 12 z M 9 12 L 9 13 L 10 13 L 10 12 L 9 12 z M 12 12 L 13 12 L 13 13 L 12 13 L 12 12 z "
       transform="translate(421.71,531.79)"
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m431.71 537.79v4h4v-4zm1 1h2v2h-2z"
        class="ColorScheme-Accent"
      />
  </g>
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
     d="M 3 3 L 3 6 L 4 6 L 4 7 L 5 7 L 5 6 L 6 6 L 6 5 L 7 5 L 7 4 L 6 4 L 6 3 L 3 3 z M 16 3 L 16 4 L 15 4 L 15 5 L 16 5 L 16 6 L 17 6 L 17 7 L 18 7 L 18 6 L 19 6 L 19 3 L 16 3 z M 4 4 L 5 4 L 5 5 L 4 5 L 4 4 z M 9 4 L 9 5 L 10 5 L 10 4 L 9 4 z M 12 4 L 12 5 L 13 5 L 13 4 L 12 4 z M 17 4 L 18 4 L 18 5 L 17 5 L 17 4 z M 4 9 L 4 10 L 5 10 L 5 9 L 4 9 z M 4 12 L 4 13 L 5 13 L 5 12 L 4 12 z M 4 15 L 4 16 L 3 16 L 3 19 L 6 19 L 6 18 L 7 18 L 7 17 L 6 17 L 6 16 L 5 16 L 5 15 L 4 15 z M 17 15 L 17 16 L 16 16 L 16 17 L 15 17 L 15 18 L 16 18 L 16 19 L 19 19 L 19 16 L 18 16 L 18 15 L 17 15 z M 4 17 L 5 17 L 5 18 L 4 18 L 4 17 z M 9 17 L 9 18 L 10 18 L 10 17 L 9 17 z M 12 17 L 12 18 L 13 18 L 13 17 L 12 17 z M 17 17 L 18 17 L 18 18 L 17 18 L 17 17 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 15 9 L 15 13 L 19 13 L 19 9 L 15 9 z M 16 10 L 18 10 L 18 12 L 16 12 L 16 10 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
