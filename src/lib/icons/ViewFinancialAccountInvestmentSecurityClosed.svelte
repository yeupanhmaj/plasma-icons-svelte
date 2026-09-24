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
			<path d="M 9,2 6.5605469,4.4394531 7.2675781,5.1464844 9.0019531,3.4121094 11.125,5.5351562 l 0.0059,-0.00391 0.0039,0.00391 2.828125,-2.828125 C 13.965857,2.7120316 13.255859,2 13.255859,2 l -2.125,2.125 L 9.0039062,2 9.0019562,2.00195 Z M 2,4.1210938 V 14 h 9.878906 l -1,-1 H 3 V 9 h 2.4609375 l 3.5351563,3.535156 0.00195,-0.002 L 9,12.535156 9.7070312,11.828125 C 8.4294582,10.554663 7.1530097,9.2780277 5.875,8 H 3 V 5.1210938 Z M 3,6 v 1 l 1.8808594,0.00195 -1,-1 z" fill="currentColor" class="ColorScheme-Text"/>
    <path d="M 2.664062,1.999999 1.9570307,2.7070302 13.25,14 13.957031,13.267578 Z" fill="currentColor" class="ColorScheme-NegativeText"/>
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
			<path d="m18.292969 3.4238281-3.166016 3.1660157-2.126953-2.125-2e-3 0.00195-2e-3 -0.00195-3.2049844 3.2050781 0.7070314 0.7070312 2.5-2.5 2.123047 2.1230469 0.0059-0.00391 0.0039 0.00391 3.869106-3.8691406zm-14.292969 2.6972657v10.878906h-1v1h1v1h1v-1h10.878906l-1-1h-9.878906v-4.576172h3.4609375s4.5371565 4.533156 4.5351565 4.535156l2e-3 -2e-3 2e-3 2e-3 0.919922-0.917968-0.708984-0.708985-0.212891 0.214844-4.123047-4.123047h-3.875094v-1.423828h2.8789062l-1-1h-1.8789062v-1.8789062z" fill="currentColor" class="ColorScheme-Text"/>
    <path d="M 3.7070311,2.957031 2.9999999,3.6640622 18.292969,18.957031 19,18.25 Z" fill="currentColor" class="ColorScheme-NegativeText"/>
		</svg>
	{/if}
