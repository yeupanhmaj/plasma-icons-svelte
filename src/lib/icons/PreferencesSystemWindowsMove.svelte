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
			<path style="fill:currentColor;fill-opacity:1;stroke:none"
     d="m2 2v12h12v-12h-12zm1 3h5 5v8h-5-5v-8zm5 8 1.5-1.5-0.5-0.5h-2l-0.5 0.5 1.5 1.5zm0-8-1.5 1.5 0.5 0.5h2l0.5-0.5-1.5-1.5zm-2.5 2.5-1.5 1.5 1.5 1.5 0.5-0.5v-2l-0.5-0.5zm5 0-0.5 0.5v2l0.5 0.5 1.5-1.5-1.5-1.5zm-2.5 0.5a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z"
     class="ColorScheme-Text"
     />
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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="6.375003" x2="15.75002" xlink:href="#c" y1="10.000012" y2="19.375009"/><linearGradient id="b" gradientTransform="matrix(.41666692 0 0 .40833269 -159.23827 -203.25094)" gradientUnits="userSpaceOnUse" x2="0" y1="543.79797" y2="502.65509"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="5.375003" x2="14.75002" y1="7.000012" y2="16.375009"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m1.000006 2h19.999994v18h-19.999994z" fill="url(#b)" stroke-width=".633866"/><path d="m2 18 18-11 1 1v12h-17z" fill="url(#c)" fill-rule="evenodd" opacity=".2" stroke-width=".625"/><path d="m1 2h20.000002v3h-20.000002z" fill="#566069" stroke-width=".684653"/><path d="m1.000027 5h19.999973v1h-19.999973z" fill="#3daee9" stroke-width=".790569"/><path d="m2 7h18v10.999999h-18z" fill="#fff" stroke-width=".574456"/><rect fill="#eff0f1" height="1.5" rx=".75" stroke-width=".75" width="1.5" x="18.75" y="2.75"/><path d="m11 7-1 3 1 1v1h-1l-1-1-3 1 6 6h8v-2z" fill="url(#a)" opacity=".2"/><path d="m11 7-1.5 2.5.5.5h2l.5-.5zm0 4c-.552285 0-1 .44772-1 1s.447715 1 1 1 1-.44772 1-1-.447715-1-1-1zm-2 0-.5-.5-2.5 1.5 2.5 1.5.5-.5zm4 0v2l.5.5 2.5-1.5-2.5-1.5zm-3 3-.5.5 1.5 2.5 1.5-2.5-.5-.5z" fill="#353b3e" stroke-width=".064286"/>
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
  <linearGradient id="linearGradient4227">
   <stop style="stop-color:#2e3436" id="stop4229"/>
   <stop offset="1" style="stop-color:#555753" id="stop4231"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4303-6" id="linearGradient4643-8" y1="543.79797" y2="502.65509" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(0.66666726 0 0 0.63518419 128.19014 198.51873)"/>
  <linearGradient id="linearGradient4303-6">
   <stop style="stop-color:#c6cdd1" id="stop4305-7"/>
   <stop offset="1" style="stop-color:#e0e5e7" id="stop4307-0"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4293" id="linearGradient4183" y1="525.79797" x1="391.57144" y2="540.79797" x2="406.57147" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -0.000007 0.000029)"/>
  <linearGradient id="linearGradient4293">
   <stop id="stop4295"/>
   <stop offset="1" style="stop-opacity:0" id="stop4297"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4293" id="linearGradient4226" y1="11" x1="9.00001" y2="25" x2="23.00001" gradientUnits="userSpaceOnUse"/>
  <linearGradient xlink:href="#linearGradient4227" id="linearGradient4224" y1="24.999973" y2="10.999974" x2="0" gradientUnits="userSpaceOnUse"/>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="32" x="384.57144" y="517.79797" rx="0" height="28" style="fill:url(#linearGradient4643-8)" id="rect4641-5"/>
  <path style="fill:url(#linearGradient4183);opacity:0.2;fill-rule:evenodd" id="path4167" d="m 385.57142,543.79803 30,-20 1.00001,1 -1e-5,20.99997 -29,3e-5 z"/>
  <rect width="32.00001" x="384.57141" y="517.79797" height="4" style="fill:#566069" id="rect4647-8"/>
  <rect width="31.999968" x="384.57141" y="521.79797" height="1" style="fill:#3daee9" id="rect4649-8"/>
  <rect width="30" x="385.57141" y="523.79797" height="20.00003" style="fill:#ffffff" id="rect4653-5"/>
  <rect width="2" x="413.57141" y="518.79797" rx="1" height="2" style="fill:#eff0f1" id="rect4661-1"/>
  <path style="fill:url(#linearGradient4226);opacity:0.2;fill-rule:evenodd" id="path4201" d="M 16 11 L 14 15 L 16.332031 17.332031 L 15 18 L 13 16 L 9 18 L 21 30 L 32 30 L 32 27 L 23 18 L 16 11 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <path style="fill:url(#linearGradient4224);stroke-width:0.1" id="path4196" d="M 16 11 L 14 15 L 18 15 L 16 11 z M 13 16 L 9 18 L 13 20 L 13 16 z M 19 16 L 19 20 L 23 18 L 19 16 z M 16 17 C 15.446 17 15 17.446 15 18 C 15 18.554 15.446 19 16 19 C 16.554 19 17 18.554 17 18 C 17 17.446 16.554 17 16 17 z M 14 21 L 16 25 L 18 21 L 14 21 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
 </g>
		</svg>
	{/if}
