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
			<path d="m8 2a3 3 0 0 0-2.5136719 1.3652344l0.7167969 0.7167968a2 2 0 0 1 1.796875-1.1210937 2 2 0 0 1 2 2 2 2 0 0 1-1.1210938 1.796875l1.2421878 1.2421875h1.878906v-1h-1.769531a3 3 0 0 0 0.769531-2h2v5.878906l1 1v-7.878906h-3.175781a3 3 0 0 0-2.824219-2zm-6 2.1210938v9.8789062h9.878906l-1.9999998-2h-6.8789062v-6.8789062l-1-1zm2 2.8789062v1h1.8789062l-1-1h-0.8789062z" fill="currentColor" class="ColorScheme-Text"/>
    <path d="M 2.7070311,2 1.9999999,2.7070312 13.292969,14 14,13.267578 Z" fill="currentColor" class="ColorScheme-NegativeText"/>
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
			<path d="m11 2c-1.0071809 0-1.9159199 0.3855812-2.6191406 1h-3.2597656l1 1h1.4335937c-0.1828841 0.3142485-0.3239661 0.6549888-0.4199219 1.0136719l0.8769532 0.8769531c0.0588156-1.605044 1.3688663-2.890625 2.9882812-2.890625 1.656854 0 3 1.3431458 3 3 0 1.6194149-1.285581 2.9294656-2.890625 2.9882812l1.011719 1.0117188h3.878906v-1h-2.380859c0.839215-0.7332403 1.380859-1.7980419 1.380859-3 0-0.7323174-0.211097-1.4096103-0.554688-2h3.554688v11.878906l1 1v-13.878906h-5.380859c-0.703221-0.6144188-1.61196-1-2.619141-1zm-8 3.1210938v13.878906h13.878906l-3-3h-9.878906v-9.8789062l-1-1zm3 3.8789062v1h1.8789062l-1-1h-0.8789062z" fill="currentColor" class="ColorScheme-Text"/>
    <path d="M 3.7070312,3 3,3.7070312 18.292969,19 19,18.292969 Z" fill="currentColor" class="ColorScheme-NegativeText"/>
		</svg>
	{/if}
