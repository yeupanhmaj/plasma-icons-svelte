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
			<path d="m5.1210938 3 1 1h5.0703122l1.5 3h-3.5703122l1.0000002 1h2.878906v2.878906l1 1v-4.4980466l-2.191406-4.3808594h-6.6875002zm-2.0332032 2.2089844-1.0878906 2.1738281v4.6171875h1v2h2v-2h4.8789062l-1-1h-5.8789062v-3h2.8789062l-1-1h-1.5703124l0.5234374-1.046875-0.7441406-0.7441406zm0.9121094 3.7910156v1h1v-1h-1zm7.121094 0 0.878906 0.8789062v-0.8789062h-0.878906zm-0.121094 4.121094v0.878906h0.878906l-0.878906-0.878906z" fill="currentColor" class="ColorScheme-Text"/>
    <path d="M 2.7070312,2 2,2.7070312 13.292969,14 14,13.267578 Z" fill="currentColor" class="ColorScheme-NegativeText"/>
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
			<path class="ColorScheme-Text" d="m6.1210938 4 1 1h2.3125l2.2910152 0.0039062 4.558594 0.0078126 1.65625 4.9707031c-0.001369 0.0139961-0.925922 0.0112134-1.228515 0.0175781h-4.589844l1 1h4.878906v4.878906l1 1v-6.878906l-2-6h-10.878906zm-1.9023438 2.3398438-1.21875 3.6601562v7h1v2h2v-2h8.878906l-1-1h-9.878906v-5h4.8789062l-1-1h-3.0078124c-0.2013774-0.0063376-0.8091391-0.0038274-0.8105469-0.0175781l0.9492187-2.8515625-0.7910156-0.7910156zm2.28125 5.6601562a1.5 1 0 0 0-1.5 1 1.5 1 0 0 0 1.5 1 1.5 1 0 0 0 1.5-1 1.5 1 0 0 0-1.5-1zm9 0a1.5 1 0 0 0-1.076172 0.302734l1.626953 1.626954a1.5 1 0 0 0 0.949219-0.929688 1.5 1 0 0 0-1.5-1zm0.5 6.121094v0.878906h0.878906l-0.878906-0.878906z" fill="currentColor"/>
    <path class="ColorScheme-NegativeText" d="M 3.7070312,3 3,3.7070312 18.292969,19 19,18.292969 Z" fill="currentColor"/>
		</svg>
	{/if}
