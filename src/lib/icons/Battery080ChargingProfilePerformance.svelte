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
			<path class="ColorScheme-Text" d="m0 2v12h6v-1h-5v-10h13v3.1016c0.48581-0.053102 1.011-0.083036 1.5723-0.09375-0.02369-0.0034169-0.047601-0.0078125-0.072266-0.0078125h-0.5v-4h-15zm2 2v8h4v-2l2-1c0.76116-0.76116 1.5231-1.3762 2.3945-1.8477l-0.39453-3.1523h-8z" fill="currentColor"/>
    <path class="ColorScheme-PositiveText" transform="translate(-2)" d="M9 5a3 3 0 0 0-2.826 2H5v2h1.176A3 3 0 0 0 9 11v-1h2V9H9V7h2V6H9z" fill="currentColor"/>
    <path class="ColorScheme-Text" d="m15.994 7c-3.9941 0-5.9941 2-6.9941 3l-2 1 1 1 0.00391 1.5 1.5 1.5h1.4961l1 1 1-2c1-1 3-3 2.9941-7zm-0.99609 1c-2e-3 2-1.998 6-4.998 6l-1-1c1e-7 -3 3.9992-5 5.998-5zm-2.248 1.5c-0.41421 0-0.75 0.33579-0.75 0.75s0.33579 0.75 0.75 0.75 0.75-0.33579 0.75-0.75-0.33579-0.75-0.75-0.75zm-5.5499 4.5c-0.2 2-0.2 2 1.8 1.8z" color="currentColor" fill="currentColor"/>
		</svg>
	{:else if numericSize <= 27}
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
			<path class="ColorScheme-Text" d="m1 5v12h7v-1h-6v-10h17v2.0156c0.31583-0.010037 0.6458-0.015625 1-0.015625v-3h-16-3zm2 2v8h5v-2l4-2c1.0353-1.0353 1.8071-1.7995 3-2.2988v-1.7012h-12z" fill="currentColor"/>
    <path class="ColorScheme-PositiveText" transform="translate(-3)" d="M12 8a3 3 0 0 0-2.826 2H8v2h1.176A3 3 0 0 0 12 14v-1h2v-1h-2v-2h2V9h-2z" fill="currentColor"/>
    <path class="ColorScheme-Text" d="m20.998 9c-3.1437 0-5.998 0.54208-7.998 3l-3.5 1.5 1.5 1.5-0.5 1 3.5 3.5 1-0.5 1.5 1.5 1.5-3.5c3-2.4814 3.0245-5 2.998-8zm-0.99805 1c0 3-1 6-6 8l-2-2c2-5 5-6 8-6zm-3 2c-0.55228 0-1 0.44772-1 1s0.44772 1 1 1 1-0.44772 1-1-0.44772-1-1-1zm-6.8535 5.1465c-0.36785 0.36785-0.60704 0.90315-0.80859 1.5078-0.20155 0.60466-0.33789 1.2624-0.33789 1.8457v0.5h0.5c0.58333 0 1.241-0.13634 1.8457-0.33789 0.60466-0.20155 1.14-0.44074 1.5078-0.80859l-0.70703-0.70703c-0.13215 0.13215-0.59685 0.39296-1.1172 0.56641-0.31102 0.10367-0.60447 0.1225-0.91406 0.17188 0.04937-0.30959 0.0682-0.60304 0.17188-0.91406 0.17345-0.52034 0.43426-0.98504 0.56641-1.1172l-0.70703-0.70703z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m3 10v12h12v-1h-11v-10h23v3.8203c0.61515-0.021426 1.2788-0.023839 2-0.003906v-0.81641c0-0.554-0.446-1-1-1v-3h-25zm2 2v8h10l3-1c1.0532-1.0532 1.8307-2.3841 3.9355-3.2617l-0.93555-3.7383h-16z" fill="currentColor"/>
    <path class="ColorScheme-PositiveText" d="M16 13a3 3 0 0 0-2.826 2H12v2h1.176A3 3 0 0 0 16 19v-1h2v-1h-2v-2h2v-1h-2z" fill="currentColor"/>
    <path class="ColorScheme-Text" d="m28.998 16c-3.1437 0-7.1445 8e-6 -9.9102 3.75l-3.1406 1.2559 2.0547 2.0547c-0.05663 0.30481-0.10791 0.6152-0.14844 0.93945l3 3c0.29825-0.03728 0.58541-0.081893 0.86719-0.13281l2.1328 2.1328 1.3047-3.2598c3.6953-2.7402 3.8663-6.7402 3.8398-9.7402zm-1.1445 1c0 3-1 8-6.6992 8.75l-2.0508-2.0508c0.75-5.6992 5.75-6.6992 8.75-6.6992zm-3.5 2c-0.82843 0-1.5 0.67157-1.5 1.5s0.67157 1.5 1.5 1.5 1.5-0.67157 1.5-1.5-0.67157-1.5-1.5-1.5zm0 1c0.27614 0 0.5 0.22386 0.5 0.5s-0.22386 0.5-0.5 0.5-0.5-0.22386-0.5-0.5 0.22386-0.5 0.5-0.5zm-7.0078 4.9473c-0.86836 0.86836-1.3457 2.3861-1.3457 3.5527v0.5h0.5c1.1333 0 2.6054-0.39839 3.5527-1.3457l-0.70703-0.70703c-0.49294 0.49294-1.3359 0.77456-2.1094 0.91602 0.16143-0.80987 0.40377-1.7963 0.81641-2.209l-0.70703-0.70703z" fill="currentColor"/>
		</svg>
	{/if}
