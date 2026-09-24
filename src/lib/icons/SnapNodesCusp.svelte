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
        d="M 5,3 5,4 11,4 11,3 5,3 Z M 3,5 3,11 4,11 4,5 3,5 Z m 9,0 0,6 1,0 0,-6 -1,0 z m -7,7 0,1 6,0 0,-1 -6,0 z"
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 2 2 L 2 5 L 5 5 L 5 2 L 2 2 z M 11 2 L 11 5 L 14 5 L 14 2 L 11 2 z M 3 3 L 4 3 L 4 4 L 3 4 L 3 3 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 2 11 L 2 14 L 5 14 L 5 11 L 2 11 z M 11 11 L 11 14 L 14 14 L 14 11 L 11 11 z M 3 12 L 4 12 L 4 13 L 3 13 L 3 12 z M 12 12 L 13 12 L 13 13 L 12 13 L 12 12 z "
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
			<path id="path4" class="ColorScheme-Text" d="m6 4v1h10v-1zm-2 2v10h1v-10zm13 0v10h1v-10zm-11 11v1h10v-1z" fill="currentColor"/>
    <path id="path6" class="ColorScheme-Accent" d="m2 2v4h4v-4zm14 0v4h4v-4zm-13 1h2v2h-2zm14 0h2v2h-2zm-15 13v4h4v-4zm14 0v4h4v-4zm-13 1h2v2h-2zm14 0h2v2h-2z" fill="currentColor"/>
		</svg>
	{/if}
