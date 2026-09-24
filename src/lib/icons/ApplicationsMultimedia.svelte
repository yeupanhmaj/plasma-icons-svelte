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
			<path fill="url(#a)" d="M2 15V3h18v12z"/>
  <path fill="url(#b)" fill-rule="evenodd" d="M3 4h16v10H3zm8 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8" clip-rule="evenodd"/>
  <path fill="#fff" d="M9.5 11.34V6.66l4 2.34z"/>
  <path fill="url(#c)" d="M9 15h4v3H9z"/>
  <path fill="#778485" d="M15 18H7v1h8z"/>
  <defs>
    <linearGradient id="a" x1="-216.009" x2="-216.009" y1="15" y2="3" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2A2C2F"/>
      <stop offset="1" stop-color="#424649"/>
    </linearGradient>
    <linearGradient id="b" x1="-189.286" x2="-189.286" y1="14.909" y2="4" gradientUnits="userSpaceOnUse">
      <stop stop-color="#21C9FB"/>
      <stop offset="1" stop-color="#197CF1"/>
    </linearGradient>
    <linearGradient id="c" x1="11" x2="11" y1="15" y2="18" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C6CDD1"/>
      <stop offset="1" stop-color="#979C9F"/>
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
			<defs
     id="defs5455">
    <linearGradient
       id="linearGradient4159">
      <stop
         style="stop-color:#2a2c2f"
         id="stop4161" />
      <stop
         offset="1"
         style="stop-color:#424649"
         id="stop4163" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4159"
       id="linearGradient4223"
       y1="545.79797"
       y2="539.79797"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(0,-8)" />
    <linearGradient
       xlink:href="#linearGradient4159"
       id="linearGradient4235"
       y1="-533.79797"
       y2="-523.79797"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(0,2)" />
    <linearGradient
       id="linearGradient4391">
      <stop
         stop-color="#21c9fb" />
      <stop
         offset="1" stop-color="#197cf1" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4391"
       id="linearGradient4343"
       y1="541.79797"
       y2="517.79797"
       x2="0"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       xlink:href="#linearGradient4227"
       id="linearGradient4220"
       y1="524.79797"
       x1="393.57144"
       y2="538.79797"
       x2="407.57147"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(0,-2)" />
    <linearGradient
       id="linearGradient4227">
      <stop
         style="stop-color:#292c2f"
         id="stop4229" />
      <stop
         offset="1"
         style="stop-opacity:0"
         id="stop4231" />
    </linearGradient>
    <linearGradient
       id="linearGradient4346"
       xlink:href="#linearGradient4303"
       y1="542.79797"
       y2="538.79797"
       gradientUnits="userSpaceOnUse"
       x2="0"
       gradientTransform="translate(-7e-5,2.00001)" />
    <linearGradient
       id="linearGradient4303">
      <stop
         style="stop-color:#c6cdd1"
         id="stop4305" />
      <stop
         offset="1"
         style="stop-color:#e0e5e7"
         id="stop4307" />
    </linearGradient>
    <linearGradient
       id="linearGradient4338"
       xlink:href="#linearGradient4159"
       y1="538.79797"
       y2="519.79797"
       gradientUnits="userSpaceOnUse"
       x2="0"
       gradientTransform="matrix(1,0,0,1.2105271,-3.00004,-111.43157)" />
  </defs>
  
  <g
     id="layer1"
     transform="matrix(1 0 0 1 -384.57143 -515.798)">
    <flowRoot
       line-height="125%"
       style="font-size:10;font-family:sans-serif"
       id="flowRoot4170"
       transform="matrix(1 0 0 1 357.57142 520.79807)">
      <flowRegion
         id="flowRegion4172">
        <rect
           width="27"
           x="22"
           y="3"
           height="15"
           id="rect4174" />
      </flowRegion>
      <flowPara
         id="flowPara4176">Plasm</flowPara>
    </flowRoot>
    <rect
       width="32"
       x="384.57144"
       y="517.79797"
       height="22.000031"
       style="fill:url(#linearGradient4343)"
       id="rect4154" />
    <rect
       width="31.999989"
       x="384.57144"
       y="534.79773"
       height="3.00003"
       style="fill:url(#linearGradient4223)"
       id="rect4156" />
    <rect
       width="12"
       x="394.57144"
       y="520.79797"
       rx="6"
       height="12"
       style="opacity:0.3;fill:#ebf9fe"
       id="rect4225" />
    <path
       style="opacity:0.2;fill:url(#linearGradient4220);fill-rule:evenodd"
       id="path4212"
       d="m 404.57143,523.69839 -7,7.09961 10,10 9,0 0,-5 -12,-12.09961 z" />
    <rect
       width="10"
       x="395.57144"
       y="-531.79797"
       rx="5"
       height="10"
       style="fill:url(#linearGradient4235)"
       id="rect4227"
       transform="scale(1,-1)" />
    <path
       style="fill:#ffffff;fill-rule:evenodd"
       id="path4237"
       d="m 398.57143,523.798 0,6 4.5,-3 z" />
    <path
       style="fill:url(#linearGradient4338)"
       id="rect4319"
       d="m 384.57143,517.79802 0,23 32,0 0,-23 -32,0 z m 1,1 30,0 0,18 -30,0 0,-18 z" />
    <rect
       width="6"
       x="397.57144"
       y="540.79797"
       height="4"
       style="fill:url(#linearGradient4346)"
       id="rect4321" />
    <rect
       width="12"
       x="394.57144"
       y="544.79797"
       height="1"
       style="fill:#99a1a7"
       id="rect4323" />
    <rect
       width="14.999989"
       x="386.57144"
       y="535.79773"
       height="1"
       style="fill:#3092df"
       id="rect4416" />
    <rect
       width="13.999988"
       x="400.57144"
       y="535.79773"
       height="1"
       style="fill:#1c1e20"
       id="rect4422" />
    <rect
       width="1"
       x="399.57144"
       y="535.79773"
       height="1"
       style="fill:#daebf9"
       id="rect4426" />
  </g>
		</svg>
	{/if}
