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
			<path class="ColorScheme-Text" d="m8 2-6 12h12zm1e-3 2.237 4.383 8.764h-8.766z" fill="currentColor"/>
    <path d="m5.3851635 8.4609745c1.4051485-2.7648332 2.5590629-5.031472 2.5642543-5.0369749 0.00918-0.00973 5.1160272 10.022293 5.1160272 10.050045 0 0.0076-2.302896 0.0139-5.1175482 0.0139h-5.1175487z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
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
			<path class="ColorScheme-Text" transform="translate(-551.28571-607.64789)" d="m553.28572 626.6479 0.64385-1.1428 8.35605-14.8572 8.35625 14.8572 0.64385 1.1428h-18m1.78189-1.1428h14.27347l-7.05546-12.54476-7.21801 12.54476" fill="currentColor"/>
    <path d="m3.1759438 18.116053c1.0329208-1.89149 7.6939622-13.777058 7.7113742-13.759718 0.01319 0.013133 1.72971 3.1513397 3.814497 6.9737917 2.084788 3.822452 3.797827 6.962389 3.806755 6.977639 0.0089 0.01525-3.464224 0.02773-7.718114 0.02773h-7.734345z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
		</svg>
	{/if}
