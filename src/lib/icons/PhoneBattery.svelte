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
			<g fill="currentColor">
        <path id="smartphone" class="ColorScheme-Text" d="m6 2c-0.96855 0-2 1.0314-2 2v8c0 0.96855 1.0314 2 2 2h4c0.96855 0 2-1.0314 2-2v-8c0-0.96855-1.0314-2-2-2h-4zm0 1h4c0.56208 0 1 0.43788 1 1v8c0 0.56208-0.43788 1-1 1h-4c-0.56208 0-1-0.43788-1-1v-8c0-0.56208 0.43788-1 1-1zm0.5 1a0.5 0.5 0 0 0-0.5 0.5 0.5 0.5 0 0 0 0.5 0.5 0.5 0.5 0 0 0 0.5-0.5 0.5 0.5 0 0 0-0.5-0.5zm0 7c-0.277 0-0.5 0.223-0.5 0.5s0.223 0.5 0.5 0.5h3c0.277 0 0.5-0.223 0.5-0.5s-0.223-0.5-0.5-0.5h-3z" fill="currentColor"/>
        <path id="lightningBolt" class="ColorScheme-Text" d="m8 5-2 3.5h2v2.5l2-3.5h-2z" fill="currentColor"/>
    </g>
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
			<g fill="currentColor">
        <path id="smartphone" class="ColorScheme-Text" d="m8 3c-1.108 0-2 0.892-2 2v12c0 1.108 0.892 2 2 2h6c1.108 0 2-0.892 2-2v-12c0-1.108-0.892-2-2-2h-6zm0 1h6c0.554 0 1 0.446 1 1v12c0 0.554-0.446 1-1 1h-6c-0.554 0-1-0.446-1-1v-12c0-0.554 0.446-1 1-1zm0.5 1a0.5 0.5 0 0 0-0.5 0.5 0.5 0.5 0 0 0 0.5 0.5 0.5 0.5 0 0 0 0.5-0.5 0.5 0.5 0 0 0-0.5-0.5zm1 11c-0.277 0-0.5 0.223-0.5 0.5s0.223 0.5 0.5 0.5h3c0.277 0 0.5-0.223 0.5-0.5s-0.223-0.5-0.5-0.5h-3z" fill="currentColor"/>
        <path id="lightningBolt" class="ColorScheme-Text" d="m11 6-3 5h3v4l3-5h-3z" fill="currentColor"/>
    </g>
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
			<path class="ColorScheme-Text" d="m11.023 3c-1.1209 0-2.0234 0.90252-2.0234 2.0234v21.953c0 1.1209 0.90252 2.0234 2.0234 2.0234h9.9434c1.1209 0 2.0234-0.90252 2.0234-2.0234v-21.953c0-1.1209-0.90252-2.0234-2.0234-2.0234zm-0.023438 1h10c0.554 0 1 0.446 1 1v22c0 0.554-0.446 1-1 1h-10c-0.554 0-1-0.446-1-1v-22c0-0.554 0.446-1 1-1zm1 1c-0.55228 0-1 0.44772-1 1s0.44772 1 1 1 1-0.44772 1-1-0.44772-1-1-1zm4 5-3 7h3v5l3-7h-3zm-2.5 16c-0.277 0-0.5 0.223-0.5 0.5s0.223 0.5 0.5 0.5h5c0.277 0 0.5-0.223 0.5-0.5s-0.223-0.5-0.5-0.5z" fill="currentColor"/>
		</svg>
	{/if}
