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
			<g transform="translate(-421.71-531.79)">
  <path fill="#f27935" d="m425.71 534.79h2v10h-2z"/>
  <path fill="#04896a" d="m429.71 534.79h2v10h-2z"/>
  <path fill="#3a539b" d="m433.71 534.79h2v10h-2z"/>
  <path fill="#fdd285" d="m423.71 534.79h2v10h-2z"/>
  <path fill="#1d99f3" d="m431.71 534.79h2v10h-2z"/>
  <path fill="#7fcc74" d="m427.71 534.79h2v10h-2z"/>
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
			<g transform="translate(-326-534.3622)">
  <path d="m331 537.362h3v16h-3z" style="fill:#f27935"/>
  <path d="m337 537.362h3v16h-3z" style="fill:#04896a"/>
  <path d="m343 537.362h3v16h-3z" style="fill:#3a539b"/>
  <path d="m328 537.362h3v16h-3z" style="fill:#fdd285"/>
  <path d="m340 537.362h3v16h-3z" style="fill:#1d99f3"/>
  <path d="m334 537.362h3v16h-3z" style="fill:#7fcc74"/>
 </g>
		</svg>
	{/if}
