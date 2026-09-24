<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 64,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 64.000001 64.000001"
	width={size}
	height={size}
	fill={color}
	class="plasma-icon {className}"
	style="color: {color}; {style}"
	{...restProps}
>
	<defs id="defs7268">
    <filter style="color-interpolation-filters:sRGB" id="filter7671-5">
      <feGaussianBlur stdDeviation="2 2" result="fbSourceGraphic" id="feGaussianBlur7673-8"/>
      <feColorMatrix result="fbSourceGraphicAlpha" in="fbSourceGraphic" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0" id="feColorMatrix7675-0"/>
      <feGaussianBlur id="feGaussianBlur7677-8" stdDeviation="2 2" result="blur" in="fbSourceGraphic"/>
    </filter>
    <linearGradient id="linearGradient4227">
      <stop id="stop6538" stop-color="#2e3436"/>
      <stop id="stop6540-9" stop-color="#555753" offset="1"/>
    </linearGradient>
    <linearGradient xlink:href="#linearGradient4697" id="linearGradient8960" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.083334,0,0,1.5888879,-410.61935,193.88363)" x1="418.16971" y1="503.07938" x2="384.57144" y2="531.45813"/>
    <linearGradient id="linearGradient4697">
      <stop id="stop6546" stop-color="#4ce0c6"/>
      <stop id="stop6548" stop-color="#3b85b5" offset="1"/>
    </linearGradient>
    <linearGradient xlink:href="#linearGradient4221" id="linearGradient7451-1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.083334,0,0,1.5888879,-410.61935,193.88363)" x1="404.0452" y1="521.63281" x2="430.73611" y2="528.35034"/>
    <linearGradient id="linearGradient4221">
      <stop stop-color="#06a370" id="stop15"/>
      <stop offset="1" stop-color="#22d1b0" id="stop17"/>
    </linearGradient>
    <linearGradient xlink:href="#linearGradient4468" id="linearGradient8962" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.083334,0,0,1.5888879,-410.61935,193.88363)" x1="398.09201" y1="542.22382" x2="394.00299" y2="524.89966"/>
    <linearGradient id="linearGradient4468">
      <stop id="stop6558" stop-color="#334545"/>
      <stop id="stop6560" stop-color="#536161" offset="1"/>
    </linearGradient>
    <linearGradient xlink:href="#linearGradient4468" id="linearGradient7455-5" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.083334,0,0,1.5888878,498.45254,130.32813)" x1="431.57141" y1="568.79803" x2="439.57141" y2="562.79803"/>
    <linearGradient xlink:href="#linearGradient4468" id="linearGradient7457-3" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.083334,0,0,1.5888879,498.45271,130.32811)" x1="406.53735" y1="581.87024" x2="423.31955" y2="572.67786"/>
    <linearGradient xlink:href="#linearGradient4468" id="linearGradient7459-9" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.083334,0,0,1.5888879,498.45271,130.32811)" x1="423.05438" y1="572.33411" x2="431.22452" y2="566.76562"/>
    <linearGradient xlink:href="#linearGradient4468" id="linearGradient7461-1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.083334,0,0,1.5888879,498.45271,130.32811)" x1="431.3129" y1="577.10217" x2="440.63208" y2="571.44531"/>
    <linearGradient xlink:href="#linearGradient4468" id="linearGradient7463-1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1.083334,0,0,1.5888879,498.45271,130.32811)" x1="430.56738" y1="577.36243" x2="423.74994" y2="591.32782"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8372" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8374" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8376" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8378" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8380" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8382" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8384" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8386" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8388" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8390" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8392" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8394" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8396" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8398" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8400" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8402" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8404" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8406" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8408" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8410" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8412" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8414" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8416" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8418" xlink:href="#linearGradient4227" gradientTransform="translate(-546.72254,435.2429)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8420" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8422" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8424" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8426" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8428" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8430" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8432" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8434" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8436" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8438" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8440" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8442" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8444" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8446" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8448" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8450" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8452" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8454" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8456" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8458" xlink:href="#linearGradient4227" gradientTransform="translate(6.99999,-12.00004)"/>
    <linearGradient y2="604.11926" x2="576.72253" y1="584.11926" x1="554.72253" gradientUnits="userSpaceOnUse" id="linearGradient8460" xlink:href="#linearGradient4227" gradientTransform="translate(5.99999,1017.3622)"/>
  </defs>
  
  
  <g id="layer1" transform="translate(0,-988.36216)">
    <path id="path6573-0-3-1" d="m 5.9999539,994.36216 0,52.00004 52.0000541,0 0,-52.00004 -52.0000541,0 z" style="fill:url(#linearGradient8960);fill-opacity:1"/>
    <path id="path6575-1-6-9" d="m 58.000008,994.36216 -35.786957,30.30284 25.623774,21.6972 10.163183,0 0,-52.00004 z" style="fill:url(#linearGradient7451-1);fill-opacity:1;stroke-width:2;stroke-linecap:round"/>
    <path id="path6577-7-9-2" d="m 22.249971,1024.5499 -16.2500171,13.7617 0,8.0506 42.0792401,0 -25.829223,-21.8123 z" style="fill:url(#linearGradient8962);stroke-width:2;stroke-linecap:round"/>
    <path id="path6579-9-28-2" d="m 31.196694,1032.1269 -8.946739,-7.5759 0,15.1518 z" style="fill:url(#linearGradient7455-5);stroke-width:2;stroke-linecap:round"/>
    <path id="path6581-4-4-0" d="m 40.143466,1039.6997 0,6.6625 7.866487,0 -7.866487,-6.6625 z" style="fill:url(#linearGradient7457-3);stroke-width:2;stroke-linecap:round"/>
    <path id="path6583-36-8-2" d="m 31.19671,1032.1265 0,14.2357 1.08256,0 7.86418,-6.6592 -8.94674,-7.5765 z" style="fill:url(#linearGradient7459-9);stroke-width:2;stroke-linecap:round"/>
    <path id="path6585-18-4-2" d="m 22.249971,1039.703 0,6.6592 7.864179,0 -7.864179,-6.6592 z" style="fill:url(#linearGradient7461-1);stroke-width:2;stroke-linecap:round"/>
    <path id="path6587-4-5-4" d="m 40.143466,1039.6997 -7.866487,6.6625 7.866487,0 0,-6.6625 z" style="fill:url(#linearGradient7463-1);stroke-width:2;stroke-linecap:round"/>
    <path id="path6589-6-4-9" d="m 22.213051,1024.6658 35.786941,-30.30364 -1.6e-5,14.80384 z" style="fill:#cb7cec;fill-opacity:1;stroke-width:2;stroke-linecap:round"/>
    <path style="fill:#ffffff;fill-opacity:0.5254902;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 45.99999,996.36216 a 10,10 0 0 0 -10,10.00004 10,10 0 0 0 10,10 10,10 0 0 0 10,-10 10,10 0 0 0 -10,-10.00004 z m -40,21.00004 0,25 0,4 52,0 0,-4 -27,0 0,-25 -25,0 z" id="rect7465-9-1"/>
    <rect y="1017.3622" x="5.9999876" height="24.999996" width="24.999989" id="rect7465-3" style="fill:#ffffff;fill-opacity:0.52413791;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <circle r="10" cy="1006.3622" cx="45.999989" id="path7482-4" style="fill:#ffffff;fill-opacity:0.52413791;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <rect id="rect6599-8-8-8" width="52" height="4.0000043" x="5.9999876" y="1042.3622" style="fill:#ffffff;fill-opacity:0.52413791"/>
    <circle id="circle6601-2-3-7" cx="54.999989" cy="1044.3621" r="1" style="fill:#4d4d4d"/>
    <path id="path6603-5-7-7" d="m 7.99996,1043.3621 0,1 1,0 0,-1 -1,0 z m 1,1 0,1 1,0 0,-1 -1,0 z" style="fill:#4d4d4d"/>
    <path class="ColorScheme-Text" style="color:#4d4d4d;fill:url(#linearGradient8460);fill-opacity:1;stroke:none" d="m 17.49999,1021.3622 0,1.8125 1,0 0,-1.8125 -1,0 z m -4.8125,1.9688 -0.71875,0.7187 1.28125,1.3125 0.71875,-0.75 -1.28125,-1.2812 z m 10.625,0 -1.28125,1.2812 0.71875,0.75 1.28125,-1.3125 -0.71875,-0.7187 z m -5.3125,1.0312 c -2.761424,0 -5,2.2386 -5,5 0,2.7614 2.238576,5 5,5 2.761424,0 5,-2.2386 5,-5 0,-2.7614 -2.238576,-5 -5,-5 z m 0,1 0,8 c -2.209139,0 -4,-1.7909 -4,-4 0,-2.2091 1.790861,-4 4,-4 z m -8,3.5 0,1 1.8125,0 0,-1 -1.8125,0 z m 14.1875,0 0,1 1.8125,0 0,-1 -1.8125,0 z m -10.9375,4.5313 -1.28125,1.2812 0.71875,0.7188 1.28125,-1.2813 -0.71875,-0.7187 z m 9.5,0 -0.71875,0.7187 1.28125,1.2813 0.71875,-0.7188 -1.28125,-1.2812 z m -5.25,2.1562 0,1.8125 1,0 0,-1.8125 -1,0 z" id="rect4148-1"/>
  </g>
</svg>
