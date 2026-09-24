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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
          d="m 5,1038.3622 0,6 -1,0 0,1 0,4 0,1 1,0 6,0 1,0 0,-1 0,-4 0,-1 -1,0 0,-6 -6,0 z m 1,2 1,0 0,3 -1,0 0,-3 z m 3,0 1,0 0,3 -1,0 0,-3 z m -4,5 6,0 0,4 -6,0 0,-4 z m 1,2 0,1 4,0 0,-1 -4,0 z" 
          transform="translate(0,-1036.3622)"
          class="ColorScheme-Text"
          />
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
          d="m 7,1033.3622 0,8 -1,0 0,1 0,7 1,0 9,0 0,-1 0,-6 0,-1 -1,0 0,-8 -8,0 z m 1,2 1,0 0,4 -1,0 0,-4 z m 5,0 1,0 0,4 -1,0 0,-4 z m -3,2 2,0 0,2 -2,0 0,-2 z m -3,5 8,0 0,6 -8,0 0,-6 z m 4,1 -1,1 2,0 -1,-1 z m -3,3 0,1 6,0 0,-1 -6,0 z" 
          transform="translate(0,-1030.3622)"
          class="ColorScheme-Text"/>
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
			<defs id="defs5455">
  <linearGradient inkscape:collect="always" id="linearGradient4303">
   <stop style="stop-color:#c6cdd1" id="stop4305"/>
   <stop offset="1" style="stop-color:#e0e5e7" id="stop4307"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4143">
   <stop style="stop-color:#197cf1" id="stop4145"/>
   <stop offset="1" style="stop-color:#20bcfa" id="stop4147"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4143-8">
   <stop style="stop-color:#faae2a" id="stop4145-7"/>
   <stop offset="1" style="stop-color:#ffc35a" id="stop4147-4"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4143" id="linearGradient4349" y1="545.79797" y2="528.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.0588235 0 0 1.0588257 -26.21011 -32.10676)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4303" id="linearGradient4357" y1="527.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.0769231 0 0 1 -33.50552 0)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4143-8" id="linearGradient4371" x1="398.57144" x2="400.57144" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -2.500012 0)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4143-8" id="linearGradient4375" x1="398.57144" gradientUnits="userSpaceOnUse" x2="400.57144" gradientTransform="matrix(1 0 0 1 4.500057 0)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4290">
   <stop style="stop-color:#7cbaf8" id="stop4292"/>
   <stop offset="1" style="stop-color:#f4fcff" id="stop4294"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4290" id="linearGradient4285" y1="25" y2="17" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4227" id="linearGradient4322" y1="16" x1="10.00001" y2="28" x2="22.00001" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
 </defs>
 <metadata id="metadata5458"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="18" x="391.57144" y="527.79816" height="18.00001" style="fill:url(#linearGradient4349)" id="rect4180"/>
  <path style="fill:url(#linearGradient4322);opacity:0.2;stroke-width:3.779527" id="rect4298" d="M 14.853516 17.146484 L 14.146484 17.853516 L 17.529297 21.236328 L 16 22 L 24 30 L 25 30 L 25 28.707031 L 25 27.292969 L 25 25 L 20 20 L 18.470703 20.763672 L 14.853516 17.146484 z M 13.707031 20.292969 L 12.292969 21.707031 L 14.792969 24.207031 L 14.292969 24.707031 L 19.585938 30 L 20.585938 30 L 22.414062 30 L 23.414062 30 L 13.707031 20.292969 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <rect width="14" x="393.57144" y="517.79797" height="10.00003" style="fill:url(#linearGradient4357)" id="rect4182"/>
  <rect width="4.00003" x="395.07144" y="519.79797" height="4.00003" style="fill:#23262c" id="rect4359"/>
  <rect width="4.00003" x="402.0715" y="519.79797" height="4.00003" style="fill:#23262c" id="rect4361"/>
  <rect width="2.00001" x="396.07144" y="519.79797" height="4" style="fill:url(#linearGradient4371)" id="rect4363"/>
  <rect width="2.00001" x="403.0715" y="519.79797" height="4" style="fill:url(#linearGradient4375)" id="rect4373"/>
  <rect width="18" x="391.57144" y="544.79797" height="0.999974" style="fill:#0c69cf" id="rect4377"/>
  <path style="fill:url(#linearGradient4285);stroke-width:3.779527" id="path4245" d="M 14.5 17 A 0.5 0.5 0 0 0 14 17.5 A 0.5 0.5 0 0 0 14.5 18 A 0.5 0.5 0 0 0 15 17.5 A 0.5 0.5 0 0 0 14.5 17 z M 17 17 L 16 18 L 18 20 L 16 22 L 17 23 L 20 20 L 17 17 z M 13 20 A 0.99999499 0.99999499 0 0 0 12 21 A 0.99999499 0.99999499 0 0 0 13 22 A 0.99999499 0.99999499 0 0 0 14 21 A 0.99999499 0.99999499 0 0 0 13 20 z M 15 23 A 0.99999499 0.99999499 0 0 0 14 24 A 0.99999499 0.99999499 0 0 0 15 25 A 0.99999499 0.99999499 0 0 0 16 24 A 0.99999499 0.99999499 0 0 0 15 23 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
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
			<defs id="defs5455">
  <linearGradient inkscape:collect="always" id="linearGradient4158" xlink:href="#linearGradient4143" y1="557.79803" y2="505.798" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(0.78261 0 0 1 83.25419 -8.00002)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4400">
   <stop style="stop-color:#020303" id="stop4402"/>
   <stop offset="1" style="stop-color:#424649;stop-opacity:0" id="stop4404"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4400" id="linearGradient4231" y1="14.00002" x1="13.999987" y2="34.00002" x2="33.999985" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 10 22)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4143">
   <stop style="stop-color:#197cf1" id="stop4145"/>
   <stop offset="1" style="stop-color:#20bcfa" id="stop4147"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4290" id="linearGradient4301" y1="52.00002" y2="36.00002" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" id="linearGradient4290">
   <stop style="stop-color:#7cbaf8" id="stop4292"/>
   <stop offset="1" style="stop-color:#f4fcff" id="stop4294"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4303" id="linearGradient4319" y1="551.79791" y2="528.79791" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(0.63587062 0 0 1 144.25118 -30.99993)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4303">
   <stop style="stop-color:#c6cdd1" id="stop4305"/>
   <stop offset="1" style="stop-color:#e0e5e7" id="stop4307"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4143-8" id="linearGradient4375" x1="398.57144" gradientUnits="userSpaceOnUse" x2="400.57144" gradientTransform="matrix(2 0 0 2 -384.5714 -537.79802)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4143-8">
   <stop style="stop-color:#faae2a" id="stop4145-7"/>
   <stop offset="1" style="stop-color:#ffc35a" id="stop4147-4"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4143-8" id="linearGradient4371" x1="398.57144" x2="400.57144" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2 0 0 2 -396.57143 -537.79802)"/>
 </defs>
 <metadata id="metadata5458"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -376.57144 -491.79797)">
  <rect width="26" x="395.57144" y="497.79813" rx="0" height="23.999866" style="fill:url(#linearGradient4319)" id="rect4317"/>
  <rect width="32" x="392.57144" y="520.79797" rx="0" height="28.999859" style="fill:url(#linearGradient4158)" id="rect4139"/>
  <path style="fill:url(#linearGradient4231);opacity:0.2" id="rect4200" d="M 28.707031 36.292969 L 27.292969 37.707031 L 35.292969 45.707031 L 35 46 L 47 58 L 48 58 L 48 49 L 40 41 L 36.707031 44.292969 L 28.707031 36.292969 z M 26.560547 42.439453 L 24.439453 44.560547 L 29.939453 50.060547 L 28.585938 51.414062 L 35.171875 58 L 42.123047 58 L 26.560547 42.439453 z " transform="matrix(1 0 0 1 376.57144 491.79797)"/>
  <path style="fill:url(#linearGradient4301)" id="path4292" d="M 28 36 C 27.446 36 27 36.446 27 37 C 27 37.554 27.446 38 28 38 C 28.554 38 29 37.554 29 37 C 29 36.446 28.554 36 28 36 z M 35 36 L 33 38 L 36 41 L 33 44 L 35 46 L 38 43 L 40 41 L 35 36 z M 25.5 42 C 24.669 42 24 42.669 24 43.5 C 24 44.331 24.669 45 25.5 45 C 26.331 45 27 44.331 27 43.5 C 27 42.669 26.331 42 25.5 42 z M 30 48 C 28.892 48 28 48.892 28 50 C 28 51.108 28.892 52 30 52 C 31.108 52 32 51.108 32 50 C 32 48.892 31.108 48 30 48 z " transform="matrix(1 0 0 1 376.57144 491.79797)"/>
  <rect width="32" x="392.57144" y="548.79797" height="1.00002" style="stroke-opacity:0.550265;fill:#0c69cf;stroke-width:2.8" id="rect4492"/>
  <rect width="8.00005" x="398.57144" y="501.79794" height="8.00005" style="fill:#23262c" id="rect4359"/>
  <rect width="8.00005" x="410.57153" y="501.79794" height="8.00005" style="fill:#23262c" id="rect4361"/>
  <rect width="4.00002" x="400.57144" y="501.79794" height="8" style="fill:url(#linearGradient4371)" id="rect4363"/>
  <rect width="4.00002" x="412.57153" y="501.79794" height="8" style="fill:url(#linearGradient4375)" id="rect4373"/>
 </g>
		</svg>
	{/if}
