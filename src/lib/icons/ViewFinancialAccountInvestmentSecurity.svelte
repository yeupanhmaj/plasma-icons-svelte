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
			<path d="m9.001953 1.9980469-4.001953 4.0019531h-1.996094v1h2.410156l3.589844-3.5898437 2.123047 2.1230468 0.0059-0.00391 0.0039 0.00391 2.828125-2.828125c0.0029 5e-3 -0.707066-0.7070312-0.707066-0.7070312l-2.125 2.125-2.126953-2.125-0.0019 0.00195z" fill="currentColor" class="ColorScheme-PositiveText"/>
    <path d="m2 2v12h12v-2.132812c-0.958201-0.953844-1.913095-1.9111424-2.869141-2.867188l-0.0039 0.00391-0.005865-0.00391-2.1230471 2.123047-3.1230469-3.123047h-2.875v-6zm1 7h2.4609375l3.5351563 3.535156 0.00195-2e-3 0.00195 2e-3 2.1269532-2.125c0.866385 0.866164 1.726997 1.737981 2.607428 2.589844h-10.734375v-4z" fill="currentColor" class="ColorScheme-Text"/>
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
			<path class="ColorScheme-PositiveText" d="m18.292938 3.4238285-3.166014 3.1660157-2.126954-2.125-2e-3 0.00195-2e-3 -0.00195-4.5350635 4.5351562-3.4609065-4e-7v1h3.8750155l4.1230015-4.1230466 2.123046 2.1230469 0.0059-0.00391 0.0039 0.00391 3.869137-3.8691406z" fill="currentColor"/>
    <path class="ColorScheme-Text" d="m4 3v14h-1v1h1v1h1v-1h14v-1h-0.292969l-3.576172-3.576172-0.0039 0.0039-0.0059-0.0039-2.123047 2.123047-4.123012-4.123047h-3.8749969v-8.423828zm1 9.423828h3.4609375l4.5351565 4.535156 2e-3 -2e-3 2e-3 2e-3 2.126953-2.125 2.125 2.125 0.040922 0.041016h-12.292969z" fill="currentColor"/>
		</svg>
	{/if}
