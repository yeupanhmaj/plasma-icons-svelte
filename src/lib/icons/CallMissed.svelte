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
			<path id="path5" class="ColorScheme-NegativeText" d="m3.5 2.7929688-.7070312.7070312 5.2070312 5.207031 5-4.9999998v2.2929688h1v-4h-4v1h2.292969l-4.292969 4.292969z" fill="currentColor"/>
    <path id="rect850-9-2-9" d="m6 10c-1.637054 0-3.089012 0.791082-4 2v1.5c0 0.277 0.223 0.5 0.5 0.5h2c0.277 0 0.5-0.223 0.5-0.5v-0.5c0-0.554 0.446-1 1-1h4c0.554 0 1 0.446 1 1v0.5c0 0.277 0.223 0.5 0.5 0.5h2c0.277 0 0.5-0.223 0.5-0.5v-1.5c-0.910988-1.208918-2.362946-2-4-2z" class="ColorScheme-Text" fill="currentColor" fill-rule="evenodd"/>
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
			<path d="m8 12.99999c-2.56828 0-4.78334 1.3818-6 3.43361l.00001.56641-.00001.99999s.00001.99999 1.00003 1h3c1 0 1-1 1-1v-.5c0-.831.66901-1.5 1.5-1.5l4.99997-.00001c.83098 0 1.5.669 1.5 1.50001v.5s0 .99999 1 .99999h3c1 0 1-.99999 1-.99999v-.99999-.56641c-1.21666-2.05181-3.43208-3.4336-6-3.4336z" class="ColorScheme-Text" fill="currentColor"/>
    <path d="m4.5 3.7929688-.7070312.7070312 7.2070312 7.207031 7-6.9999998v3.2929688h1v-5h-5v1h3.292969l-6.292969 6.292969z" class="ColorScheme-NegativeText" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m12.002 19.002c-3.424 0-6.377 1.842-8 4.578v2.088s0 1.333 1.333 1.333h4c1.334 0 1.334-1.333 1.334-1.333v-.667c0-1.108.892-2 2-2h6.666c1.108 0 2 .892 2 2v.667s0 1.333 1.334 1.333h4c1.333 0 1.333-1.333 1.333-1.333v-2.088c-1.623-2.736-4.576-4.578-8-4.578z" fill="currentColor"/>
    <path class="ColorScheme-NegativeText" d="M 5.5,5.7929688 4.792969,6.5 16,17.707031 27,6.7070312 V 11 h 1 V 5 h -6 v 1 h 4.292969 L 16,16.292969 Z" fill="currentColor"/>
		</svg>
	{/if}
