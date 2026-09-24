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
			<path
     class="ColorScheme-Text"
     d="M 8,7 V 6 h 3 V 7 Z M 8,9 V 8 h 4 V 9 Z M 2,10.5 4,12 H 14 V 4 H 2 Z M 3,10.25 V 5 h 10 v 6 H 4 Z" style="fill:currentColor;fill-opacity:1;stroke:none"/>
		</svg>
	{:else if numericSize <= 43}
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
     d="M 4,14 V 7 h 14 v 8 H 6 Z M 3,14.5 6,16 H 19 V 6 H 3 Z M 12,10 V 9 h 4 v 1 z m 0,2 v -1 h 5 v 1 z" 
    class="ColorScheme-Text"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs id="defs5455">
  <linearGradient id="linearGradient4158" xlink:href="#linearGradient4271" x1="432.23273" gradientUnits="userSpaceOnUse" x2="401.07935" gradientTransform="matrix(0 1.0271756 1 0 -499.79799 -395.97889)"/>
  <linearGradient id="linearGradient4271">
   <stop style="stop-color:#2a2c2f" id="stop4273"/>
   <stop offset="1" style="stop-color:#424649" id="stop4275"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4227" id="linearGradient4521" y1="32.00002" x1="23.999987" y2="56.00002" x2="47.999985" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 362.57144 479.79797)"/>
  <linearGradient id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -376.57144 -491.79797)">
  <path style="fill:url(#linearGradient4158)" id="rect4139" d="M 6 16 L 6 41 L 13 48 L 21 48 L 23 48 L 28 48 L 30 48 L 58 48 L 58 42.638672 A 4 4 0 0 1 57 40 A 4 4 0 0 1 58 37.361328 L 58 16 L 33 16 L 20 16 L 6 16 z " transform="matrix(1 0 0 1 376.57144 491.79797)"/>
  <path style="stroke-opacity:0.550265;fill:#1c1e20;stroke-width:2.8" id="rect4492" d="M 12 47 L 13 48 L 58 48 L 58 47 L 13 47 L 12 47 z " transform="matrix(1 0 0 1 376.57144 491.79797)"/>
  <path style="fill:url(#linearGradient4521);opacity:0.2" id="rect4500" d="m 391.27847,511.09094 -1.41406,1.41406 8.05078,8.05078 -0.22461,0.24219 17,17 0.88086,0 0,-8.88086 -13.19531,-13.19531 -3.10352,3.36328 -7.99414,-7.99414 z m -2.14648,6.14648 -2.1211,2.1211 5.5,5.5 -1.35351,1.35351 11.58593,11.58594 6.94922,0 -20.56054,-20.56055 z"/>
  <path style="fill:#afc0c6" id="path4496" d="m 390.57144,510.79797 c -0.554,0 -1,0.446 -1,1 0,0.554 0.446,1 1,1 0.554,0 1,-0.446 1,-1 0,-0.554 -0.446,-1 -1,-1 z"/>
  <path style="fill:#afc0c6" id="path4494" d="m 397.57144,510.79797 -2,2 3,3 -3,3 2,2 3,-3 2,-2 -5,-5 z"/>
  <path style="fill:#afc0c6" id="path4492" d="m 388.07144,516.79797 c -0.831,0 -1.5,0.669 -1.5,1.5 0,0.831 0.669,1.5 1.5,1.5 0.831,0 1.5,-0.669 1.5,-1.5 0,-0.831 -0.669,-1.5 -1.5,-1.5 z"/>
  <path style="fill:#afc0c6" id="rect4231" d="m 392.57144,522.79797 c -1.108,0 -2,0.892 -2,2 0,1.108 0.892,2 2,2 1.108,0 2,-0.892 2,-2 0,-1.108 -0.892,-2 -2,-2 z"/>
  <path style="fill:#afc0c6" id="rect4604" d="m 414.57144,529.79797 0,1 12,0 0,-1 -12,0 z m 0,2 0,1 18,0 0,-1 -18,0 z m 0,2 0,1 8,0 0,-1 -8,0 z m 0,2 0,1 5,0 0,-1 -5,0 z"/>
  <path style="fill:#afc0c6" id="rect4618" d="m 391.57144,532.79797 0,1 5,0 0,-1 -5,0 z m 0,2 0,1 2,0 0,-1 -2,0 z"/>
  <path style="fill:#dfe6e8;fill-rule:evenodd" id="path4616" d="m 432.57144,511.79799 -1.00001,0.99998 -0.99999,-0.99998 z"/>
 </g>
		</svg>
	{/if}
