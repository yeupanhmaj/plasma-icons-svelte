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
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"><path d="m2 2v12h7v-1h-6v-10h5v1h1v-1h4v5h1v-6zm6 2h-1v1h1zm0 1v1h1v-1zm0 1h-1v1 1h2v-1h-1z"/><path d="m11.5 8-2.5 2.5.7070312.707031 1.2929688-1.2929685v4.0859375h1v-4.0859375l1.292969 1.2929685.707031-.707031z"/></g>
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
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"><path d="m3 3v16h9v-1h-8v-14h7v1h1v-1h6v8h1v-9zm8 2h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1 1h2v-1h-1z"/><path d="m15.5 12-.207031.207031-3.292969 3.292969.707031.707031 2.292969-2.292969v5.085938h1v-5.085938l2.292969 2.292969.707031-.707031-3.292969-3.292969z"/></g>
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
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"><path d="m2 2v28h19v-1h-18v-26h13v2h2v-2h11v15h1v-16zm14 3h-2v2h2zm0 2v2h2v-2zm0 2h-2v2h2zm0 2v2h2v-2zm0 2h-2v2 2h2 2v-2h-2z"/><path d="m25.5 17.996094-4.5 4.5.707031.707031 3.292969-3.292969v10.089844h1v-10.089844l3.292969 3.292969.707031-.707031z"/></g>
		</svg>
	{/if}
