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
			<path fill="#f7a01c" color="#4d4d4d" d="m3 2v2h-1v2h1v4h-1v2h1v2h11v-12zm1 1h1v10h-1zm2 0h7v10h-7z"/>
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
			<defs
     id="defs3871" />
  
  <g
     id="layer1"
     transform="matrix(1 0 0 1 -326 -534.3622)">
    <path
       style="fill:#f7a01c;fill-opacity:1;stroke:none"
       d="m 331,537.3622 0,1 0,1 -2,0 0,3 2,0 0,6 -2,0 0,3 2,0 0,2 1,0 13,0 0,-1 0,-14 0,-1 -14,0 m 1,1 2,0 0,14 -2,0 0,-14 m 3,0 9,0 0,14 -9,0 0,-14"
       class="ColorScheme-Text"
       id="path6" />
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
  <linearGradient id="a" y1="17" x1="47" y2="24" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(357.57 507.8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="365.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(309.57 152.44)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#f7a01c" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".2" fill="url(#a)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path fill="#fddda3" color="#4d4d4d" d="m395.57 526.8v2h-1v2h1v4h-1v2h1v2h11v-12zm1 1h1v10h-1zm2 0h7v10h-7z"/>
  <use fill="url(#b)" xlink:href="#c"/>
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
			<defs id="defs17">
        <linearGradient gradientTransform="matrix(1 0 0-1 0 64)" gradientUnits="userSpaceOnUse" x2="0" y2="61" y1="3" id="a">
            <stop offset="0" stop-color="#f89406" id="stop4" />
            <stop offset="1" stop-color="#f39c12" id="stop2" />
        </linearGradient>
        <linearGradient gradientTransform="matrix(1 0 0-1 0 64)" gradientUnits="userSpaceOnUse" x2="0" y2="47" y1="61" id="b">
            <stop offset="0" stop-color="#fde3a7" id="stop9" />
            <stop offset="1" stop-color="#fddda3" id="stop7" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" x2="54" y2="31" x1="40" y1="17" id="c">
            <stop id="stop12" stop-color="#383e51" />
            <stop id="stop14" stop-opacity="0" stop-color="#655c6f" offset="1" />
        </linearGradient>
    </defs>
    <path id="path19" d="m10 61v-58h30l14 14v44h-14z" fill="url(#a)" />
    <g id="g25" transform="scale(1-1)">
        <rect id="rect21" fill-opacity=".412" height="1" fill="#ffffff" y="-4" x="10" width="30" />
        <rect id="rect23" fill-opacity=".294" height="1" fill="#2e3132" y="-61" x="10" width="44" />
    </g>
    <g id="g31" fill-rule="evenodd">
        <path id="path27" d="m54 17l-14-14v14z" fill="url(#b)" />
        <path id="path29" d="m40 17l14 14v-14z" fill="url(#c)" opacity=".2" />
    </g>
    <path id="path33" d="m22 22v3h-1v4h1v8h-1v4h1v3h21v-22zm1 1h1v20h-1zm2 0h17v20h-17z" color="#4d4d4d" fill="#fddda3" />
		</svg>
	{/if}
