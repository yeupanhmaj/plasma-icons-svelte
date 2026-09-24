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
			<g id="22-22-preferences-system-bluetooth" transform="translate(-22,94) translate(-44,-94)">
        <rect id="rect4645" x="66" width="22" height="22" fill="none"/>
        <path id="rect4163-9" class="ColorScheme-Text" d="m76.998047 3v7.041013l-3.292969-3.2929692-2e-3 0.00195c-0.355749-0.3559538-0.996047-0.9960876-0.996047-0.9960876l-0.707031 0.7070313 4.544922 4.5410155-4.544922 4.541016 0.707031 0.707031s0.640351-0.640094 0.996094-0.996094h2e-3l3.294875-3.292968v7.039062h1l4-4-4-4 4-4-4-4zm1.001953 1.4160156 2.585938 2.5859375-2.585938 2.5859375zm0 8.0000004 2.585938 2.585937-2.585938 2.585938z" fill="currentColor"/>
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
			<g id="preferences-system-bluetooth" transform="translate(44,94) translate(-39,-116)">
        <rect id="rect4168" x="-5" y="22" width="32" height="32" fill="none"/>
        <path id="rect4331" class="ColorScheme-Text" d="m 11,26 0,0.410156 0,10.587891 L 5.0019531,31 4.296875,31.705078 10.589844,38 4.296875,44.294922 5.0019531,45 11,39.001953 11,50 12,50 12.002,50 18,44.001953 18,44 18,43.998047 12.001953,38 18,32.001953 18,32 18,31.998047 12.001953,26 12,26 11,26 z M 12,27.410156 16.587891,32 12,36.589844 12,27.410156 z m 0,12 L 16.587891,44 12,48.589844 12,39.410156 z" fill="currentColor"/>
    </g>
		</svg>
	{/if}
