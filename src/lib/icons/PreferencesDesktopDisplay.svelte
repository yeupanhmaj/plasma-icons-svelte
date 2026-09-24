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
			<linearGradient id="a" gradientTransform="matrix(.62500129 0 0 .78947505 -241.2327 -408.36755)" gradientUnits="userSpaceOnUse" x2="0" y1="538.79797" y2="519.79797"><stop offset="0" stop-color="#2a2c2f"/><stop offset="1" stop-color="#424649"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.66666658 0 0 .50000001 -256.04766 -252.39899)" gradientUnits="userSpaceOnUse" x2="0" y1="542.79797" y2="538.79797"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="c" gradientTransform="matrix(.7500004 0 0 .73333446 -289.42847 -378.91925)" gradientUnits="userSpaceOnUse" x2="0" y1="535.79797" y2="520.79797"><stop offset="0" stop-color="#60a5e7" stop-opacity="0"/><stop offset="1" stop-color="#a6f3fb" stop-opacity=".257732"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="6.78569" x2="17.714262" y1="3.285716" y2="14.214288"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m.999997 2.000005h19.999996v15.000016h-19.999996z" fill="url(#a)" stroke-width=".638443"/><path d="m9.000006 16.99999h4v2h-4z" fill="url(#b)" stroke-width=".577351"/><path d="m7.000003 19.000013h8v1h-8z" fill="#99a1a7" stroke-width=".816499"/><path d="m1.9999982 13.999998 3.0000021 3.000002h16.0000007v-12.9999986l-1.000003-1.0000029z" fill="url(#d)" fill-rule="evenodd" opacity=".2" stroke-width=".642857"/><g stroke-width=".60553"><path d="m2.000008 2.999996h18v11h-18z" fill="#fff"/><path d="m2.000008 2.999996h18v11h-18z" fill="url(#c)"/></g>
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
  <linearGradient id="linearGradient4159">
   <stop style="stop-color:#2a2c2f" id="stop4161"/>
   <stop offset="1" style="stop-color:#424649" id="stop4163"/>
  </linearGradient>
  <linearGradient id="linearGradient4424">
   <stop style="stop-color:#60a5e7;stop-opacity:0" id="stop4426"/>
   <stop offset="1" style="stop-color:#a6f3fb;stop-opacity:0.257732" id="stop4428"/>
  </linearGradient>
  <linearGradient id="linearGradient4303">
   <stop style="stop-color:#c6cdd1" id="stop4305"/>
   <stop offset="1" style="stop-color:#e0e5e7" id="stop4307"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4159" id="linearGradient4338" y1="538.79797" y2="519.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1.2105271 -3.00004 -111.43158)"/>
  <linearGradient xlink:href="#linearGradient4303" id="linearGradient4346" y1="542.79797" y2="538.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -0.000073 2)"/>
  <linearGradient xlink:href="#linearGradient4424" id="linearGradient4358" y1="535.79797" y2="520.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.2500008 0 0 1.2000018 -100.14269 -106.16048)"/>
  <linearGradient xlink:href="#linearGradient4293" id="linearGradient4173" y1="519.79797" x1="393.57144" y2="536.79797" x2="410.57144" gradientUnits="userSpaceOnUse"/>
  <linearGradient id="linearGradient4293">
   <stop id="stop4295"/>
   <stop offset="1" style="stop-opacity:0" id="stop4297"/>
  </linearGradient>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="31.999928" x="384.57147" y="517.79797" height="23" style="fill:url(#linearGradient4338)" id="rect4319"/>
  <rect width="6" x="397.57144" y="540.79797" height="4" style="fill:url(#linearGradient4346)" id="rect4321"/>
  <rect width="12" x="394.57144" y="544.79797" height="1" style="fill:#99a1a7" id="rect4323"/>
  <path style="fill:url(#linearGradient4173);opacity:0.2;fill-rule:evenodd" id="path4165" d="m 385.57143,536.798 4,4 27,0 0,-21 -1,-1 z"/>
  <rect width="30" x="385.57144" y="518.79828" height="18" style="fill:#ffffff" id="rect4348"/>
  <rect width="30" x="385.57144" y="518.79828" height="18" style="fill:url(#linearGradient4358)" id="rect4350"/>
 </g>
		</svg>
	{/if}
