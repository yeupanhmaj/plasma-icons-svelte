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
			<rect
     style="fill:none;fill-opacity:1;stroke:#209ae7;stroke-width:0.94488192;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
     y="2.4724407"
     x="2.472441"
     ry="0.63275403"
     rx="0.63275403"
     height="11.055118"
     width="11.055118" />
  <path
     style="display:inline;overflow:visible;visibility:visible;fill:#209ae7;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.30053622;marker:none;enable-background:accumulate"
     d="m 7.0999784,3.2097236 v 1.800007 h -0.956246 l 1.856242,2.100009 1.856243,-2.100009 h -0.956246 v -1.800007 z" />
  <path
     d="m 7.6718764,7.4097416 c -0.05187,0 -0.08437,0.08847 -0.08437,0.196875 v 0.68438 c -0.208817,0.04755 -0.405463,0.13271 -0.581249,0.243749 l -0.487497,-0.4875 c -0.07666,-0.07666 -0.1602,-0.111678 -0.196875,-0.07501 l -0.459373,0.459377 c -0.03668,0.03667 -0.0017,0.120227 0.075,0.196876 l 0.487498,0.487502 c -0.111038,0.175789 -0.196199,0.372439 -0.243748,0.581253 h -0.684372 c -0.108397,0 -0.196874,0.03252 -0.196874,0.08438 v 0.6562534 c 0,0.05187 0.08848,0.08438 0.196874,0.08438 h 0.684373 c 0.04755,0.208816 0.13271,0.405466 0.243748,0.581254 l -0.487498,0.487501 c -0.07664,0.07666 -0.111676,0.160201 -0.075,0.196876 l 0.459373,0.459378 c 0.03667,0.03668 0.120224,0.0017 0.196875,-0.075 l 0.487498,-0.487504 c 0.175785,0.111041 0.372433,0.196202 0.581248,0.243751 v 0.684378 c 0,0.108398 0.03252,0.196876 0.08438,0.196876 h 0.656247 c 0.05186,0 0.08438,-0.08847 0.08438,-0.196876 v -0.684378 c 0.208815,-0.04755 0.405464,-0.132711 0.581248,-0.243751 l 0.487498,0.487503 c 0.07665,0.07666 0.160199,0.111676 0.196874,0.075 L 10.137508,11.78789 c 0.03667,-0.03667 0.0017,-0.120226 -0.075,-0.196877 L 9.5749914,11.103511 c 0.111038,-0.175788 0.1962,-0.372438 0.243748,-0.581254 h 0.6843726 c 0.108397,0 0.196872,-0.03252 0.196872,-0.08438 V 9.7816236 c 0,-0.05186 -0.08847,-0.08438 -0.196872,-0.08438 H 9.8187374 c -0.04755,-0.208814 -0.132709,-0.405464 -0.243748,-0.581251 l 0.4874976,-0.487503 c 0.07665,-0.07666 0.111677,-0.160198 0.07501,-0.196876 L 9.6781254,7.9722366 c -0.03667,-0.03667 -0.120224,-0.0017 -0.196873,0.07501 l -0.487499,0.4875 c -0.175793,-0.111042 -0.372441,-0.196205 -0.581258,-0.243752 v -0.68438 c 0,-0.108399 -0.03252,-0.196875 -0.08438,-0.196875 z m 0.328124,1.865633 c 0.45858,0 0.834368,0.375792 0.834368,0.8343774 0,0.458588 -0.375789,0.834379 -0.834368,0.834379 -0.458583,0 -0.834373,-0.375791 -0.834373,-0.834379 0,-0.4585854 0.37579,-0.8343774 0.834373,-0.8343774 z"
     style="display:inline;overflow:visible;visibility:visible;fill:#209ae7;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.30053622;marker:none;enable-background:accumulate" />
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
			<g transform="matrix(1 0 0 1 0 -1030.3622)">
    <rect
       style="fill:none;fill-opacity:1;stroke:#209ae7;stroke-width:0.96385229;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       y="1033.8441"
       x="3.4819262"
       ry="0.86061341"
       rx="0.86061335"
       height="15.036148"
       width="15.036147" />
    <path
       style="display:inline;overflow:visible;visibility:visible;fill:#209ae7;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.40071636;marker:none;enable-background:accumulate"
       d="m 9.8043549,1034.9788 v 2.4 h -1.275008 l 2.4750151,2.8 2.475017,-2.8 h -1.275008 v -2.4 z" />
    <path
       d="m 10.566894,1040.5788 c -0.06916,0 -0.112495,0.118 -0.112495,0.2625 v 0.9126 c -0.278426,0.063 -0.540623,0.1769 -0.7750067,0.325 l -0.6500029,-0.65 c -0.1022144,-0.1023 -0.2136022,-0.149 -0.2625027,-0.1001 l -0.6125038,0.6125 c -0.048907,0.049 -0.00227,0.1603 0.1000011,0.2625 l 0.6500041,0.65 c -0.1480522,0.2344 -0.2616014,0.4966 -0.3250007,0.775 H 7.6668818 c -0.1445308,0 -0.2625014,0.043 -0.2625014,0.1125 v 0.875 c 0,0.069 0.1179746,0.1126 0.2625014,0.1126 h 0.9125069 c 0.063401,0.2784 0.1769486,0.5406 0.3250008,0.775 l -0.6500042,0.65 c -0.1021877,0.1022 -0.1489029,0.2136 -0.100001,0.2625 l 0.6125037,0.6125 c 0.048894,0.049 0.1603004,0 0.2625028,-0.1 l 0.6500041,-0.65 c 0.2343825,0.148 0.4965821,0.2616 0.7750051,0.325 v 0.9125 c 0,0.1445 0.04336,0.2625 0.112508,0.2625 h 0.875005 c 0.06915,0 0.112508,-0.118 0.112508,-0.2625 v -0.9125 c 0.278423,-0.063 0.540625,-0.177 0.775006,-0.325 l 0.650004,0.65 c 0.102201,0.1022 0.213601,0.1489 0.262501,0.1 l 0.612505,-0.6125 c 0.04889,-0.049 0.0023,-0.1603 -0.100001,-0.2625 l -0.650029,-0.65 c 0.148052,-0.2344 0.261603,-0.4966 0.325001,-0.775 h 0.912506 c 0.144531,0 0.262499,-0.043 0.262499,-0.1126 v -0.875 c 0,-0.069 -0.117961,-0.1125 -0.262499,-0.1125 h -0.912509 c -0.0634,-0.2784 -0.176947,-0.5406 -0.325001,-0.775 l 0.650004,-0.65 c 0.102201,-0.1022 0.148904,-0.2136 0.100015,-0.2625 l -0.612503,-0.6125 c -0.04889,-0.049 -0.1603,0 -0.2625,0.1001 l -0.650005,0.65 c -0.234393,-0.1481 -0.496594,-0.2617 -0.775019,-0.3251 v -0.9125 c 0,-0.1445 -0.04336,-0.2625 -0.112508,-0.2625 z m 0.437503,2.4876 c 0.611446,0 1.112502,0.501 1.112502,1.1125 0,0.6114 -0.501057,1.1125 -1.112502,1.1125 -0.611451,0 -1.1125092,-0.5011 -1.1125092,-1.1125 0,-0.6115 0.5010582,-1.1125 1.1125092,-1.1125 z"
       style="display:inline;overflow:visible;visibility:visible;fill:#209ae7;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.40071636;marker:none;enable-background:accumulate" />
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
    <linearGradient id="a" y1="392.36" y2="365.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(309.57 152.44)">
    <stop stop-color="#ffffff" stop-opacity="0"/>
    <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
    </linearGradient>
    <linearGradient id="b" y1="17" y2="24" x1="47" x2="54" gradientUnits="userSpaceOnUse" gradientTransform="translate(357.57 507.8)">
    <stop stop-color="#060606"/>
    <stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
  </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#209ae7" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".2" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <g opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
  <use fill="url(#a)" xlink:href="#c"/>
 </g>
  <rect
     style="fill:none;fill-opacity:.75;stroke:#ffffff;stroke-width:0.94488192;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.75"
     y="11.472442"
     x="10.472441"
     ry="0.63275403"
     rx="0.63275403"
     height="11.055118"
     width="11.055118" />
  <path
     style="display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:.75;fill-rule:nonzero;stroke:none;stroke-width:0.30053622;marker:none;enable-background:accumulate"
     d="m 15.099979,12.209727 v 1.800007 h -0.956246 l 1.856242,2.100009 1.856243,-2.100009 h -0.956246 v -1.800007 z" />
  <path
     d="m 15.671877,16.409745 c -0.05187,0 -0.08437,0.08847 -0.08437,0.196875 V 17.291 c -0.208817,0.04755 -0.405463,0.13271 -0.581249,0.243749 l -0.487497,-0.4875 c -0.07666,-0.07666 -0.1602,-0.111678 -0.196875,-0.07501 l -0.459373,0.459377 c -0.03668,0.03667 -0.0017,0.120227 0.075,0.196876 l 0.487498,0.487502 c -0.111038,0.175789 -0.196199,0.372439 -0.243748,0.581253 h -0.684372 c -0.108397,0 -0.196874,0.03252 -0.196874,0.08438 v 0.656253 c 0,0.05187 0.08848,0.08438 0.196874,0.08438 h 0.684373 c 0.04755,0.208816 0.13271,0.405466 0.243748,0.581254 l -0.487498,0.487501 c -0.07664,0.07666 -0.111676,0.160201 -0.075,0.196876 l 0.459373,0.459378 c 0.03667,0.03668 0.120224,0.0017 0.196875,-0.075 l 0.487498,-0.487504 c 0.175785,0.111041 0.372433,0.196202 0.581248,0.243751 v 0.684378 c 0,0.108398 0.03252,0.196876 0.08438,0.196876 h 0.656247 c 0.05186,0 0.08438,-0.08847 0.08438,-0.196876 v -0.684378 c 0.208815,-0.04755 0.405464,-0.132711 0.581248,-0.243751 l 0.487498,0.487503 c 0.07665,0.07666 0.160199,0.111676 0.196874,0.075 l 0.459374,-0.459375 c 0.03667,-0.03667 0.0017,-0.120226 -0.075,-0.196877 l -0.487517,-0.487502 c 0.111038,-0.175788 0.1962,-0.372438 0.243748,-0.581254 h 0.684373 c 0.108397,0 0.196872,-0.03252 0.196872,-0.08438 v -0.656253 c 0,-0.05186 -0.08847,-0.08438 -0.196872,-0.08438 h -0.684375 c -0.04755,-0.208814 -0.132709,-0.405464 -0.243748,-0.581251 l 0.487498,-0.487503 c 0.07665,-0.07666 0.111677,-0.160198 0.07501,-0.196876 L 17.678126,16.97224 c -0.03667,-0.03667 -0.120224,-0.0017 -0.196873,0.07501 l -0.487499,0.4875 c -0.175793,-0.111042 -0.372441,-0.196205 -0.581258,-0.243752 v -0.68438 c 0,-0.108399 -0.03252,-0.196875 -0.08438,-0.196875 z m 0.328124,1.865633 c 0.45858,0 0.834368,0.375792 0.834368,0.834377 0,0.458588 -0.375789,0.834379 -0.834368,0.834379 -0.458583,0 -0.834373,-0.375791 -0.834373,-0.834379 0,-0.458585 0.37579,-0.834377 0.834373,-0.834377 z"
     style="display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:.75;fill-rule:nonzero;stroke:none;stroke-width:0.30053622;marker:none;enable-background:accumulate" />
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
    <linearGradient
       id="a"
       y1="17"
       y2="31"
       x1="40"
       x2="54"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(238 78.36)">
      <stop
         stop-color="#060606"
         id="stop2" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop4" />
    </linearGradient>
    <linearGradient
       id="b"
       y1="392.36"
       y2="336.36"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(190-254)">
      <stop
         stop-color="#ffffff"
         stop-opacity="0"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#ffffff"
         stop-opacity=".2"
         id="stop9" />
    </linearGradient>
    <path
       id="c"
       d="m248 139.36v-58h30l14 14v44h-14z" />
  </defs>
  <g
     transform="translate(-238-78.36)">
    <use
       fill="#209ae7"
       xlink:href="#c" />
    <g
       color-rendering="auto"
       color-interpolation-filters="linearRGB"
       shape-rendering="auto"
       image-rendering="auto"
       text-rendering="auto"
       color-interpolation="sRGB"
       color="#000000"
       transform="scale(1-1)">
      <rect
         opacity=".5"
         x="248"
         y="-82.36"
         width="30"
         fill="#ffffff"
         height="1" />
      <rect
         opacity=".25"
         x="248"
         y="-139.36"
         width="44"
         height="1" />
    </g>
    <g
       fill-rule="evenodd">
      <path
         opacity=".5"
         fill="#ffffff"
         d="m292 95.36l-14-14v14z" />
      <path
         opacity=".2"
         fill="url(#a)"
         d="m278 95.36l14 14v-14z" />
    </g>
    <use
       fill="url(#b)"
       xlink:href="#c" />
  </g>
  <g
     transform="matrix(1.8333382,0,0,1.8333306,2.6666187,3.6667279)">
    <rect
       width="11.69995"
       height="11.700049"
       rx="0.66966182"
       ry="0.66966754"
       x="10.15"
       y="10.14995"
       style="fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:0.29999995;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.75" />
    <path
       d="m 15.099978,11.209723 v 1.800007 h -0.956246 l 1.856242,2.100009 1.856243,-2.100009 h -0.956246 v -1.800007 z"
       style="display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:.75;fill-rule:nonzero;stroke:none;stroke-width:0.30053622;marker:none;enable-background:accumulate" />
    <path
       style="display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:.75;fill-rule:nonzero;stroke:none;stroke-width:0.30053622;marker:none;enable-background:accumulate"
       d="m 15.671876,15.409741 c -0.05187,0 -0.08437,0.08847 -0.08437,0.196875 v 0.68438 c -0.208817,0.04755 -0.405463,0.13271 -0.581249,0.243749 l -0.487497,-0.4875 c -0.07666,-0.07666 -0.1602,-0.111678 -0.196875,-0.07501 l -0.459373,0.459377 c -0.03668,0.03667 -0.0017,0.120227 0.075,0.196876 l 0.487498,0.487502 c -0.111038,0.175789 -0.196199,0.372439 -0.243748,0.581253 H 13.49689 c -0.108397,0 -0.196874,0.03252 -0.196874,0.08438 v 0.656253 c 0,0.05187 0.08848,0.08438 0.196874,0.08438 h 0.684373 c 0.04755,0.208816 0.13271,0.405466 0.243748,0.581254 l -0.487498,0.487501 c -0.07664,0.07666 -0.111676,0.160201 -0.075,0.196876 l 0.459373,0.459378 c 0.03667,0.03668 0.120224,0.0017 0.196875,-0.075 l 0.487498,-0.487504 c 0.175785,0.111041 0.372433,0.196202 0.581248,0.243751 v 0.684378 c 0,0.108398 0.03252,0.196876 0.08438,0.196876 h 0.656247 c 0.05186,0 0.08438,-0.08847 0.08438,-0.196876 v -0.684378 c 0.208815,-0.04755 0.405464,-0.132711 0.581248,-0.243751 l 0.487498,0.487503 c 0.07665,0.07666 0.160199,0.111676 0.196874,0.075 l 0.459374,-0.459375 c 0.03667,-0.03667 0.0017,-0.120226 -0.075,-0.196877 L 17.574991,19.10351 c 0.111038,-0.175788 0.1962,-0.372438 0.243748,-0.581254 h 0.684373 c 0.108397,0 0.196872,-0.03252 0.196872,-0.08438 v -0.656253 c 0,-0.05186 -0.08847,-0.08438 -0.196872,-0.08438 h -0.684375 c -0.04755,-0.208814 -0.132709,-0.405464 -0.243748,-0.581251 l 0.487498,-0.487503 c 0.07665,-0.07666 0.111677,-0.160198 0.07501,-0.196876 l -0.459372,-0.459377 c -0.03667,-0.03667 -0.120224,-0.0017 -0.196873,0.07501 l -0.487499,0.4875 C 16.81796,16.423704 16.621312,16.338541 16.412495,16.290994 v -0.68438 c 0,-0.108399 -0.03252,-0.196875 -0.08438,-0.196875 z M 16,17.275374 c 0.45858,0 0.834368,0.375792 0.834368,0.834377 0,0.458588 -0.375789,0.834379 -0.834368,0.834379 -0.458583,0 -0.834373,-0.375791 -0.834373,-0.834379 0,-0.458585 0.37579,-0.834377 0.834373,-0.834377 z" />
  </g>
		</svg>
	{/if}
