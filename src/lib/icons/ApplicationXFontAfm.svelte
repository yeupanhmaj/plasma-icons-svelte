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
			<path fill="#8c9eb1" d="m6.751 1048.94c-.979 0-1.646-.489-1.468-1.735.222-1.557 1.157-2.069 4.115-2.491.022 0 .934-.156.934-.156l-.378 2.758c-.801 1-2.246 1.623-3.203 1.623m3.047-.133l.044 1.29h1.268l1.157-8.341c.356-2.535-1.09-3.27-3.114-3.27-1.446 0-2.869.423-3.714.912l.245 1.379c.912-.445 2.157-.756 3.292-.756 1.401 0 1.913.689 1.735 2.024l-.2 1.268-1.045.133c-2.691.423-5.316.845-5.738 3.825-.311 2.135.956 3.092 2.647 3.092 1.068 0 2.38-.4 3.425-1.557" transform="translate(0-1036.36)"/>
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
 <metadata id="metadata3874"/>
 <g id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
  <g style="fill:#6c7a89" id="layer1-2" transform="matrix(1.3885788 0 0 1.3471415 325.89137 -861.62431)">
   <path id="path4124" d="m 6.7511089,1048.9387 c -0.978627,0 -1.6458726,-0.4892 -1.4679404,-1.7347 0.2224151,-1.557 1.156559,-2.0686 4.1146816,-2.4912 0.02224,0 0.9341429,-0.1556 0.9341429,-0.1556 l -0.3781054,2.758 c -0.8006948,1.0008 -2.2463933,1.6235 -3.2027787,1.6235 z m 3.0470879,-0.1333 0.044479,1.2899 1.2677672,0 1.156559,-8.3406 c 0.355865,-2.5355 -1.089835,-3.2695 -3.1138132,-3.2695 -1.4456985,0 -2.8691559,0.4226 -3.7143337,0.912 l 0.2446567,1.3789 c 0.9119024,-0.4448 2.1574275,-0.7561 3.2917451,-0.7561 1.4012161,0 1.9127701,0.6894 1.7348391,2.0239 l -0.200174,1.2678 -1.0453519,0.1334 c -2.6912238,0.4226 -5.3157233,0.8452 -5.7383122,3.8255 -0.3113813,2.1352 0.9563854,3.0916 2.6467411,3.0916 1.0675928,0 2.3798431,-0.4003 3.4251938,-1.5568 z"/>
  </g>
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
			<defs id="defs5455">
    <linearGradient xlink:href="#linearGradient4300" id="linearGradient4306-3" y1="3.1404107" y2="60.859589" x2="5.0169516" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.49999977,0,0,-0.48275841,384.57144,547.24623)" x1="4.6101718"/>
    <linearGradient xlink:href="#linearGradient4351" id="linearGradient4357-7" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.48275841,0,0,-0.48275841,385.26109,547.48761)"/>
    <linearGradient xlink:href="#linearGradient4410" id="linearGradient4427-3" y1="31" x1="54" y2="16.500048" x2="39.500008" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,-0.48275841,-0.48275841,0,419.53694,550.86696)"/>
    <linearGradient id="linearGradient4410">
      <stop style="stop-color:#383e51" id="stop4412"/>
      <stop offset="1" style="stop-color:#655c6f;stop-opacity:0" id="stop4414"/>
    </linearGradient>
    <linearGradient id="linearGradient4300">
      <stop style="stop-color:#bdc3c7" id="stop4302"/>
      <stop offset="1" style="stop-color:#dadfe1" id="stop4304"/>
    </linearGradient>
    <linearGradient id="linearGradient4351">
      <stop style="stop-color:#566472" id="stop4353"/>
      <stop offset="1" style="stop-color:#5e6b78" id="stop4355"/>
    </linearGradient>
  </defs>
  
  <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
    <path style="fill:url(#linearGradient4306-3);fill-opacity:1" id="rect3500-2" d="m 389.57144,545.79796 0,-27.99999 14.99999,0 7.00003,7 -3e-5,14.24137 0,6.75862 -7,0 z"/>
    <rect width="14.999983" x="389.57144" y="-518.79797" height="0.999973" style="fill:#ffffff;fill-opacity:0.41176471" id="rect4169-9" transform="scale(1,-1)"/>
    <rect width="21.999994" x="389.57144" y="-545.79797" height="1.00003" style="fill:#2e3132;fill-opacity:0.29411765" id="rect4236-1" transform="scale(1,-1)"/>
    <path style="fill:url(#linearGradient4357-7);fill-opacity:1.0;fill-rule:evenodd" id="path4314-2" d="m 411.57144,524.79797 -7.00001,-7 0,7 z"/>
    <path style="opacity:0.2;fill:url(#linearGradient4427-3);fill-rule:evenodd" id="path4320-7" d="m 411.5714,531.798 -6.99997,-7 7,0 z"/>
    <path id="path4124" style="font-style:italic;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:Oxygen;-inkscape-font-specification:'Oxygen Italic';letter-spacing:0px;word-spacing:0px;fill:#5e6b78;fill-opacity:1;stroke:none" d="m 398.77079,538.35976 c -1.01918,0 -1.71407,-0.49427 -1.52877,-1.75267 0.23163,-1.57312 1.20448,-2.09002 4.28517,-2.517 0.0232,0 0.97285,-0.15721 0.97285,-0.15721 l -0.39377,2.78657 c -0.83387,1.01116 -2.33947,1.64031 -3.33548,1.64031 z m 3.17334,-0.13468 0.0463,1.30326 1.32029,0 1.20448,-8.42698 c 0.37061,-2.56176 -1.13499,-3.30336 -3.24283,-3.30336 -1.5056,0 -2.98803,0.42698 -3.86823,0.92145 l 0.25479,1.39318 c 0.94969,-0.44941 2.24682,-0.76393 3.42814,-0.76393 1.45927,0 1.99202,0.69653 1.80672,2.04486 l -0.20847,1.28092 -1.08866,0.13479 c -2.80274,0.42697 -5.53598,0.85395 -5.97608,3.86511 -0.32428,2.15732 0.99601,3.12362 2.75641,3.12362 1.11183,0 2.47845,-0.40444 3.56711,-1.57292 z"/>
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
   <stop stop-color="#bdc3c7"/>
   <stop offset="1" stop-color="#dadfe1"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#566472"/>
   <stop offset="1" stop-color="#5e6b78"/>
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
 <path fill="#5e6b78" d="m29.694 41.36c-1.808 0-3.04-.906-2.712-3.214.411-2.884 2.136-3.832 7.601-4.615.04 0 1.725-.288 1.725-.288l-.699 5.109c-1.48 1.853-4.149 3.01-5.916 3.01m5.628-.248l.083 2.389h2.341l2.136-15.45c.658-4.697-2.01-6.06-5.751-6.06-2.671 0-5.3.783-6.86 1.689l.451 2.554c1.685-.823 3.986-1.401 6.079-1.401 2.589 0 3.533 1.278 3.205 3.749l-.37 2.349-1.931.247c-4.97.783-9.819 1.566-10.598 7.086-.576 3.955 1.767 5.727 4.889 5.727 1.973 0 4.396-.741 6.327-2.884"/>
		</svg>
	{/if}
