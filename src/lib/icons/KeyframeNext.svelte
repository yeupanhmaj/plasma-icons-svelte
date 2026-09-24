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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="m4 3v1h1v1.0507812c-1.6854106 0.2473954-3 1.6992853-3 3.4492188 0 1.921152 1.578848 3.5 3.5 3.5s3.5-1.578848 3.5-3.5c0-0.78264-0.2714206-1.497759-0.7128906-2.0800781l0.5574218-0.5574219 0.4445313 0.4445312 0.7089844-0.7050781-1.5921875-1.6-0.7089844 0.7070313 0.4425781 0.4445312-0.5613281 0.5613282c-0.456726-0.3392309-0.992024-0.578031-1.578125-0.6640626v-1.0507812h1v-1zm7 1v8l3-4zm-5.5 2c1.380712 0 2.5 1.119288 2.5 2.5s-1.119288 2.5-2.5 2.5c-1.3807119 0-2.5-1.119288-2.5-2.5s1.1192881-2.5 2.5-2.5z"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="m5 5v1h2v1.0507812c-2.2379593 0.2537455-4 2.1467332-4 4.4492188 0 2.473437 2.0265633 4.5 4.5 4.5 2.473437 0 4.5-2.026563 4.5-4.5 0-1.059095-0.385401-2.0209801-1.005859-2.7871094l0.754297-0.7542968 0.398046 0.3949218 0.707031-0.7089844-1.501953-1.4980469-0.705078 0.7070313 0.394922 0.3980469-0.75039 0.7503906c-0.6460254-0.510828-1.432052-0.8537803-2.291016-0.9511719v-1.0507812h2v-1zm10 1v10l4-5zm-7.5 2c1.932997 0 3.5 1.5670034 3.5 3.5 0 1.932997-1.567003 3.5-3.5 3.5-1.9329966 0-3.5-1.567003-3.5-3.5 0-1.9329966 1.5670034-3.5 3.5-3.5z"/>
		</svg>
	{/if}
