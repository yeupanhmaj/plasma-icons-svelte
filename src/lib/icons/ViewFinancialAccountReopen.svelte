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
			<path
    d="m4.71875 2-2.5 2.3125-.21875.1894531.21875.1875 2.4980469 2.3105469h.0039062l.6855469-.6542969-1.4375-1.34375h4.0292969v-1.0019531h-4.0292969l1.4375-1.34375zm9.28125 1.0488281-6.5292969 4.9511719h-5.4707031v6l5 .011719v-.011719h7v-3.134766h-1v1.134766h-3.3457031l4.3457031-3.296875zm-1 2.0136719v3.1445312l-5 3.7910158v-3.1445314zm-10 3.9375h4v3h-4z"
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    class="ColorScheme-Text"
    />
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
			<path
    d="M 19,2.9941406 10.443359,10 H 3 v 9 h 16 v -5 h -1 v 3 H 12.509766 L 19,11.6875 Z M 5.71875,3 3,5.5 5.71875,8 6.40625,7.34375 4.96875,6.0019531 H 9 V 5 H 4.96875 L 6.40625,3.65625 Z M 18,5.1054688 v 6.1074222 l -7,5.732421 V 10.835938 Z M 4,11 h 6 v 6 H 4 Z m 1,1 v 1 h 2 v -1 z m 0,2 v 1 h 2 v -1 z"
    style="fill:currentColor; fill-opacity:1; stroke:none"
    class="ColorScheme-Text"
    />
<path
    d="m8 12v1h1v-1h-1zm0 2v1h1v-1h-1z"
    style="fill:currentColor; fill-opacity:1; stroke:none"
    class="ColorScheme-NegativeText"
    />
		</svg>
	{/if}
