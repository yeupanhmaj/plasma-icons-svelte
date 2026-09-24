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
			<g fill="#fdbc4b" transform="translate(-421.71-531.79)">
  <path d="M8 9A5 4.5 0 0 0 3 13.5 5 4.5 0 0 0 3.033203 14H12.963A5 4.5 0 0 0 13 13.5 5 4.5 0 0 0 8 9M8 10A4 3.5 0 0 1 11.955078 13H4.045A4 3.5 0 0 1 8 10" transform="translate(421.71 531.79)"/>
  <path fill-rule="evenodd" d="m433.71 532.79l-7 4 2 1 1 3 1-2 2 1z"/>
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
			<g transform="translate(-421.71429-525.79071)" style="fill:#fdbc4b">
  <path d="m432.71429 528.79032a3.99999 4.00003 0 0 0 -4 4 3.99999 4.00003 0 0 0 4 4 3.99999 4.00003 0 0 0 4 -4 3.99999 4.00003 0 0 0 -4 -4m0 1a3 3.00003 0 0 1 3 3 3 3.00003 0 0 1 -3 3 3 3.00003 0 0 1 -3 -3 3 3.00003 0 0 1 3 -3"/>
  <path d="m12 13a7.99995 8.00003 0 0 0 -7.927734 7h1.00781A6.99996 7.00003 0 0 1 12 14a6.99996 7.00003 0 0 1 1 .08008v-1.00977A7.99995 8.00003 0 0 0 12 13" transform="translate(420.71429 524.79071)"/>
  <path d="m440.71429 536.79071l-8 4 2 1 1 3 1-2 2 1z" style="fill-rule:evenodd"/>
 </g>
		</svg>
	{/if}
