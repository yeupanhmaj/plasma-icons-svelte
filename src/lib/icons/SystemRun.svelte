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
     d="m 2,2 0,12 11,0 0,-1 -10,0 0,-8 10,0 0,8 0,1 1,0 L 14,2 3,2 Z m 4,4 0,6 4,-3 z"
     class="ColorScheme-Text"
     />
		</svg>
	{:else if numericSize <= 35}
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
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 3 3 L 3 7 L 3 18 L 3 19 L 13 19 L 19 19 L 19 18 L 19 13 L 19 7 L 19 3 L 3 3 z M 4 7 L 18 7 L 18 13 L 18 18 L 13 18 L 4 18 L 4 7 z M 9 10 L 9 16 L 14 13 L 9 10 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs
     id="defs4">
    <linearGradient
       id="linearGradient4393">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop8" />
      <stop
         style="stop-color:#000000;stop-opacity:0;"
         offset="1"
         id="stop10" />
    </linearGradient>
    <linearGradient
       gradientTransform="matrix(1.3333334,0,0,1.1666668,-509.76184,-595.76433)"
       xlink:href="#linearGradient4298"
       id="linearGradient4308"
       y1="539.79797"
       y2="527.79797"
       x2="0"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       id="linearGradient4298">
      <stop
         style="stop-color:#42a603"
         id="stop4300" />
      <stop
         offset="1"
         style="stop-color:#78da06"
         id="stop4302" />
    </linearGradient>
    <linearGradient
       gradientTransform="matrix(1.2499988,0,0,1.2857117,4.0000276,3.4286038)"
       xlink:href="#linearGradient4393"
       id="linearGradient4256"
       y1="11"
       x1="5"
       y2="27"
       x2="21"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       id="linearGradient4643-8"
       xlink:href="#linearGradient4303-6"
       y1="543.79797"
       y2="502.65509"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.83333327,0,0,0.81666374,-316.47628,-404.50106)" />
    <linearGradient
       id="linearGradient4303-6">
      <stop
         style="stop-color:#c6cdd1"
         id="stop4305-7" />
      <stop
         offset="1"
         style="stop-color:#e0e5e7"
         id="stop4307-0" />
    </linearGradient>
    <linearGradient
       id="linearGradient4183"
       xlink:href="#linearGradient4393"
       y1="525.79797"
       y2="540.79797"
       x1="391.57144"
       gradientUnits="userSpaceOnUse"
       x2="406.57147"
       gradientTransform="matrix(1.2499988,0,0,1.2857117,-476.71382,-659.73887)" />
  </defs>
  <rect
     id="rect4641-5"
     style="fill:url(#linearGradient4643-8)"
     height="35.999928"
     rx="0"
     y="6.000001"
     x="4.0000348"
     width="39.999962" />
  <path
     d="m 6,40 36,-26 2,2 -3e-5,25.999963 L 8,42 Z"
     id="path4167"
     style="opacity:0.2;fill:url(#linearGradient4183);fill-rule:evenodd" />
  <rect
     id="rect4645-7-7"
     style="fill:#99a1a7"
     height="0.99992979"
     y="41"
     x="3.9999969"
     width="39.999939" />
  <rect
     id="rect4647-8"
     style="fill:#566069"
     height="4.9999995"
     y="6.000001"
     x="3.9999969"
     width="39.999977" />
  <rect
     id="rect4649-8"
     style="fill:#3daee9"
     height="1.0000002"
     y="11"
     x="4.0000811"
     width="39.99992" />
  <rect
     id="rect4653-5"
     style="fill:#ffffff"
     height="26.000002"
     y="14"
     x="6"
     width="36" />
  <rect
     id="rect4661-1"
     style="fill:#eff0f1"
     height="2.9999998"
     rx="1.5000007"
     y="7"
     x="39"
     width="3.0000014" />
  <path
     style="opacity:0.2;fill:url(#linearGradient4256);fill-rule:evenodd"
     id="path4242"
     d="m 31,27 -12,7 8,8 17,0 0,-2 z" />
  <path
     style="fill:url(#linearGradient4308);fill-rule:evenodd"
     id="path4237-9"
     d="m 19,20 0,14 12,-7 z" />
		</svg>
	{/if}
