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
			<linearGradient id="a"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="b"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientTransform="matrix(.41666692 0 0 .40833269 -159.23827 -203.25094)" gradientUnits="userSpaceOnUse" x2="0" xlink:href="#a" y1="543.79797" y2="502.65509"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="5.375003" x2="14.75002" xlink:href="#b" y1="7.000012" y2="16.375009"/><linearGradient id="e" gradientTransform="matrix(.27083358 0 0 .29490694 -96.15491 -146.23679)" gradientUnits="userSpaceOnUse" x2="0" xlink:href="#a" y1="543.79797" y2="502.65509"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="393.57144" x2="404.57144" xlink:href="#b" y1="522.79797" y2="533.79797"/><g transform="translate(-384.57143 -515.798)"><g transform="translate(384.57143 515.798)"><path d="m1.000006 2h19.999994v18h-19.999994z" fill="url(#c)" stroke-width=".633866"/><path d="m2 18 18-11 1 1v12h-17z" fill="url(#d)" fill-rule="evenodd" opacity=".2" stroke-width=".625"/><path d="m1 2h20.000002v3h-20.000002z" fill="#566069" stroke-width=".684653"/><path d="m1.000027 5h19.999973v1h-19.999973z" fill="#3daee9" stroke-width=".790569"/><path d="m2 7h18v10.999999h-18z" fill="#fff" stroke-width=".574456"/><rect fill="#eff0f1" height="1.5" rx=".75" stroke-width=".75" width="1.5" x="18.75" y="2.75"/></g><g transform="translate(381.57143 520.798)"><path d="m8 2h13v13h-13z" fill="url(#e)" stroke-width=".4343"/><path d="m9 13 11-6 1 1v7h-10z" fill="url(#d)" fill-rule="evenodd" opacity=".2" stroke-width=".625"/><path d="m8 2h13.000002v3h-13.000002z" fill="#566069" stroke-width=".551985"/><path d="m8 5h13v1h-13z" fill="#3daee9" stroke-width=".637378"/><path d="m9 7h11v6h-11z" fill="#fff" stroke-width=".331662"/></g><path d="m402.57143 522.798 3 3v10h-3z" fill="none"/><path d="m402.57143 522.798 2 2v9h-2z" fill="none"/><path d="m402.57143 522.798 3 3v10h-3z" fill="url(#f)" opacity=".2"/></g><path d="m10 13v4h1l2.5-2-2.5-2z" fill="#3daee9"/>
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
  <linearGradient xlink:href="#linearGradient4293" id="linearGradient4190" y1="526.79797" x1="393.57144" y2="540.79797" x2="407.57144" gradientUnits="userSpaceOnUse"/>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="32" x="384.57144" y="517.79797" rx="0" height="28" style="fill:url(#linearGradient4643-8)" id="rect4641-5"/>
  <path style="fill:url(#linearGradient4183);opacity:0.2;fill-rule:evenodd" id="path4167" d="m 385.57142,543.79803 30,-20 1.00001,1 -1e-5,20.99997 -29,3e-5 z"/>
  <rect width="32.00001" x="384.57141" y="517.79797" height="4" style="fill:#566069" id="rect4647-8"/>
  <rect width="31.999968" x="384.57141" y="521.79797" height="1" style="fill:#3daee9" id="rect4649-8"/>
  <rect width="30" x="385.57141" y="523.79797" height="20.00003" style="fill:#ffffff" id="rect4653-5"/>
  <path style="fill:url(#linearGradient4190);opacity:0.2;fill-rule:evenodd" id="path4182" d="m 393.57143,540.79797 14,-14 9.00003,9.00003 0,10 -17.00003,0 -1,0 z"/>
  <rect width="2" x="413.57141" y="518.79797" rx="1" height="2" style="fill:#eff0f1" id="rect4661-1"/>
  <rect width="14.00001" x="393.57144" y="526.79797" height="3.00003" style="fill:#566069;stroke-width:3.779527" id="rect4172"/>
  <rect width="13.999989" x="393.57144" y="529.79797" height="1" style="fill:#3daee9;stroke-width:3.779527" id="rect4174"/>
  <rect width="13.999989" x="393.57144" y="530.79797" height="9.999973" style="fill:#c6cdd1;stroke-width:3.779527" id="rect4176"/>
  <rect width="12" x="394.57144" y="531.79797" height="8" style="fill:#ffffff;stroke-width:3.779527" id="rect4178"/>
  <path style="fill:#3daee9;fill-rule:evenodd" id="path4180" d="m 399.57143,532.798 0,6 3,-3 z"/>
 </g>
		</svg>
	{/if}
