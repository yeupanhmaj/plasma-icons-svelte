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
  <g fill="#43be80">
   <path d="M8 9A5 4.5 0 0 0 3 13.5 5 4.5 0 0 0 3.033203 14H12.963A5 4.5 0 0 0 13 13.5 5 4.5 0 0 0 8 9M8 10A4 3.5 0 0 1 11.955078 13H4.045A4 3.5 0 0 1 8 10" transform="translate(421.71 531.79)"/>
   <path d="m429.71 533.79c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3 0-1.657-1.343-3-3-3m1.592 1.232l.707.707-2.83 2.828-1.768-1.768.707-.707 1.061 1.061z"/>
  </g>
  <path fill="#fff" d="m431.31 535.02l.707.707-2.83 2.828-1.768-1.768.707-.707 1.061 1.061z"/>
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
			<g transform="translate(-421.71429-525.79071)">
  <g style="fill:#43be80">
   <path d="m432.71429 528.79032a3.99999 4.00003 0 0 0 -4 4 3.99999 4.00003 0 0 0 4 4 3.99999 4.00003 0 0 0 4 -4 3.99999 4.00003 0 0 0 -4 -4m0 1a3 3.00003 0 0 1 3 3 3 3.00003 0 0 1 -3 3 3 3.00003 0 0 1 -3 -3 3 3.00003 0 0 1 3 -3"/>
   <path d="M11 12A7.99995 8.00003 0 0 0 3.072266 19H4.080078A6.99996 7.00003 0 0 1 11 13 6.99996 7.00003 0 0 1 12 13.08008V12.07031A7.99995 8.00003 0 0 0 11 12" transform="translate(421.71429 525.79071)"/>
   <circle cx="437.21429" cy="541.29071" r="3.5"/>
  </g>
  <path d="m438.71428 539.79074l1 1-3 3-2-2 1-1 1 1z" style="fill:#fff;fill-rule:evenodd"/>
 </g>
		</svg>
	{/if}
