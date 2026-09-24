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
			<linearGradient id="a" gradientTransform="matrix(.64285701 0 0 .64285701 -246.5102 -330.87005)" gradientUnits="userSpaceOnUse" x2="0" y1="545.79797" y2="517.79797"><stop offset="0" stop-color="#18222a"/><stop offset="1" stop-color="#566069"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.6 0 0 .6 -229.34291 -308.07879)" gradientUnits="userSpaceOnUse" x2="0" y1="541.79797" y2="521.79797"><stop offset="0" stop-color="#2f3943"/><stop offset="1" stop-color="#4d5662"/></linearGradient><linearGradient id="c" gradientTransform="matrix(.58333336 0 0 .58333336 -222.66672 -299.2155)" gradientUnits="userSpaceOnUse" x2="0" y1="541.79797" y2="521.79797"><stop offset="0" stop-color="#2f3943"/><stop offset="1" stop-color="#808c9b"/></linearGradient><linearGradient id="d"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#21c9fb"/></linearGradient><linearGradient id="e" gradientTransform="matrix(1 0 0 .6000032 -389.57145 -307.68031)" gradientUnits="userSpaceOnUse" x2="0" xlink:href="#d" y1="522.79797" y2="527.79797"/><linearGradient id="f" gradientTransform="translate(-389.57139 -515.79793)" gradientUnits="userSpaceOnUse" x2="0" xlink:href="#d" y1="518.79797" y2="520.79797"/><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="7.785669" x2="14.857096" y1="9.071448" y2="16.142875"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><rect fill="url(#a)" height="17.999996" rx="8.999985" ry="8.999998" stroke-width=".642857" width="17.999969" x="2.000003" y="2.000004"/><rect fill="url(#c)" height="14" rx="6.999991" ry="7" stroke-width=".583333" width="13.999982" x="4" y="4"/><path d="m15.242188 6.7578125-8.4843755 8.4843755 4.7561875 4.757812h8.486v-8.484376z" fill="url(#g)" fill-rule="evenodd" opacity=".2" stroke-width=".642857"/><rect fill="url(#b)" height="12" rx="5.999991" ry="6" stroke-width=".6" width="11.999983" x="5" y="5"/><path d="m7.453125 3.9414062a1 1 0 0 0 -.8183594.4980469 1 1 0 0 0 .3652344 1.3671875 1 1 0 0 0 1.3652344-.3671875 1 1 0 0 0 -.3652344-1.3652343 1 1 0 0 0 -.546875-.1328126zm7 0a1 1 55.900705 0 0 -.818359.4980469 1 1 55.900705 0 0 .365234 1.3671875 1 1 55.900705 0 0 1.365234-.3671875 1 1 55.900705 0 0 -.365234-1.3652343 1 1 55.900705 0 0 -.546875-.1328126zm-9.5605469 2.5605469a1 1 75.127559 0 0 -.8183593.4980469 1 1 75.127559 0 0 .3652343 1.3652344 1 1 75.127559 0 0 1.3671875-.3652344 1 1 75.127559 0 0 -.3671875-1.3652344 1 1 75.127559 0 0 -.546875-.1328125zm12.1191409 0a1 1 0 0 0 -.81836.4980469 1 1 0 0 0 .367188 1.3652344 1 1 0 0 0 1.365234-.3652344 1 1 0 0 0 -.365234-1.3652344 1 1 0 0 0 -.548828-.1328125zm-13.058594 3.4999999a1 1 0 0 0 -.8183594.498047 1 1 0 0 0 .3652344 1.365234 1 1 0 0 0 1.3652344-.365234 1 1 0 0 0 -.3652344-1.365234 1 1 0 0 0 -.546875-.132813zm14 0a1 1 0 0 0 -.818359.498047 1 1 0 0 0 .365234 1.365234 1 1 0 0 0 1.365234-.365234 1 1 0 0 0 -.365234-1.365234 1 1 0 0 0 -.546875-.132813z" fill="#26333a"/><rect fill="url(#e)" height="3" rx="1" stroke-width=".774599" width="2" x="10" y="6"/><circle cx="11" cy="4" fill="url(#f)" r="1"/>
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
  <linearGradient id="linearGradient4211">
   <stop style="stop-color:#2f3943" id="stop4213"/>
   <stop offset="1" style="stop-color:#808c9b" id="stop4215"/>
  </linearGradient>
  <linearGradient id="linearGradient4199">
   <stop style="stop-color:#2f3943" id="stop4201"/>
   <stop offset="1" style="stop-color:#4d5662" id="stop4203"/>
  </linearGradient>
  <linearGradient id="linearGradient4191">
   <stop style="stop-color:#18222a" id="stop4193"/>
   <stop offset="1" style="stop-color:#566069" id="stop4195"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4191" id="linearGradient4197" y1="545.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient xlink:href="#linearGradient4199" id="linearGradient4205" y1="541.79797" y2="521.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient xlink:href="#linearGradient4211" id="linearGradient4209" y1="541.79797" y2="521.79797" gradientUnits="userSpaceOnUse" x2="0"/>
  <linearGradient id="linearGradient4303">
   <stop style="stop-color:#197cf1" id="stop4305"/>
   <stop offset="1" style="stop-color:#21c9fb" id="stop4307"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4303" id="linearGradient4318" y1="522.79797" y2="527.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient xlink:href="#linearGradient4303" id="linearGradient4328-8" y1="518.79797" y2="520.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 0 0.000047)"/>
  <linearGradient xlink:href="#linearGradient4227" id="linearGradient4532" y1="13" x1="11" y2="24" x2="22" gradientUnits="userSpaceOnUse"/>
  <linearGradient id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="27.999958" x="386.5715" y="517.79797" rx="13.999979" height="28" ry="14" style="fill:url(#linearGradient4197)" id="rect4160"/>
  <rect width="23.999968" x="388.5715" y="519.79797" rx="11.999984" height="24" ry="12" style="fill:url(#linearGradient4209)" id="rect4207"/>
  <path style="fill:url(#linearGradient4532);opacity:0.2;fill-rule:evenodd" id="path4521" d="M 22 8 L 8 22 L 16 30 C 23.755988 30 30 23.756 30 16 L 22 8 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <rect width="19.999971" x="390.5715" y="521.79797" rx="9.999986" ry="10" height="20" style="fill:url(#linearGradient4205)" id="rect4178"/>
  <rect width="2" x="399.57144" y="522.79773" rx="1" height="4.999974" style="fill:url(#linearGradient4318)" id="rect4217"/>
  <circle cx="400.57138" cy="519.79797" style="fill:url(#linearGradient4328-8)" id="path4320-3" r="1"/>
  <circle cx="531.79797" cy="-412.57138" style="fill:#26333a" r="1" id="circle4465" transform="matrix(0 1 -1 0 0 0)"/>
  <circle cx="531.79797" cy="-388.57138" style="fill:#26333a" id="circle4467" r="1" transform="matrix(0 1 -1 0 0 0)"/>
  <circle cx="660.83624" cy="-93.006" style="fill:#26333a" id="circle4473" r="1" transform="matrix(0.5 0.8660254 -0.8660254 0.5 0 0)"/>
  <circle cx="660.83624" cy="-69.006" style="fill:#26333a" r="1" id="circle4475" transform="matrix(0.5 0.8660254 -0.8660254 0.5 0 0)"/>
  <circle cx="612.80396" cy="248.26486" style="fill:#26333a" r="1" id="circle4477" transform="matrix(0.8660254 0.5 -0.5 0.8660254 0 0)"/>
  <circle cx="81.006" cy="648.83624" style="fill:#26333a" id="circle4481" r="1" transform="matrix(0.8660254 -0.5 0.5 0.8660254 0 0)"/>
  <circle cx="-260.26486" cy="600.80396" style="fill:#26333a" r="1" id="circle4485" transform="matrix(0.5 -0.8660254 0.8660254 0.5 0 0)"/>
  <circle cx="-260.26486" cy="624.80396" style="fill:#26333a" id="circle4487" r="1" transform="matrix(0.5 -0.8660254 0.8660254 0.5 0 0)"/>
 </g>
		</svg>
	{/if}
