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
			<path fill="#4D4D4D" d="M7 4.5C7 3.669 7.669 3 8.5 3h5c.831 0 1.5.669 1.5 1.5V7h-1V4.5c0-.277-.223-.5-.5-.5h-5c-.277 0-.5.223-.5.5V7H7z"/>
  <path fill="url(#a)" d="M20 10H2v8h18z"/>
  <path fill="url(#b)" fill-rule="evenodd" d="M4.86 6 2 7.72V10h18V7.72L17.14 6z" clip-rule="evenodd"/>
  <path fill="url(#c)" fill-rule="evenodd" d="M13 8v4l6 6h1v-7l-3-3z" clip-rule="evenodd" opacity=".2"/>
  <path fill="url(#d)" fill-rule="evenodd" d="M5 8v4l6 6h1v-7L9 8z" clip-rule="evenodd" opacity=".2"/>
  <path fill="url(#e)" d="M5 8v4h4V8zm1 1h2v2H6z"/>
  <path fill="url(#f)" d="M13 8v4h4V8zm1 1h2v2h-2z"/>
  <defs>
    <linearGradient id="a" x1="-214.322" x2="-214.322" y1="9.111" y2="18" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A82936"/>
      <stop offset="1" stop-color="#DA4453"/>
      <stop offset="1" stop-color="#DA4453"/>
    </linearGradient>
    <linearGradient id="b" x1="2" x2="2" y1="9" y2="4" gradientUnits="userSpaceOnUse">
      <stop stop-color="#DA4453"/>
      <stop offset="1" stop-color="#DA4453"/>
    </linearGradient>
    <linearGradient id="c" x1="13" x2="20" y1="8" y2="15" gradientUnits="userSpaceOnUse">
      <stop stop-color="#383E51"/>
      <stop offset="1" stop-color="#655C6F" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="d" x1="5" x2="12" y1="8" y2="15" gradientUnits="userSpaceOnUse">
      <stop stop-color="#383E51"/>
      <stop offset="1" stop-color="#655C6F" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="e" x1="13" x2="13" y1="12" y2="8" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C6CDD1"/>
      <stop offset="1" stop-color="#E0E5E7"/>
    </linearGradient>
    <linearGradient id="f" x1="13" x2="13" y1="12" y2="8" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C6CDD1"/>
      <stop offset="1" stop-color="#E0E5E7"/>
    </linearGradient>
  </defs>
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
  <linearGradient inkscape:collect="always" id="linearGradient4204">
   <stop style="stop-color:#a82936" id="stop4182"/>
   <stop offset="1" style="stop-color:#da4453" id="stop4184"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4177">
   <stop style="stop-color:#da4453" id="stop4174"/>
   <stop offset="1" style="stop-color:#da4453" id="stop4176"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4204" id="linearGradient4185" y1="525.79797" y2="545.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4177" id="linearGradient4202" y1="10" y2="5" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 384.57143 518.798)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4410" id="linearGradient4219" y1="527.79797" x1="389.57144" y2="543.79797" x2="405.57147" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" id="linearGradient4303">
   <stop style="stop-color:#c6cdd1" id="stop4305"/>
   <stop offset="1" style="stop-color:#e0e5e7" id="stop4307"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4410">
   <stop style="stop-color:#383e51" id="stop4412"/>
   <stop offset="1" style="stop-color:#655c6f;stop-opacity:0" id="stop4414"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4303" id="linearGradient4340" y1="17" y2="12" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4303" id="linearGradient4348" y1="532.79797" y2="527.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4410" id="linearGradient4352" y1="527.79797" x1="389.57144" y2="543.79797" gradientUnits="userSpaceOnUse" x2="405.57147" gradientTransform="matrix(1 0 0 1 -368.57143 -515.798)"/>
 </defs>
 <metadata id="metadata5458"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <path style="fill:#4d4d4d;stroke-linecap:square;stroke-width:0.1" id="rect4357" d="M 11 2 C 9.3379853 2 8 3.3379853 8 5 L 8 8 C 8 9.3090942 8.835301 10.406795 10 10.818359 L 10 5 C 10 4.4459854 10.445985 4 11 4 L 21 4 C 21.554015 4 22 4.4459854 22 5 L 22 10.818359 C 23.164699 10.406795 24 9.3090942 24 8 L 24 5 C 24 3.3379853 22.662015 2 21 2 L 11 2 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <rect id="rect4177" style="fill:url(#linearGradient4185);stroke-linecap:square;stroke-width:0.1" x="384.57144" y="527.79797" rx="0" width="31.999969" height="17.999973"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4202);fill-rule:evenodd" id="path4189" d="m 387.57143,523.798 -3,2 0,3 3,0 26,0 3,0 0,-3 -3,-2 -26,0 z"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4219);opacity:0.2;fill-rule:evenodd" id="path4211" d="m 389.57143,532.798 0,-5 5,0 18,18 -4.99996,0 -2.00004,0 -3,0 z"/>
  <path style="fill:url(#linearGradient4352);opacity:0.2;fill-rule:evenodd" id="path4350" d="M 21 12 L 21 17 L 32 28 L 32 18 L 26 12 L 21 12 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4348);stroke-linecap:square;stroke-width:0.1" id="path4209" d="m 405.57143,527.798 0,5 5,0 0,-5 -5,0 z m 1,1 3,0 0,3 -3,0 0,-3 z"/>
  <rect width="31.999958" x="384.57147" y="544.79797" height="1" style="fill:#aa2a37;stroke-linecap:square;stroke-width:0.1" id="rect4187"/>
  <path style="fill:url(#linearGradient4340);stroke-linecap:square;stroke-width:0.1" id="rect4204" d="M 5 12 L 5 17 L 10 17 L 10 12 L 5 12 z M 6 13 L 9 13 L 9 16 L 6 16 L 6 13 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
 </g>
		</svg>
	{/if}
