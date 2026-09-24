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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="20" y2="-12.142859"><stop offset="0" stop-color="#0c4f97"/><stop offset="1" stop-color="#1ad3e5"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="10.499996" x2="19.500013" y1="6.500016" y2="15.500014"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="50" y2="4"><stop offset="0" stop-color="#1498c2"/><stop offset="1" stop-color="#fff"/></linearGradient><circle cx="11" cy="11" fill="url(#a)" r="9"/><path d="m13.900391 5-5.900391 6 3 3-2.5195312 3.509766 2.4882812 2.488281a9 9 0 0 0 .03125.001953 9 9 0 0 0 8.992188-8.908203z" fill="url(#b)" fill-rule="evenodd" opacity=".2" stroke-width=".642857"/><path d="m11.220703 5-3.220703 6h3l-1.5761719 3.923828-1.9238281-1.923828.9804688 4.509766 5.0195312-2.509766h-2.5l-.835938.417969 4.025391-5.417969h-3.138672l2.84961-5z" fill="url(#c)"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 31.999998 31.999998"
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
       id="linearGradient5139">
      <stop
         id="stop5135"
         offset="0"
         style="stop-color:#0c4f97;stop-opacity:1" />
      <stop
         id="stop5137"
         offset="1"
         style="stop-color:#1ad3e5;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       gradientTransform="matrix(1.0035842,0,0,1.0035842,0.94623631,-1.0609321)"
       gradientUnits="userSpaceOnUse"
       y2="-18.871431"
       x2="15.000001"
       y1="30.949999"
       x1="15.000001"
       id="linearGradient5141"
       xlink:href="#linearGradient5139" />
  </defs>
  <metadata
     id="metadata5458">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <circle
     r="13.999999"
     cy="15.999999"
     cx="15.999999"
     id="path5072"
     style="opacity:1;fill:url(#linearGradient5141);fill-opacity:1;stroke:none;stroke-width:0.09999998;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
  <g
     style="fill:#fffff9;fill-opacity:1;stroke:none;stroke-width:1.25"
     id="layer1"
     transform="matrix(0.8,0,0,0.8,-304.31215,-409.08621)">
    <path
       style="fill:#fffff9;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.125;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 402.89019,517.60776 h 3.75 l -6.50372,10.73642 h 5.44493 l -7.04426,11.19359 2.26946,0.94816 -6.66641,4.62183 1.47279,-7.94957 1.60684,1.57018 4.25694,-7.77597 h -5.52872 z"
       id="path4549" />
  </g>
		</svg>
	{/if}
