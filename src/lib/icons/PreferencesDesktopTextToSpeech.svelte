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
			<linearGradient id="a" gradientTransform="matrix(.6428576 0 0 .6428576 -246.5104 -330.87038)" gradientUnits="userSpaceOnUse" x2="0" y1="545.79797" y2="517.79797"><stop offset="0" stop-color="#42a603"/><stop offset="1" stop-color="#78da06"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="5" x2="5" y1="16" y2="6"><stop offset="0" stop-color="#bcfd93"/><stop offset="1" stop-color="#fafff5"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="5" x2="17" y1="6" y2="17"><stop offset="0" stop-color="#383e51"/><stop offset="1" stop-color="#655c6f" stop-opacity="0"/></linearGradient><ellipse cx="10.999992" cy="11.000013" fill="url(#a)" rx="8.999992" ry="9.000013" stroke-width=".642858"/><path d="m16 6 4 4v10h-9l-6-6 4-3.5 1 1 1 .5-1-1v-5z" fill="url(#c)" opacity=".2"/><path d="m10 6v5h3v3l3-3v-5zm1 1h4v3h-4zm-3 3.5-1.5 2-.5-.5h-1v2h1l.5-.5 1.5 2h1v-5z" fill="url(#b)"/>
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
  <linearGradient xlink:href="#linearGradient4298" id="linearGradient4246" y1="545.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient xlink:href="#linearGradient4374" id="linearGradient4362" y1="538.79797" y2="524.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -384.57143 -515.798)"/>
  <linearGradient id="linearGradient4374">
   <stop style="stop-color:#bcfd93" id="stop4376"/>
   <stop offset="1" style="stop-color:#fafff5" id="stop4378"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4410" id="linearGradient4183" y1="8.99996" x1="9" y2="23" x2="23.00001" gradientUnits="userSpaceOnUse"/>
  <linearGradient id="linearGradient4410">
   <stop style="stop-color:#383e51" id="stop4412"/>
   <stop offset="1" style="stop-color:#655c6f;stop-opacity:0" id="stop4414"/>
  </linearGradient>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <ellipse cx="400.57144" cy="531.79797" rx="13.999979" ry="14.00001" style="fill:url(#linearGradient4246)" id="path4159"/>
  <path style="fill:url(#linearGradient4183);opacity:0.2;fill-rule:evenodd" id="path4164" d="M 14 9 L 14 15 L 25.375 26.375 A 13.999979 14.000013 0 0 0 30 16 L 23 9 L 14 9 z M 13 15 L 9 21 L 17.859375 29.859375 A 13.999979 14.000013 0 0 0 24.84375 26.84375 L 13 15 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <path style="stroke-opacity:0.550265;fill:url(#linearGradient4362);stroke-width:2.8" id="path4147" d="M 14 9 L 14 15 L 20 15 L 20 18 L 23 15 L 23 9 L 14 9 z M 15 10 L 22 10 L 22 14 L 15 14 L 15 10 z M 12.5 15 L 12 15.400391 L 10 17.066406 L 10 17 L 9 17 L 9 17.5 L 9 20.5 L 9 21 L 10 21 L 10 20.933594 L 12 22.599609 L 12.5 23 L 13 23 L 13 15 L 12.5 15 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
 </g>
		</svg>
	{/if}
