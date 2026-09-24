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
			<linearGradient id="a" x1="388.423" x2="388.423" y1="557.79797" y2="505.798" gradientTransform="matrix(.36685 0 0 .34615286 -142.9925 -173.08407)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7f8c8d" offset="0"/>
        <stop stop-color="#afb0b3" offset="1"/>
    </linearGradient>
    <linearGradient id="b" x1="3" x2="3" y1="17" y2="3" gradientTransform="matrix(.33540428 0 0 .34615286 -21.018857 -.076429)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#eef1f2" offset="0"/>
        <stop stop-color="#f9fafb" offset="1"/>
    </linearGradient>
    <g transform="translate(1)">
        <path d="m2 2h15v18h-15z" fill="url(#a)" stroke-width=".633866"/>
        <path d="m4 18h11v2h-11z" fill="#292c2e" stroke-width=".654654"/>
        <path d="m5 19h6v1h-6zm7 0h2v1h-2z" fill="#f6b44d" stroke-width=".811273"/>
        <path d="m15 18h2v2h-2zm-13 0h2v2h-2z" fill="#292c2f" opacity=".2" stroke-width=".654654"/>
        <path d="m2 18 2 2v-2zm13 0v1.999996l2 4e-6v-2z" opacity=".2" stroke-width=".642857"/>
        <path d="m6 3a3 3 0 0 0-3 3v3.2695312a2 2 0 0 1 1 1.7304688 2 2 0 0 1-1 1.732422v2.267578l2 2h9l2-2v-2.267578a2 2 0 0 1-1-1.732422 2 2 0 0 1 1-1.7324219v-3.2675781a3 3 0 0 0-3-3z" fill="url(#b)"/>
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
			<linearGradient id="a" x1="386.57101" x2="386.57101" y1="549.79797" y2="497.798" gradientTransform="matrix(.54545384 0 0 .53846154 177.71482 249.75292)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7f8c8d" offset="0"/>
        <stop stop-color="#afb0b3" offset="1"/>
    </linearGradient>
    <linearGradient id="d" x1="12" x2="12" y1="48" y2="10" gradientTransform="matrix(.55555494 0 0 .54843315 382.79368 514.4732)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#eef1f2" offset="0"/>
        <stop stop-color="#f9fafb" offset="1"/>
    </linearGradient>
    <g transform="translate(-384.57143 -515.798)">
        <path d="m388.57146 517.798h23.99996v28h-23.99996z" fill="url(#a)" stroke-width=".541946"/>
        <path d="m409.57143 542.798h2.99999v3h-2.99999zm-20.99997 0h2.99997v3h-2.99997z" fill="#292c2f" opacity=".3" stroke-width=".522233"/>
        <path d="m391.57145 542.798h17.99998v3h-17.99998z" fill="#292c2e" stroke-width=".984823"/>
        <path d="m393.57143 543.798h9v1h-9zm10 0h4v1h-4z" fill="#f6b44d" stroke-width="1.006395"/>
        <path d="m395.57143 519.86245c-2.76142 0-5 2.20953-5 4.93555v5c.70597.62334 1.1102 1.56499 1.11133 2.5-.001.93463-.40565 1.87691-1.11133 2.5v3l3 3h14l3-3v-3c-.70568-.62309-1.11033-1.56537-1.11133-2.5.001-.93501.40536-1.87666 1.11133-2.5v-5c0-2.72602-2.23858-4.93555-5-4.93555z" fill="url(#d)" stroke-width=".551983"/>
        <path d="m388.57143 544.798h24v1h-24z" fill="#292c2f" opacity=".4" stroke-width=".738551"/>
        <path d="m388.57143 542.798h3v3zm21 0h3v3h-3z" fill="#292c2f" opacity=".2"/>
    </g>
		</svg>
	{/if}
