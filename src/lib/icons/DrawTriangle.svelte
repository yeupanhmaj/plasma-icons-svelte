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
			<path class="ColorScheme-Text" d="m2 2v12h12zm1 2.414 8.586 8.586h-8.586z" fill="currentColor"/>
    <path d="m2.5796798 8.6075463v-4.7879277l5.0336416 4.7811843c2.7685026 2.6296511 5.0336416 4.7842181 5.0336416 4.7879271 0 0.0037-2.265139 0.0067-5.0336416 0.0067h-5.0336416z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
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
			<path class="ColorScheme-Text" transform="translate(-1.00194-1.00194)" d="M 4,4 4,5.40625 4,20 l 14.59375,0 1.402344,0.0039 0.0078,0 L 20,20 20.0039,19.9961 Z M 5,6.40625 17.59375,19 5,19 Z" fill="currentColor"/>
    <path d="m3.6400852 11.654184v-6.7811506l6.8059028 6.7722046c3.743246 3.724712 6.805903 6.776229 6.805903 6.78115 0 0.0049-3.062657 9e-3 -6.805903 9e-3h-6.8059028z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
		</svg>
	{/if}
