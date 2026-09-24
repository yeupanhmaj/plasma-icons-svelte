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
			<path class="ColorScheme-Text" d="m10.005155 10v1h1.994845v-1zm-6.005155-2v1h8v-1zm0 2v1h4v-1zm-2-7v10h12v-10zm1 1h10v8h-10z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m12.988351 13.005255v0.999097h4.009739v-0.999097zm-7.9879705-1.993516v1.004563h11.99611v-1.004563zm0 1.992483v0.999097h6.0046925v-0.999097zm-2.0083673-8.0012635v12.002158h16.017557v-12.002158zm1.0136936 1.0060301h13.999508v10.002165h-13.999508z" fill="currentColor"/>
		</svg>
	{/if}
