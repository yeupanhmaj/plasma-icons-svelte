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
			<path class="ColorScheme-Text" d="m7 2h1c3.314 0 6 2.684 6 5.996 0 3.311-2.686 5.996-6 5.996-0.069 0.019-1 0-1 0v-10.992zm1 0.999v9.993c2.761 0 5-2.237 5-4.997s-2.239-4.997-5-4.997" fill="currentColor"/>
    <path d="m7.5581346 7.9531348v-5.523404l0.5129326 0.048725c2.0070218 0.1906533 3.8720138 1.3569661 4.7507498 2.9709812 0.476152 0.8745723 0.61173 1.4476542 0.605842 2.5608687-0.0048 0.9018367-0.03 1.0809325-0.227521 1.6153542-0.326797 0.8841741-0.796108 1.5704401-1.542049 2.2549181-1.008987 0.92585-2.2219362 1.436238-3.7150478 1.563225l-0.3849066 0.03274z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
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
			<path class="ColorScheme-Text" transform="translate(-551.28571-607.64789)" d="m562.28572 610.6479c4.432 0 8 3.568 8 8s-3.568 8-8 8h-1v-16h1m0 1v14c3.878 0 7-3.122 7-7s-3.122-7-7-7" fill="currentColor"/>
    <path d="m10.529237 10.914076v-7.4130437l0.801175 0.062065c1.865705 0.1445302 3.436783 0.8492381 4.903878 2.1996361 0.842852 0.7758097 1.064612 1.0523203 1.481634 1.8474403 0.672678 1.282571 0.872134 2.1859075 0.805924 3.6500263-0.09086 2.009095-0.752055 3.398447-2.303488 4.840223-0.878107 0.816041-1.681102 1.313264-2.763289 1.711059-0.701671 0.257925-1.944706 0.511474-2.519468 0.513914l-0.406366 0.0017z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
		</svg>
	{/if}
