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
			<g id="22-22-input-keyboard-battery" transform="translate(-332,-396.36218) translate(-16,-138)">
        <rect x="348" y="534.36218" width="22" height="22" ry="0" fill="none"/>
        <path class="ColorScheme-Text" transform="translate(332,396.36218)" d="m20 141v14l7 2 7-2v-5h-1v2h-12v-10h8v-1zm12 0-2 5h2v3l2-5h-2zm-5.5625 3-2.4375 6h1.074219l0.40625-1h3.039062l0.40625 1h1.074219l-2.439453-6h-0.537109l-0.023438 0.00977-0.023438-0.00977zm0.5625 1.25781 1.113281 2.74219h-2.226562zm-6 7.74219h12v1h-12z" fill="currentColor"/>
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
			<g id="input-keyboard-battery" transform="translate(-332,-428.36237) translate(-38,-128)">
        <rect x="370" y="556.36237" width="32" height="32" ry="0" fill="none"/>
        <path class="ColorScheme-Text" transform="translate(332,428.36237)" d="m44 132v20l10 4 10-4v-11h-1v8h-18v-16h14v-1zm18 0-2 5h2v3l2-5h-2zm-8.59375 4-4.40625 10h1.300781l1.322266-3h4.722656l1.349609 3h1.304688l-4.5-10zm0.552734 1.69531 1.9375 4.30469h-3.833984zm-8.958984 12.30469h18v1h-18z" fill="currentColor"/>
    </g>
		</svg>
	{/if}
