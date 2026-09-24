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
			<path class="ColorScheme-Text" d="m8.03 2-1.875 3.939-4.15 0.621 2.982 3.08-0.732 4.336 3.719-2.037 3.697 2.061-0.684-4.34 3.02-3.062-4.143-0.645z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" transform="translate(-.99999 -.99999)" d="M 12,4 9.5273438,9.2675781 4,10.111328 8,14.210938 7.0566406,20 12,17.267578 16.943359,20 16,14.210938 20,10.111328 14.472656,9.2675781 Z" fill="currentColor"/>
		</svg>
	{/if}
