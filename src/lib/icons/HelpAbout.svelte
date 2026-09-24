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
			<g class="ColorScheme-Text" fill="currentColor" fill-rule="evenodd">
        <path d="m8 2a6 6 0 0 0 -6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0 -6-6zm0 1a5 5 0 0 1 5 5 5 5 0 0 1 -5 5 5 5 0 0 1 -5-5 5 5 0 0 1 5-5z"/>
        <path d="m7 4h2v2h-2z"/>
        <path d="m7 7h2v5h-2z"/>
    </g>
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
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11 3 C 6.568 3 3 6.568 3 11 C 3 15.432 6.568 19 11 19 C 15.432 19 19 15.432 19 11 C 19 6.568 15.432 3 11 3 z M 11 4 C 14.878 4 18 7.122 18 11 C 18 14.878 14.878 18 11 18 C 7.122 18 4 14.878 4 11 C 4 7.122 7.122 4 11 4 z M 10 6 L 10 8 L 12 8 L 12 6 L 10 6 z M 10 9 L 10 16 L 12 16 L 12 9 L 10 9 z "
     class="ColorScheme-Text"
     />
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
  <linearGradient id="linearGradient4143">
   <stop style="stop-color:#197cf1" id="stop4145"/>
   <stop offset="1" style="stop-color:#20bcfa" id="stop4147"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4143" id="linearGradient4149" y1="545.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.92857108 0 0 0.92857057 28.612354 37.986142)"/>
  <linearGradient id="linearGradient4290">
   <stop style="stop-color:#7cbaf8" id="stop4292"/>
   <stop offset="1" style="stop-color:#f4fcff" id="stop4294"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4290" id="linearGradient4144" y1="29.999973" y2="2" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4227" id="linearGradient4191" y1="9" x1="9.00001" y2="23" x2="23.00004" gradientUnits="userSpaceOnUse"/>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="26" x="387.57144" y="518.79797" rx="12.999993" height="26" style="fill:url(#linearGradient4149)" id="rect4130"/>
  <path style="fill:url(#linearGradient4191);opacity:0.2;fill-rule:evenodd" id="path4184" d="M 17 9 L 15 11 L 17 13 L 15 23 L 23 31 L 26 31 L 29 31 L 31 31 L 31 27 L 31 23 L 17 9 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <path style="fill:url(#linearGradient4144)" id="rect4133" d="M 16,2 C 8.4128491,2 2.2891329,7.9794391 2.0253906,15.5 2.0195214,15.66736 2,15.831158 2,16 c 0,7.756003 6.2439968,14 14,14 7.756003,0 14,-6.243997 14,-14 0,-0.168842 -0.01952,-0.33264 -0.02539,-0.5 C 29.710867,7.9794391 23.587151,2 16,2 Z m 0,1 C 23.201993,3 29,8.7980074 29,16 29,23.201993 23.201993,29 16,29 8.7980074,29 3,23.201993 3,16 3,8.7980074 8.7980074,3 16,3 Z m -1,6 0,2 2,0 0,-2 z m 0,4 0,10 2,0 0,-10 z" transform="matrix(1 0 0 1 384.57143 515.798)"/>
 </g>
		</svg>
	{/if}
