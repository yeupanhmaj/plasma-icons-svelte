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
			<path class="ColorScheme-Text" d="m1 2v12h8v-1h-6.344l3.986-4.65 1.357 1.357c-.013-.024 6-6 6-6v4.293h1v-6zm1.707 1h10.586l-5.293 5.293zm-.707.707l3.934 3.934-3.934 4.59z" fill="currentColor"/>
    <path class="ColorScheme-NegativeText" d="M 15,11.5 A 2.499985,2.499985 0 0 0 12.5,9 2.499985,2.499985 0 0 0 10,11.5 2.499985,2.499985 0 0 0 12.5,14 2.499985,2.499985 0 0 0 15,11.5 m -1,0 a 1.5,1.5 0 0 1 -0.148438,0.644531 L 11.855,10.148 A 1.5,1.5 0 0 1 12.5,10 1.5,1.5 0 0 1 14,11.5 m -0.855469,1.351562 A 1.5,1.5 0 0 1 12.5,13 1.5,1.5 0 0 1 11,11.5 1.5,1.5 0 0 1 11.148438,10.855469 Z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m1 3v1 8 6 0.414062 0.585938h1 6 6v-1h-6-6v-0.585938l0.4628906-0.46289 6.2675782-6.267578 1.4531252 1.451172 0.814453 0.814453h0.001953l0.816406-0.814453 1.453125-1.451172 1.316407 1.316406h1.414062l-2.023438-2.0234375 5.751954-5.7539063 0.222656-0.2226562h0.048828v0.2226562 7.7773438h1v-9h-0.048828-0.951172-0.462891-17.074218-0.4628906-1zm1 1h0.0488281l0.2226563 0.2226562 5.7519531 5.7539063-6.0234375 6.0234375v-4-7.7773438-0.2226562zm1.4628906 0h15.074218l-7.537109 7.537109-7.5371094-7.537109z" fill="currentColor"/>
    <path d="m21 16c0-1.661995-1.338005-3-3-3s-3 1.338005-3 3 1.338005 3 3 3 3-1.338005 3-3zm-1 0c0 0.371625-0.106065 0.714197-0.28125 1.011719l-2.730469-2.730469c0.297522-0.175185 0.640094-0.28125 1.011719-0.28125 1.107997 0 2 0.892003 2 2zm-0.988281 1.71875c-0.297522 0.175185-0.640094 0.28125-1.011719 0.28125-1.107997 0-2-0.892003-2-2 0-0.371625 0.106065-0.714197 0.28125-1.011719z" fill="#da4453"/>
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
			<path class="ColorScheme-Text" d="m2 5v19.683594 2.316406h17v-1h-16v-0.888672l0.4296875-0.427734 9.3554685-9.142578 3.214844 3.142578s13-12.683594 12.976562-12.683594h0.023438v8h1v-9zm1 1h0.0234375l9.0468745 8.841797-9.070312 8.865234zm1.453125 0h23.09375l-11.546875 11.285156z" fill="currentColor"/>
    <path class="ColorScheme-NegativeText" d="m30 21.5a5.5 5.5 0 0 0-5.5-5.5 5.5 5.5 0 0 0-5.5 5.5 5.5 5.5 0 0 0 5.5 5.5 5.5 5.5 0 0 0 5.5-5.5zm-1 0a4.5 4.5 0 0 1-0.988281 2.804688l-6.326172-6.314454a4.5 4.5 0 0 1 2.814453-0.990234 4.5 4.5 0 0 1 4.5 4.5zm-1.689453 3.511719a4.5 4.5 0 0 1-2.810547 0.988281 4.5 4.5 0 0 1-4.5-4.5 4.5 4.5 0 0 1 0.984375-2.800781z" fill="currentColor"/>
		</svg>
	{/if}
