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
        d="M 14,2 A 12,12.00001 0 0 0 2,14 l 1,0 A 11,11 0 0 1 14,3 Z"
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 4.5039062 3 A 1.499998 1.499998 0 0 0 3.0039062 4.5 A 1.499998 1.499998 0 0 0 4.5039062 6 A 1.499998 1.499998 0 0 0 6.0039062 4.5 A 1.499998 1.499998 0 0 0 4.5039062 3 z M 4.5039062 4 A 0.5 0.5 0 0 1 5.0039062 4.5 A 0.5 0.5 0 0 1 4.5039062 5 A 0.5 0.5 0 0 1 4.0039062 4.5 A 0.5 0.5 0 0 1 4.5039062 4 z M 7.5039062 6 A 1.499998 1.499998 0 0 0 6.0039062 7.5 A 1.499998 1.499998 0 0 0 7.5039062 9 A 1.499998 1.499998 0 0 0 9.0039062 7.5 A 1.499998 1.499998 0 0 0 7.5039062 6 z M 7.5039062 7 A 0.5 0.5 0 0 1 8.0039062 7.5 A 0.5 0.5 0 0 1 7.5039062 8 A 0.5 0.5 0 0 1 7.0039062 7.5 A 0.5 0.5 0 0 1 7.5039062 7 z "
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
			<path id="path4" class="ColorScheme-Text" d="m19 4a15 15 0 0 0-15 15h1a14 14 0 0 1 14-14z" fill="currentColor"/>
    <path id="path6" class="ColorScheme-Accent" d="m7 5a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm0 1a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1zm4 2a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm0 1a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1z" fill="currentColor"/>
		</svg>
	{/if}
