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
			<g stroke-linecap="square">
        <g class="ColorScheme-Text" fill="currentColor">
            <path d="m3.5 2a1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0 -1.5-1.5zm-.0117188 1a.5.5 0 0 1 .0117188 0 .5.5 0 0 1 .5.5.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5.5.5 0 0 1 .4882812-.5z"/>
            <path d="m3 4h1v8h-1z"/>
            <path d="m11 4v2a1 1 0 0 1 -1 1h-5a2 2 0 0 0 -.0488281 0 2 2 0 0 0 -1.9511719 2h1a1 1 0 0 1 1-1h5a2 2 0 0 0 .048828 0 2 2 0 0 0 1.951172-2v-2z"/>
            <path d="m3.5 11a1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0 -1.5-1.5zm-.011719 1a.5.5 0 0 1 .011719 0 .5.5 0 0 1 .5.5.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5.5.5 0 0 1 .4882812-.5z"/>
        </g>
        <path d="m11.5 2a1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0 -1.5-1.5zm-.01172 1a.5.5 0 0 1 .01172 0 .5.5 0 0 1 .5.5.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5.5.5 0 0 1 .48828-.5z" class="ColorScheme-Accent" fill="currentColor"/>
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
			<g stroke-linecap="square">
        <g class="ColorScheme-Text" fill="currentColor">
            <path d="m5.5 3a2.5 2.5 0 0 0 -2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 -2.5-2.5zm0 1a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1 -1.5 1.5 1.5 1.5 0 0 1 -1.5-1.5 1.5 1.5 0 0 1 1.5-1.5z"/>
            <path d="m5.5 14a2.5 2.5 0 0 0 -2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 -2.5-2.5zm0 1a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1 -1.5 1.5 1.5 1.5 0 0 1 -1.5-1.5 1.5 1.5 0 0 1 1.5-1.5z"/>
            <path d="m5 7h1v8h-1z"/>
            <path d="m15 7v2a1 1 0 0 1 -1 1h-7a2 2 0 0 0 -.0488281 0 2 2 0 0 0 -1.9511719 2h1a1 1 0 0 1 1-1h7a2 2 0 0 0 .048828 0 2 2 0 0 0 1.951172-2v-2z"/>
        </g>
        <path d="m15.5 3a2.5 2.5 0 0 0 -2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 -2.5-2.5zm0 1a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1 -1.5 1.5 1.5 1.5 0 0 1 -1.5-1.5 1.5 1.5 0 0 1 1.5-1.5z" class="ColorScheme-Accent" fill="currentColor"/>
    </g>
		</svg>
	{/if}
