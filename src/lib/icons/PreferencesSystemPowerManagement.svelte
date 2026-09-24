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
			<linearGradient id="a" gradientTransform="matrix(.64285698 0 0 .64285698 -246.51015 -330.87004)" gradientUnits="userSpaceOnUse" x2="0" y1="545.79797" y2="517.79797"><stop offset="0" stop-color="#42a603"/><stop offset="1" stop-color="#78da06"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="6.499996" x2="15.500013" y1="6.500016" y2="15.500014"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="17" y2="5"><stop offset="0" stop-color="#bcfd93"/><stop offset="1" stop-color="#fafff5"/></linearGradient><rect fill="url(#a)" height="18.000015" rx="9.000004" stroke-width=".642857" width="18.000002" x="1.999999" y="2"/><path d="m12 5-4 6 2 2v4l3 3h7v-7z" fill="url(#b)" fill-rule="evenodd" opacity=".2" stroke-width=".642857"/><path d="m12 5v4l-.25 1h2.25l-4 7v-5l.25-1h-2.25z" fill="url(#c)"/>
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
  <linearGradient id="linearGradient4374">
   <stop style="stop-color:#bcfd93" id="stop4376"/>
   <stop offset="1" style="stop-color:#fafff5" id="stop4378"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4298" id="linearGradient4149" y1="545.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4227" id="linearGradient4210" y1="9" x1="9.00001" y2="23" x2="23.00004" gradientUnits="userSpaceOnUse"/>
  <linearGradient id="linearGradient4298">
   <stop style="stop-color:#42a603" id="stop4300"/>
   <stop offset="1" style="stop-color:#78da06" id="stop4302"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4374" id="linearGradient4320" y1="538.79797" y2="524.79797" x2="0" gradientUnits="userSpaceOnUse"/>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="28.00001" x="386.57144" y="517.79797" rx="14.00001" height="28.00003" style="fill:url(#linearGradient4149)" id="rect4130"/>
  <path style="fill:url(#linearGradient4210);opacity:0.2;fill-rule:evenodd" id="path4193" d="M 16 9 L 16 15 L 16.113281 15 L 16.113281 15.824219 L 12 17 L 15 20 L 15 21 L 15 23 L 21.050781 29.050781 C 22.688657 28.41963 24.171962 27.488934 25.443359 26.330078 C 25.445397 26.328221 25.447182 26.326077 25.449219 26.324219 C 26.140295 25.693564 26.76413 24.992976 27.316406 24.234375 C 27.319925 24.229542 27.324613 24.225541 27.328125 24.220703 C 27.332576 24.214577 27.335403 24.207306 27.339844 24.201172 C 27.460466 24.034463 27.585911 23.871486 27.699219 23.699219 L 27.679688 23.679688 C 28.082356 23.06778 28.453772 22.433376 28.757812 21.757812 L 16 9 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <path style="fill:url(#linearGradient4320);fill-rule:evenodd" id="path4185" d="m 400.57143,524.798 -4,8 3,0 0,6 4,-8 -3,0 0,-6 z"/>
 </g>
		</svg>
	{/if}
