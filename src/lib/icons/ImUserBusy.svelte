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
			<path fill="#f47750" d="m8 2c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3 0-1.657-1.343-3-3-3m-1 1h1v2h1v1h-2zm1 6c-2.761 0-5 2.01-5 4.5.001.167.012.334.033.5h9.93c.023-.166.035-.333.037-.5 0-2.485-2.239-4.5-5-4.5m0 1c1.987.002 3.671 1.279 3.955 3h-7.91c.284-1.721 1.968-2.998 3.955-3"/>
 <path fill="#fff" d="m7 3v3h2v-1h-1v-2z"/>
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
			<g transform="translate(-421.71429-525.79071)" style="fill:#f47750">
  <path d="m432.71429 528.79032a3.99999 4.00003 0 0 0 -4 4 3.99999 4.00003 0 0 0 4 4 3.99999 4.00003 0 0 0 4 -4 3.99999 4.00003 0 0 0 -4 -4m0 1a3 3.00003 0 0 1 3 3 3 3.00003 0 0 1 -3 3 3 3.00003 0 0 1 -3 -3 3 3.00003 0 0 1 3 -3"/>
  <path d="m12 13a7.99995 8.00003 0 0 0 -7.927734 7h1.00781A6.99996 7.00003 0 0 1 12 14a6.99996 7.00003 0 0 1 1 .08008v-1.00977A7.99995 8.00003 0 0 0 12 13" transform="translate(420.71429 524.79071)"/>
  <path d="M15.5 12A3.5 3.5 0 0 0 12 15.5 3.5 3.5 0 0 0 15.5 19 3.5 3.5 0 0 0 19 15.5 3.5 3.5 0 0 0 15.5 12M15 13H16V15H17V16H16 15V15 13" transform="translate(421.71429 525.79071)"/>
 </g>
		</svg>
	{/if}
