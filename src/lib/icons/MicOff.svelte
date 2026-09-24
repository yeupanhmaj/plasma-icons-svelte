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
			<path d="m8 2c-1.1026347 0-1.9894657.8838379-1.9980469 1.984375l3.9980469 4v-3.984375c0-1.108-.892-2-2-2zm-4 5v1c0 1.847 1.286 3.405469 3 3.855469v1.144531h-1v1h4v-1h-1v-1.144531c.21425-.056375.4218945-.129343.6210938-.21875l-.7753907-.775391c-.2704148.081147-.5504447.138672-.8457031.138672-1.645 0-3-1.355-3-3v-.984375l-.015625-.015625zm7 0v1c0 .2952584-.057525.5752883-.138672.8457031l.773438.7734375c.226351-.4969318.365234-1.040725.365234-1.6191406v-1zm-4.9980469 1.0175781c.0095797 1.0936005.8868683 1.9708891 1.9804688 1.9804688z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/><path d="m-.5 3.3284271h1v15.9705629h-1z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText" transform="matrix(.70710678 -.70710678 .70710678 .70710678 0 0)"/>
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
			<path d="m11 3c-1.385 0-2.5 1.115-2.5 2.5v1.0917969l4.992188 4.9902341c.000908-.027831.007812-.053971.007812-.082031v-6c0-1.385-1.115-2.5-2.5-2.5zm-5.5 7v1c.0009163 2.235554 1.6341118 4.198898 4 4.808594v2.191406h-2v1h7v-1h-2v-2.193359c.359986-.09277.696636-.225313 1.019531-.376953l-.751953-.751954c-.542799.206376-1.13986.322266-1.767578.322266-2.4852814 0-4.5-1.790861-4.5-4v-1zm10 0v1c0 .723829-.23306 1.392777-.611328 1.978516l.71875.71875c.558683-.787154.89175-1.711219.892578-2.697266v-1zm-7 .408203v1.091797c0 1.385 1.115 2.5 2.5 2.5.323798 0 .630577-.064693.914062-.175781z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/><path d="m-.5 4.7426407h1v21.6274173h-1z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText" transform="matrix(.70710678 -.70710678 .70710678 .70710678 0 0)"/>
		</svg>
	{/if}
