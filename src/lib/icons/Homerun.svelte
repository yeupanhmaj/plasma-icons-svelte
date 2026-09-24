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

	{#if numericSize <= 35}
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
        d="M 3 3 L 3 10 L 10 10 L 10 3 L 3 3 z M 12 3 L 12 10 L 19 10 L 19 3 L 12 3 z M 4 4 L 9 4 L 9 9 L 4 9 L 4 4 z M 13 4 L 18 4 L 18 9 L 13 9 L 13 4 z M 3 12 L 3 19 L 10 19 L 10 12 L 3 12 z M 12 12 L 12 19 L 13 19 L 18 19 L 19 19 L 19 18 L 19 13 L 19 12 L 18 12 L 13 12 L 12 12 z M 4 13 L 9 13 L 9 18 L 4 18 L 4 13 z M 13 13 L 18 13 L 18 18 L 13 18 L 13 13 z " 
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
       id="linearGradient4252">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop7" />
      <stop
         style="stop-color:#000000;stop-opacity:0;"
         offset="1"
         id="stop9" />
    </linearGradient>
    <linearGradient
       id="c-5"
       y1="-.883"
       x1="-41.26"
       y2="37.956"
       x2="-2.994"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.0454421,0,0,1.0298842,46.076843,3.856842)">
      <stop
         stop-color="#21c9fb"
         id="stop13" />
      <stop
         offset="1"
         stop-color="#1a86f2"
         id="stop15" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4252"
       id="linearGradient4237"
       x1="4"
       y1="4"
       x2="44"
       y2="44"
       gradientUnits="userSpaceOnUse" />
  </defs>
  <path
     style="fill:url(#c-5);stroke-width:2;stroke-linejoin:bevel"
     d="m 4,4 0,0 0,40 0,0 40,0 0,0 0,-40 0,0 z"
     id="path19" />
  <path
     style="opacity:0.2;fill:url(#linearGradient4237);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
     d="m 8,40 4,4 32,0 0,-32 -4,-4 0,14 -14,0 0,-10 -4,-4 0,14 -14,0 4,4 10,0 0,14 z"
     id="path4228" />
  <rect
     style="opacity:0.15;fill:#000000;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     id="rect4179"
     width="40"
     height="1"
     x="4"
     y="43" />
  <path
     style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     d="m 8,26 0,14 14,0 0,-14 z m 2,2 10,0 0,10 -10,0 z"
     id="rect4181" />
  <path
     style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     d="m 26,26 0,14 14,0 0,-14 z m 2,2 10,0 0,10 -10,0 z"
     id="rect4181-3" />
  <path
     style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     d="m 8,8 0,14 14,0 0,-14 z m 2,2 10,0 0,10 -10,0 z"
     id="rect4181-6" />
  <path
     style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     d="m 26,8 0,14 14,0 0,-14 z m 2,2 10,0 0,10 -10,0 z"
     id="rect4181-3-7" />
		</svg>
	{/if}
