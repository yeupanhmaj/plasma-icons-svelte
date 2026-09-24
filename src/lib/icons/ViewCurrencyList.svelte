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
    d="m9.3847656 3.8984375-0.7695312 0.640625 2.3847656 2.8613281v1.5996094h-2v1h2v2h1v-2h2v-1h-2v-1.5996094l2.384766-2.8613281-0.769532-0.640625-2.115234 2.5390625-2.1152344-2.5390625zm-3.8847656 0.1015625c-1.385 0-2.5 1.115-2.5 2.5v0.5h-1v1h1v1h-1v1h1.0507812c0.2301966 1.144072 1.2353585 2 2.4492188 2h1.5v-1h-1.5c-0.4155 0-0.791375-0.166375-1.0625-0.4375-0.1561762-0.156176-0.272773-0.349257-0.3476562-0.5625h2.9101562v-1h-3v-1h3v-1h-3v-0.5c0-0.4155 0.166375-0.791375 0.4375-1.0625s0.647-0.4375 1.0625-0.4375h1.5v-1h-1.5z"
    class="ColorScheme-Text"
    fill="currentColor"
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
    d="m7 5a4 4 0 0 0 -4 4h-1v1h1v2h-1v1h1a4 4 0 0 0 4 4 4 4 0 0 0 3.458984-2h-1.2265621a3 3 0 0 1 -2.2324219 1 3 3 0 0 1 -3-3h5v-1h-5v-2h6v-1h-6a3 3 0 0 1 3-3 3 3 0 0 1 2.2304688 1h1.2285152a4 4 0 0 0 -3.458984-2zm5.292969 0 3.707031 3.7070312v1.2929688h-3v1h3v2h-3v1h3v3h1v-3h3v-1h-3v-2h3v-1h-3v-1.2929688l3.707031-3.7070312h-1.414062l-2.792969 2.7929688-2.792969-2.7929688z"
    class="ColorScheme-Text"
    fill="currentColor"
    />
		</svg>
	{/if}
