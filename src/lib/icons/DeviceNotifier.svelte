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
			<linearGradient id="a"><stop offset="0" stop-color="#faae2a"/><stop offset="1" stop-color="#ffc35a"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.70588236 0 0 .70588341 -273.52104 -365.26974)" gradientUnits="userSpaceOnUse" x2="0" y1="545.79797" y2="528.79797"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#20bcfa"/></linearGradient><linearGradient id="c" gradientTransform="matrix(.76923079 0 0 .59999821 -299.05497 -308.67785)" gradientUnits="userSpaceOnUse" x2="0" y1="527.79797" y2="517.79797"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="d" gradientTransform="matrix(.49999737 0 0 .75000007 -191.28468 -386.84852)" gradientUnits="userSpaceOnUse" x1="398.57144" x2="400.57144" xlink:href="#a"/><linearGradient id="e" gradientTransform="matrix(.49999731 0 0 .75000007 -186.28465 -386.84852)" gradientUnits="userSpaceOnUse" x1="398.57144" x2="400.57144" xlink:href="#a"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="10.999994" x2="11.000004" y1="21.99997" y2="8.999997"><stop offset="0" stop-color="#7cbaf8"/><stop offset="1" stop-color="#f4fcff"/></linearGradient><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="10" x2="17" y1="13" y2="20"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m5 8h12v12h-12z" fill="url(#b)" stroke-width=".666667"/><path d="m6 2h10v6h-10z" fill="url(#c)" stroke-width=".654653"/><path d="m7 3h3.035741v3h-3.035741z" fill="#23262c" stroke-width=".754449"/><path d="m11.964319 3h3.035681v3h-3.035681z" fill="#23262c" stroke-width=".754441"/><path d="m8 3h1v3h-1z" fill="url(#d)" stroke-width=".612371"/><path d="m13 3h1v3h-1z" fill="url(#e)" stroke-width=".612371"/><path d="m5 19h12v.999855h-12z" fill="#0c69cf" stroke-width=".816449"/><path d="m10 15 2-6 5 5v6h-4.414l-2.293-2.293.707-1.707z" fill="url(#g)" opacity=".2"/><path d="m10 9v6h2v-6zm.999999 7.000004c-.553999 0-.999999.446001-.999999 1 0 .554.446 1.000001.999999 1.000001.554001 0 1.000001-.446001 1.000001-1.000001 0-.553999-.446-1-1.000001-1z" fill="url(#f)"/>
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
  <linearGradient inkscape:collect="always" id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4227" id="linearGradient4188" y1="9" x1="9.00001" y2="23.00003" x2="23.00004" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 384.57143 519.798)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4290" id="linearGradient4153" y1="22.999973" x1="16" y2="10" x2="16.00001" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 384.57143 519.798)"/>
 </defs>
 <metadata id="metadata5458"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="18" x="391.57144" y="527.79816" height="18.00001" style="fill:url(#linearGradient4349)" id="rect4180"/>
  <rect width="14" x="393.57144" y="517.79797" height="10.00003" style="fill:url(#linearGradient4357)" id="rect4182"/>
  <rect width="4.00003" x="395.07144" y="519.79797" height="4.00003" style="fill:#23262c" id="rect4359"/>
  <rect width="4.00003" x="402.0715" y="519.79797" height="4.00003" style="fill:#23262c" id="rect4361"/>
  <rect width="2.00001" x="396.07144" y="519.79797" height="4" style="fill:url(#linearGradient4371)" id="rect4363"/>
  <rect width="2.00001" x="403.0715" y="519.79797" height="4" style="fill:url(#linearGradient4375)" id="rect4373"/>
  <rect width="18" x="391.57144" y="544.79797" height="0.999974" style="fill:#0c69cf" id="rect4377"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4188);opacity:0.2;fill-rule:evenodd" id="path4179" d="m 401.57143,529.798 0,9 -2,0 8.69922,8.69922 c 2.41617,-1.58922 4.24515,-2.95978 5.30078,-5.69922 z m -0.40039,11.19922 -1.40039,1.40039 5.80078,5.40039 c 0.67244,-0.28242 2,0 2.36523,-0.0977 z"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4153)" id="rect4142" d="m 399.57143,529.798 0,9 2,0 0,-9 z m 1,11 c -0.554,0 -1,0.446 -1,1 0,0.554 0.446,1 1,1 0.554,0 1,-0.446 1,-1 0,-0.554 -0.446,-1 -1,-1 z"/>
 </g>
		</svg>
	{/if}
