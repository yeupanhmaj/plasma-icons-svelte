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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="7" x2="9" y1="16" y2="8"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#20bcfa"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="13.820312" x2="11" y1="14.820312" y2="12"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#20bcfa" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="7" x2="17" xlink:href="#e" y1="8" y2="18"/><linearGradient id="d" gradientTransform="matrix(.41666692 0 0 .40833269 -159.23827 -203.25094)" gradientUnits="userSpaceOnUse" x2="0" y1="543.79797" y2="502.65509"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="5.375003" x2="14.75002" y1="7.000012" y2="16.375009"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m1.000006 2h19.999994v18h-19.999994z" fill="url(#d)" stroke-width=".633866"/><path d="m2 18 18-11 1 1v12h-17z" fill="url(#e)" fill-rule="evenodd" opacity=".2" stroke-width=".625"/><path d="m1 2h20.000002v3h-20.000002z" fill="#566069" stroke-width=".684653"/><path d="m1.000027 5h19.999973v1h-19.999973z" fill="#3daee9" stroke-width=".790569"/><path d="m2 7h18v10.999999h-18z" fill="#fff" stroke-width=".574456"/><rect fill="#eff0f1" height="1.5" rx=".75" stroke-width=".75" width="1.5" x="18.75" y="2.75"/><path d="m10.714844 8.0097656a4 4 0 0 0 -2.542969 1.1621094 4 4 0 0 0 0 5.65625 4 4 0 0 0 .1152344.09961l3.0722656 3.072265h8.640625v-2.65625l-6.171875-6.171875a4 4 0 0 0 -3.113281-1.1621094z" fill="url(#c)" opacity=".2"/><g stroke-width="1.77778"><path d="m13.828125 9.171875-.707031.7070312c.542893.5428938.878906 1.2926668.878906 2.1210938 0 1.656854-1.343146 3-3 3-.795604-.00012-1.5585768-.316269-2.1210938-.878906l-.6992187.699218c.746828.751138 1.7610955 1.175388 2.8203125 1.179688 2.209139 0 4-1.790861 4-4 0-1.10457-.448017-2.1042674-1.171875-2.828125z" fill="url(#b)"/><path d="m11 8c-2.209139 0-4 1.790861-4 4s1.790861 4 4 4c1.059217-.0043 2.073484-.428551 2.820312-1.179688l-.699218-.699218c-.562517.562637-1.32549.878786-2.121094.878906-1.6568542 0-3-1.343146-3-3s1.3431458-3 3-3z" fill="url(#a)"/></g>
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
  <linearGradient inkscape:collect="always" id="linearGradient4254">
   <stop style="stop-color:#197cf1" id="stop4256"/>
   <stop offset="1" style="stop-color:#20bcfa" id="stop4258"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4293">
   <stop id="stop4295"/>
   <stop offset="1" style="stop-opacity:0" id="stop4297"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4303-6">
   <stop style="stop-color:#c6cdd1" id="stop4305-7"/>
   <stop offset="1" style="stop-color:#e0e5e7" id="stop4307-0"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4303-6" id="linearGradient4643-8" y1="543.58923" y2="502.65616" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(0.66666726 0 0 0.63518419 128.19014 198.51873)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4293" id="linearGradient4183" y1="525.79797" x1="391.57144" y2="540.79797" x2="406.57147" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -0.000007 0.000029)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4303-6" id="linearGradient4193" y1="25" y2="11" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 384.57143 515.798)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4143">
   <stop style="stop-color:#197cf1" id="stop4145"/>
   <stop offset="1" style="stop-color:#20bcfa;stop-opacity:0" id="stop4147"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4143" id="linearGradient4246" y1="23" x1="22" y2="18" gradientUnits="userSpaceOnUse" x2="16" gradientTransform="matrix(1 0 0 1 384.57143 515.798)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4254" id="linearGradient4252" y1="25" x1="11" y2="11" gradientUnits="userSpaceOnUse" x2="16"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4293" id="linearGradient4200" y1="10.999974" x1="9" y2="25" x2="23.00003" gradientUnits="userSpaceOnUse"/>
 </defs>
 <metadata id="metadata5458"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="32" x="384.57144" y="517.79797" rx="0" height="28" style="fill:url(#linearGradient4643-8)" id="rect4641-5"/>
  <rect width="31.999983" x="384.57144" y="544.73163" height="1" style="fill:#99a1a7" id="rect4645-7"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4183);opacity:0.2;fill-rule:evenodd" id="path4167" d="m 385.57142,543.79803 30,-20 1.00001,1 -1e-5,20.99997 -29,3e-5 z"/>
  <rect width="31.999939" x="384.57147" y="517.79797" height="4" style="fill:#566069" id="rect4647-8"/>
  <rect width="31.999968" x="384.57141" y="521.79797" height="1" style="fill:#3daee9" id="rect4649-8"/>
  <rect width="30" x="385.57141" y="523.79797" height="20.00003" style="fill:#ffffff" id="rect4653-5"/>
  <path style="fill:url(#linearGradient4200);opacity:0.2" id="rect4170" d="M 16 12 A 6 6 0 0 0 10 18 A 6 6 0 0 0 11.759766 22.240234 L 11.050781 22.949219 L 18.101562 30 L 32 30 L 32 24.101562 L 20.949219 13.050781 L 20.240234 13.759766 A 6 6 0 0 0 16 12 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <rect width="2" x="413.57141" y="518.79797" rx="1" height="2" style="fill:#eff0f1" id="rect4661-1"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4193)" id="path4182" d="m 400.57143,526.798 a 7,7 0 0 0 -7,7 7,7 0 0 0 7,7 7,7 0 0 0 7,-7 7,7 0 0 0 -7,-7 z m 0,1 a 6,6 0 0 1 6,6 6,6 0 0 1 -6,6 6,6 0 0 1 -6,-6 6,6 0 0 1 6,-6 z"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4246)" id="path4195" d="m 400.57143,526.798 a 7,7 0 0 0 -7,7 7,7 0 0 0 7,7 7,7 0 0 0 7,-7 7,7 0 0 0 -7,-7 z m 0,1 a 6,6 0 0 1 6,6 6,6 0 0 1 -6,6 6,6 0 0 1 -6,-6 6,6 0 0 1 6,-6 z"/>
  <path style="fill:url(#linearGradient4252)" id="path4250" d="M 16 11 A 7 7 0 0 0 9 18 A 7 7 0 0 0 16 25 A 7 7 0 0 0 20.947266 22.947266 L 20.240234 22.240234 A 6 6 0 0 1 16 24 A 6 6 0 0 1 10 18 A 6 6 0 0 1 16 12 L 16 11 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
 </g>
		</svg>
	{/if}
