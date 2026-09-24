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
			<path id="rect4365" d="m2.000641 12.999466h0.9998932l-0.00138-1.122808a7 7 0 0 0 4.8710253 2.117177l-1.1324753-1.132476a6 6 0 0 1-3.187505-1.861679l1.4501214-1e-6v-0.9998927h-2.9996796l-3e-7 0.5828107 1e-7 0.417082zm7.4991991 1.207053 4.7066789-4.7066797-7.7063587-7.7063585-4.7066797 4.7066792zm0-1.414213-6.2921459-6.292146 3.2924658-3.2924659 6.292146 6.292146zm1.4998389-6.7920924 2.99968 1e-7 -1e-6 -0.5828108 1e-6 -0.417082v-1.9997871l-0.999893-1e-7 0.0014 1.1228079a7 7 0 0 0-4.8710452-2.1171758l1.1324751 1.1324751a6 6 0 0 1 3.1875051 1.8616799l-1.450121-7e-7z" class="ColorScheme-Text" fill="currentColor" stroke-linecap="square" style="paint-order:markers fill stroke"/>
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
			<path id="rect3983" d="m9 2.2929688-6.7070312 6.7070312 10.707031 10.707031 6.707031-6.707031-10.707031-10.707031zm3 0.7089843a7 7 0 0 0-0.806641 0.0722657l0.933594 0.9335937a6 6 0 0 1 5.041016 2.9941406h-1.169922-0.998047v0.2910157 0.7070312h0.707031 0.291016 1.640625 0.359375 0.699219 0.300781l0.001953-4h-1v2.4257812a7 7 0 0 0-6-3.4238281zm-3 0.7050781 9.292969 9.2929688-5.292969 5.292969-9.2929688-9.292969 5.2929688-5.2929688zm-5.9980469 10.292969-0.0019531 4h1v-2.425781a7 7 0 0 0 6 3.423828 7 7 0 0 0 0.806641-0.072266l-0.9335941-0.933593a6 6 0 0 1-5.0410157-2.994141h1.1699219 1v-0.291016-0.707031h-0.7089843-0.2910157-1.640625-0.359375-0.6992187-0.3007813z" class="ColorScheme-Text" fill="currentColor" stroke-linecap="square" style="paint-order:markers fill stroke"/>
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
			<path id="rect908" d="m12.998047 3.2929688-9.7050782 9.7050782 15.708984 15.708984 9.705078-9.705078-15.708984-15.708984zm0 1.4140624 14.294922 14.294922-8.291016 8.291016-14.294922-14.294922 8.2910158-8.2910158zm4.212891 0.3085938a11 11 0 0 0-0.994141 0.0800781l0.9375 0.9375a10 10 0 0 1 7.480469 2.875 10 10 0 0 1 1.554687 2.0917969h-3.189453v1h5v-1-4h-1v3.371094a11 11 0 0 0-1.658203-2.1699221 11 11 0 0 0-8.130859-3.1855469zm-13.210938 14.984375v1 4h1v-3.371094a11 11 0 0 0 1.6582031 2.169922 11 11 0 0 0 9.1249999 3.105469l-0.9375-0.9375a10 10 0 0 1-7.4804686-2.875 10 10 0 0 1-1.5546875-2.091797h3.1894531v-1h-5z" class="ColorScheme-Text" fill="currentColor" stroke-linecap="square" style="paint-order:markers fill stroke"/>
		</svg>
	{/if}
