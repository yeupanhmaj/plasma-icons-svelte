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
			<g id="22-22-preferences-system-bluetooth-activated" transform="translate(0,94) translate(-66,-94)">
        <path id="path4676" class="ColorScheme-Text" d="m76.998047 3v7.041013l-3.292969-3.2929692-2e-3 0.00195c-0.355749-0.3559538-0.996047-0.9960876-0.996047-0.9960876l-0.707031 0.7070313 4.544922 4.5410155-4.544922 4.541016 0.707031 0.707031s0.640351-0.640094 0.996094-0.996094h2e-3l3.294875-3.292968v7.039062h1l4-4-4-4 4-4-4-4h-1.001953zm1.001953 1.4160156 2.585938 2.5859375-2.585938 2.5859375v-5.171875zm-11 5.5839844a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm12 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-9 2.416016 2.585938 2.585937-2.585938 2.585938v-5.171875z" fill="currentColor"/>
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
			<g id="preferences-system-bluetooth-activated" transform="translate(44,94) translate(-71,-116)">
        <path id="path4424" class="ColorScheme-Text" d="m43 26v10.998047l-5.998047-5.998047-0.705078 0.705078 6.292969 6.294922-6.292969 6.294922 0.705078 0.705078 5.998047-5.998047v10.998047h1.002l5.998-5.998047v-0.003906l-5.998047-5.998047 5.998047-5.998047v-0.003906l-5.998047-5.998047h-1.001953zm1 1.410156 4.587891 4.589844-4.587891 4.589844v-9.179688zm-14 9.589844a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm6 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm14 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm6 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-12 2.410156 4.587891 4.589844-4.587891 4.589844v-9.179688z" fill="currentColor"/>
    </g>
		</svg>
	{/if}
