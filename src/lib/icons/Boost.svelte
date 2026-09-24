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
			<path class="ColorScheme-Text" d="m4 4.5 3-2.5v2h7v6h-1v-5h-6v2zm-2 1.5h1v5h6v-2l3 2.5-3 2.5v-2h-7z" fill="currentColor"/>
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
			<g class="ColorScheme-Text" fill="none" stroke="currentColor">
  <path d="m17.5 13v-7.5h-12"/>
  <path d="m4.5227 9-0.02274 7.5h12"/>
  <path d="m9.3732 3.613-4.9718 1.883 4.9718 1.883" stroke-linecap="square"/>
  <path d="m12.632 14.621 4.9583 1.8758-4.9583 1.8758" stroke-linecap="square"/>
 </g>
		</svg>
	{/if}
