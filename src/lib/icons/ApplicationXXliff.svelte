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
			<path fill="#656f9d" d="m8.488 1046.52l-1.386-1.37.016-.016c.949-1.059 1.626-2.275 2.024-3.563h1.599v-1.091h-3.819v-1.091h-1.091v1.091h-3.819v1.086h6.095c-.366 1.053-.944 2.052-1.73 2.925-.507-.562-.928-1.179-1.26-1.828h-1.091c.398.889.944 1.73 1.626 2.488l-2.777 2.739.775.775 2.728-2.728 1.697 1.697zm3.072-2.766h-1.091l-2.455 6.547h1.091l.611-1.637h2.592l.617 1.637h1.091zm-1.43 3.819l.884-2.362.884 2.362z" transform="translate(0-1036.36)"/>
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
			<defs id="defs3871"/>
  
  
  <g id="layer1" transform="translate(-326,-534.3622)">
    <path d="m 338.16983,547.99865 -1.96362,-1.94043 0.0232,-0.0232 c 1.34516,-1.49978 2.30378,-3.22374 2.86812,-5.04821 l 2.26513,0 0,-1.54615 -5.41156,0 0,-1.54616 -1.54616,0 0,1.54616 -5.41155,0 0,1.53843 8.63529,0 c -0.51796,1.49204 -1.33743,2.90678 -2.45066,4.1437 -0.71896,-0.79627 -1.31423,-1.66985 -1.78582,-2.58982 l -1.54615,0 c 0.56435,1.26012 1.33743,2.45066 2.30378,3.52524 l -3.93497,3.88086 1.09777,1.09777 3.86539,-3.86538 2.40428,2.40426 0.58753,-1.57707 z m 4.35244,-3.91952 -1.54615,0 -3.47887,9.27696 1.54616,0 0.86585,-2.31924 3.67213,0 0.87357,2.31924 1.54616,0 -3.47885,-9.27696 z m -2.02547,5.41156 1.25239,-3.34743 1.25239,3.34743 -2.50478,0 z" id="path6" style="fill:#656f9d;fill-opacity:1"/>
  </g>
		</svg>
	{:else if numericSize <= 48}
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
			<defs>
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)">
   <stop stop-color="#8892bf"/>
   <stop offset="1" stop-color="#939dc9"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#444e7e"/>
   <stop offset="1" stop-color="#5a669e"/>
  </linearGradient>
  <linearGradient id="c" y1="524.8" x1="404.57" y2="531.8" x2="411.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="url(#a)" d="m389.57 545.8v-28h15l7 7v21h-7z"/>
  <g transform="scale(1-1)">
   <rect width="15" x="389.57" y="-518.8" fill="#ffffff" height="1" fill-opacity=".412"/>
   <rect width="22" x="389.57" y="-545.8" fill="#2e3132" height="1" fill-opacity=".294"/>
  </g>
  <g fill-rule="evenodd">
   <path fill="url(#b)" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#c)" d="m411.57 531.8l-7-7h7z"/>
  </g>
  <path fill="#656f9d" d="m401.05 535.99l-1.385-1.38.016-.016c.949-1.067 1.625-2.293 2.024-3.591h1.598v-1.1h-3.818v-1.1h-1.091v1.1h-3.818v1.095h6.093c-.365 1.062-.944 2.068-1.729 2.948-.507-.567-.927-1.188-1.26-1.842h-1.091c.398.896.944 1.744 1.625 2.508l-2.776 2.761.775.781 2.727-2.75 1.696 1.71zm3.071-2.788h-1.091l-2.455 6.6h1.091l.611-1.65h2.591l.616 1.65h1.091zm-1.429 3.85l.884-2.381.884 2.381z"/>
 </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs>
  <linearGradient id="a" y1="3" y2="61" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#8892bf"/>
   <stop offset="1" stop-color="#939dc9"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#444e7e"/>
   <stop offset="1" stop-color="#5a669e"/>
  </linearGradient>
  <linearGradient id="c" y1="17" x1="40" y2="31" x2="54" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
 </defs>
 <path fill="url(#a)" d="m10 61v-58h30l14 14v44h-14z"/>
 <g transform="scale(1-1)">
  <rect width="30" x="10" y="-4" fill="#ffffff" height="1" fill-opacity=".412"/>
  <rect width="44" x="10" y="-61" fill="#2e3132" height="1" fill-opacity=".294"/>
 </g>
 <g fill-rule="evenodd">
  <path fill="url(#b)" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#c)" d="m40 17l14 14v-14z"/>
 </g>
 <path fill="#444e7e" d="m32.897 34.929l-2.546-2.516.03-.03c1.744-1.944 2.987-4.179 3.718-6.545h2.937v-2h-7.02v-2h-2v2h-7.02v1.995h11.195c-.672 1.934-1.734 3.769-3.177 5.372-.932-1.032-1.704-2.165-2.315-3.358h-2c.732 1.634 1.734 3.177 2.987 4.57l-5.102 5.03 1.423 1.423 5.01-5.01 3.117 3.117zm5.643-5.082h-2l-4.51 12.03h2l1.123-3.01h4.761l1.133 3.01h2zm-2.626 7.02l1.624-4.34 1.624 4.34z"/>
		</svg>
	{/if}
