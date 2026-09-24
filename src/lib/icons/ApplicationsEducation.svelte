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
			<path fill="url(#a)" d="M2 3h18v16H2z"/>
  <path fill="url(#b)" fill-rule="evenodd" d="M19 4H3v14h16zM2 3v16h18V3z" clip-rule="evenodd"/>
  <path fill="#AA7F41" fill-rule="evenodd" d="M18 5H4v12h14zM3 4v14h16V4z" clip-rule="evenodd" opacity=".5"/>
  <path fill="#D6D6D6" d="M13 16h4v1h-4z"/>
  <path fill="#007AD9" d="M8 16h4v1H8z"/>
  <defs>
    <linearGradient id="a" x1="20.75" x2="1.07" y1="19" y2="4.24" gradientUnits="userSpaceOnUse">
      <stop stop-color="#343B40"/>
      <stop offset="1" stop-color="#555E63"/>
    </linearGradient>
    <linearGradient id="b" x1="11" x2="11" y1="19" y2="3" gradientUnits="userSpaceOnUse">
      <stop stop-color="#BD8D48"/>
      <stop offset="1" stop-color="#E8B971"/>
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
  <linearGradient id="linearGradient4273">
   <stop style="stop-color:#343b40" id="stop4275"/>
   <stop offset="1" style="stop-color:#555e63" id="stop4277"/>
  </linearGradient>
  <linearGradient id="linearGradient4152-0">
   <stop style="stop-color:#bd8d48" id="stop4154-0"/>
   <stop offset="1" style="stop-color:#e8b971" id="stop4156-8"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4273" id="linearGradient3085" y1="543.79797" x1="434.57144" y2="503.798" gradientUnits="userSpaceOnUse" x2="384.57144" gradientTransform="matrix(0.66666621 0 0 0.70000019 128.19065 165.13928)"/>
  <linearGradient xlink:href="#linearGradient4152-0" id="linearGradient3087" y1="43.999973" y2="4" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(0.66666621 0 0 0.69999959 384.57143 514.998)"/>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="31.999987" x="384.57144" y="517.79803" height="28" style="fill:url(#linearGradient3085);stroke-width:0.666666" id="rect4567"/>
  <path style="fill:url(#linearGradient3087);stroke-width:0.666666" id="rect4778" d="m 384.57143,517.798 0,1.4 0,26.59998 1.33333,0 30.66665,0 3e-5,-2.09998 -3e-5,-24.5 0,-1.4 -1.33334,0 -29.33331,0 z m 2.00004,2 27.99996,0 0,24 -27.99996,0 z"/>
  <path style="fill:#aa7f41;fill-opacity:0.498039;color:#000000;stroke-width:0.666666" id="rect4553" d="m 386.57147,519.75255 0,24.04545 0,0 27.99996,0 0,0 0,-24.04545 0,0 z m 0.99996,1.04545 26,0 0,22 -26,0 z"/>
  <rect width="3.99996" x="403.57144" y="541.79803" height="0.99999" style="fill:#007ad9;color:#000000;stroke-width:0.666666" id="rect4568"/>
  <rect width="3.999988" x="408.57141" y="541.79803" height="1.00001" style="fill:#d6d6d6;color:#000000;stroke-width:0.666666" id="rect4570"/>
 </g>
		</svg>
	{/if}
