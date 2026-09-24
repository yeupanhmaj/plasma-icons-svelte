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
			<path d="m6.1210938 4 1 1h4.8789062v1h1v4h-0.878906l1.878906 1.878906v-7.878906h-7.8789062zm-4.1210938 0.1210938v7.8789062h7.8789062l-1-1h-4.8789062v-1h-1v-4h0.8789062l-1.8789062-1.8789062zm6.1347656 1.8925781 1.8515625 1.8515625c-0.0675973-0.9949316-0.8566301-1.7839652-1.8515625-1.8515625zm-2.1210937 2.1210937c0.0675973 0.9949323 0.8566305 1.7839652 1.8515625 1.8515625l-1.8515625-1.8515625z" fill="currentColor" class="ColorScheme-Text"/>
    <path d="M 2.7070313,2 2,2.7070313 13.292969,14 14,13.267578 Z" fill="currentColor" class="ColorScheme-NegativeText"/>
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
			<path d="m3 6v10h10.878906l-1-1h-6.878906v-1h-1v-1h-1v-4h1v-1h0.8789062l-2-2h-0.8789062zm5.1210938 0 1 1h6.8789062v1h1v1h1v4h-1v1h-0.878906l2 2h0.878906v-10h-10.878906zm2.8789062 2c-0.266807 0-0.52134 0.0459677-0.767578 0.1113281l0.902344 0.9023438c0.994931 0.0675973 1.783965 0.8566309 1.851562 1.8515621l0.902344 0.902344c0.06536-0.246238 0.111328-0.500771 0.111328-0.767578 0-1.656854-1.343146-3-3-3zm-2.8886719 2.232422c-0.0653604 0.246238-0.1113281 0.500771-0.1113281 0.767578 0 1.656854 1.3431458 3 3 3 0.266807 0 0.52134-0.045968 0.767578-0.111328l-0.902344-0.902344c-0.9949316-0.067597-1.7839648-0.856631-1.8515621-1.851562l-0.9023438-0.902344z" fill="currentColor" class="ColorScheme-Text"/>
    <path d="M 3.7070313,2.9999999 3.0000001,3.7070311 18.292969,19 19,18.292969 Z" fill="currentColor" class="ColorScheme-NegativeText"/>
		</svg>
	{/if}
