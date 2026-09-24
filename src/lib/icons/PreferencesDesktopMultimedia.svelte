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
			<linearGradient id="a"><stop offset="0" stop-color="#2a2c2f"/><stop offset="1" stop-color="#424649"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="2" x2="2" xlink:href="#a" y1="18" y2="16"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="2" x2="2" y1="16" y2="7"><stop offset="0" stop-color="#21c9fb"/><stop offset="1" stop-color="#197cf1"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="8" x2="8" xlink:href="#a" y1="15" y2="8"/><linearGradient id="e" gradientTransform="matrix(.41666692 0 0 .40833269 -159.23827 -203.25094)" gradientUnits="userSpaceOnUse" x2="0" y1="543.79797" y2="502.65509"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="5.375003" x2="14.75002" y1="7.000012" y2="16.375009"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m1.000006 2h19.999994v18h-19.999994z" fill="url(#e)" stroke-width=".633866"/><path d="m2 18 18-11 1 1v11.500012l-17 .499988z" fill="url(#f)" fill-rule="evenodd" opacity=".2" stroke-width=".625"/><path d="m1 2h20.000002v3h-20.000002z" fill="#566069" stroke-width=".684653"/><path d="m1.000027 5h19.999973v1h-19.999973z" fill="#3daee9" stroke-width=".790569"/><path d="m2 7v9h18v-9z" fill="url(#c)"/><rect fill="#eff0f1" height="1.5" rx=".75" stroke-width=".75" width="1.5" x="18.75" y="2.75"/><path d="m2 16h18v2h-18z" fill="url(#b)" stroke-linejoin="round" stroke-width="2"/><rect fill="#3092df" height="1" ry=".5" stroke-linejoin="round" stroke-width="2" width="10" x="3" y="16.5"/><rect fill="#daebf9" height="1" rx=".5" stroke-width=".5" width="1" x="12" y="16.5"/><circle cx="11" cy="11.5" fill="#ebf9fe" opacity=".3" r="4" stroke-linejoin="round" stroke-width="2"/><circle cx="11" cy="11.5" fill="url(#d)" r="3" stroke-linejoin="round" stroke-width="1.85164"/><path d="m10 10v3h.5l2-1.41-2-1.59z" fill="#fff"/>
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
  <linearGradient inkscape:collect="always" id="linearGradient4159">
   <stop style="stop-color:#2a2c2f" id="stop4161"/>
   <stop offset="1" style="stop-color:#424649" id="stop4163"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4391">
   <stop stop-color="#21c9fb"/>
   <stop offset="1" stop-color="#197cf1"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4227" id="linearGradient4220" y1="524.79797" x1="393.57144" y2="538.79797" x2="407.57147" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -386.57142 -514.69802)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4293">
   <stop id="stop4295"/>
   <stop offset="1" style="stop-opacity:0" id="stop4297"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4303-6">
   <stop style="stop-color:#c6cdd1" id="stop4305-7"/>
   <stop offset="1" style="stop-color:#e0e5e7" id="stop4307-0"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4643-8" xlink:href="#linearGradient4303-6" y1="543.58923" y2="502.65616" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.66666726 0 0 0.63518419 128.19014 198.51873)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4183" xlink:href="#linearGradient4293" y1="525.79797" y2="540.79797" x1="391.57144" gradientUnits="userSpaceOnUse" x2="406.57147" gradientTransform="matrix(1 0 0 1 -0.000007 0.000029)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4159" id="linearGradient4270" y1="543.79797" y2="539.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4391" id="linearGradient4296" y1="543.79797" y2="523.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4159" id="linearGradient4235-5" y1="-533.79797" y2="-523.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -0.000021 -3.00006)"/>
 </defs>
 <metadata id="metadata5458"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="32" x="384.57144" y="517.79797" rx="0" height="28" style="fill:url(#linearGradient4643-8)" id="rect4641-5"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4183);opacity:0.2;fill-rule:evenodd" id="path4167" d="m 385.57142,543.79803 30,-20 1.00001,1 -1e-5,20.99997 -29,3e-5 z"/>
  <rect width="31.999939" x="384.57147" y="517.79797" height="4" style="fill:#566069" id="rect4647-8"/>
  <rect width="31.999968" x="384.57141" y="521.79797" height="1" style="fill:#3daee9" id="rect4649-8"/>
  <rect width="30" x="385.57141" y="523.79797" height="20.00003" style="fill:url(#linearGradient4296)" id="rect4653-5"/>
  <rect width="2" x="413.57141" y="518.79797" rx="1" height="2" style="fill:#eff0f1" id="rect4661-1"/>
  <rect width="12" x="394.57144" y="525.79797" rx="6" height="12" style="fill:#ebf9fe;opacity:0.3" id="rect4225-8"/>
  <path style="fill:url(#linearGradient4220);opacity:0.2;fill-rule:evenodd" id="path4212" d="M 19.494141 12.505859 L 12.449219 19.550781 L 20.900391 28 L 30 28 L 30 23.099609 L 19.494141 12.505859 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <rect width="10" x="395.57144" y="-536.79797" rx="5" height="10" style="fill:url(#linearGradient4235-5)" id="rect4227-8" transform="matrix(1 0 0 -1 0 0)"/>
  <path inkscape:connector-curvature="0" style="fill:#ffffff;fill-rule:evenodd" id="path4237-6" d="m 398.57141,528.79806 0,6 4.5,-3 z"/>
  <rect width="29.999981" x="385.57144" y="539.79797" height="3.999974" style="fill:url(#linearGradient4270)" id="rect4262"/>
  <rect width="15.999989" x="387.38394" y="540.79797" rx="1" height="2" style="fill:#3092df" id="rect4430-3"/>
  <rect width="2" x="401.38394" y="540.79797" rx="1" height="2" style="fill:#daebf9" id="rect4432-0"/>
 </g>
		</svg>
	{/if}
