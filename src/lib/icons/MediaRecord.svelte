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
			<path d="m14 8a6 6 0 0 1 -6 6 6 6 0 0 1 -6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6z" fill="#da4453"/>
		</svg>
	{:else if numericSize <= 27}
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
			<path d="m19 11a8 8 0 0 1 -8 8 8 8 0 0 1 -8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8z" fill="#da4453"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path
     style="fill:#da4453"
     d="M 26 16 A 10 10 0 0 1 16 26 10 10 0 0 1 6 16 10 10 0 0 1 16 6 10 10 0 0 1 26 16 Z"
     id="circle44" />
		</svg>
	{/if}
