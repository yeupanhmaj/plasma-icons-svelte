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
    d="m5.2792969 2-.6875.65625 1.4375 1.34375h-4.0292969v1.0019531h4.0292969l-1.4375 1.34375.6875.65625 2.5-2.3125.21875-.1875-.21875-.1894531zm8.7207031 1.0488281-7 5.5332031v5.4179688h7v-3h-1v1h-3.3457031l4.3457031-3.296875zm-1 2.0136719v3.1445312l-5 3.7910158v-2.9433595z"
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
    d="m19 2.9941406-9 7.3730474v8.632812h9v-5h-1v3h-5.490234l6.490234-5.3125v-8.6933594zm-12.71875 0.0058594-0.6875 0.65625 1.4375 1.34375h-4.03125v1.0019531h4.03125l-1.4375 1.3417969 0.6875 0.65625 2.71875-2.5-2.71875-2.5zm11.71875 2.1054688v6.1074222l-7 5.732421v-6.109374l7-5.7304692z"
    style="fill:currentColor;fill-opacity:1;stroke:none"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
