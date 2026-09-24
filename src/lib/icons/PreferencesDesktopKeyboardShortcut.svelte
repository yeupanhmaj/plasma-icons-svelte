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
			<defs><linearGradient id="a" x2="0" y1="540.8" y2="522.8" gradientTransform="matrix(.625 0 0 .66667 -239.36 -344.53)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient></defs><path fill="url(#a)" d="M2 4h17.435A1.565 1.565 45 0 1 21 5.565V16H1V5a1 1 135 0 1 1-1z" opacity=".99"/><path fill="#abb4ba" d="M1 16h20v1a1 1 135 0 1-1 1H2a1 1 45 0 1-1-1z"/><path fill="none" stroke="#707e88" d="m8 9.5 3-3.703L14 9.5h-1.5v5h-3v-5z" style="paint-order:normal"/>
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
			<defs><linearGradient id="a" x2="0" y1="540.8" y2="522.8" gradientTransform="matrix(.9375 0 0 1 -359.54 -516.8)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient></defs><path fill="url(#a)" d="M3 6h26a2 2 45 0 1 2 2v16H1V8a2 2 135 0 1 2-2" opacity=".99"/><path fill="#abb4ba" d="M1 24h30v1a2 2 135 0 1-2 2H3a2 2 45 0 1-2-2z"/><path fill="none" stroke="#707e88" d="M11.5 14.5 16 8.766l4.5 5.734h-2v7h-5v-7z" style="paint-order:normal"/>
		</svg>
	{/if}
