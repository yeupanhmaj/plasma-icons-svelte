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
			<linearGradient id="a" gradientTransform="matrix(.44545485 0 0 .4500002 -171.09104 -224.70921)" gradientUnits="userSpaceOnUse" x2="0" y1="543.79797" y2="503.798"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#21c9fb"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.64285714 0 0 .64285714 -246.51021 -330.87014)" gradientUnits="userSpaceOnUse" x2="0" y1="545.79797" y2="517.79797"><stop offset="0" stop-color="#42a603"/><stop offset="1" stop-color="#78da06"/></linearGradient><linearGradient id="c"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="d" xlink:href="#c"/><linearGradient id="e" gradientTransform="matrix(.71428731 0 0 .68486008 -275.83739 -352.4132)" gradientUnits="userSpaceOnUse" x1="401.57144" x2="408.57147" xlink:href="#d" y1="524.79797" y2="531.79797"/><linearGradient id="f" gradientTransform="matrix(.71428731 0 0 .68486008 -271.83739 -352.4132)" gradientUnits="userSpaceOnUse" x1="401.57144" x2="408.57147" xlink:href="#d" y1="524.79797" y2="531.79797"/><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="6" x2="16" xlink:href="#c" y1="8.998047" y2="19"/><linearGradient id="h" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="22.001953" y2="11"><stop offset="0" stop-color="#7cbaf8"/><stop offset="1" stop-color="#f4fcff"/></linearGradient><path d="m6 2v18h13.99999l.00001-13-5-5z" fill="url(#b)" stroke-width=".642857"/><path d="m15 7 5 4.794021v-4.794021z" fill="url(#f)" fill-rule="evenodd" opacity=".2" stroke-width=".699419"/><path d="m2 2v18h14v-13l-5-5z" fill="url(#a)" stroke-width=".639602"/><path d="m11 7 5 4.794021v-4.794021z" fill="url(#e)" fill-rule="evenodd" opacity=".2" stroke-width=".699419"/><path d="m11 2v5h4 1 4l-5-5v4z" fill="#313437" fill-rule="evenodd" stroke-width=".642857"/><g stroke-width=".5" transform="translate(-2 -2.001953)"><path d="m7.8535156 9.1445312-.7070312.7070313 2.8535156 2.8535155v.292969l6 6.001953v-4l-4-4.001953-1.292969 1zm-.7871094 2.2871098-.8828124.882812 1.4765624 1.476563c-.1011011.130673-.1601562.290046-.1601562.457031 0 .1989.0781.3906.21875.53125l5.21875 5.21875h2.697266z" fill="url(#g)" opacity=".2" transform="translate(2 2.001953)"/><path d="m9.5 11.001953a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm2.5 0-.75.75 1.25 1.25-1.25 1.25.75.75 2-2zm-3.375 2.25a.625.625 0 0 0 -.625.625.625.625 0 0 0 .625.625.625.625 0 0 0 .625-.625.625.625 0 0 0 -.625-.625zm1.625 2.25a.75.75 0 0 0 -.75.75.75.75 0 0 0 .75.75.75.75 0 0 0 .75-.75.75.75 0 0 0 -.75-.75z" fill="url(#h)"/></g>
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
  <linearGradient inkscape:collect="always" id="linearGradient4298">
   <stop style="stop-color:#42a603" id="stop4300"/>
   <stop offset="1" style="stop-color:#78da06" id="stop4302"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4290">
   <stop style="stop-color:#7cbaf8" id="stop4292"/>
   <stop offset="1" style="stop-color:#f4fcff" id="stop4294"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4303">
   <stop style="stop-color:#197cf1" id="stop4305"/>
   <stop offset="1" style="stop-color:#21c9fb" id="stop4307"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4303" id="linearGradient4217" y1="543.79797" y2="503.798" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.70000012 0 0 0.70000031 114.57136 165.13922)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4290" id="linearGradient4296" y1="22" y2="10.00004" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4298" id="linearGradient4304" y1="545.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4227" id="linearGradient4385" y1="524.79797" x1="401.57144" y2="531.79797" x2="408.57147" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4227" id="linearGradient4389" y1="524.79797" x1="401.57144" y2="531.79797" gradientUnits="userSpaceOnUse" x2="408.57147" gradientTransform="matrix(1 0 0 1 6 0)"/>
 </defs>
 <metadata id="metadata5458"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4304)" id="path4182" d="m 392.57143,517.798 0,28 21.99999,0 0,-21 -6.99999,-7 -15,0 z"/>
  <path inkscape:connector-curvature="0" style="fill:#313437;fill-rule:evenodd" id="path4184" d="m 414.57142,524.798 -6.99999,-7 0,7 z"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4217)" id="rect4144" d="m 386.57143,517.798 0,28 21.99999,0 0,-21 -6.99999,-7 -15,0 z"/>
  <path inkscape:connector-curvature="0" style="fill:#313437;fill-rule:evenodd" id="path4164" d="m 408.57142,524.798 -6.99999,-7 0,7 z"/>
  <path style="fill:url(#linearGradient4296)" id="rect4211" d="M 10 10 C 9.446 10 9 10.446 9 11 C 9 11.554 9.446 12 10 12 C 10.554 12 11 11.554 11 11 C 11 10.446 10.554 10 10 10 z M 15 10 L 13 12 L 15 14 L 13 16 L 15 18 L 17 16 L 19 14 L 17 12 L 15 10 z M 8 16 C 7.446 16 7 16.446 7 17 C 7 17.554 7.446 18 8 18 C 8.554 18 9 17.554 9 17 C 9 16.446 8.554 16 8 16 z M 12 20 C 11.446 20 11 20.446 11 21 C 11 21.554 11.446 22 12 22 C 12.554 22 13 21.554 13 21 C 13 20.446 12.554 20 12 20 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4385);opacity:0.2;fill-rule:evenodd" id="path4306" d="m 401.57143,524.798 6.99999,7 0,-7 z"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4389);opacity:0.2;fill-rule:evenodd" id="path4387" d="m 407.57143,524.798 6.99999,7 0,-7 z"/>
 </g>
		</svg>
	{/if}
