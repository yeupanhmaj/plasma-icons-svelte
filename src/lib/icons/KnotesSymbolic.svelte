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

	{#if numericSize <= 27}
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
			<path fill="currentColor" id="path1" class="ColorScheme-Text" d="m 3,3 v 13 l 3,3 H 19 V 3 Z M 4,4 H 18 V 18 H 6 V 16 H 4 Z"/>
    <path fill="currentColor" id="path2" class="ColorScheme-Text" d="M 12.598962,7 9.1914073,10.407552 7,12.598959 V 15 H 9.4010441 L 15,9.4010414 Z m -1.365886,2.3268225 1.440105,1.4401055 -2.115888,2.117187 v -0.450524 l -0.6757799,0.01432 H 9.191408 v -0.690095 -0.390625 l 0.96094,-0.959636 z M 8.5156248,12.042968 v 1.08073 h 0.6901067 0.6614581 l 0.014321,0.434895 -0.7200534,0.721356 H 8.2005215 L 7.7200524,13.79948 v -0.96094 z"/>
    <path fill="currentColor" id="path3" class="ColorScheme-Text" d="m 12,14 -1,1 h 4 v -1 z"/>
		</svg>
	{:else if numericSize <= 40}
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
			<path fill="currentColor" id="path1" class="ColorScheme-Text" d="m 4,4 v 19 l 5,5 H 28 V 4 Z M 5,5 H 27 V 27 H 9 V 23 H 5 Z"/>
    <path fill="currentColor" id="path2" class="ColorScheme-Text" d="M 18.398438,10 13.287109,15.111328 10,18.398438 V 22 h 3.601562 L 22,13.601562 Z m -2.048829,3.490234 2.160157,2.160157 -3.173829,3.175781 v -0.675781 l -1.013671,0.02148 h -1.035157 v -1.035152 -0.585938 l 1.441407,-1.439453 z m -4.076172,4.074219 v 1.621094 h 1.035157 0.992187 l 0.02148,0.652344 -1.080078,1.082031 h -1.441406 l -0.720703,-0.720703 v -1.441407 z"/>
    <path fill="currentColor" id="path3" class="ColorScheme-Text" d="m 22,21 v 1 h -6 l 1,-1 z" />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path fill="currentColor" class="ColorScheme-Text" id="path1" d="M 42,6 V 42 H 14 V 34 H 6 V 6 Z M 4,4 c 7.6e-4,9.805 0,30 0,30 L 14,44 H 44 V 4 Z"/>
    <path fill="currentColor" class="ColorScheme-Text" id="path2" d="M 28 16 L 16.008 27.992 L 16.004 27.992 L 16.004 32.002 L 20.014 32.002 L 20.014 31.998 L 32.006 20.006 L 32.004 20.004 L 32.006 20.002 L 28.006 16.002 L 28.004 16.004 Z M 26.002 19.412 L 28.592 22.002 L 21.004 29.59 L 21.004 28 L 19.004 28 L 19.004 26.41 Z M 18.004 27.41 L 18.004 29 L 20.004 29 L 20.004 30.59 L 19.594 31 L 18.004 31 L 17.004 30 L 17.004 28.41 Z M 23.004 31 L 22.004 32 L 32.004 32 L 32.004 31 Z"/>
		</svg>
	{/if}
