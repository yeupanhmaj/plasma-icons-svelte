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
			<linearGradient id="a" gradientTransform="matrix(.70559022 0 0 -.74190143 -271.55369 -384.55165)" gradientUnits="userSpaceOnUse" x2="0" y1="-545.29028" y2="-521.02832"><stop offset="0" stop-color="#faae2a"/><stop offset="1" stop-color="#ffc35a"/></linearGradient><path d="m10.999999 2.0000023-2.7811475 5.9252329-6.2188534.9501531 4.5000004 4.6121487-1.0623014 6.512463 5.5623019-3.074766 5.562309 3.074766-1.062302-6.512463 4.500001-4.6121487-6.218854-.9501531z" fill="url(#a)" stroke-width=".723518"/>
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
			<defs id="defs5455">
  <linearGradient inkscape:collect="always" id="linearGradient4143">
   <stop style="stop-color:#faae2a" id="stop4145"/>
   <stop offset="1" style="stop-color:#ffc35a" id="stop4147"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4143" id="linearGradient4184" y1="-545.29028" y2="-521.02832" x2="0" gradientUnits="userSpaceOnUse"/>
 </defs>
 <metadata id="metadata5458"/>
 <path id="path4131" style="fill:url(#linearGradient4184)" inkscape:flatsided="false" inkscape:label="Capa 1" inkscape:transform-center-y="-3.8695571" inkscape:rounded="0" inkscape:randomized="0" d="m 400.45013,-521.02831 -3.94159,-7.98655 -8.81369,-1.2807 6.37764,-6.21666 -1.50555,-8.77807 7.88319,4.14444 7.8832,-4.14444 -1.50555,8.77807 6.37764,6.21666 -8.81369,1.2807 z" inkscape:groupmode="layer" transform="matrix(1.0975845 0 0 -1.1540686 -423.52786 -599.30241)"/>
		</svg>
	{/if}
