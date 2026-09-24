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
			<path class="ColorScheme-Text" d="m4 4.5 3-2.5v2h7v4h-1v-3h-6v2zm-2 1.5h1v5h6v1h-7z" fill="currentColor"/>
 <path class="ColorScheme-PositiveText" d="m13.094 8.434 0.90618 0.4565-2 4.1095-2.2971-1.7334 0.73416-0.89134 1.2971 0.93745z" fill="currentColor"/>
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
			<g fill="none">
  <g class="ColorScheme-Text" stroke="currentColor">
   <path d="m4.5 9v7.5h5.5"/>
  </g>
  <path class="ColorScheme-PositiveText" d="m11 15 3 2 4-6" stroke="currentColor"/>
  <g class="ColorScheme-Text" stroke="currentColor">
   <path d="m17.5 10v-4.5h-12.5"/>
   <path d="m9.3732 3.613-4.9718 1.883 4.9718 1.883" stroke-linecap="square"/>
  </g>
 </g>
		</svg>
	{/if}
