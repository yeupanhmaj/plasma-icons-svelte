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
			<linearGradient id="a" gradientTransform="matrix(.64285673 0 0 .64285673 -246.51005 -330.8699)" gradientUnits="userSpaceOnUse" x2="0" y1="545.79797" y2="517.79797"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#20bcfa"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="19" y2="1"><stop offset="0" stop-color="#7cbaf8"/><stop offset="1" stop-color="#f4fcff"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="19.999999" x2="6.000001" y1="19" y2="5"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m9.0000003 14c-.84582.0015-1.598919.40191-1.880859 1h3.7656247c-.28242-.5991-1.0375157-.99973-1.8847657-1z" fill="#292c2f"/><rect fill="url(#a)" height="18.000008" rx="9" stroke-width=".642857" width="17.999994" x="2.000006" y="1.999992"/><path d="m9 7c-1.1046 0-2 .89543-2 2 0 .530433.2108375 1.038992.5859375 1.414062l1.5976563 1.591797-.1835938-.005859c-1.6568 0-3 1.11929-3 2.5.002.16816.0253594.33567.0683594.5l4.9960936 4.996094a9 9 0 0 0 8.626953-6.71875l-4.984375-4.9843752-1.414062 1.4140624 1.292969 1.2929688h-.757813l-3.414063-3.4140625z" fill="url(#c)" opacity=".2"/><path d="m9 7c-1.1045693 0-1.9999998.8954307-2 2 0 1.104569.8954305 2 2 2 1.10457 0 2-.895431 2-2 0-1.1045692-.89543-1.9999998-2-2zm0 1c.5522845.0000002.9999998.4477155 1 1 0 .552285-.4477154 1-1 1-.5522847 0-1-.447715-1-1 .0000002-.5522846.4477154-1 1-1zm5 0a1 1 0 0 0 -1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0 -1-1zm-1 3v4h2v-4zm-4 1c-1.65685 0-3 1.11929-3 2.5.002.16816.0253594.33567.0683594.5h5.8632816c.0429-.16433.065759-.33184.068359-.5 0-1.38071-1.34315-2.5-3-2.5zm0 1c.84725.00027 1.602346.4009 1.884766 1h-3.7656254c.28194-.59809 1.0350394-.99849 1.8808594-1z" fill="url(#b)"/>
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
  <linearGradient inkscape:collect="always" id="linearGradient4290">
   <stop style="stop-color:#7cbaf8" id="stop4292"/>
   <stop offset="1" style="stop-color:#f4fcff" id="stop4294"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4290" id="linearGradient4321" y1="23" y2="9" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" id="linearGradient4410">
   <stop style="stop-color:#383e51" id="stop4412"/>
   <stop offset="1" style="stop-color:#655c6f;stop-opacity:0" id="stop4414"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4410" id="linearGradient4490" y1="524.79797" x1="393.57144" y2="538.79797" x2="407.57144" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -384.57143 -515.798)"/>
 </defs>
 <metadata id="metadata5458"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="28.00001" x="386.57144" y="517.79797" rx="14.00001" height="28.00003" style="fill:url(#linearGradient4149)" id="rect4130"/>
  <path style="fill:url(#linearGradient4490);opacity:0.2;fill-rule:evenodd" id="path4415" d="M 16 9 C 16.217921 9 16.429167 9.022432 16.634766 9.0625 C 16.636066 9.0627294 16.637372 9.0622693 16.638672 9.0625 C 16.843748 9.100132 17.039764 9.160913 17.230469 9.2324219 L 17 9 L 16 9 z M 16 10 C 14.788113 10 13.783132 10.852874 13.550781 11.994141 C 13.517588 12.157179 13.5 12.326873 13.5 12.5 C 13.5 13.885014 14.614986 15 16 15 C 16.58713 15 17.119212 14.791446 17.544922 14.455078 L 16 16 L 14.886719 17.113281 C 14.567385 17.174585 14.254834 17.255063 13.955078 17.363281 C 13.955078 17.363281 13.953125 17.363281 13.953125 17.363281 C 13.731312 17.459031 13.506939 17.551671 13.287109 17.650391 C 13.218909 17.681021 13.15514 17.71795 13.087891 17.75 C 12.518795 18.065139 12.011948 18.473321 11.576172 18.949219 C 11.576172 18.949219 11.574219 18.951172 11.574219 18.951172 C 11.330823 19.217217 11.111021 19.505918 10.917969 19.8125 C 10.823989 19.961745 10.737081 20.115692 10.65625 20.273438 C 10.64645 20.292617 10.638526 20.312741 10.628906 20.332031 C 10.559456 20.471267 10.494234 20.612628 10.435547 20.757812 C 10.415007 20.809002 10.398066 20.862181 10.378906 20.914062 C 10.333286 21.036697 10.287676 21.158823 10.25 21.285156 C 10.23363 21.340436 10.221841 21.397179 10.207031 21.453125 C 10.172941 21.580916 10.138981 21.708762 10.113281 21.839844 C 10.109793 21.857783 10.108484 21.876428 10.105469 21.894531 L 9 23 L 16 30 L 30 30 L 30 20 L 29 21 L 20 12 L 19.267578 11.269531 C 19.339088 11.460236 19.399868 11.656252 19.4375 11.861328 C 19.437744 11.862528 19.437258 11.864034 19.4375 11.865234 C 19.47514 12.071631 19.5 12.282418 19.5 12.5 L 17.955078 14.044922 C 18.291446 13.619212 18.5 13.08713 18.5 12.5 C 18.5 11.114986 17.385014 10 16 10 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4321)" id="rect4168" d="m 16,9 c -1.939013,0 -3.5,1.560987 -3.5,3.5 0,1.939013 1.560987,3.5 3.5,3.5 1.939013,0 3.5,-1.560987 3.5,-3.5 C 19.5,10.560987 17.939013,9 16,9 Z m 0,7 c -3.87801,0 -7,3.12199 -7,7 l 1,0 9,0 0,-1 -8.910156,0 C 10.564039,19.15622 13.017526,17 16,17 c 1.146303,0 2.199057,0.339278 3.105469,0.894531 l 0.74414,-0.74414 C 18.746427,16.424444 17.424999,16 16,16 Z m 0,-6 c 1.385014,0 2.5,1.114986 2.5,2.5 0,1.385014 -1.114986,2.5 -2.5,2.5 -1.385014,0 -2.5,-1.114986 -2.5,-2.5 0,-1.385014 1.114986,-2.5 2.5,-2.5 z m 6,6 c -0.554,0 -1,0.446 -1,1 0,0.554 0.446,1 1,1 0.554,0 1,-0.446 1,-1 0,-0.554 -0.446,-1 -1,-1 z m -1,3 0,4 2,0 0,-4 z" transform="matrix(1 0 0 1 384.57143 515.798)"/>
 </g>
		</svg>
	{/if}
