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
			<path id="path1" class="ColorScheme-Text" d="m8 2c-3.3137062 5.5e-6 -5.9999945 2.6862938-6 6 5.5e-6 3.313706 2.6862938 5.999994 6 6 0.335258-2e-3 0.6697622-0.03201 1-0.08984v-1.01516c-0.3289583 0.068513-0.6639853 0.103691-1 0.105-2.7614237 0-5-2.238576-5-5 0-2.7614237 2.2385763-5 5-5 2.761424 0 5 2.2385763 5 5h1c-6e-6 -3.3137062-2.686294-5.9999945-6-6m0 2v4h-3v1h4v-5zm3 9.145631v-3.09l-2 2v-1.41l2.281-2.3129999 0.219-0.187 0.219 0.187 2.281 2.3129999v1.41l-2-2v3.09z" fill="currentColor"/>
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
			<path id="path1" class="ColorScheme-Text" d="m11 3c-4.4319982 0-8 3.568-8 8 0 4.092537 3.0443284 7.441581 7 7.931641v-1.009766c-3.3993571-0.483816-6-3.384659-6-6.921875 0-0.242375 0.0113433-0.480906 0.0351562-0.716797 0.357195-3.5383664 3.32922-6.283203 6.9648438-6.283203 3.877999 0 7 3.122 7 7 0 0.340784-0.03151 0.672498-0.07813 1h1.009766c0.040654-0.32811 0.068364-0.660537 0.068364-1 0-4.432-3.568002-8-8-8zm-1 2v7h6v-1h-5v-6zm5.279126 14.207031v-4.292969l-2.292969 2.292969-0.707031-0.707031 3.5-3.5 3.5 3.5-0.707031 0.707031-2.292969-2.292969v4.292969z" fill="currentColor"/>
		</svg>
	{/if}
