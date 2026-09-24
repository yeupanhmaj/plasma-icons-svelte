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
			<linearGradient id="a" gradientTransform="matrix(.64285673 0 0 .64285673 -246.51005 -330.8699)" gradientUnits="userSpaceOnUse" x2="0" y1="545.79797" y2="517.79797"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#20bcfa"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="16" y2="6"><stop offset="0" stop-color="#7cbaf8"/><stop offset="1" stop-color="#f4fcff"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="6" x2="20" y1="6" y2="20"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m9.0000003 14c-.84582.0015-1.598919.40191-1.880859 1h3.7656247c-.28242-.5991-1.0375157-.99973-1.8847657-1z" fill="#292c2f"/><rect fill="url(#a)" height="18.000008" rx="9" stroke-width=".642857" width="17.999994" x="2.000006" y="1.999992"/><path d="m10 6v6.380859l-2 1.998047 5.621094 5.621094h6.378906v-5.740234l-8.259766-8.259766z" fill="url(#c)" opacity=".2"/><path d="m10 6v3.6191406l-2-1.9980468v1.7597656l1.6191406 1.6191406-1.6191406 1.621094v1.757812l.4394531-.439453 1.5605469-1.558594v3.619141h1.740234l2.140625-2.75-1.75-2.25 1.75-2.25-2.140625-2.75zm1 1h.259766l1.359375 1.75-1.359375 1.75h-.259766zm0 4.5h.259766l1.359375 1.75-1.359375 1.75h-.259766z" fill="url(#b)"/>
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
   <stop style="stop-color:#197cf1" id="stop4145"/>
   <stop offset="1" style="stop-color:#20bcfa" id="stop4147"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4143" id="linearGradient4149" y1="545.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" id="linearGradient4410">
   <stop style="stop-color:#383e51" id="stop4412"/>
   <stop offset="1" style="stop-color:#655c6f;stop-opacity:0" id="stop4414"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4410" id="linearGradient4332" y1="524.79797" x1="393.57144" y2="538.79816" x2="407.57147" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -384.57143 -515.798)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4290">
   <stop style="stop-color:#7cbaf8" id="stop4292"/>
   <stop offset="1" style="stop-color:#f4fcff" id="stop4294"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4290" id="linearGradient4397" y1="538.79816" y2="524.79797" x2="0" gradientUnits="userSpaceOnUse"/>
 </defs>
 <metadata id="metadata5458"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="28.00001" x="386.57144" y="517.79797" rx="14.00001" height="28.00003" style="fill:url(#linearGradient4149)" id="rect4130"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4397)" id="rect4191" d="m 404.57146,528.79591 -3.99805,-3.99805 -0.002,0 -1,0 0,0.41211 0,4.58203 -3.29298,-3.29492 -0.70702,0.70703 4,4 0,0.006 0,1.17578 0,0.006 -4,4 0.70702,0.70703 3.29298,-3.29492 0,4.58203 0,0.41211 1,0 0.002,0 3.99805,-3.99805 0,-0.002 0,-0.002 -2.99805,-2.99805 2.99805,-2.99805 0,-0.002 0,-0.002 z m -1.41211,0.002 -2.29101,2.29102 -0.29688,-0.29688 0,-4.58203 2.58789,2.58789 z m 0,6 -2.58789,2.58789 0,-4.58203 0.29687,-0.29688 2.29101,2.29102 z"/>
  <path style="fill:url(#linearGradient4332);opacity:0.2;fill-rule:evenodd" id="path4324" d="M 20 12.998047 L 17.003906 15.998047 L 20.001953 19 L 16 23 L 15 23 L 15 18.005859 L 11.707031 21.300781 L 19.859375 29.453125 C 23.843341 28.319179 27.08596 25.477533 28.759766 21.757812 L 20 12.998047 z M 16.296875 16.708984 L 16 17.005859 L 16 21.587891 L 18.587891 19 L 16.296875 16.708984 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
 </g>
		</svg>
	{/if}
