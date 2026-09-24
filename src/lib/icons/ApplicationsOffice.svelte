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
			<path fill="url(#a)" d="M7 3v16h12V7l-4-4z"/>
  <path fill="url(#b)" d="M3 3v16h12V7l-4-4z"/>
  <path fill="url(#c)" d="M6 9v7h4l2-2V9zm1 1h4v3H9v2H7z"/>
  <path fill="#313437" d="M10 3v5h9V7l-4-4h-1v3l-3-3z"/>
  <path fill="#000" d="M3 18h16v1H3z" opacity=".15"/>
  <defs>
    <linearGradient id="a" x1="-207.13" x2="-207.13" y1="19" y2="3" gradientUnits="userSpaceOnUse">
      <stop stop-color="#42A603"/>
      <stop offset="1" stop-color="#78DA06"/>
    </linearGradient>
    <linearGradient id="b" x1="-145.364" x2="-145.364" y1="19" y2="3" gradientUnits="userSpaceOnUse">
      <stop stop-color="#197CF1"/>
      <stop offset="1" stop-color="#21C9FB"/>
    </linearGradient>
    <linearGradient id="c" x1="-229.543" x2="-229.543" y1="16" y2="9" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9CF"/>
      <stop offset="1" stop-color="#F4FCFF"/>
    </linearGradient>
  </defs>
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
  <linearGradient id="linearGradient4298">
   <stop style="stop-color:#42a603" id="stop4300"/>
   <stop offset="1" style="stop-color:#78da06" id="stop4302"/>
  </linearGradient>
  <linearGradient id="linearGradient4290">
   <stop style="stop-color:#7cbaf8" id="stop4292"/>
   <stop offset="1" style="stop-color:#f4fcff" id="stop4294"/>
  </linearGradient>
  <linearGradient id="linearGradient4303">
   <stop style="stop-color:#197cf1" id="stop4305"/>
   <stop offset="1" style="stop-color:#21c9fb" id="stop4307"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4303" id="linearGradient4217" y1="543.79797" y2="503.798" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.70000012 0 0 0.70000031 114.57136 165.13922)"/>
  <linearGradient xlink:href="#linearGradient4298" id="linearGradient4304" y1="545.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4227" id="linearGradient4385" y1="524.79797" x1="401.57144" y2="531.79797" x2="408.57147" gradientUnits="userSpaceOnUse"/>
  <linearGradient xlink:href="#linearGradient4227" id="linearGradient4389" y1="524.79797" x1="401.57144" y2="531.79797" gradientUnits="userSpaceOnUse" x2="408.57147" gradientTransform="matrix(1 0 0 1 6 0)"/>
  <linearGradient xlink:href="#linearGradient4290" id="linearGradient4207" y1="537.79797" y2="525.79797" x2="0" gradientUnits="userSpaceOnUse"/>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <path style="fill:url(#linearGradient4304)" id="path4182" d="m 392.57143,517.798 0,28 21.99999,0 0,-21 -6.99999,-7 -15,0 z"/>
  <path style="fill:#313437;fill-rule:evenodd" id="path4184" d="m 414.57142,524.798 -6.99999,-7 0,7 z"/>
  <path style="fill:url(#linearGradient4217)" id="rect4144" d="m 386.57143,517.798 0,28 21.99999,0 0,-21 -6.99999,-7 -15,0 z"/>
  <path style="fill:#313437;fill-rule:evenodd" id="path4164" d="m 408.57142,524.798 -6.99999,-7 0,7 z"/>
  <path style="fill:url(#linearGradient4385);opacity:0.2;fill-rule:evenodd" id="path4306" d="m 401.57143,524.798 6.99999,7 0,-7 z"/>
  <path style="fill:url(#linearGradient4389);opacity:0.2;fill-rule:evenodd" id="path4387" d="m 407.57143,524.798 6.99999,7 0,-7 z"/>
  <path style="fill:url(#linearGradient4207)" id="rect4074" d="m 392.57143,525.798 0,1 0,11 1,0 5,0 4,-4 0,-8 -9,0 -1,0 z m 1,1 8,0 0,7 -3,0 0,3 -5,0 0,-10 z"/>
 </g>
		</svg>
	{/if}
