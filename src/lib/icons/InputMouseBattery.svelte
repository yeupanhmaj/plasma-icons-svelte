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
			<g id="16-16-input-mouse-battery" transform="translate(-303,-265.36218) translate(0,-272)">
        <path class="ColorScheme-Text" transform="translate(319,457.36217)" d="m-8 82a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4zm0 1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3zm0 1-2 5h2v3l2-5h-2z" fill="currentColor"/>
        <rect x="303" y="537.36218" width="16" height="16" fill="none"/>
    </g>
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
			<g id="22-22-input-mouse-battery" transform="translate(-310,-268.36219) translate(-16,-266)">
        <rect x="326" y="534.36218" width="22" height="22" ry="0" fill="none"/>
        <path class="ColorScheme-Text" transform="translate(326,534.3622)" d="m13.5 3c-3.047 0-5.5 2.676-5.5 6v4c0 3.324 2.453 6 5.5 6s5.5-2.676 5.5-6v-4c0-3.324-2.453-6-5.5-6zm0 1c2.493 0 4.5 2.007 4.5 4.5v5c0 2.493-2.007 4.5-4.5 4.5s-4.5-2.007-4.5-4.5v-5c0-2.493 2.007-4.5 4.5-4.5zm0 2c-0.277 0-0.5 0.223-0.5 0.5v2c0 0.277 0.223 0.5 0.5 0.5s0.5-0.223 0.5-0.5v-2c0-0.277-0.223-0.5-0.5-0.5z" fill="currentColor"/>
        <path class="ColorScheme-Text" d="m331 537.3622-2 5h2v3l2-5h-2z" fill="currentColor"/>
    </g>
		</svg>
	{/if}
