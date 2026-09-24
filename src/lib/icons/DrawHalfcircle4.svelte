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
			<path class="ColorScheme-Text" d="m2 7v1c0 3.314 2.684 6 5.996 6 3.311 0 5.996-2.686 5.996-6 0.019-0.069 0-1 0-1h-10.992zm0.999 1h9.993c0 2.761-2.237 5-4.997 5s-4.997-2.239-4.997-5" fill="currentColor"/>
    <path d="m7.3559817 13.320767c-0.9332401-0.132617-1.8673697-0.541309-2.6280947-1.149818-0.2557898-0.204609-0.7080776-0.666556-0.9289582-0.948798-0.7039881-0.89956-1.2069276-2.1993261-1.2636891-3.2658018-0.0078363-0.1472353-0.0196495-0.3224073-0.0262514-0.3892711l-0.0120034-0.1215707h11.168973v0.2130714c0 0.3183482-0.07019 0.8283841-0.172524 1.2536607-0.563413 2.3413975-2.429807 4.0984285-4.6832509 4.4088295-0.4016482 0.05532-1.0637186 0.05519-1.4542014-3.02e-4z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
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
			<path class="ColorScheme-Text" transform="translate(-551.28571-607.64789)" d="m570.28572 618.6479c0 4.432-3.568 8-8 8s-8-3.568-8-8v-1h16v1m-1 0h-14c0 3.878 3.122 7 7 7s7-3.122 7-7" fill="currentColor"/>
    <path d="m10.542731 18.325534c-0.034-0.0039-0.161171-0.01654-0.282601-0.02787-0.4767055-0.044506-1.0293248-0.162711-1.5189786-0.324912-2.1458106-0.710813-3.8777055-2.406318-4.7040936-4.605253-0.3131566-0.833277-0.4792225-1.667685-0.5175148-2.600282l-0.01199-0.29201h15.003827l-0.01136 0.25493c-0.0062 0.14021-0.02301 0.380077-0.03726 0.533034-0.216585 2.326173-1.408821 4.4204-3.266656 5.738063-0.987896 0.700659-2.130119 1.141049-3.346345 1.290197-0.223211 0.02737-1.15689 0.05173-1.307027 0.0341z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
		</svg>
	{/if}
